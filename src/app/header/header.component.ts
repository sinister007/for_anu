import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router:Router) { }
blnSignIn:boolean=false
  ngOnInit(): void {
  }
  signOut(){
    this.router.navigate(['/signIn'])
    this.blnSignIn=true
  }
}
