import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Kxkagencyheader } from '../kxkagencyheader/kxkagencyheader';
import { HeaderData } from '../../services/headerData';

@Component({
  selector: 'app-projects',
  imports: [Kxkagencyheader],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects implements OnInit, OnDestroy{
  public colors = ['#555555', '#989898', '#dbdbdb', '#323232', '#808080', '#dadada', '#ffffff', '#a5a5a5'];

  public filters = ['всё', 'amazon', 'айдентика', 'упаковка', 'иллюстрации', 'штрифт', 'ретушь', 'ии-аватары', 'дизайн музыки', 'книги']

  public headerTitle:string = "kxk agency"
  constructor(private changeDetection: ChangeDetectorRef,
              public headerData: HeaderData
  ){
    
  }
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    
  }
}
