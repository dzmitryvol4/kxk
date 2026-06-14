import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { HeroScroll } from '../hero-scroll/hero-scroll';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule, 
    RouterOutlet,
    SkeletonModule,
    HeroScroll],
  templateUrl: './main.html',
  styleUrl: './main.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Main implements OnInit, OnDestroy{


  constructor(private changeDetection: ChangeDetectorRef){
    
  }

  public isLoading = true;
  public imageUrl: string = '';
  public imageAlt: string = '';


  public ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.onImageLoad();
    }, 2000);
  }

  public onImageLoad(){
    this.imageUrl = "assets/main/main.jpg";
    this.changeDetection.detectChanges();
  }

  public ngOnDestroy(): void {
    
  }


}
