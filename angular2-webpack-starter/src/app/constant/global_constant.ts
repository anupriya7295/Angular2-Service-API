/**
 * global_constant.ts
 *
 * It consit of all constant required for application
 * and it is referd as
 *
 *      import constantName = require('--path to refer--');
 *      global_constant.variableName
 *
 *      @Example
 *      import global_constant = require('../constant/global_constant.ts');
 *      global_constant.url
 */
'use strict';
export var baseUrl: string = "http://demo.radaptive.com:7090/api?callback=JSONP_CALLBACK&action=query&username=superuser&password=superuser&queryName=GET_PROJECTS_BY_STATUS&status=Closed&retFormat=json&keyValuePair=yes&endLimit=100";
export var url: string = "http://demo.radaptive.com:7090/api?callback=JSONP_CALLBACK&action=create&username=superuser&password=superuser&app=Users&retFormat=json&keyValuePair=yes&"
