import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foz-iguacu',
  templateUrl: './foz-iguacu.page.html',
  styleUrls: ['./foz-iguacu.page.scss'],
})
export class FozIguacuPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['home']);
  }

  turismoFoz() {
    this.route.navigate(['turismo-foz']);
  }

  gastronomiaFoz() {
    this.route.navigate(['gastronomia-foz']);
  }
}
