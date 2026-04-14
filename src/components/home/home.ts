import { Component } from '@angular/core';
import { HomeProduct } from '../home-components/home-product/home-product';
import { GlobalBrand } from '../home-components/global-brand/global-brand';
import { AboutUs } from '../home-components/about-us/about-us';
import { HomeSlider } from '../home-components/home-slider/home-slider';
import { BookAnAppointment } from '../home-components/book-an-appointment/book-an-appointment';
import { Certificate } from '../home-components/certificate/certificate';


@Component({
  selector: 'app-home',
  imports: [HomeSlider, AboutUs, GlobalBrand, HomeProduct, BookAnAppointment, Certificate],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
   
}
