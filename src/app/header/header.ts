import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy{

  public menuItems: MenuItem[] = [];


  constructor(private router: Router){
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

}
