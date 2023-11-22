import { FC, useState } from "react";
import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { TimeRange } from "src/graphql/client";
import { PlaceholderToNameAnimUI } from "../select/anim-placeholder-to-name.ui";

const { RangePicker } = DatePicker;

export const rangePresets: {
  label: string;
  value: [Dayjs, Dayjs];
}[] = [
  { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
  { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
  { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
  { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
];

type PresetDateRangeInputUIProps = {
  defaultValue?: TimeRange;
  onDateRangeChange?: (range: TimeRange) => void;
  onDateRangeClear?: () => void;
};

export const PresetDateRangeInputUI: FC<PresetDateRangeInputUIProps> = ({
  defaultValue = {},
  onDateRangeChange,
  onDateRangeClear,
}) => {
  const [currentRange, setCurrentRange] = useState<TimeRange>({});
  const [presetName, setPresetName] = useState<string | null>(null);

  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[],
  ) => {
    if (dates) {
      const newRange = {
        init: new Date(dateStrings[0]).toISOString(),
        end: new Date(dateStrings[1]).toISOString(),
      };
      setCurrentRange(newRange);
      if (!onDateRangeChange) return;
      onDateRangeChange(newRange);

      const matchingPreset = rangePresets.find(
        (preset) =>
          preset.value[0].isSame(dates[0]) && preset.value[1].isSame(dates[1]),
      );

      if (matchingPreset) {
        setPresetName(matchingPreset.label);
      } else {
        const diffInDays = dates[1]?.diff(dates[0], "day");
        setPresetName(`${diffInDays} Days`);
      }
    } else {
      setCurrentRange({});
      if (!onDateRangeClear) return;
      onDateRangeClear();
      setPresetName(null);
    }
  };

  const getDefaultValue = () => {
    if (!defaultValue.init || !defaultValue.end) {
      return [] as any;
    }
    return [dayjs(defaultValue.init), dayjs(defaultValue.end)];
  };

  const isEmpty = !currentRange.end && !currentRange.init;

  const name = `Time range${isEmpty ? ": Lifetime" : `: ${presetName}`}`;

  return (
    <div className="flex flex-col gap-1 rounded-md">
      <label htmlFor="date-range">
        <PlaceholderToNameAnimUI isShow={true} name={name} placeholder={""} />
        <RangePicker
          id="date-range"
          defaultValue={getDefaultValue()}
          presets={rangePresets}
          onChange={onRangeChange}
        />
      </label>
    </div>
  );
};
