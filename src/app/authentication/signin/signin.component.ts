import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form: FormGroup;
  public errorMessage = null;
  constructor(private fb: FormBuilder, private router: Router, private loginService : LoginService) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      uname: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit() {

    this.errorMessage = null;
    this.loginService.login(this.form.value.uname, this.form.value.password).subscribe(response => {
      localStorage.setItem('user' , JSON.stringify(response.user));
      localStorage.setItem('token' , response.token);
      this.router.navigate(['/']);

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
