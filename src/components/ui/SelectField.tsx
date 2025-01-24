import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectProps } from '@mui/material';
import { useField } from 'formik';

type SelectFieldProps = SelectProps & {
  name: string;
  label: string;
  options: { value: string; label: string }[];
};

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options, ...props }) => {
  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : '';

  return (
    <FormControl fullWidth error={!!errorText}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        {...field}
        {...props}
        error={!!errorText}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
