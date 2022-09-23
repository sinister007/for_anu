import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormGroup,
  FormBuilder
} from "@angular/forms"
import {
  Router, UrlTree
} from '@angular/router';
import {
  HttpClient
} from '@angular/common/http';
import { catchError } from 'rxjs';
import { HomeComponent } from '../home/home.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @Output() objEvent=new EventEmitter()
  // @Output() objPresentationEvent = new EventEmitter<ICommon.IOperationEvent>()

  public signinForm!: FormGroup;
 blnShow: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    
    
  }
  
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }
  signin() {
    console.log("sssssssssssssssssssssssssssss");
    

    this.http.post<any>("https://hiring-stackroots-server.herokuapp.com/auth/signin/user",this.signinForm.value)
    .pipe(
       catchError((objError) => {
      
         return objError;
       })
     )
     .subscribe((objResponse) => {
       console.log(objResponse);
       if(objResponse.message="User Login Successful"){
        this.router.navigate(['/home'])
     this.blnShow=false

        // blnShowButtons=false
  
        // TO DO baaki nokki cheyy

       }
       
     })
    // this.http.get < any > ("http://localhost:3000/")
      // .subscribe(res => {
      //   const user = res.find((a: any) => {
      //     return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
      //   });
      //   if (user) {
      //     alert("login success");
      //     this.signinForm.reset();
      //     this.router.navigate(['home'])
      //   } else {
      //     alert("user not found");
      //   }
      // }, err => {
      //   alert("something went wrong")

      // })
  }
}
