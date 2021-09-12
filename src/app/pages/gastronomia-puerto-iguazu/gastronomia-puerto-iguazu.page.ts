import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastronomia-puerto-iguazu',
  templateUrl: './gastronomia-puerto-iguazu.page.html',
  styleUrls: ['./gastronomia-puerto-iguazu.page.scss'],
})
export class GastronomiaPuertoIguazuPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  quinchoQuerido() {
    this.route.navigate(['quincho-tio-querido']);
  }

  backPage() {
    this.route.navigate(['puerto-iguazu']);
  }
}
