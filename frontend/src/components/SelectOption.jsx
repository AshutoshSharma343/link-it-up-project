import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectOption({option, val, changeVal, label}) {

  const handleChange = (event) => {
    console.log(event.target.value)
    changeVal(event.target.value)
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={val}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
            option.map(optionI => {
                return <MenuItem value={optionI.value} key={optionI.value}>{optionI.label}</MenuItem>
            })
            
        }
      </Select>
    </FormControl>
  );
}