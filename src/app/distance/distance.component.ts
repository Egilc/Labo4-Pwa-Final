import { Component, OnInit } from '@angular/core';
import { ConversionDistancesService } from '../conversion-distances.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.css']
})
export class DistanceComponent implements OnInit {

  kilometres: number = 0;
  miles: number = 0;

  constructor(private _ConversionDistance : ConversionDistancesService) { }

  ngOnInit(): void {
  }

  enKilometres(){
    this.kilometres = this._ConversionDistance.enKilometres(this.miles);
  }

  enMiles(){
    this.miles = this._ConversionDistance.enMiles(this.kilometres);
  }
}
