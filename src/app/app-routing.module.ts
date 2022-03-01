import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoidsComponent } from './poids/poids.component';
import { DistanceComponent } from './distance/distance.component';
import { Routes, RouterModule } from '@angular/router'; // CLI 

const routes: Routes = [
  { path: 'poids', component: PoidsComponent },
  { path: 'distance', component: DistanceComponent },
 ];


 @NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  
 })

export class AppRoutingModule { }
