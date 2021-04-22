
import { Component,Input, ElementRef, Output } from '@angular/core';
@Component({
    selector: 'heading',
    template:`<span heading>{{text}}</span>`,
    styles: [`[heading]{
        font-size: 18px;
        min-width: 100px;
        border-radius: 5px;
        outline: none;
        font-family: Roboto-Medium;
        color: var(--primary);}`]
})
export class Heading {
    @Input() color: string=null;
    @Input() text: string='';
    constructor(private eRef:ElementRef){}
    ngOnInit(): void {
        if(this.color){
            this.eRef.nativeElement.style.setProperty('--primary', `${this.color}` );
        }
    }
}


