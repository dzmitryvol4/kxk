import { Component, OnDestroy, OnInit } from '@angular/core';
import { Kxkagencyheader } from '../../kxkagencyheader/kxkagencyheader';
import { Router } from '@angular/router';
import { Header } from "../../header/header";

@Component({
  selector: 'app-wwd',
  imports: [Kxkagencyheader, Header],
  templateUrl: './wwd.html',
  styleUrl: './wwd.css',
})
export class Wwd implements OnInit, OnDestroy{

  public headerTitle:string = "Чем занимаемся";
  constructor(private router:Router){

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  public navigateToLeft(){
    this.router.navigate(["about"])
  }

  public navigateToRight(){
    this.router.navigate(["about/om"])
  }
}
