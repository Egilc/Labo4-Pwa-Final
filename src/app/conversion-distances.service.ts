import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionDistancesService {

  ratio: number = 0.62137119;

  constructor() { }

  enKilometres(miles: number){
    return miles / this.ratio;
  }

  enMiles(km: number){
    return km * this.ratio;
  }
}
