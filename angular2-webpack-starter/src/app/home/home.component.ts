import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

import { UserService } from './user.service';


@Component({

  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
roles=["Contractor","Funder","Beneficier"];

drop='  ';
show: boolean = false;

public myForm: FormGroup; // our model driven form
user={
  name:'',
  email:'',
  phone:'',
  password:'',
  confirmPassword:'',
  accountNumber:'',
  bankName:'',
  role:'',

}



  // TypeScript public modifiers
  constructor(public appState: AppState ,private formBuilder: FormBuilder,private UserService : UserService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');

  }

  logForm() {
    console.log(this.user);
    this.UserService.save(this.user);
  }

  setRole(rolevalue){
    this.user.role = rolevalue;
    console.log(rolevalue);
    this.user.role=rolevalue;
    if(rolevalue == "Beneficier") {
      this.show = !this.show;
    } else {
      this.show = false;
    }
  }

}
