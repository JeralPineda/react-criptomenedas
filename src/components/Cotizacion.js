import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
   background-color: #fff;
   padding: 4px 20px;
   /* color: #000; */
   border-radius: 10px;
   margin-top: 20px;
`;

const Info = styled.p`
   font-size: 18px;

   span {
      font-weight: bold;
   }
`;

const Precio = styled.p`
   font-size: 30px;

   span {
      font-weight: bold;
   }
`;

const Cotizacion = ({ result }) => {
   if (Object.keys(result).length === 0) return null;

   return (
      <ResultadoDiv>
         <Precio>
            El precio es: <span>{result.PRICE}</span>
         </Precio>
         <Info>
            Precio mas alto del día: <span>{result.HIGHDAY}</span>
         </Info>
         <Info>
            Precio mas bajo del día: <span>{result.LOWDAY}</span>
         </Info>
         <Info>
            Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
         </Info>
         <Info>
            Ultima actualizacion: <span>{result.LASTUPDATE}</span>
         </Info>
      </ResultadoDiv>
   );
};

export default Cotizacion;
