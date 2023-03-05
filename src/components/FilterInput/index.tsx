import { TextField, Autocomplete, Box } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

import "./FilterInput.scss";
import { Option } from "../../core/interfaces/Option";

type FilterProps = {
  name: string;
  placeholder: string;
  options: Option[];
  value?: Option;
  onChange: (value: Option | null) => void;
  wrapperClass: string;
};

const FilterInput = (props: FilterProps) => {
  const { name, placeholder, options, value, onChange, wrapperClass } = props;

  return (
    <div className={`filter-wrapper ${wrapperClass}`}>
      <Autocomplete
        id={name}
        options={options}
        getOptionLabel={(option: Option) => option.label || ""}
        renderOption={(props, option: Option) => {
          return (
            <Box component="li" {...props}>
              {option.label}
            </Box>
          );
        }}
        isOptionEqualToValue={(option: Option, value: Option) => option.id == value.id}
        onChange={(e, value) => onChange(value)}
        value={value}
        disableClearable
        noOptionsText={"noOptions"}
        popupIcon={<KeyboardArrowDown />}
        renderInput={(params) => (
          <TextField {...params} label={placeholder} color="primary" className="unify-input-padding" />
        )}
      />
    </div>
  );
};

export default FilterInput;
