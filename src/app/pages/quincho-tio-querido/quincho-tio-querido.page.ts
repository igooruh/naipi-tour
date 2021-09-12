import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quincho-tio-querido',
  templateUrl: './quincho-tio-querido.page.html',
  styleUrls: ['./quincho-tio-querido.page.scss'],
})
export class QuinchoTioQueridoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['gastronomia-puerto-iguazu']);
  }
}
