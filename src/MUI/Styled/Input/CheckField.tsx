import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

interface CheckFieldProps {
  id: string;
  value: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  label?: string;
}

export default function CheckField({ id, value, onChange, helperText, label }: CheckFieldProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox required id={id} checked={value} onChange={onChange} />}
        label={helperText == null ? label : helperText}
      />
    </FormGroup>
  );
}
