import { FC, useState } from "react";
import { Select } from "antd";
import { SelectItem } from "./models/select-item.model";
import { PlaceholderToNameAnimUI } from "./anim-placeholder-to-name.ui";

type SelectProps = {
  value?: string[] | null;
  defaultValue?: string[] | null;
  options: SelectItem[];
  placeholder?: string;
  id?: string;
  name?: string;
  className?: string;
  mode?: "multiple" | "tags";
  isLoading?: boolean;
  isSearchable?: boolean;
  onChange?: (value: string[]) => void;
};

export const SelectMultipleInputUI: FC<SelectProps> = ({
  value,
  onChange,
  placeholder,
  id,
  name,
  className,
  isSearchable = true,
  mode,
  options,
  defaultValue,
  isLoading,
}) => {
  const [currentValue, setCurrentValue] = useState<string[]>(
    defaultValue ?? [],
  );

  const _onChange = (value: string[]) => {
    setCurrentValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col gap-1 rounded-md">
      <label htmlFor={id}>
        <PlaceholderToNameAnimUI
          name={`${name}` ?? ""}
          placeholder={placeholder ?? ""}
          isShow={Boolean(currentValue.length)}
        />
        <Select
          mode={mode}
          className={className}
          showSearch={isSearchable}
          value={value as any}
          placeholder=""
          defaultValue={defaultValue as any}
          style={{ width: "100%" }}
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
            };
          })}
        />
      </label>
    </div>
  );
};
