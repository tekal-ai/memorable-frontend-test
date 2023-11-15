import { FC, useState } from "react";
import { Select } from "antd";
import { SelectItem } from "./models/select-item.model";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { PlaceholderToNameAnimUI } from "./anim-placeholder-to-name.ui";

type SelectProps = {
  value?: string | null;
  defaultValue?: string | null;
  options: SelectItem[];
  placeholder?: string;
  name?: string;
  id?: string;
  size?: SizeType;
  style?: React.CSSProperties;
  className?: string;
  mode?: "multiple" | "tags";
  isLoading?: boolean;
  isSearchable?: boolean;
  onChange?: (value: string) => void;
};

export const SelectInputUI: FC<SelectProps> = ({
  value,
  onChange,
  placeholder,
  className,
  defaultValue,
  name,
  size,
  id,
  style = {},
  isSearchable,
  mode,
  options,
  isLoading,
}) => {
  const [currentValue, setCurrentValue] = useState<string | null>(
    defaultValue ?? null,
  );

  const _onChange = (value: string) => {
    setCurrentValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col gap-1 rounded-md">
      <label className="relative" htmlFor={id}>
        <PlaceholderToNameAnimUI
          name={name ?? ""}
          isShow={Boolean(currentValue)}
          placeholder={placeholder ?? ""}
        />
        <Select
          id={id}
          mode={mode}
          size={size}
          className={className}
          showSearch={isSearchable}
          defaultValue={defaultValue}
          value={value}
          style={{ minWidth: "100px", width: "100%", ...style }}
          optionFilterProp="children"
          loading={isLoading}
          onChange={_onChange}
          filterOption={(input, option) =>
            ((option?.label as string) ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          options={options?.map((i) => {
            return {
              value: i?.key,
              label: i?.label,
              disabled: i?.isDisabled,
            };
          })}
        />
      </label>
    </div>
  );
};
