//Full Mini Project:-🔴 Create Live Search Weather App using React JS
import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [iCon, setICon] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=42e90b9a7637705bc7c285fe124bf97b`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
            console.log(resJson);
        };
        fetchApi();
    }, [search]);
    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
                </div>

                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                        <div >
                            <div className="info">

                                <h1 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h1>

                                <h2 className="temp">
                                    {city.temp}°Cel
                                </h2>

                                <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default Tempapp
