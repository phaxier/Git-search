import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any[];
  username: string;

  constructor(private ProfileService: ProfileService) {
    this.user = false;
    this.ProfileService.getUser().subscribe(user => {
      this.user = user;
    });
    this.ProfileService.getRepos().subscribe(repos => {
        this.repos = repos;
    });
  }

  searchUser() {
    this.ProfileService.updateUser(this.username);

    this.ProfileService.getUser().subscribe(user => {
        this.user = user;
    });
    this.ProfileService.getRepos().subscribe(repos => {
        this.repos = repos;
    });
  }

  ngOnInit() {
  }

}