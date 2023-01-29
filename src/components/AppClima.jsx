

import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Loading from "./Loading"




const AppClima = () => {

    const {  resultado, cargando , noresultado } = useClima()

  return (
    <>
    <main className="dos-columnas">
    <Formulario></Formulario>

{ cargando ? <Loading></Loading> :  
  resultado?.name ? <Resultado></Resultado> :
  noresultado ? <p>{noresultado}</p>
  : <p>El clima se va mostras aqui </p>
}


    </main>
    </>
  )
}

export default AppClima