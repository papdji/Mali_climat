import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ForecastWeather } from 'src/app/models/ForecastWeather';
import { APIService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  data: ForecastWeather;
  error: string;
  weatherForm = this.formBuilder.group({ cityName: ['', [Validators.required, Validators.minLength(2)]] });

  constructor(private api: APIService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.weatherForm.patchValue({cityName: environment. DEFAULT_CITY});
    this.getData();
  }

  onSubmit() {
    if (this.weatherForm.valid) {
      this.data = null;
      this.getData();
    } else {
      this.error = 'Veuillez saisir une ville!';
    }
  }

  getData(){
    this.api.getForecastWeather(this.weatherForm.value.cityName).subscribe((data) => { this.data = data; this.error = null; }, (err) => this.error = err.error.error.message);
  }

}
