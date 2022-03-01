import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConversionPoidsService {

  ratio: number = 2.205;
  constructor() { }

  enLivres(kg: number){
    return kg *  this.ratio;
  }

  enKilo(lb : number){
    return lb / this.ratio;
  }
}
