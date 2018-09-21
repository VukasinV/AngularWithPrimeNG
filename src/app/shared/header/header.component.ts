import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '../../../../node_modules/@angular/router';
import { ApiService } from '../../core/api.service';
import { TokenService } from '../../core/token.service';
import { Profile } from '../../models/profile.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];

  // Search profiles
  filteredProfiles: any[];
  profiles: Profile[];
  profile;

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
    this.api.getAllProfiles().subscribe(data => this.profiles = data as Profile[]);
  }

  logout() {
    this.tokenService.clear();
    this.router.navigate(['']);
  }

  filterBrands(event) {
    this.filteredProfiles = [];
    for (let i = 0; i < this.profiles.length; i++) {
      let profile = this.profiles[i];
      if (profile.Fullname.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.showProfilePicture(profile);
        this.filteredProfiles.push(profile);
      }
    }
  }

  showProfilePicture(profile) {
    this.api.getOwnerImage(profile.ProfileId).subscribe(data => {
      const recievedFile = data as File;
      const reader = new FileReader();
      reader.onload = (onLoadEvent: any) => {
        profile.Picture = onLoadEvent.target.result;
      };
      reader.readAsDataURL(recievedFile);
    });
  }

  showProfile(profile) {
    this.router.navigate([`/profile`]);
  }
}
