// import Heatmap from '@components/Heatmap';
// import api from '@utils/api';
// import { transformJsonToData } from '@utils/generalUtils';
// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const FileUpload: React.FC = () => {
//   const [jsonData, setJsonData] = useState<any[]>([]);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     async function postFileJson(json: any) {
//       try {
//         await api.post('/data', json);
//       } catch (error) {
//         console.error('File Data Post Error:', error);
//       }
//     }
//     const file = event.target.files?.[0];

//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (e: ProgressEvent<FileReader>) => {
//         const binaryStr = e.target?.result;
//         const workbook = XLSX.read(binaryStr, { type: 'binary' });
        
//         const sheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[sheetName];

//         const jsonDataFromFile = XLSX.utils.sheet_to_json(worksheet);
//         postFileJson(transformJsonToData(jsonDataFromFile as any[]))
//         // setJsonData(jsonDataFromFile); 
//       };

//       reader.readAsBinaryString(file);
//     }
//   };

//   return (
//     <div style={{ marginTop: '100px', textAlign: 'center' }}>
//       <h2>Upload XLSX File</h2>
//       <input type="file" accept=".xlsx" onChange={handleFileUpload} />
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from 'react';
import { IconButton, Typography, TextField, InputAdornment, Box } from '@mui/material';
import { Upload as UploadIcon } from '@mui/icons-material';
import api from '@utils/api';
import { transformJsonToData } from '@utils/generalUtils';
import * as XLSX from 'xlsx';

const FileUpload = () => {
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
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
          Envie arquivo com os Dados
        </Typography>
        <TextField
          id="file-upload"
          type="file"
          variant="outlined"
          onChange={handleFileUpload}
          InputProps={{
            endAdornment: (
              selectedFile && (
                <InputAdornment position="end">
                  <IconButton onClick={handleUpload}>
                    <UploadIcon />
                  </IconButton>
                </InputAdornment>
              )
            ),
          }}
          disabled={selectedFile === null} // Disable input if no file selected
        />
        {selectedFile && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Selected file: {selectedFile.name}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default FileUpload;
