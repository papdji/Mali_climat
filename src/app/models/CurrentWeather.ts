import { AlertButton, AlertInput, AnimationBuilder, IonicSafeString } from "@ionic/angular";
import { AlertAttributes, Mode } from "@ionic/core";

export interface CurrentWeather {
    location: Location;
    current: Current;
}
export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export interface Current {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: Condition;
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
    air_quality: AirQuality;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface AirQuality {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    'us-epa-index': number;
    'gb-defra-index': number;
}
export interface Alerts {
  alert: string;
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  cssClass?: string;
  inputs?: AlertInput;
  buttons?: (AlertButton | string)[];
  backdropDismiss?: boolean;
  translucent?: boolean;
  animated?: boolean;
  htmlAttributes?: AlertAttributes;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
export class Alertes{
  alerte: string;
  city: string;
  description: string;
  image: string;
  audio: string;
  public constructor(
    alerte: string,
    city: string,
    description: string, image: string,
    audio: string){
    this.alerte = alerte;
    this.city = city;
    this.description = description;
    this.image = image;
    this.audio = audio;
  }
}




