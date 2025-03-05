import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box, Grid, Typography } from '@mui/material';
import AppCard from './components/AppCard';
import AddAppDialog from './components/AddAppDialog';
import { initialApps } from './data/apps';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C0FC9',
    },
    secondary: {
      main: '#2E0475',
    },
  },
});

function App() {
  const [apps, setApps] = useState(initialApps);
  const [open, setOpen] = useState(false);

  const handleAddApp = (newApp) => {
    setApps([...apps, { ...newApp, id: apps.length + 1 }]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #0D0B2E, #372CB9)',
          padding: '20px 0',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              color: 'white',
              mb: 4,
              fontWeight: 'normal',
              textAlign: 'center'
            }}
          >
            Shortcuts for KoS Web Apps
          </Typography>
          <Grid container spacing={3}>
            {apps.map((app) => (
              <Grid item xs={12} sm={6} md={4} key={app.id}>
                <AppCard app={app} />
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={4}>
              <AppCard isAdd onClick={() => setOpen(true)} />
            </Grid>
          </Grid>
        </Container>
        <AddAppDialog
          open={open}
          onClose={() => setOpen(false)}
          onAdd={handleAddApp}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
