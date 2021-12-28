import { NgModule } from '@angular/core';import { RouterModule, Routes,Router, NavigationEnd } from '@angular/router';
import { BaseComponentComponent } from './Mycomponent/base-component/base-component.component';

const routes: Routes = [
  {path: '',component:BaseComponentComponent }
];
declare let gtag: Function;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(public router: Router){   
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
            gtag('config', 'G-3ZBR53CHS5',
                 {
                   'page_path': event.urlAfterRedirects
                 }
                );
        }
     }
  )}
 }

