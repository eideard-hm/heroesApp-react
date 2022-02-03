import React from 'react';
import { AuthProvider } from './auth/authContext';

import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
