import './App.css';
import world_map from './assets/world_map.png'
import axios from "axios";
import {useState} from "react";
import ListCountryInformation from "./components/ListCountryInformation/ListCountryInformation.jsx";

function App() {
    const [listCountries, setListCountries] = useState("")
    async function fetchAllCountryInfo() {
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all')
            console.log(result)
            setListCountries(result.data.sort((a, b) => a.population - b.population))
        } catch (err) {
            console.error(err);
        }
    }



    return (
        <>
            <img className="img-map" src={world_map} alt="map of the world with basic region devision" />

            {!listCountries && <button className="all-country-btn" type="button" onClick={fetchAllCountryInfo}>Click for info on all countries in the world</button>}
            {listCountries && <h1>All countries in the world!</h1>}
            {listCountries && <p> There are {listCountries.length} countries in the world! These are: </p>}
            {listCountries && <ul className="list-countries">
            {listCountries.map((country) => {
                    return <ListCountryInformation countryName={country.name.common}
                                                   flag={country.flags.png}
                                                   imgAlt={country.flags.alt}
                                                   region={country.region}
                                                   listKey={country.area}
                                                   number={country.population}
                    />
                })}
            </ul>}

        </>
    )
}

export default App
