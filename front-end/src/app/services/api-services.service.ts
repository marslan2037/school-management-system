import { throwError as observableThrowError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { retry, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiServices {

    public ticketGroupsData:any;
    
    constructor(private http: HttpClient) {  
        
    }
    
    isAuthenticated() {
        var token = sessionStorage.getItem('token') !== null;
        let settings_configured = (sessionStorage.getItem('settings_configured') == 'true') ? true : false;

        if(token && settings_configured) {
            return true;
        } else {
            return false;
        }
    }

    doLogin(user: any) {
        let json = { 'username': user.email, 'password': user.password } 
        // return this.http.post(this.url_service.vision_api_3+'token/', json)
        //     .pipe(
        //         catchError(this.handle_error_service.handleError)
        //     )
    }
}