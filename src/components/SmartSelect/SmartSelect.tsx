import { memo } from "react";
import SelectSearch, {
  SelectSearchOption,
  SelectSearchProps,
} from "react-select-search";

type SmartSelectProps = Omit<SelectSearchProps, "filterOptions"> & {
  name: string;
  resultsCount?: number;
  emptyValue?: number | string;
  emptyLabel?: string;
  invalid?: boolean;
};

const SmartSelect = memo(
  ({
    debounce = 300,
    emptyLabel,
    emptyValue = -1,
    name,
    options,
    resultsCount = 6,
    search,
    ...props
  }: SmartSelectProps) => {
    return (
      <SelectSearch
        {...props}
        debounce={debounce}
        emptyMessage={emptyLabel}
        options={options}
        search={search}
        fuzzySearch={search}
        filterOptions={
          search
            ? [
                (items: SelectSearchOption[], _: string) => {
                  if (!search) {
                    return items;
                  }

                  return items.slice(0, resultsCount);
                },
              ]
            : []
        }
      />
    );
  }
);

export type { SelectSearchOption };
export default SmartSelect;
