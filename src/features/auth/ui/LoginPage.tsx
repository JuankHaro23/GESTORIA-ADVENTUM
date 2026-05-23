import React from 'react';

export function LoginPage() {
  return (
    <div className="flex items-center justify-center py-20 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Acceso a Clientes</h2>
        <form className="space-y-4 flex flex-col">
          <input type="email" placeholder="Correo electrónico" className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Contraseña" className="p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="button" className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
