import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ContactDialog } from '../../share/contact-dialog/contact-dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private matDialog:MatDialog){}

  ngOnIt():void {}

  openContactDialog(){
   this.matDialog.open(ContactDialog, {
      width:'600px',
   })
  } 

}
// 