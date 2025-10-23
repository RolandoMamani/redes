// ModoOscuro.jsx
import React, { useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode'; // Importa el hook personalizado

function ModoOscuro() {
  const [isDark, toggleDarkMode] = useDarkMode(); // Usamos el hook para controlar el modo oscuro

  useEffect(function() {
    // Cambia el fondo y color del texto según el modo oscuro esté activo o no
    if (isDark) {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = '#f5f5f5';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  }, [isDark]); // Solo se ejecuta cuando cambia isDark

  return (
    <button
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      onClick={toggleDarkMode} // Alterna el modo oscuro al hacer click
    >
      {isDark ? 'Modo Claro' : 'Modo Oscuro'} {/* Texto cambia según el modo */}
    </button>
  );
}

export default ModoOscuro; // Exporta el componente para usar en la app
