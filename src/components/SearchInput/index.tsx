import { FilledInput, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

import "./SearchInput.scss";

type SearchInputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  wrapperClass: string;
};

const SearchInput = (props: SearchInputProps) => {
  const { name, value, onChange, placeholder, wrapperClass } = props;

  return (
    <div className={`search-input-wrapper ${wrapperClass}`}>
      <FilledInput
        id={name}
        name={name}
        type="text"
        autoFocus={!!value}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        fullWidth
        disableUnderline={true}
        autoComplete="off"
        startAdornment={
          <InputAdornment position="start">
            <Search fontSize="large" />
          </InputAdornment>
        }
      />
    </div>
  );
};

export default SearchInput;
