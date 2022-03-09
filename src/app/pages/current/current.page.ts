import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/CurrentWeather';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-current',
  templateUrl: './current.page.html',
  styleUrls: ['./current.page.scss'],
})
export class CurrentPage implements OnInit {

  data: CurrentWeather;
  error: string;
  ville : string = "bamako";
  weatherForm = new FormGroup({
    // cityName: new FormControl(environment. DEFAULT_CITY, [Validators.required, Validators.minLength(2)])
  })

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getData();
  }

  onSubmit() {
    this.data = null;
    this.getData();
    //this.ville;
  }

  getData(){
    this.api.getCurrentWeather(this.ville).subscribe((data) => { this.data = data; this.error = null; console.log(data);
    }, (err) => this.error = err.error.error.message);
  }

}
