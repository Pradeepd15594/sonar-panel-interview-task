import { Component, ViewChild, ElementRef, Input,Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent {
  @Input() data:any=[];
  @Input() onlyProduct:boolean=false;
  @Output() onPress = new EventEmitter();

  constructor() {}
  // ngOnInit(): void{this.data =this.data;}
}

