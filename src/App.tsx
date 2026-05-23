import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './core/ui/Layout';
import { HomePage } from './features/catalog/ui/HomePage';
import { LoginPage } from './features/auth/ui/LoginPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          
          {/* Rutas del dominio de trámites y servicios */}
          <Route path="tramites" element={<div className="text-center py-20 text-2xl font-bold text-slate-500">Catálogo de trámites en construcción...</div>} />
          <Route path="servicios" element={<div className="text-center py-20 text-2xl font-bold text-slate-500">Página de servicios generales en construcción...</div>} />
          <Route path="cita" element={<div className="text-center py-20 text-2xl font-bold text-slate-500">Sistema de reserva de citas en construcción...</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
