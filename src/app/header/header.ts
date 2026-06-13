import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ThemeChangedColorSevice } from '../../services/themeChangedColor';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ButtonModule],
  providers: [ThemeChangedColorSevice],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy{
  
  @ViewChild('headerContainer') headerContainer: any;

  public menuItems: MenuItem[] = [];
  public isDarkTheme = false;
  public langChanges = "ru";


  constructor(private router: Router,
              private themeChangedColor:ThemeChangedColorSevice,
  ){
    this.isDarkTheme = this.themeChangedColor.getCurrentTheme();
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  public toggleTheme() {
    this.themeChangedColor.toggleTheme();
    this.isDarkTheme = !this.isDarkTheme;
  }

  public onLangChange(){
    this.langChanges = this.langChanges === "ru" ? "en" : "ru";
  }

}
