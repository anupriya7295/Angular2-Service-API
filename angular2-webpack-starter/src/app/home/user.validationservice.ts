import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';

/**
 * user.validationservice.ts
 * @author Anupriya V
 * The user.validationservice.ts provides service for user.service.ts
 */
@Injectable()
export class UserValidationService {

  /**
   * @method checkIfNameValid
   * @param value   string to check
   * @return boolen  return true if string valid
   *                         else false
   *
   * checkIfNameValid validate given string is valid or not based on condition and pattern.
   */
  checkIfNameValid(value: string) {
    if (value.match(/[A-Za-z *]/)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method checkIfValidEmail
   * @param value   string to check
   * @return boolen  return true if string valid
   *                         else false
   *
   * checkIfValidEmail validate given string is valid or not based on condition and pattern.
   */
  checkIfValidEmail(value: string) {
    if (value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method checkIfValidPhoneNumber
   * @param value   string to check
   * @return boolen  return true if string valid
   *                         else false
   *
   * checkIfValidPhoneNumber validate given string is valid or not based on condition and pattern.
   */
  checkIfValidPhoneNumber(value: string) {
    if (value.match(/(7|8|9)\d{9}/)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method checkIfValidPassword
   * @param value   string to check
   * @return boolen  return true if string valid
   *                         else false
   *
   * checkIfValidPassword validate given string is valid or not based on condition and pattern.
   */
  checkIfValidPassword(value: string) {
    if (value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method checkIfPasswordEqual
   * @param value   string to check
   * @return boolen  return true if string valid
   *                         else false
   *
   * checkIfPasswordEqual validate given string is valid or not based on condition and pattern.
   */
  checkIfPasswordEqual(value1: string, value2: string) {
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * @method checkIfValidAccountNumber
   * @param value   string to check
   * @return boolen  return true if string valid
   *                         else false
   *
   * checkIfValidAccountNumber validate given string is valid or not based on condition and pattern.
   */
  checkIfValidAccountNumber(value: string) {
    if (value.match(/[0-9]\d{4}/)) {
      return true;
    } else {
      return false;
    }
  }
}
