import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {UtilService} from '../../services/util.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  public errorMessage = null;
  constructor(private http : Http,private fb: FormBuilder,private utilService : UtilService, private router: Router, private loginService : LoginService) {}

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    localStorage.removeItem('token');
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {
    this.http.post(this.utilService.getDomain() + '/auth/logout/', {token : localStorage.getItem('token')}).map(res => res.json());


    this.errorMessage = null;
    this.loginService.login(this.form.value.uname, this.form.value.password).subscribe(response => {
      try {
        
      } catch (error) {
        
      }
      localStorage.setItem('user' ,  response.user);
      localStorage.setItem('token' , response.access_token);
      console.log(response.access_token,response.user)
      this.router.navigate(['customerDashboard']);

    }, error => {
      try {
        console.log(error.json());
        this.errorMessage = error.json().non_field_errors[0];
      } catch (e) {
        this.errorMessage = 'Network Problem';
      }
    });
  }

}
