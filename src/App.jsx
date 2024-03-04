// for search function this article is used: https://upmostly.com/tutorials/how-to-create-a-search-component-in-react

import './App.css';
import world_map from './assets/world_map.png'
import axios from "axios";
import {useEffect, useState} from "react";
import ListCountryInformation from "./components/ListCountryInformation/ListCountryInformation.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
    const [listCountries, setListCountries] = useState("")
    const [searchCountriesData, setSearchCountriesData] = useState([])
    const [query, setquery] = useState("")
    async function fetchAllCountryInfo() {
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all')
            console.log(result)
            setListCountries(result.data.sort((a, b) => a.population - b.population))
        } catch (err) {
            console.error(err);
        }
    }

    async function searchCountriesInfo() {
        try {
            const result = await axios.get('https://restcountries.com/v3.1/all')
            console.log(result)
            setSearchCountriesData(result.data)
            } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        searchCountriesInfo();
    }, []);

    // async function fetchOneCountryInfo() {
    //     try {
    //         const result = await axios.get('https://restcountries.com/v3.1/name/{name}')
    //         console.log(result)
    //         setSearchCountries(result)
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }



    return (
        <>
            <img className="img-map" src={world_map} alt="map of the world with basic region devision" />
            <div className="buttons">
            {!listCountries && <Button handleClick={fetchAllCountryInfo}
                                        buttonText="Click for a list of all countries"
            />}

            </div>

            {/*List of all countries in the world*/}
            {listCountries && <h1 className="title">All countries in the world!</h1>}
            {listCountries && <p className="title"> There are {listCountries.length} countries in the world! These are: </p>}
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

            {/*Search info on specific country*/}
            <input placeholder="Search countries" onChange={event => setquery(event.target.value)}/>
            {/*<Button handleClick={fetchSingleCountryInfo} />*/}
            {searchCountriesData.filter((countryData) => {
                if (query === "") {
                    return countryData;
                } else if (countryData.name.common.toLowerCase().includes(query.toLowerCase())) {
                    return countryData;
                }
            }).map((countryData) => {
                <div key={countryData.area}>
                    <p>{countryData.name.common}</p>
                </div>
            })}

        </>
    )
}

export default App
