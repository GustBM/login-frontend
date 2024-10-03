import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface SnackbarProps {
  open: boolean;
  message: string;
  onClose: () => void;
  severity: 'error' | 'warning' | 'info' | 'success';
}

const SnackbarComponent: React.FC<SnackbarProps> = ({ open, message, onClose , severity = 'error'}) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;