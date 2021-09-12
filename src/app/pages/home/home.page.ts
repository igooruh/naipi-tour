import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  fozIguacu() {
    this.route.navigate(['foz-iguacu']);
  };

  ciudadLeste() {
    this.route.navigate(['ciudad-del-leste']);
  }

  puertoIguazu() {
    this.route.navigate(['puerto-ciudad']);
  }
}
