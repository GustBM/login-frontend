import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppTheme from '../../shared/AppTheme';
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
    <AppTheme >
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 10,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
              <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Bem-Vindo ao Sistema de Envio de Dados
              </Typography>
              <Grid2 container spacing={2} columns={12}>
                <Grid2 size={{ md: 12, lg: 9 }}>
                  <FileUpload />
                </Grid2>
              </Grid2>
              {isLoading ? (
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  Loading data...
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
                      <Heatmap data={jsonData} />
                    </Grid2>
                  </Grid2>
                  <Grid2 container spacing={2} columns={0}>
                    <Grid2 size={{ sm: 12, md: 6 }}>
                      <LineGraph data={jsonData} />
                    </Grid2>
                  </Grid2>
                </>
              )}
            </Box>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}