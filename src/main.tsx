import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {theme, darkTheme} from './theme.tsx';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "";
const clientId = "";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
)
