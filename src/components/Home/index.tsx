import { Typography, Grid2, Box, Backdrop, CircularProgress, Button, IconButton, InputAdornment } from '@mui/material';
import Heatmap from '@components/Heatmap';
import LineGraph from '@components/LineGraph';
import { Upload as UploadIcon } from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import api from '@utils/api';
import NotificationSnackbar from '@components/NotificationSnackbar';
import { transformJsonToData } from '@utils/generalUtils';
import * as XLSX from 'xlsx';

export default function Home() {
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState(''); 
  const [refreshFlag, setRefreshFlag] = useState(0);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');  
  const inputRef = useRef<HTMLInputElement>(null);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await api.get("/data");
      setJsonData(response.data);
    } catch (error) {
      console.error('File Data Post Error:', error);
      setSnackbarMessage('Falha ao buscar os Dados. Tente novamente.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [refreshFlag]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    async function postFileJson(json: any) {
      try {
        await api.post('/data', json);
        setSelectedFile(undefined);
        setSnackbarMessage('Upload realizado com sucesso!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      } catch (error) {
        console.error('File Data Post Error:', error);
        setSnackbarMessage('Falha no upload. Tente novamente.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      } finally {
        setIsLoading(false);
        setRefreshFlag(refreshFlag+1);
      }
    }

    if (!selectedFile) return;
    if (inputRef.current) {
      inputRef.current.value = '';
    }

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
      <Box sx={{p: 10}}>
        <Typography component="h2" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Bem-Vindo ao Sistema de Envio de Dados
        </Typography>

        <Grid2 container spacing={2} columns={0}>
          <Grid2 size={{ md: 12, lg: 9 }}>
            {/* <FileUpload onUploadSuccess={fetchData}/> */}
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
                    ref={inputRef}
                  />
                </Button>
                {isLoading && (
                  <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}
                    onClick={() => {}}
                  >
                    <CircularProgress color="inherit" />
                  </Backdrop>
                )}
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
          </Grid2>
        </Grid2>

        {isLoading ? (
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
            onClick={() => {}}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : (
          <>
            <Grid2
              container
              spacing={2}
              columns={0}
              sx={{ mb: (theme) => theme.spacing(2) }}
            >
              <Grid2 size={{ sm: 12, md: 6 }}>
                {jsonData && jsonData.length > 0 && <Heatmap data={jsonData} />}
              </Grid2>
            </Grid2>
            <Grid2 container spacing={2} columns={0}>
              <Grid2 size={{ sm: 12, md: 6 }}>
                {jsonData && jsonData.length > 0 && <LineGraph data={jsonData} />}
              </Grid2>
            </Grid2>
          </>
        )}
      </Box>
  );
}