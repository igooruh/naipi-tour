import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turismo-puerto-iguazu',
  templateUrl: './turismo-puerto-iguazu.page.html',
  styleUrls: ['./turismo-puerto-iguazu.page.scss'],
})
export class TurismoPuertoIguazuPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  aripuca() {
    this.route.navigate(['aripuca']);
  }

  backPage() {
    this.route.navigate(['puerto-iguazu']);
  }
}
