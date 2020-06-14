import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  buscar() {
    this.router.navigate(['/parceiros']);
  }
}
