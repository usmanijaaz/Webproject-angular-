import { SharePostComponent } from './Mycomponent/share-post/share-post.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Mycomponent/sidebar/sidebar.component';
import { DivImageSComponent } from './Mycomponent/div-image-s/div-image-s.component';
import { BaseComponentComponent } from './Mycomponent/base-component/base-component.component';
import { NavbarComponent } from './Mycomponent/navbar/navbar.component';
import { BaseComponent } from './Mycomponent/base/base.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';
import { LoginComponent } from './Mycomponent/login/login.component';
import { FormsModule } from "@angular/forms";
import { SocialLoginModule,SocialAuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider,FacebookLoginProvider } from "angularx-social-login";

import { ShareIconsModule } from 'ngx-sharebuttons/icons'; 
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { GooglemapComponent } from './Mycomponent/googlemap/googlemap.component';
import { AdsenseComponent } from './Mycomponent/adsense/adsense.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DivImageSComponent,
    BaseComponentComponent,
    NavbarComponent,
    BaseComponent,
    FooterComponent,
    LoginComponent,
    SharePostComponent,
    GooglemapComponent,
    AdsenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule,
  ],
  providers: [{
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            "734767924768-fakdi2m98gal085cegliu3ga2c161s50.apps.googleusercontent.com"
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('649342052781163')
        },
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
