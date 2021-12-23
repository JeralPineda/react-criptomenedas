import styled from '@emotion/styled';
import { useState } from 'react';

const Label = styled.label`
   font-family: 'Bebas Neue', cursive;
   color: #fff;
   text-transform: uppercase;
   font-weight: bold;
   font-size: 2.4rem;
   margin-top: 2rem;
   display: block;
`;

const Select = styled.select`
   width: 100%;
   display: block;
   padding: 1rem;
   --webkit-appearance: none;
   border-radius: 10px;
   border: none;
   font-size: 1.2rem;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {
   // state de nuestro custom hook
   const [cripto, setCripto] = useState(stateInicial);

   const SelectCripto = () => (
      <>
         <Label>{label}</Label>
         <Select
            //
            onChange={(e) => setCripto(e.target.value)}
            value={cripto}
         >
            <option value=''>-- Seleccione --</option>
            {opciones.map((opcion) => (
               <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
                  {opcion.CoinInfo.FullName}
               </option>
            ))}
         </Select>
      </>
   );

   // Retornar state, interfaz y fn que modifica el state
   return [cripto, SelectCripto, setCripto];
};

export default useCriptomoneda;
