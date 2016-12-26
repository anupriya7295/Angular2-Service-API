import { Component } from '@angular/core';
import { AppState } from '../app.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Http, Response} from '@angular/http';
//Our userdefined services
import { UserService } from './user.service';
import { UserValidationService } from './user.validationservice';
@Component({
  selector: 'loginpage',
  styleUrls: ['./user.component.css'],
  templateUrl: './user.component.html'
})
export class UserComponent {

  roles = ["Contractor", "Funder", "Beneficiery"];
  showBeneficieryField: boolean = false;
  return_value: boolean = false

  nameValid: boolean = false;
  emailValid: boolean = false;
  phoneValid: boolean = false;
  passwordValid: boolean = false;
  confirmpasswordValid: boolean = false;
  roleValid: boolean = false;
  accountnumberValid: boolean = false;
  banknameValid: boolean = false;

  response: any;
  errorMessage: string;;
  isLoading: boolean;
  user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountNumber: '',
    bankName: '',
    role: '',

  };

  // TypeScript public modifiers
  constructor(public appState: AppState, private formBuilder: FormBuilder, private UserService: UserService, private UserValidationService: UserValidationService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');

  }

  logForm() {
    // console.log(this.user);
    //this.UserService.save(this.user);
    this.UserService.getData();
  }

  setRole(rolevalue) {
    this.user.role = rolevalue;
    this.user.role = rolevalue;
    if (rolevalue == "Beneficiery") {
      this.showBeneficieryField = !this.showBeneficieryField;
    } else {
      this.showBeneficieryField = false;
    }
    this.check();
  }

  check() {
    this.nameValid = this.UserValidationService.checkIfNameValid(this.user.name);
    this.emailValid = this.UserValidationService.checkIfValidEmail(this.user.email);
    this.phoneValid = this.UserValidationService.checkIfValidPhoneNumber(this.user.phone);
    this.passwordValid = this.UserValidationService.checkIfValidPassword(this.user.password);
    this.confirmpasswordValid = this.UserValidationService.checkIfPasswordEqual(this.user.password, this.user.confirmPassword);
    this.roleValid = (this.user.role != '');
    this.accountnumberValid = this.UserValidationService.checkIfValidAccountNumber(this.user.accountNumber);
    this.banknameValid = this.UserValidationService.checkIfNameValid(this.user.bankName);

    this.return_value = (this.nameValid && this.emailValid && this.phoneValid && this.passwordValid && this.confirmpasswordValid && this.roleValid);

    if (this.user.role === "Beneficiery") {
      // console.log("in Beneficiery")
      // console.log(this.accountnumberValid && this.banknameValid && this.return_value);
      return (this.accountnumberValid && this.banknameValid && this.return_value);
    } else {
      // console.log("other Role");
      this.user.accountNumber = '';
      this.user.bankName = '';
      // console.log(this.return_value);
      return this.return_value;
    }
  }
}