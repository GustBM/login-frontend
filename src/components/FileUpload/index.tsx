import React, { useState } from 'react';
import { IconButton, Typography, TextField, InputAdornment, Box, Grid2, Button } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';
import api from '@utils/api';
import { transformJsonToData } from '@utils/generalUtils';
import * as XLSX from 'xlsx';

// interface FileUploadProps {
//   functionCall: Function;
// }

const FileUpload : React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    async function postFileJson(json: any) {
      try {
        await api.post('/data', json);
      } catch (error) {
        console.error('File Data Post Error:', error);
      } 
    }

    if (!selectedFile) return;

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
    </Box>
  );
};

export default FileUpload;
