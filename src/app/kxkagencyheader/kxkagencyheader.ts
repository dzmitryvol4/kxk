import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HeaderData } from '../../services/headerData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kxkagencyheader',
  imports: [],
  templateUrl: './kxkagencyheader.html',
  styleUrl: './kxkagencyheader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kxkagencyheader implements OnInit, OnDestroy{
  @Input() header:string = "kxk agency";

  constructor(private headerData: HeaderData, 
              private changeDetection: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  navigateToMain(): void{
    this.router.navigate([""])
  }

  ngOnDestroy(): void {
  }
}