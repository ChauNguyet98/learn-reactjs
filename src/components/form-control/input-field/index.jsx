import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  label: '',
  disabled: false,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState: { errors, touchedFields },
  } = form;
  const hasError = errors[name] && touchedFields[name];

  return (
    <Controller
      name={name}
      control={form.control}
      fullWidth
      label={label}
      disabled={disabled}
      render={({ field }) => (
        <TextField
          error={!!hasError}
          helperText={errors[name]?.message}
          {...field}
        />
      )}
    />
  );
}

export default InputField;
