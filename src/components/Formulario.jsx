
import { useState }  from "react"
import useClima from "../hooks/useClima"


const Formulario = () => {


    const [ alerta ,  setalerta ] = useState('')
    const {   busqueda, datosbusqueda , consultarclima } = useClima()
    const { ciudad , pais } = busqueda


    const handlesubmit = e => {
        e.preventDefault()

        if( Object.values(busqueda).includes('') ) {
            setalerta('Todas los campos son obligatorios')
            return


        }
        setalerta('')
        consultarclima(busqueda)
    }

  return (
    <div className="contenedor">
        { alerta && <p> {alerta}</p> }




        <form
        onSubmit={handlesubmit} 
        >
             <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text"
                id="ciudad"
                name="ciudad"
                onChange={datosbusqueda}
            value={ciudad}
                
                />

             </div>

             <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select name="pais" id="pais"
                   onChange={datosbusqueda}
                   value={pais}
                
                >

                    <option value=""> Seleccione un pais </option>
                    <option value="US"> Estados unidos </option>
                    <option value="MX"> Mexico </option>
                    <option value="AR"> Argentina </option>
                    <option value="CO"> Colombia </option>
                    <option value="HN"> Honduras </option>
                    <option value="CR"> Costa rica </option>
                    <option value="ES"> Espania </option>
                    <option value="PU"> Peru </option>


                </select>

          
             
             </div>

             <input type="submit" 
              value='Consulta clima'

             />

        </form>

    </div>
  )
}

export default Formulario