import { Component } from '@angular/core';
//import { AppState } from '../app.service';
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

/**
 * user.component.ts
 * @author Anupriya V
 * The user.component.ts act as controller for mentioned templateUrl.
 */
export class UserComponent {
  roles = ["Contractor", "Funder", "Beneficiery"];
  showBeneficieryField: boolean = false;
  return_value: boolean = false //used for HomeUseralidationservice

  nameValid: boolean = false;
  emailValid: boolean = false;
  phoneValid: boolean = false;
  passwordValid: boolean = false;
  confirmpasswordValid: boolean = false;
  roleValid: boolean = false;
  accountnumberValid: boolean = false;
  banknameValid: boolean = false;

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

  /**
   * @constructor
   *
   * Service required for UserComponent is injected here for reference (Dependency Injection).
   */
  constructor(private formBuilder: FormBuilder, private UserService: UserService, private UserValidationService: UserValidationService) {

  }

  /**
   * ngOnInit is method used to do some prior condition for loading page.
   */
  ngOnInit() {
    console.log('hello `Home` component');
  }

  /**
   * @method createUser
   *
   * createUser method create new user by calling UserService saveUser method.
   */
  createUser() {
    console.log(this.user);
    this.UserService.saveUser(this.user);
  }

  /**
   * @method setRole
   * @param rolevalue   user role
   *
   * setRole method set both user role and showBeneficieryField value based on the user role.
   */
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

  /**
   * @method check
   * @return boolean  return true if form valid
   *                          else false
   *
   * check method disable or enable  submit button.
   */
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
