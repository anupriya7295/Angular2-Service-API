import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { MultiSelectField, Option } from 'react-mdl-extra';
import React from 'react';
import ReactDOM from 'react-dom';
import Portal from 'react-portal';


@Component({
  styleUrls: ['./form.component.css'],
  templateUrl: './form.component.html'
})

/**
 * form.component.ts
 * @author Anupriya V
 * The form.component.ts act as controller for mentioned templateUrl.
 */
export class DynamicFormComponent {

  entity = {};

  formdata = {
    name: 'Customer',
    id: '101',
    function:"saveform",
    fields: [
      {
        name: 'Name',
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        material_icon: 'person_outline',
        id: 'name',
        errormessage: 'Username is required (minimum 5 characters).',
        pattern: '[A-Za-z]*',
        isRequired: 'true',
        minLength:'5'
      },
      {
        name: 'Password',
        label: 'Password',
        type: 'password',
        placeholder: 'Placeholder',
        material_icon: 'lock_outline',
        id: 'Password',
        errormessage: 'Password must have at least 6 characters,and a number.',
        pattern: '^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$',
        isRequired: 'true'
      },
      {
        name: 'Number',
        label: 'Number',
        type: 'number',
        placeholder: 'Number',
        icon:'line/add-circle-1.svg',
        id: 'Number',
        errormessage: 'min 2 max 8',
        min:2,
        max:8,
        isRequired: 'true'
      },
      {
        name: 'textarea',
        label: 'textarea',
        type: 'textarea',
        placeholder: 'Textarea',
        icon: 'line/pencil-2.svg',
        //material_icon: 'lock_outline',
        id: 'textarea',
        errormessage: 'Textarea is requried (min 5 characters)',
        pattern: '[A-Za-z]*',
        isRequired: 'true'
      },
      {
        name: 'dropdown',
        label: 'dropdown',
        type: 'dropdown',
        placeholder: 'dropdown',
        icon: 'line/location-map-1.svg',
        id: 'dropdown',
        options:['chennai','coimbatore','trichy','Bangalore','cochin','kerala','munnar']
      },
      {
        name: 'checkbox',
        label: 'checkbox',
        type:'checkbox',
        placeholder: 'dropdown',
        icon: 'line/user-add.svg',
        errormessage: 'gender required',
        isRequired: 'true',
        options:['Male','Female']
      },
      {
        name: 'multiselect',
        label: 'multiselect',
        type:'multiselect',
        placeholder: 'multiselect',
        icon: 'line/user-add.svg',
        errormessage: 'gender required',
        isRequired: 'true',
        options:['apple','banana','grapes','mango','passion']
      },
      {
        name: 'radiobutton',
        label: 'radiobutton',
        type:'radiobutton',
        placeholder: 'radiobutton',
        icon: 'line/user-add.svg',
        id: '',
        errormessage: 'gender required',
        isRequired: 'true',
        options:['Male','Female']
      },
      {
        name: 'submit',
        label: 'submit',
        type:'submit',
        placeholder: 'submit',
        isdisabled:"true",

      }
    ]
  } //form object ends

  saveform(){
    console.log("entity");
    console.log(this.entity);
  }

  checkboxManagement(value : any,checked:any,type:any){
    if(this.entity[type]){
        this.checkboxService(value, checked, type);
    } else {
      this.entity[type]=[];
      this.checkboxService(value, checked, type);
    }
  }

  checkboxService(value : any,checked:any,type:any){
    if(checked == true){
      this.entity[type].push(value);
    } else {
      this.entity[type].pop("value");
    }
  }


}
