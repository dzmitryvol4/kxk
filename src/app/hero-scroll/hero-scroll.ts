import { Component, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../header/header";
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-hero-scroll',
  standalone: true,
  imports: [CommonModule, Header, SkeletonModule],
  templateUrl: './hero-scroll.html',
  styleUrls: ['./hero-scroll.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroScroll implements OnInit, OnDestroy {

  constructor(private changeDetection: ChangeDetectorRef
  ){}
  
  public isLoading = true;
  public imageUrl: string = '';
  public scrollProgress: number = 0;
  public isSmallTextHidden: boolean = false;
  public isLargeTextVisible: boolean = false;
  public isLogoScaled: boolean = false;
  public logoOpacity: number = 1;
  public isImageMarginTop: boolean = false;
  public isImageScaled: boolean = false;
  private scrollPosition: number = 0;
  private maxScroll: number = 800;
  public sentenceIndex: number = -1;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
      this.onImageLoad();
    }, 2000);
  }

  public onImageLoad(){
    this.imageUrl = "assets/main/main.jpg";
    this.changeDetection.detectChanges();
  }

  ngOnDestroy() {}

  onWheel(event: WheelEvent) {
    event.preventDefault();
    
    this.scrollPosition += event.deltaY;
    this.scrollPosition = Math.max(0, Math.min(this.scrollPosition, this.maxScroll));
    this.scrollProgress = this.scrollPosition / this.maxScroll;
    
    this.isSmallTextHidden = this.scrollProgress > 0.3;
    this.isLargeTextVisible = this.scrollProgress > 0.3;
    this.logoOpacity = Math.max(0, 1 - this.scrollProgress * 1.2);
    const isImageActive = this.scrollProgress > 0.3;
    this.isImageMarginTop = isImageActive;
    this.isImageScaled = isImageActive;
    this.isLogoScaled = this.scrollProgress > 0.3;

    if (this.scrollProgress > 0.35) { 
        const sentenceProgress = (this.scrollProgress - 0.35) / 0.65;
        this.sentenceIndex = Math.min(5, Math.floor(sentenceProgress * 6));
    } else {
        this.sentenceIndex = -1;
    }
    
    this.changeDetection.detectChanges();
  }


  public formatText(text: string): string {
  if (!text) return text;
  
  const prepositions = [
    'в', 'во', 'без', 'до', 'для', 'за', 'из', 'из-за', 'из-под',
    'к', 'ко', 'на', 'над', 'о', 'об', 'от', 'по', 'под', 'при',
    'про', 'с', 'со', 'у', 'через', 'а', 'и', 'но', 'или', 'же'
  ];
  
  const words = text.split(' ');
  if (words.length < 2) return text;
  
  // Проверяем последнее слово
  const lastWord = words[words.length - 1].toLowerCase();
  const lastWordClean = lastWord.replace(/[.,!?;:]$/, '');
  
  if (prepositions.includes(lastWordClean)) {
    // Заменяем последний пробел на неразрывный
    const lastSpaceIndex = text.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      return text.substring(0, lastSpaceIndex) + '\u00A0' + text.substring(lastSpaceIndex + 1);
    }
  }
  
  return text;
}
}