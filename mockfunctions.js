function fetchMockData(city){
    if (city === "Ноябрьск"){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    city: "Ноябрьск",
                    temp: -33,
                    temp_min: -38,
                    temp_max: -30,
                    feels_like: -40,
                    description: "Ясно",
                    humidity: 3, // влажность в процентах
                    wind: 3.5,
                    icon: "04d", // Код иконки OpenWeatherMap
                    date: new Date().toLocaleDateString("ru-RU")
                });
        }, 500); // Имитация задержки сети
    });
    } else if (city === "Тюмень") {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    city: "Тюмень",
                    temp: 12,
                    temp_min: 8,
                    temp_max: 16,
                    feels_like: 10,
                    description: "Облачно",
                    humidity: 78,
                    wind: 3.5,
                    icon: "04d", // Код иконки OpenWeatherMap
                    date: new Date().toLocaleDateString("ru-RU")
                });
            }, 500); // Имитация задержки сети
        });
    } else if (city === "Новый Уренгой") {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    city: "Новый Уренгой",
                    temp: -25,
                    temp_min: -30,
                    temp_max: -20,
                    feels_like: -32,
                    description: "Снег",
                    humidity: 85,
                    wind: 4.2,
                    icon: "13d", // Код иконки OpenWeatherMap
                    date: new Date().toLocaleDateString("ru-RU")
                });
            }, 500); // Имитация задержки сети
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Город не найден в базе моковых данных"));
            }, 500); // Имитация задержки сети
        });
    }
}

export { fetchMockData };