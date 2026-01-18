import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Kxkagencyheader } from '../kxkagencyheader/kxkagencyheader';
import { HeaderData } from '../../services/headerData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [Kxkagencyheader],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUs implements OnInit, OnDestroy{
 constructor(private headerData: HeaderData, private changeDetection: ChangeDetectorRef, private router: Router){
  }

  public headerTitle: string = "Кто мы"

  ngOnInit(): void {

  }

  public navigateToLeft(){
    this.router.navigate(["about/goals"])
  }

  public navigateToRight(){
    this.router.navigate(["about/wwd"])
  }

  ngOnDestroy(): void {
    
  }
}
