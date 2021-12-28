import { Component, OnInit } from '@angular/core';
import { SocialAuthService} from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";

declare var FB:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: SocialUser = new SocialUser;
  constructor(private authService: SocialAuthService) {}

  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
  });

  }

  signInGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    alert(this.user.provider);

  }

  submitLogin(): void{
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  public signOut(): void {
    this.authService.signOut().then(() => {
      window.location.assign('https://accounts.google.com/Logout');
  
    }, (error) => {
      console.log(error);
    });
    
  }

}
