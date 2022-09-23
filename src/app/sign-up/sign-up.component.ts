import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms"
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signupForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
    })
  }


  signUp(){
    this.http.post<any>("https://hiring-stackroots-server.herokuapp.com/auth/signup/user",this.signupForm.value)
     .pipe(
        catchError((objError) => {
       
          return objError;
        })
      )
      .subscribe((objResponse) => {
        console.log(objResponse);
        if(objResponse.isError=false){
         // TO DO SHOW HOME AND SIGNOUT BUTTON ONLY
        }
        
      })
    // .subscribe(res=>{
    //   alert("signup successfull");
    //   this.signupForm.reset();
    //   this.router.navigate(['signup']);
    // },err=>{
    //   alert("Something went wrong")

    // })
    
  }

}
