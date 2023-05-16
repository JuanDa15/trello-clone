import { Component, ContentChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styles: [
  ]
})
export class AccordionComponent implements AfterViewInit{
  @ContentChild('accordionContent', { read: ElementRef }) content!: ElementRef;
  public contentHeight = 0;
  ngAfterViewInit(): void {
    const contentContainer = this.content.nativeElement as HTMLElement;
    this.contentHeight = contentContainer.offsetHeight;
  }

  getContentHeightClass(): string {
    return `h-[${this.contentHeight}px]`
  }
}
