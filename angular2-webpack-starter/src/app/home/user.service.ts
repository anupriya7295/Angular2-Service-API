import { Component, OnInit, OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService{
 private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http){

  }
  save(user: any){
    console.log(JSON.stringify(user))
    /*return this.http
      .put(`${this.baseUrl}`, JSON.stringify(user), {headers: this.getHeaders()});*/
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
