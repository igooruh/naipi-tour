import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo-ciudad-leste',
  templateUrl: './turismo-ciudad-leste.page.html',
  styleUrls: ['./turismo-ciudad-leste.page.scss'],
})
export class TurismoCiudadLestePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  saltosMonday() {
    this.route.navigate(['saltos-monday']);
  }

  backPage() {
    this.route.navigate(['ciudad-del-leste']);
  }
}
