import { useContext } from "react";

import Climacontext from "../context/ClimaProvider";

const useClima = () => {
    return useContext(Climacontext)

}

export default useClima