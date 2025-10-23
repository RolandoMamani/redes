//useInput.js

import { useState } from 'react'; // Importamos useState de React

function useInput(initialValue) { // Hook personalizado que recibe un valor inicial
  const [value, setValue] = useState(initialValue); // Estado y función para actualizar el valor

  function handleChange(e) { // Maneja el cambio en el input
    setValue(e.target.value); // Actualiza el estado con el nuevo valor
  }

  return [value, handleChange]; // Retorna el valor y la función para manejar cambios
}

export default useInput; // Exportamos el hook
