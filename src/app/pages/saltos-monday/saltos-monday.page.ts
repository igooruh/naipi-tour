import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saltos-monday',
  templateUrl: './saltos-monday.page.html',
  styleUrls: ['./saltos-monday.page.scss'],
})
export class SaltosMondayPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backPage() {
    this.route.navigate(['turismo-ciudad-leste']);
  }
}
