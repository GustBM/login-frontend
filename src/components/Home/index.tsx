import { Typography, Grid2 } from '@mui/material';
import Heatmap from '@components/Heatmap';
import LineGraph from '@components/LineGraph';
import FileUpload from '@components/FileUpload';
import { useEffect, useState } from 'react';
import api from '@utils/api';

export default function Home() {
  const [jsonData, setJsonData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/data");
        setJsonData(response.data);
      } catch (error) {
        console.error('File Data Post Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  

  return (
      <>
        <Typography component="h2" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Bem-Vindo ao Sistema de Envio de Dados
        </Typography>

        <Grid2 container spacing={2} columns={0}>
          <Grid2 size={{ md: 12, lg: 9 }}>
            <FileUpload />
          </Grid2>
        </Grid2>

        {isLoading ? (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Carregando data...
          </Typography>
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
      </>
  );
}