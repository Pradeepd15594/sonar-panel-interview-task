import { Component, OnInit, Input,ViewChild, Output, TemplateRef,HostBinding, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {AuthService} from '../../AppServices/auth.service';

@Component({
  selector: 'popup',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      state('*',
        style({
          opacity: 1,
          transform: 'perspective(500px) translateY(0px)',
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'perspective(500px) translateY(200px)',
        }),
        animate('0.5s ease')
      ]),
      transition(':leave', [
        animate('0.5s ease', style({
          opacity: 0,
          transform: 'perspective(500px) translateY(200px)',
        }))
      ])
    ])
 

  ]
})
export class ModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild("sideNav") sideNav: TemplateRef<any>;
  constructor(private authService : AuthService) { }

  ngOnInit() {}

  ngDoCheck() {
    try {
      let that=this;
      setTimeout(() =>{
        that.authService.newSharedData(that.visible,`TOGGLE_POPUP_REQUEST`);
      }, 0)
    } catch (error) {}
  }

  close() {
    this.visible = false;
    this.authService.newSharedData(false,`TOGGLE_POPUP_REQUEST`);
    this.visibleChange.emit(this.visible);
  }
}
