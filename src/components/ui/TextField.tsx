import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';

const TextField: React.FC<TextFieldProps & { name: string }> = ({ name, ...props }) => {
  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : '';
  return (
    <MuiTextField
      {...field}
      {...props}
      error={!!errorText}
      helperText={errorText}
    />
  );
};

export default TextField;
