import Table, { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { FC, useState } from "react";

interface TableUIProps<T> {
  columns: ColumnsType<T>;
  showHeader?: boolean;
  isLoading?: boolean;
  maxItemPerPage?: number | false;
  className?: string;
  onRowClick?: (record: T) => void;
  size?: "large" | "middle" | "small";
  onSelectChange?: (newSelectedRowKeys: React.Key[]) => void;
  onSelectInDisabledRow?: (record: T) => void;
  data: T[];
}

export const TableUI: FC<TableUIProps<any>> = ({
  columns,
  data,
  isLoading,
  className = "",
  onRowClick,
  maxItemPerPage = 14,
  size,
  onSelectInDisabledRow,
  showHeader,
  onSelectChange,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onTableSelectChange = (newSelectedRowKeys: React.Key[]) => {
    if (!onSelectChange) return;
    setSelectedRowKeys(newSelectedRowKeys);
    onSelectChange(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onTableSelectChange,
    getCheckboxProps: (record: any) => ({
      disabled: record.isSelectionDisabled,
      name: record.name,
    }),
  };

  const getPagination = (): false | TablePaginationConfig => {
    if (maxItemPerPage === false) return false;
    if (data.length < maxItemPerPage) return false;
    return {
      position: ["bottomRight"],
      defaultPageSize: maxItemPerPage,
    };
  };

  const getRowClassName = (record: any) => {
    if (record.isSelectionDisabled) {
      return "row-selection-disabled";
    }
    return "";
  };

  return (
    <Table
      className={
        className +
        (onRowClick && !onSelectChange
          ? "clickable-row"
          : onSelectChange
          ? "selectable-row"
          : "")
      }
      onRow={(record) => {
        return {
          onClick: () => {
            if (!onSelectChange) return;
            if (record.isSelectionDisabled) {
              if (onSelectInDisabledRow) onSelectInDisabledRow(record);
              return;
            }
            const pressingAnimationDuration = 60;
            setTimeout(() => {
              const key = record.key;
              const newSelectedRowKeys = selectedRowKeys.includes(key)
                ? selectedRowKeys.filter((k) => k !== key)
                : [...selectedRowKeys, key];
              onTableSelectChange(newSelectedRowKeys);
            }, pressingAnimationDuration);
          },
        };
      }}
      showHeader={showHeader}
      rowSelection={onSelectChange ? rowSelection : (null as any)}
      columns={columns}
      size={size}
      loading={isLoading}
      rowClassName={getRowClassName}
      pagination={getPagination()}
      dataSource={data}
    />
  );
};
