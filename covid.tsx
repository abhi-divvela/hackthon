import { useEffect, useState } from "react"
import {getdata, CovidResponse} from './covidservice'
export const Covid:React.FC = ():JSX.Element => {
    const [state, setstate] = useState<string>("Narasaraopet")
    const [stateresponse, setresponse] = useState< CovidResponse>();

    useEffect(()=>{
        const fetchdata = async ()=>{
            const result = await getdata(state)
            setresponse(result)
        }
        fetchdata()
    }, [state])


    return <div>

        <select value={state} onChange={(e) => {setstate(e.target.value)}}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Narasaraopet">Narasaraopet</option>
        </select>
    <p>
        
    Location Name : { stateresponse?.deaths}
    </p>

    <p>
        
    Location Region : { stateresponse?.cases}
    </p>
    <p>
        
    Location Humidity : { stateresponse?.population}
    </p>
    <p>
        
    Location Country : { stateresponse?.state}
    </p>
       

    </div>
}