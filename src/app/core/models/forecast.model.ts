export interface ForecastModel {
    city: { name: string },
    list: DailyForecastModel[];
}

export interface DailyForecastModel {
    dt: number;
    temp: {
        min: number;
        max: number;
    };
    weather: WeatherForecastModel[];
}

export interface WeatherForecastModel {
    id: number;
    main: string;
}
