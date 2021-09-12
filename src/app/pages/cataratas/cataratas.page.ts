import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cataratas',
  templateUrl: './cataratas.page.html',
  styleUrls: ['./cataratas.page.scss'],
})
export class CataratasPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['turismo-foz']);
  }
}
