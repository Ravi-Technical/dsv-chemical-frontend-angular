import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-dialog',
  imports: [CommonModule, MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule],
  templateUrl: './contact-dialog.html',
  styleUrl: './contact-dialog.scss',
})
export class ContactDialog { 
  
  contactForm!:FormGroup;

  constructor(private fb:FormBuilder, private matDialogRef:MatDialogRef<ContactDialog>){
     this.contactForm = this.fb.group({
        name:['', Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required],
        subject:['', Validators.required],
        message:['', Validators.required]
     });
  }
  ngOnInIt(){}

  submitForm(){
     console.log( this.contactForm.value);
     this.matDialogRef.close();
  }

  closeDialog(){
     this.matDialogRef.close();
  }

}
