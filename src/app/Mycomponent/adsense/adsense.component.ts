import { Component, OnInit,AfterViewInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-adsense',
   templateUrl: './adsense.component.html',

})
export class AdsenseComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit() {
   /* setTimeout(() => {
      try {
        (window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
      } catch (e) {
        console.error("error");
      }
    }, 2000);
  }*/

}
}