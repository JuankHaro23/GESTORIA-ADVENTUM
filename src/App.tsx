import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './core/ui/Layout';
import { HomePage } from './features/catalog/ui/HomePage';
import { LoginPage } from './features/auth/ui/LoginPage';
import { ServiciosPage } from './features/catalog/ui/ServiciosPage';
import { TramitesPage } from './features/catalog/ui/TramitesPage';
import { CitaPage } from './features/catalog/ui/CitaPage';
import { DestinoValenciaPage } from './features/catalog/ui/DestinoValenciaPage';
import { QuienesSomosPage } from './features/catalog/ui/QuienesSomosPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Corregido el espacio por guion */}
          <Route path="quienes-somos" element={<QuienesSomosPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="tramites" element={<TramitesPage />} />
          <Route path="destino-valencia" element={<DestinoValenciaPage />} />
          <Route path="contactanos" element={<CitaPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}