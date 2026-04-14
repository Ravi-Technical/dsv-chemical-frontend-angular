import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadChildren:()=>import('../components/components-routing-module').then(m=>m.ComponentsRoutingModule)}
];
    