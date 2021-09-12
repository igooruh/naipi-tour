import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastronomia-ciudad-leste',
  templateUrl: './gastronomia-ciudad-leste.page.html',
  styleUrls: ['./gastronomia-ciudad-leste.page.scss'],
})
export class GastronomiaCiudadLestePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  restoBar() {
    this.route.navigate(['resto-bar']);
  }

  backPage() {
    this.route.navigate(['ciudad-del-leste']);
  }
}
