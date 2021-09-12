import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puerto-iguazu',
  templateUrl: './puerto-iguazu.page.html',
  styleUrls: ['./puerto-iguazu.page.scss'],
})
export class PuertoIguazuPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  turismoPuertoIguazu() {
    this.route.navigate(['turismo-puerto-iguazu']);
  }

  gastronomiaPuertoIguazu() {
    this.route.navigate(['gastronomia-puerto-iguazu']);
  }

  backPage() {
    this.route.navigate(['home']);
  }
}
