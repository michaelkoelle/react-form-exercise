'use client';

import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import de from 'date-fns/locale/de';
import { ConfirmProvider } from 'material-ui-confirm';
import { SnackbarKey, SnackbarProvider, closeSnackbar } from 'notistack';
import * as React from 'react';
import theme from '../../app/theme';
import NextAppDirEmotionCacheProvider from './EmotionCache';

const SnackbarAction = (snackbarId: SnackbarKey) => (
  <IconButton onClick={() => closeSnackbar(snackbarId)}>
    <ClearIcon sx={{ fill: '#FFF' }} />
  </IconButton>
);

const Providers = ({ children }: { children: React.ReactNode }) => (
  <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3} autoHideDuration={3000} action={SnackbarAction}>
          <ConfirmProvider>{children}</ConfirmProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </LocalizationProvider>
  </NextAppDirEmotionCacheProvider>
);

export default Providers;
