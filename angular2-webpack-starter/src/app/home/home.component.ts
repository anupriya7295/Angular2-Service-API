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
role:string='';
drop=' ';
newpassword =null ;
confirmpassword= null;
public myForm: FormGroup; // our model driven form

  // TypeScript public modifiers
  constructor(public appState: AppState ,private formBuilder: FormBuilder,private UserService : UserService) {
    this.myForm = this.formBuilder.group({
            name : ['', [Validators.required, Validators.minLength(5), ValidationService.nameValidation]],
            email:['',[ValidationService.emailValidator]],
            phone:['',[ValidationService.phoneNumber]],
            password:['',[ValidationService.passwordValidator]],
            confirmPassword:['',[Validators.required]],
            role:['',[Validators.required]]

        });

    console.log("in constructor"+this.myForm);
  }

  ngOnInit() {
    console.log('hello `Home` component');


    // this.myForm = new FormGroup({
    //         name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //         email:new FormControl('',[]),
    //         phone:new FormControl('',[]),
    //         password:new FormControl('',[]),
    //         confirmPassword:new FormControl('',[])
    //     });
  }

  save(value:any) {
        console.log(value.name);
        this.UserService.save(value);
  }
  savePassword(){
    this.newpassword = this.myForm.controls['password'];
  }
  saveconfirmPassword(){
    this.confirmpassword=this.myForm.controls['confirmPassword'];

  }
  setRole(p){
    this.role = p;
    console.log(p);
    this.myForm.controls['role'].setValue(p);
  }

}
