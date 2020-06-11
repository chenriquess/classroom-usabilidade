import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showPwd: boolean;

  constructor(
    private router: Router,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/private/home']);
    this.toastService.success('Login efetuado com sucesso!');
  }

}
