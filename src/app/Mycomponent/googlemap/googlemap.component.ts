import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild,NgZone } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  map: any;
  lat:any;
  lng:any;
  constructor() { }

  ngOnInit(): void {
    const Props = {
         center: new google.maps.LatLng(35.2271, -80.8431),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    Props);
 }

 public getLocation()  {
   var marker;
  if (navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.lng = pos.coords.longitude;
      this.lat = pos.coords.latitude;
    },
    (err)=>{
      console.log('error getting coordinates');
    },
    {timeout:10000});
    
    this.map = new google.maps.Map(this.mapElement.nativeElement,    {center:new google.maps.LatLng(this.lat, this.lng),
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  marker = new google.maps.Marker(
    {
      map:this.map,
      position: new google.maps.LatLng(this.lat, this.lng),
      title: 'Current Location'
    }
  )
 }
}
}
