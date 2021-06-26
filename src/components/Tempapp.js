//Full Mini Project:-🔴 Create Live Search Weather App using React JS
import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [iCon, setICon] = useState([]);
    const [search, setSearch] = useState("mumbai");
    const [f, setF] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=42e90b9a7637705bc7c285fe124bf97b`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            
            // setICon(resJson);
            if(resJson.cod!=="404" && search!==""){
                setCity(resJson);
                setICon(resJson.weather[0])
                setF(true)
                console.log("$$$$$$$$$$$$$$$$$ FOUND");
            }
            else{
                setF(false);
            }
            console.log(resJson);
        };
        fetchApi();
    }, [search]);

    const urli = `https://openweathermap.org/img/wn/${iCon.icon}@2x.png`

    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputField" onChange={(event) => {
                        setSearch(event.target.value);
                    }} />
                </div>

                {
                    !f ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                        <div >
                            <div className="info">
                                <img className="icon" src={urli} alt="" />
                                <h1 className="location">
                                    <i className="fas fa-street-view"></i>{city.name}
                                </h1>

                                <h2 className="temp">
                                    {city.main.temp}°Cel
                                </h2>

                                <h3 className="tempmin_max"> Min : {city.main.temp_min}°Cel | Max : {city.main.temp_max}°Cel </h3>
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
