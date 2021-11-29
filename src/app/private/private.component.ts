import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  constructor(private route: Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  navegar(event: any) {
    $('.nav-item').removeClass('active');
    $(event.target).addClass('active');
  }

  logout() {
    console.log('aaaa');
    this.localStorageService.remove('token');
    this.route.navigate(['/login']);
  }
}
