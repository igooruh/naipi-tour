import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raffain',
  templateUrl: './raffain.page.html',
  styleUrls: ['./raffain.page.scss'],
})
export class RaffainPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backGastronomy() {
    this.route.navigate(['gastronomia-foz']);
  }
}
