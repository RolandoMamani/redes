// Login.jsx
import React from 'react';                 // Importamos React para usar JSX
import useInput from '../hooks/useInput'; // Importamos nuestro hook personalizado

function Login() {
  const [nombre, handleNombre] = useInput('');
  const [password, handlePassword] = useInput('');

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4">
      <h2 className="text-2xl font-semibold text-center text-blue-500 mb-4">Login</h2>

      <form className="space-y-4">
        <input
          value={nombre}
          onChange={handleNombre}
          placeholder="Tu nombre"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Tu contraseña"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
