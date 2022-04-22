import {Component, OnInit} from '@angular/core';
import {CategoryService} from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-front';

  logged = false;
  phoneNumber = '';
  password = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private categoryService: CategoryService) {
  }

  login() {
    this.categoryService.login(this.phoneNumber, this.password).subscribe((data) => {

      console.log(data);
      // localStorage.setItem('token', data.token);
      //
      // this.logged = true;
      // this.phoneNumber = '';
      // this.password = '';
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
}
