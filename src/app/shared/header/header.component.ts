import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '../../../../node_modules/@angular/router';
import { ApiService } from '../../core/api.service';
import { TokenService } from '../../core/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  constructor(private router: Router, private api: ApiService, private tokenService: TokenService) {
    this.items = [
      {
          label: 'Home',
          icon: 'fa fa-home',
          routerLink: '/home'
      },
      {
          label: 'Profile',
          icon: 'fa fa-user',
          routerLink: '/profile'
      }
  ];
   }

  ngOnInit() {
  }

  logout() {
    this.tokenService.clear();
    this.router.navigate(['']);
  }

}
