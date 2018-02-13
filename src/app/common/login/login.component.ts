import { NgForm }   from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={};
  selected = 'option2';
  rememberMe = false;

  constructor(private router: Router) { }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
   loginUser(form: NgForm){
    console.log(form.value);
    console.log(this.rememberMe);
    this.router.navigate(['/app/Home']);

  }



  ngOnInit() {
  }


}

// export interface user{

// }
