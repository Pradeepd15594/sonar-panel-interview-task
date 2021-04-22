import { Component, OnInit ,ViewChild,Input} from '@angular/core';
import * as $ from "jquery";
import { Router ,Event, } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import * as data from './../../../assets/data/Menu.json';
import {AuthService} from '../../AppServices/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	@ViewChild('sidenav') sidenav: MatSidenav;
	menuList: any = ((data as any).default).menu;
	isExpanded = true;
	isShowing = false;
	showSubSubMenu: boolean = false;
	@Input() varient = false;
	@Input() isOver = false;
	isToggle:boolean=false;
	activeMenu:number=0;
	roleBased:any=[];
	constructor(private router: Router, private authService:AuthService ) {
		setTimeout(() => {
			$('.sidebar-inner').css('height',window.innerHeight);
		}, 500);
	}

	ngOnInit() {
		try {
			this.authService.shairedData.subscribe((res:any) => {
				if(res){
					this.roleBased=res.data;
				}
			})
		} catch (error) {}
	}

	setStep(i){

	}

}