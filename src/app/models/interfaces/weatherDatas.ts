import { NumberValueAccessor } from "@angular/forms";

export interface WeatherDatas {
  coord: {
    lon: number;
    lat: number;
  },

  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];

  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
  visibility: number;
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  sys: {
    dt: number;
    id: number;
    country: number;
    sunrise: number;
  },
  timezone: number;
  id: number;
  name: string;
  cod: number;

}
