import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialog } from '../../../share/contact-dialog/contact-dialog';

@Component({
  selector: 'app-certificate',
  imports: [CommonModule],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss',
})
export class Certificate {

  constructor(private matDialog: MatDialog) { }

  ngOnInIt(): void { }

  openModelDialog() {
    this.matDialog.open(ContactDialog, {
      width: '600px'
    })
  }

}
