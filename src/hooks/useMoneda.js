import { useState } from 'react';

const useMoneda = () => {
   // state de nuestro custom hook
   const [moneda, setMoneda] = useState('');

   const Seleccionar = () => (
      <>
         <label>Moneda</label>
         <select name='' id=''>
            <option value='HNL'>Lempira Hondureño</option>
         </select>
      </>
   );

   // Retornar state, interfaz y fn que modifica el state
   return [moneda, Seleccionar, setMoneda];
};

export default useMoneda;
