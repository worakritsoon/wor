import { Component, OnInit } from '@angular/core';
import { Result } from '../services/namespace';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit  {

  users:Result;
  constructor(private userService:UserService) { 
    
  }

  ngOnInit() {

  }

  getUser(){
    this.userService.getUserRandom().subscribe(data=>{
      console.log(data)
    })
  }

}
