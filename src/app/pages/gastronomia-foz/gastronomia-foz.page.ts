import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastronomia-foz',
  templateUrl: './gastronomia-foz.page.html',
  styleUrls: ['./gastronomia-foz.page.scss'],
})
export class GastronomiaFozPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  raffain() {
    this.route.navigate(['raffain']);
  }

  backTouristicPoint() {
    this.route.navigate(['foz-iguacu']);
  }
}
