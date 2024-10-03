import React, { useRef, useState } from 'react';
import { IconButton, Typography, TextField, InputAdornment, Box, Grid2, Button, Snackbar, Alert } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';
import api from '@utils/api';
import { transformJsonToData } from '@utils/generalUtils';
import * as XLSX from 'xlsx';
import NotificationSnackbar from '@components/NotificationSnackbar';

interface FileUploadProps {
  onUploadSuccess: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState(''); 
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');  
  const inputRef = useRef(null);
  
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    async function postFileJson(json: any) {
      try {
        await api.post('/data', json);
        setSelectedFile(undefined);
        setSnackbarMessage('Upload realizado com sucesso!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        onUploadSuccess(); 
      } catch (error) {
        console.error('File Data Post Error:', error);
        setSnackbarMessage('Falha no upload. Tente novamente.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      }
    }

    if (!selectedFile) return;
    // inputRef.current! = "";

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      const binaryStr = e.target?.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const jsonDataFromFile = XLSX.utils.sheet_to_json(worksheet);
      postFileJson(transformJsonToData(jsonDataFromFile as any[]));
    };

    reader.readAsBinaryString(selectedFile);
    setSelectedFile(undefined);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
      <Grid2 container spacing={2} columns={0} alignItems="center">
        <Button
          variant="contained"
          component="label"
        >
          Carregar Arquivo
          <input
            ref={inputRef}
            type="file"
            onChange={handleFileUpload}
            hidden
          />
        </Button>
        {selectedFile && (
          <>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Arquivo: {selectedFile.name}
            </Typography>
            <InputAdornment position="end">
              <IconButton onClick={handleUpload}>
                <UploadIcon />
              </IconButton>
            </InputAdornment>
          </>
          
        )}
      </Grid2>
      <NotificationSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </Box>
  );
};

export default FileUpload;
