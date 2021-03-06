import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import useCriptomoneda from '../hooks/useCriptomoneda';
import useMoneda from '../hooks/useMoneda';
import Error from './Error';

const Boton = styled.button`
   margin-top: 20px;
   font-weight: bold;
   font-size: 20px;
   padding: 10px;
   background-color: #66a2fe;
   border: none;
   width: 100%;
   border-radius: 10px;
   color: #fff;
   transition: background 0.2s ease;

   &:hover {
      background-color: #326ac0;
      cursor: pointer;
   }
`;

const Formulario = ({ setMoneda, setCriptomoneda }) => {
   // state del listado de criptomonedas
   const [listacripto, setListacripto] = useState([]);
   const [error, setError] = useState(false);

   const MONEDAS = [
      { codigo: 'HNL', nombre: 'Lempira Hondureño' },
      { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
      { codigo: 'EUR', nombre: 'Euro' },
      { codigo: 'MXN', nombre: 'Peso Mexicano' },
      { codigo: 'GBP', nombre: 'Libra Esterlina' },
   ];

   // usando nuestro hook useMoneda
   const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS);

   // custom hook useCriptomoneda
   const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto);

   // Ejecutar llamado a la API
   useEffect(() => {
      const consultarAPI = async () => {
         const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

         const resultado = await axios.get(url);

         setListacripto(resultado.data.Data);
      };

      consultarAPI();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar si los campos no estan vacios
      if (moneda === '' || criptomoneda === '') {
         setError(true);
         return;
      }

      setError(false);
      setMoneda(moneda);
      setCriptomoneda(criptomoneda);
   };

   return (
      <form onSubmit={handleSubmit}>
         {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}

         <SelectMonedas />

         <SelectCripto />

         <Boton type='submit' value='calcular'>
            Cotizar
         </Boton>
      </form>
   );
};

export default Formulario;
