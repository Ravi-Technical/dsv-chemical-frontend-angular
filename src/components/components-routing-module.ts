import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { Applications } from './applications/applications';
import { EnquireForm } from './enquire-form/enquire-form';
import { ContactUs } from './contact-us/contact-us';
import { SiteMap } from './site-map/site-map';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component:About},
  { path: 'products', component:Products},
  { path: 'applications', component:Applications},
  { path: 'enquireForm', component:EnquireForm},
  { path: 'contact-us', component:ContactUs},
  { path: 'sitemap', component:SiteMap},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
