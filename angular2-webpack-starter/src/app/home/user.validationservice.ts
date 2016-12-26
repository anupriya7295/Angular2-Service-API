import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class UserValidationService {

  checkIfNameValid(value: string) {
    if (value.match(/[A-Za-z *]/)) {
      return true;
    } else {
      return false;
    }
  }

  checkIfValidEmail(value: string) {
    if (value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return true;
    } else {
      return false;
    }
  }

  checkIfValidPhoneNumber(value: string) {
    if (value.match(/(7|8|9)\d{9}/)) {
      return true;
    } else {
      return false;
    }
  }

  checkIfValidPassword(value: string) {
    if (value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return true;
    } else {
      return false;
    }
  }

  checkIfPasswordEqual(value1: string, value2: string) {
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }
  }

  checkIfValidAccountNumber(value: string) {
    if (value.match(/[0-9]\d{4}/)) {
      return true;
    } else {
      return false;
    }
  }
}
