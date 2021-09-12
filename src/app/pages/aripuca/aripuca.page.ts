import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aripuca',
  templateUrl: './aripuca.page.html',
  styleUrls: ['./aripuca.page.scss'],
})
export class AripucaPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['turismo-puerto-iguazu']);
  }
}
