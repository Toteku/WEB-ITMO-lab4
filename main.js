document.addEventListener('DOMContentLoaded', function() {
  // При загрузке страницы запрашиваем геолокацию
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
        async (pos) => {
            const mockData = await fetchMockWeather(); // Пока заглушка
            updateUI(mockData);
        },
        (error) => {
            // При отказе используем заглушку
            fetchMockWeather().then(updateUI);
        }
        );
    } else {
        // Браузер не поддерживает
        fetchMockWeather().then(updateUI);
    }
});