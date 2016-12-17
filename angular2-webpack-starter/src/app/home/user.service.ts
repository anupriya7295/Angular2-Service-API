import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Jsonp} from '@angular/http';


@Injectable()
export class UserService {
  // private baseUrl: string = 'http://swapi.co/api';
  private baseUrl: string = 'http://demo.radaptive.com:6080/api?action=query&username=superuser&password=superuser&queryName=GET_PROJECTS_BY_STATUS&status=Closed&retFormat=json&keyValuePair=yes&endLimit=100';

  constructor(private http: Http, private Jsonp : Jsonp) {

  }

  save(user: any){

    console.log(JSON.stringify(user))
  //  this.http.put(`${this.baseUrl}`, JSON.stringify(user), {headers: this.getHeaders()});
  //let response$ = this.http.get(`${this.baseUrl}`);

  }

   getData(){
     return this.Jsonp.get(this.baseUrl,{headers:this.getHeaders()})
         .map(res => res.json());

   }

  private getHeaders() {
    let headers = new Headers();
    headers.append('crossDomain' , 'true');
    return headers;
  }
}


/*
http://demo.radaptive.com:6080/api?action=query&username=superuser&password=superuser&queryName=GET_PROJECTS_BY_STATUS&status=Open&retFormat=json&keyValuePair=yes&endLimit=100
*/
