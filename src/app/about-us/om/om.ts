import { Component, OnDestroy, OnInit } from '@angular/core';
import { Kxkagencyheader } from '../../kxkagencyheader/kxkagencyheader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-om',
  imports: [Kxkagencyheader],
  templateUrl: './om.html',
  styleUrl: './om.css',
})
export class Om implements OnInit, OnDestroy{

  public headerTitle:string = "Наша миссия";
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  public navigateToLeft(){
    this.router.navigate(["about/wwd"])
  }

  public navigateToRight(){
    this.router.navigate(["about/goals"])
  }
}
