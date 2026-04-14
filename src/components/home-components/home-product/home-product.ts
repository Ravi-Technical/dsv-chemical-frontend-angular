import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-home-product',
  imports: [TabsModule],
  templateUrl: './home-product.html',
  styleUrl: './home-product.scss',
})
export class HomeProduct {

  scrollableTabs: any[] = [
     "ROSIN DERIVATIVES",
     "PHENOLIC RESINS", 
     "ALKYD RESINS", 
     "POLYAMIDE RESINS", 
     "AMINO RESINS BUTYLATED", 
     "ESTERFIED ROSIN DERIVATIVES", 
     "EPOXY ESTER", 
     "OIL FREE POLYESTER RESIN", 
     "ACRYLIC RESINS", 
     "POLYURATHANE RESINS", 
     "KETONIC RESINS", 
     "RESINATES"
    ];

  activeTab: string = '0';

   constructor(){}

   trackById(index: number) {
        return index;
    }

}
