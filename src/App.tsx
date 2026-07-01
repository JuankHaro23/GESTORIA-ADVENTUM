import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './core/ui/Layout';
import { HomePage } from './features/catalog/ui/HomePage';
import { LoginPage } from './features/auth/ui/LoginPage';
import { ServiciosPage } from './features/catalog/ui/ServiciosPage';
import { TramitesPage } from './features/catalog/ui/TramitesPage';
import { CitaPage } from './features/catalog/ui/CitaPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="tramites" element={<TramitesPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="cita" element={<CitaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
