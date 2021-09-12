import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resto-bar',
  templateUrl: './resto-bar.page.html',
  styleUrls: ['./resto-bar.page.scss'],
})
export class RestoBarPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['gastronomia-ciudad-leste']);
  }
}
