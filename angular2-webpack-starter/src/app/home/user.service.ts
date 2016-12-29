import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Http, Response, Headers, Jsonp, URLSearchParams, QueryEncoder} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import global_constant = require('../constant/global_constant.ts');

/**
 * user.service.ts
 * @author Anupriya V
 * The user.service.ts provides service for user.component.ts
 */
@Injectable()
export class UserService {
  response: any;

  /**
   * @constructor
   *
   * Service required for userservice is injected here for reference (Dependency Injection)
   */
  constructor(private http: Http, private Jsonp: Jsonp) {

  }

  /**
   * @method saveUser
   * @param user   user object
   * @return string  return success when new user insert in to database
   *                         failed when action fails
   *
   * saveUser method insert new user into database by calling create user api.
   */
  saveUser(user: any) {
    console.log("inside saveUser service");
    console.log(JSON.stringify(user));
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('individualFirstName', user.name);
    urlSearchParams.append('emailAddress', user.email);
    urlSearchParams.append('officePhone', user.phone);
    urlSearchParams.append('bankAccNo', user.accountNumber);
    urlSearchParams.append('accountId', user.email);
    urlSearchParams.append('userType', user.role);
    urlSearchParams.append('individualLastName', 'priya');
    let data = urlSearchParams.toString();
    //calling api to insert new user
    this.Jsonp.request(global_constant.url + data, { headers: this.getHeaders() })
      .map((res: Response) => res.json())
      .subscribe((res: Response) => {
        //     console.log("res",res);
        this.response = JSON.stringify(res);
        console.log(this.response);
        //     return this.response;
        //
      },
      (err) => {
        console.log("Error in service");
      },
      () => {
        console.log("getData function loaded correctl");
      }
      );
  }

  /**
   * @method getData
   * @return object  return list of object
   *
   * getData method retrieves all user by calling api.
   */
  getData() {
    //calling api to retrieve data from server.
    this.Jsonp.request(global_constant.baseUrl, { headers: this.getHeaders() })
      .map((res: Response) => res.json())
      .subscribe((res: Response) => {
        //     console.log("res",res);
        this.response = JSON.stringify(res);
        console.log(this.response);
        //     return this.response;
        //
      },
      (err) => {
        console.log("Error in service");
      },
      () => {
        console.log("getData function loaded correctl");
      }
      );
  }

  /**
   * @method getHeaders
   * @return headers  return headers for api request.
   *
   * getHeaders method return headers to make api call.
   */
  private getHeaders() {
    let headers = new Headers();
    headers.append('crossOrigin', 'true');
    return headers;
  }
}
