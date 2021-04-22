import { Component, ViewChild, ElementRef, Input,Output, EventEmitter} from '@angular/core';
// import * as $ from "jquery";

@Component({
  selector: 'horizontal-carousel',
  templateUrl: './horizontal-carousel.component.html',
  styleUrls: ['./horizontal-carousel.component.scss']
})
export class HorizontalCarouselComponent {
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any>;
  @Input() data:any=[];
  @Output() onPress = new EventEmitter();
  constructor() {}
  // ngOnInit(): void{this.data =this.data;}
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 220), behavior: 'smooth' });
  }
  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 220), behavior: 'smooth' });
  }
}
