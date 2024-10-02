import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FileUpload: React.FC = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const binaryStr = e.target?.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setJsonData(jsonData); 

        console.log(jsonData);
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Upload XLSX File</h2>
      <input type="file" accept=".xlsx" onChange={handleFileUpload} />
      {jsonData.length > 0 && (
        <div>
          <h3>JSON Output:</h3>
          <pre>{JSON.stringify(jsonData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
