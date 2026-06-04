import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { ApiService } from '../../../@core/services/api-service';

@Component({
  selector: 'app-home-product',
  imports: [TabsModule],
  templateUrl: './home-product.html',
  styleUrl: './home-product.scss',
})
export class HomeProduct implements OnInit {

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

  constructor(private dataSource: ApiService) { }
  ngOnInit(): void {
      this.dataSource.GET_ALL_PRODUCTS().subscribe({
          next:(result)=>{
             console.log(result);
          },
          error:(error)=>{}
      })
  }

  trackById(index: number) {
    return index;
  }

}
