class Fetch {
  async getCurrent(input) {
    const myKey = "eac209a5e9457f059b9bda733ab662bc";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
