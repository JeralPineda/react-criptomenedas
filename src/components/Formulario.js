import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

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

const Formulario = () => {
   const MONEDAS = [
      { codigo: 'HNL', nombre: 'Lempira Hondureño' },
      { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
      { codigo: 'EUR', nombre: 'Euro' },
      { codigo: 'MXN', nombre: 'Peso Mexicano' },
      { codigo: 'GBP', nombre: 'Libra Esterlina' },
   ];
   // usando nuestro hook useMoneda
   const [moneda, SelectMonedas, setMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);

   return (
      <form>
         <SelectMonedas />

         <Boton type='submit' value='calcular'>
            Cotizar
         </Boton>
      </form>
   );
};

export default Formulario;
