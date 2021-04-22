import { Directive, Output, Input, EventEmitter, HostBinding,QueryList, ViewChild, HostListener,ElementRef, ContentChild } from '@angular/core';

import {DragDropsComponent} from './../Drag-drops/drag-drops.component';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {
  @Output() onFileDropped = new EventEmitter<any>();
  @HostBinding('style.background-color') private background = 'var(--extar-blue-light)'
  @HostBinding('style.opacity') private opacity = '1'
  @HostBinding('class') private class = 'before-upload';
  @ViewChild('progressBar',{ static: false }) progressBar: HTMLElement;
  @ViewChild(DragDropsComponent) hello: DragDropsComponent;
  elementRef: ElementRef;
  constructor(elementRef: ElementRef){
    this.elementRef = elementRef;
  }
  // @ContentChild('subMenu') child: ElementRef;

 
	
  /**@DRAGOVER_LISTENER */
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#9ecbec';
    this.opacity = '0.8'
  }
	
  /**@DRAG_LEAVE_LISTENER */
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
  }
	
  /**@DRAG_LISTENER */
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f5fcff'
    this.opacity = '1'
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files)
      // this.bgPosition = 'left 50px';
    }
  }


  

  @HostListener('change', ['$event']) onchange(evt:any) {
    if(evt.target.value){
      this.class='after-upload';
    }else{
      this.class='before-upload';
    }
  }

 
  @HostListener('mousemove', ['$event']) mousemove(evt:any) {
    console.log('click');
  }

  


	
}