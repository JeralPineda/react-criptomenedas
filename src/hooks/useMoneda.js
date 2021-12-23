import { useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {
   // state de nuestro custom hook
   const [moneda, setMoneda] = useState(stateInicial);

   const Seleccionar = () => (
      <>
         <label>{label}</label>
         <select
            //
            onChange={(e) => setMoneda(e.target.value)}
            value={moneda}
         >
            <option value=''>-- Seleccione --</option>
            {opciones.map((opcion) => (
               <option key={opcion.codigo} value={opcion.codigo}>
                  {opcion.nombre}
               </option>
            ))}
         </select>
      </>
   );

   // Retornar state, interfaz y fn que modifica el state
   return [moneda, Seleccionar, setMoneda];
};

export default useMoneda;
