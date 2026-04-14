import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-book-an-appointment',
  imports: [ CommonModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './book-an-appointment.html',
  styleUrl: './book-an-appointment.scss',
})
export class BookAnAppointment {

  appointmentForm!:FormGroup;

  constructor(private fb:FormBuilder){
     this.appointmentForm = this.fb.group({
       name:['', Validators.required],
       email:['', Validators.required],
       phone:['', Validators.required],
       subject:['', Validators.required],
       message:['', Validators.required]
     },
    )
  }

  ngOnInIt():void{
  
  }
  get f() {
    return this.appointmentForm.controls;
  }
  onSubmit(){
     console.log(this.appointmentForm.value);
  }

}
