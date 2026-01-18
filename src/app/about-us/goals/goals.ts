import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kxkagencyheader } from '../../kxkagencyheader/kxkagencyheader';

@Component({
  selector: 'app-goals',
  imports: [Kxkagencyheader],
  templateUrl: './goals.html',
  styleUrl: './goals.css',
})
export class Goals implements OnInit, OnDestroy{

  public headerTitle:string = "Наши ценности";
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  public navigateToLeft(){
    this.router.navigate(["about/om"])
  }

  public navigateToRight(){
    this.router.navigate(["about"])
  }
}
