import React, { useState, useEffect } from 'react';

const Clima = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = "df43a754a00cfbda454c07293dda2339"

    // Obtener ubicación del usuario
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err) => {
                    setError("No se pudo obtener la ubicación.");
                    console.error(err);
                }
            );
        } else {
            setError("La geolocalización no es compatible con este navegador.");
        }
    }, []);

    // Llamar a la API de clima cuando las coordenadas están disponibles
    useEffect(() => {
        if (location.latitude && location.longitude) {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${API_KEY}&units=metric&lang=es`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setWeather(data);
                })
                .catch((err) => {
                    setError("Error al obtener el clima.");
                    console.error(err);
                });
        }
    }, [location, API_KEY]);

    return (
        <div className="clima-container">
            <h2>Clima en tu ubicación</h2>
            {error && <p className="error">{error}</p>}
            {!error && !weather && <p>Cargando...</p>}
            {weather && (
                <div>
                    <p><strong>Ubicación:</strong> {weather.name}</p>
                    <p><strong>Descripción:</strong> {weather.weather[0].description}</p>
                    <p><strong>Temperatura:</strong> {weather.main.temp} °C</p>
                    <p><strong>Humedad:</strong> {weather.main.humidity}%</p>
                    <p><strong>Viento:</strong> {weather.wind.speed} m/s</p>
                    {weather.weather[0].icon && (
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt={weather.weather[0].description}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Clima;
