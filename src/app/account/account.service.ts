import { IUser } from 'src/app/shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:8080/api/';
  private currentUserSource = new BehaviorSubject<any>(null);
  currentUser$ =  this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getCurrentUserValue(){
    return this.currentUserSource.value;
  }


  loadCurrentUser(token: string){
       let headers = new HttpHeaders();
       headers = headers.set('Authorization', `Bearer ${token}`);
       return this.http.get(this.baseUrl + 'account', {headers}).pipe(
        map((user: IUser)=> {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        })
       )

  }


  login(values: any){
    return this.http.post(this.baseUrl + 'login', values).pipe(
      map((user: IUser) => {
        localStorage.setItem('token', user.token);
        this.currentUserSource.next(user);
      })
    )
  }


  register(values: any){
    return this.http.post(this.baseUrl + 'registration', values).pipe(
      map((user: IUser) => {
        if(user){
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
        }
      })
    )
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string){
    return this.http.get(this.baseUrl + '/account/emailexists?email='+email)
  }

}
