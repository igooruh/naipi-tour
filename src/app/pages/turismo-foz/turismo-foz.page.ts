import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo-foz',
  templateUrl: './turismo-foz.page.html',
  styleUrls: ['./turismo-foz.page.scss'],
})
export class TurismoFozPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  cataratas() {
    this.route.navigate(['cataratas']);
  }

  backTouristicPoint() {
    this.route.navigate(['foz-iguacu']);
  }
}
