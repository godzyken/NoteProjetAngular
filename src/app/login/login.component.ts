import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../store';
import {LoginAttempted} from '../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl('whoRu');
  password = new FormControl('');
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new LoginAttempted({
      username: this.username.value,
      password: this.password.value
    }));
  }
}
