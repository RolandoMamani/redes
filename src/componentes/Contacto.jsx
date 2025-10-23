// Contacto.jsx
import React from "react";
import useInput from "../hooks/useInput";

function Contacto() {
  const [nombre, handleNombre] = useInput(''); //manejar=handle
  const [email, handleEmail] = useInput('');
  const [mensaje, handleMensaje] = useInput('');

  return (
    <form className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-semibold text-center text-blue-500">Contacto</h2>

      <input
        value={nombre}
        onChange={handleNombre}
        placeholder="Tu nombre"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        value={email}
        onChange={handleEmail}
        placeholder="Tu correo"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        value={mensaje}
        onChange={handleMensaje}
        placeholder="Tu mensaje"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default Contacto;
