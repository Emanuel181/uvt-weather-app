import { Router } from '@angular/router';
import { UserModel } from './../models/user.model';
import { UserService } from './user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
})
export class UserPreviewComponent implements OnInit {
  @Output() searchInput: EventEmitter<any> = new EventEmitter();
  user: UserModel = { email: '', username: '' };

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  onLogout(): void {
    this.router.navigate(['/']);
  }

  onReceiveData(data: any) {
    this.searchInput.emit(data);
  }
}
