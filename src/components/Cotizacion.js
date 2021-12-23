const Cotizacion = ({ result }) => {
   if (Object.keys(result).length === 0) return null;

   console.log(result);

   return (
      <div>
         <p>
            El precio es: <span>{result.PRICE}</span>
         </p>
         <p>
            Precio mas alto del día: <span>{result.HIGHDAY}</span>
         </p>
         <p>
            Precio mas bajo del día: <span>{result.LOWDAY}</span>
         </p>
         <p>
            Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
         </p>
         <p>
            Ultima actualizacion: <span>{result.LASTUPDATE}</span>
         </p>
      </div>
   );
};

export default Cotizacion;
