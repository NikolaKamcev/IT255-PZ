import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import {AboutComponent} from '../about/about.component';
import {ReservationComponent} from '../reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class RoutingModule { }
