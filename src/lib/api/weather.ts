export default class WeatherAPI {
  static async getOneDay() {
    return await fetch("/api/weather/one-day/").then(
      async (response) => await response.json(),
    );
  }
}
