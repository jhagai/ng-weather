export interface WeatherModel {
    id: number;
    main: string;
}

export interface MainModel {
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface WeatherConditionsModel {
    name: string;
    weather: WeatherModel[];
    main: MainModel;
}

export interface LocationModel {
    zip: string;
    data: WeatherConditionsModel;
}
