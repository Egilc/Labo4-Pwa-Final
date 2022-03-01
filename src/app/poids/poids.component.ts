import { Component, OnInit } from '@angular/core';
import { ConversionPoidsService } from '../conversion-poids.service';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {

  kilogrammes:number = 0;
  livres:number = 0;
  constructor(private _conversionPoids: ConversionPoidsService) { }

  ngOnInit(): void {

  }

  enLivres(){
    this.livres = this._conversionPoids.enLivres(this.kilogrammes);
  }

  enKilo(){
    this.kilogrammes = this._conversionPoids.enKilo(this.livres);
  }
}
