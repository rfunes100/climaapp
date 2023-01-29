import { useState,  createContext } from "react"
import axios from "axios"


const Climacontext = createContext()

const ClimaProvider = ( { children }) => {

   // console.log('enviromen',import.meta.env.VITE_API_KEY)


    const [busqueda , setbusqueda] = useState({


        ciudad: '',
        pais: ''

    })

    const [resultado , setresultado] = useState({

    })

    const [cargando , setcargando] = useState(false)
    const [noresultado , setnoresultado ] = useState(false)


    const datosbusqueda = e => {
        setbusqueda({
            ...busqueda,
            [e.target.name]: e.target.value

        })
       


    }

    const consultarclima = async datos => {
        setcargando(true)
        setnoresultado(false)

       try {
        const {ciudad , pais } = datos 

        const appid = import.meta.env.VITE_API_KEY

        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appid}`
        const { data } = await axios(url)

        console.log('url',data[0] )

        if (data[0] === undefined)
        {
            console.log('undefined url',data[0] )
            setnoresultado('no hay resultados')
            setcargando(false)
            setresultado({})
            return 
        } 
        const { lat , lon } = data[0] 

        const urlclima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
      //  console.log('urlclia', urlclima)
        const { data: clima } = await axios(urlclima)
       // console.log('dataclima', clima)
       setresultado(clima)
       setcargando(false)




       } catch(error ){
        console.log('error',error)
        setnoresultado('no hay resultados')

       } 


    }

    return(

        <Climacontext.Provider
        value= { {
            busqueda,
            datosbusqueda,
            consultarclima,
            resultado,
            cargando,
            noresultado

        }}
        >
            {children}

        </Climacontext.Provider>
    )

}

export { 
    ClimaProvider
}

export default Climacontext
