import axios from 'axios';



export interface CovidResponse{
    state:string
    cases:number
    deaths:number
    population:number
}

export const getdata = async (state: string): Promise<CovidResponse> =>{
    const results= await axios.get("https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=30", {
        params: {
           
            aqi: "no",
            q:state
        }
    })
    return {
        state:results.data.location.name,
        cases: results.data.location.region,
        deaths: results.data.location.country,
        population: results.data.current.temp_c,
    }
}