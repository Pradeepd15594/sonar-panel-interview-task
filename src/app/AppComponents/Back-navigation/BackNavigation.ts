
import { Component,Input, ElementRef, Output } from '@angular/core';
@Component({
    selector: 'back-button',
    template:`<div back-button>
                <div matRipple pointer [matRippleColor]="'rgba(3,169,244,0.05)'">
                    <mat-icon>west</mat-icon>
                </div><span>Product Details</span></div>`,
    styles: [`
        [back-button]{
            display: flex;
            justify-content: start;
            align-items: center;
        }
        [back-button] span{
            font-size: 18px;
            font-family: 'Roboto-Medium';
            height: 20px;
            margin-left: 15px;
        }
        [back-button] mat-icon{font-size: 30px; font-weight: 500;}
        [back-button] div{
            height: 45px;
            width: 45px;
            overflow: hidden;
            padding: 9px;
            display: flex;
            line-height: 45px;
            border-radius: 100px;
        }`]
})
export class BackNavigation {
    @Input() color: string=null;
    @Input() text: string='';
    constructor(private eRef:ElementRef){}
    ngOnInit(): void {
        if(this.color){
            this.eRef.nativeElement.style.setProperty('--primary', `${this.color}` );
        }
    }
}


