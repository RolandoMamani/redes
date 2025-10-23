// useDarkMode.js
import { useState } from 'react';  // Importamos useState para manejar el estado

function useDarkMode() {
  const [isDark, setIsDark] = useState(false); // Estado para saber si el modo oscuro está activo

  function toggleDarkMode() {
    setIsDark(!isDark); // Cambia el estado al valor contrario (true <-> false)
  }

  return [isDark, toggleDarkMode]; // Retornamos el estado y la función para cambiarlo
}

export default useDarkMode; // Exportamos el hook para usarlo en otros componentes

