import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciudad-del-leste',
  templateUrl: './ciudad-del-leste.page.html',
  styleUrls: ['./ciudad-del-leste.page.scss'],
})
export class CiudadDelLestePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['home']);
  }

  turismoCiudadLeste() {
    this.route.navigate(['turismo-ciudad-leste']);
  }

  gastronomiaCiudadLeste() {
    this.route.navigate(['gastronomia-ciudad-leste']);
  }
}
