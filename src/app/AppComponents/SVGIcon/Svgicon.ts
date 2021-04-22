
import { Component,Input, Output } from '@angular/core';
@Component({
    selector: 'svg-icon',
    template: `
      <div *ngIf="name=='paper'" style="height:{{height}}; width:{{width}}">
        <svg  xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 91 110">
          <g id="Group_5024" data-name="Group 5024" transform="translate(4326 -16748)">
            <g id="Group_5218" data-name="Group 5218">
              <g id="Rectangle_3535" data-name="Rectangle 3535" transform="translate(-4326 16748)" fill="none" [attr.stroke]="color" stroke-width="5">
                <rect width="91" height="110" rx="15" stroke="none"/>
                <rect x="2.5" y="2.5" width="86" height="105" rx="12.5" fill="none"/>
              </g>
            </g>
            <path id="Path_6791" data-name="Path 6791" d="M-4306.854,16775.182h51.79" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-width="4"/>
            <path id="Path_6794" data-name="Path 6794" d="M-4306.854,16775.182h51.79" transform="translate(0 28)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-width="4"/>
            <path id="Path_6792" data-name="Path 6792" d="M-4306.854,16775.182h36.568" transform="translate(7.611 13)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-width="4"/>
            <path id="Path_6793" data-name="Path 6793" d="M-4306.854,16775.182h36.568" transform="translate(7.611 41)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-width="4"/>
          </g>
        </svg>
      </div>

      <div *ngIf="name=='paper-fill'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 30.625 35">
          <g id="Group_5217" data-name="Group 5217" transform="translate(4326.541 -16748.652)">
            <rect id="Rectangle_3535" data-name="Rectangle 3535" width="30.625" height="35" rx="5" transform="translate(-4326.541 16748.652)" fill="#00aaf5"/>
            <path id="Path_6791" data-name="Path 6791" d="M-4306.854,16775.182h14.942" transform="translate(-12.017 -18.109)" fill="none" stroke="#fbfbfb" stroke-linecap="round" stroke-width="2"/>
            <path id="Path_6794" data-name="Path 6794" d="M-4306.854,16775.182h14.942" transform="translate(-12.017 -8.971)" fill="none" stroke="#fbfbfb" stroke-linecap="round" stroke-width="2"/>
            <path id="Path_6792" data-name="Path 6792" d="M-4306.854,16775.182h13.64" transform="translate(-11.331 -13.866)" fill="none" stroke="#fbfbfb" stroke-linecap="round" stroke-width="2"/>
            <path id="Path_6793" data-name="Path 6793" d="M-4306.854,16775.182h13.64" transform="translate(-11.331 -4.728)" fill="none" stroke="#fbfbfb" stroke-linecap="round" stroke-width="2"/>
          </g>
        </svg>
      </div>

      <div *ngIf="name=='right-arrow' || name=='left-arrow'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [ngStyle]="{'transform': (name=='left-arrow' ? 'scaleX(-1)' : 'scaleX(1)' ) }" [attr.width]="width" [attr.height]="height" viewBox="0 0 56.763 27">
          <path id="Icon_ionic-md-arrow-round-back" data-name="Icon ionic-md-arrow-round-back" d="M8.106,17.227H53.653L46.9,10.769a2.69,2.69,0,0,1,0-3.676,2.4,2.4,0,0,1,3.514,0l11.241,10.9a2.477,2.477,0,0,1,.732,1.822v.033a2.477,2.477,0,0,1-.732,1.822l-11.233,10.9a2.4,2.4,0,0,1-3.514,0,2.69,2.69,0,0,1,0-3.676l6.751-6.458H8.114a2.546,2.546,0,0,1-2.489-2.6A2.519,2.519,0,0,1,8.106,17.227Z" transform="translate(-5.625 -6.33)" [attr.fill]="color" />
        </svg>
      </div>


      <div *ngIf="name=='minus-circle'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 106.183 106.183">
          <g id="Icon_feather-minus-circle" data-name="Icon feather-minus-circle" transform="translate(4 4)">
            <path id="Path_6811" data-name="Path 6811" d="M101.183,52.091A49.091,49.091,0,1,1,52.091,3,49.091,49.091,0,0,1,101.183,52.091Z" transform="translate(-3 -3)" fill="none" stroke="#004428" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
            <path id="Path_6812" data-name="Path 6812" d="M12,18H51.273" transform="translate(17.455 31.091)" fill="none" stroke="#004428" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>
          </g>
        </svg>
      </div>

      <div *ngIf="name=='calendar-day'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 30.625 35">
          <path id="Icon_awesome-calendar-day" data-name="Icon awesome-calendar-day" d="M0,31.719A3.282,3.282,0,0,0,3.281,35H27.344a3.282,3.282,0,0,0,3.281-3.281V13.125H0ZM4.375,18.594A1.1,1.1,0,0,1,5.469,17.5h6.562a1.1,1.1,0,0,1,1.094,1.094v6.563a1.1,1.1,0,0,1-1.094,1.094H5.469a1.1,1.1,0,0,1-1.094-1.094ZM27.344,4.375H24.063V1.094A1.1,1.1,0,0,0,22.969,0H20.781a1.1,1.1,0,0,0-1.094,1.094V4.375h-8.75V1.094A1.1,1.1,0,0,0,9.844,0H7.656A1.1,1.1,0,0,0,6.563,1.094V4.375H3.281A3.282,3.282,0,0,0,0,7.656v3.281H30.625V7.656A3.282,3.282,0,0,0,27.344,4.375Z" [attr.fill]="color"/>
        </svg>
      </div>

      <div *ngIf="name=='invoice-icon'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 90 90">
          <defs>
         
          </defs>
          <g id="Total_amount_paid" data-name="Total amount paid" transform="translate(3916 -14499.001)">
            <path id="Path_6834" data-name="Path 6834" class="cls-1" d="M0,1.684,1.684,0l19.3,19.3L19.3,20.979Zm0,0" transform="translate(-3885.835 14523.789) rotate(-45)"/>
            <path id="Path_6836" data-name="Path 6836" class="cls-1" d="M58.153,21.945V16.457l-5.482.006,0-5.492h-5.5V5.486H41.7L41.7,0H37.761L0,37.76V41.7l5.486,0v5.487l5.482-.006,0,5.492h5.5v5.48l5.492.007-.008,5.485h3.937l37.76-37.76V21.943ZM3.935,37.306l20.2-20.2L37.76,30.723l-20.2,20.2ZM27.752,56.735l-6.583-6.583L22.72,48.6,29.3,55.183Zm3.292-3.292L24.461,46.86l1.552-1.552L32.6,51.892Zm3.292-3.292-6.583-6.583L29.3,42.016,35.887,48.6Zm3.292-3.292-6.583-6.583L32.6,38.725l6.583,6.583Zm3.292-3.292-6.583-6.583,1.552-1.552,6.583,6.583Zm3.292-3.292-6.583-6.583,1.552-1.552,6.583,6.583ZM48.6,36.985,26.655,15.04l1.552-1.552L50.151,35.433Zm3.292-3.292L29.947,11.748,31.5,10.2,53.443,32.141Zm3.027-2.573-22.4-22.4,4.786-4.786,22.4,22.4Zm0,0" transform="translate(-3916 14544.001) rotate(-45)"/>
            <path id="Icon_awesome-rupee-sign" data-name="Icon awesome-rupee-sign" class="cls-1" d="M10.719,4.477a.418.418,0,0,0,.418-.418V2.668a.418.418,0,0,0-.418-.418H.418A.418.418,0,0,0,0,2.668V4.225a.418.418,0,0,0,.418.418H3.386a2.511,2.511,0,0,1,2.122.948H.418A.418.418,0,0,0,0,6.009V7.4a.418.418,0,0,0,.418.418H5.943a2.4,2.4,0,0,1-2.6,2.041H.418A.418.418,0,0,0,0,10.277v1.845a.418.418,0,0,0,.134.307l5.744,5.3a.418.418,0,0,0,.283.111H9.035a.418.418,0,0,0,.283-.725L4.067,12.27A4.768,4.768,0,0,0,8.881,7.818h1.838a.418.418,0,0,0,.418-.418V6.009a.418.418,0,0,0-.418-.418H8.677a4.767,4.767,0,0,0-.5-1.114Z" transform="translate(-3882.932 14543.271)"/>
          </g>
        </svg>
      </div>

      <div *ngIf="name=='due-amount'" style="height:{{height}}; width:{{width}}">
          <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 46.681 52.89">
          <defs>
          </defs>
          <g id="total_amount_due" data-name="total amount due" transform="translate(3785.34 -14517.557)">
            <path id="Path_6837" data-name="Path 6837" class="cls-1" d="M75.182,21.821a1.55,1.55,0,0,0,1.549-1.549V7.8A7.81,7.81,0,0,0,68.926,0H37.8a7.755,7.755,0,0,0-7.746,7.746V51.312a1.552,1.552,0,0,0,2.669,1.072l1.982-2.07L36.8,52.408a1.55,1.55,0,0,0,2.191,0l1.984-1.984,2,1.988a1.55,1.55,0,0,0,2.182,0l2.036-2.019,2.037,2.019a1.549,1.549,0,0,0,2.181,0l2.61-2.582A13.943,13.943,0,1,0,64.227,25.08V21.821ZM73.633,7.8V18.722H64.227V7.8a4.7,4.7,0,0,1,9.405,0ZM50.323,49.131l-2.038-2.02a1.549,1.549,0,0,0-2.182,0L44.067,49.13l-2.009-1.993a1.549,1.549,0,0,0-2.187,0l-1.98,1.979L35.774,47a1.548,1.548,0,0,0-2.215.024l-.409.427V7.746A4.652,4.652,0,0,1,37.8,3.1H62.71a7.76,7.76,0,0,0-1.582,4.7V25.09a13.957,13.957,0,0,0-9.3,22.548ZM73.572,38.944A10.846,10.846,0,1,1,62.726,28.1,10.859,10.859,0,0,1,73.572,38.944Z" transform="translate(-3815.391 14517.557)"/>
            <path id="Path_6838" data-name="Path 6838" class="cls-1" d="M295.686,321.911v3.165H292.55a1.549,1.549,0,1,0,0,3.1h4.686a1.55,1.55,0,0,0,1.549-1.55v-4.714a1.549,1.549,0,1,0-3.1,0Z" transform="translate(-4049.385 14230.288)"/>
            <path id="Path_6840" data-name="Path 6840" class="cls-1" d="M100.3,256.08H92.548a1.549,1.549,0,1,0,0,3.1H100.3a1.549,1.549,0,0,0,0-3.1Z" transform="translate(-3870.043 14287.93)"/>
            <path id="Path_6841" data-name="Path 6841" class="cls-1" d="M100.251,316.18H92.5a1.549,1.549,0,1,0,0,3.1h7.753a1.549,1.549,0,1,0,0-3.1Z" transform="translate(-3869.999 14234.038)"/>
            <path id="Path_6842" data-name="Path 6842" class="cls-1" d="M100.206,376.08H92.449a1.549,1.549,0,1,0,0,3.1h7.758a1.549,1.549,0,1,0,0-3.1Z" transform="translate(-3869.954 14180.325)"/>
          </g>
        </svg>
      </div>

        <svg *ngIf="name=='past-due-amount'" xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 54.312 54.312">
          <g id="Past_due_amount" data-name="Past due amount" transform="translate(-4.5 -4.5)">
            <path id="Path_6843" data-name="Path 6843" d="M10.5,13.517A3.017,3.017,0,0,1,13.517,10.5H37.656a3.017,3.017,0,0,1,0,6.035H13.517A3.017,3.017,0,0,1,10.5,13.517Z" transform="translate(6.069 6.069)" [attr.fill]="color"/>
            <path id="Path_6844" data-name="Path 6844" d="M21.035,30.069A6.035,6.035,0,1,0,15,24.034a6.035,6.035,0,0,0,6.035,6.035Z" transform="translate(10.621 13.656)" [attr.fill]="color"/>
            <path id="Path_6845" data-name="Path 6845" d="M13.552,4.5A9.052,9.052,0,0,0,4.5,13.552V49.76a9.052,9.052,0,0,0,9.052,9.052H49.76a9.052,9.052,0,0,0,9.052-9.052V13.552A9.052,9.052,0,0,0,49.76,4.5ZM49.76,10.535H13.552a3.017,3.017,0,0,0-3.017,3.017V49.76a3.017,3.017,0,0,0,3.017,3.017H49.76a3.017,3.017,0,0,0,3.017-3.017V13.552a3.017,3.017,0,0,0-3.017-3.017Z" [attr.fill]="color" fill-rule="evenodd"/>
          </g>
        </svg>


      <div *ngIf="name=='month-calendar'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 52.306 59.778">
          <defs>
          </defs>
          <path id="current_month_outstanding" data-name="current month outstanding" class="cls-1" d="M0,54.174a5.606,5.606,0,0,0,5.6,5.6H46.7a5.606,5.606,0,0,0,5.6-5.6V22.417H0ZM37.361,31.29a1.405,1.405,0,0,1,1.4-1.4h4.67a1.405,1.405,0,0,1,1.4,1.4v4.67a1.405,1.405,0,0,1-1.4,1.4h-4.67a1.405,1.405,0,0,1-1.4-1.4Zm0,14.944a1.405,1.405,0,0,1,1.4-1.4h4.67a1.405,1.405,0,0,1,1.4,1.4V50.9a1.405,1.405,0,0,1-1.4,1.4h-4.67a1.405,1.405,0,0,1-1.4-1.4ZM22.417,31.29a1.405,1.405,0,0,1,1.4-1.4h4.67a1.405,1.405,0,0,1,1.4,1.4v4.67a1.405,1.405,0,0,1-1.4,1.4h-4.67a1.405,1.405,0,0,1-1.4-1.4Zm0,14.944a1.405,1.405,0,0,1,1.4-1.4h4.67a1.405,1.405,0,0,1,1.4,1.4V50.9a1.405,1.405,0,0,1-1.4,1.4h-4.67a1.405,1.405,0,0,1-1.4-1.4ZM7.472,31.29a1.405,1.405,0,0,1,1.4-1.4h4.67a1.405,1.405,0,0,1,1.4,1.4v4.67a1.405,1.405,0,0,1-1.4,1.4H8.873a1.405,1.405,0,0,1-1.4-1.4Zm0,14.944a1.405,1.405,0,0,1,1.4-1.4h4.67a1.405,1.405,0,0,1,1.4,1.4V50.9a1.405,1.405,0,0,1-1.4,1.4H8.873a1.405,1.405,0,0,1-1.4-1.4ZM46.7,7.472H41.1v-5.6A1.874,1.874,0,0,0,39.229,0H35.493a1.874,1.874,0,0,0-1.868,1.868v5.6H18.681v-5.6A1.874,1.874,0,0,0,16.813,0H13.076a1.874,1.874,0,0,0-1.868,1.868v5.6H5.6a5.606,5.606,0,0,0-5.6,5.6v5.6H52.306v-5.6A5.606,5.606,0,0,0,46.7,7.472Z"/>
        </svg>
      </div>
      
      <div *ngIf="name=='add-circle'" style="height:{{height}}; width:{{width}}">
        <svg xmlns="http://www.w3.org/2000/svg" [attr.width]="width" [attr.height]="height" viewBox="0 0 42 42">
          <path id="cancel-circle" d="M42,21.036a20.572,20.572,0,0,1-2.814,10.542,20.851,20.851,0,0,1-7.644,7.644A20.571,20.571,0,0,1,21,42.036a20.572,20.572,0,0,1-10.542-2.814,20.851,20.851,0,0,1-7.644-7.644A20.572,20.572,0,0,1,0,21.036,20.571,20.571,0,0,1,2.814,10.494,20.851,20.851,0,0,1,10.458,2.85,20.572,20.572,0,0,1,21,.036,20.571,20.571,0,0,1,31.542,2.85a20.851,20.851,0,0,1,7.644,7.644A20.571,20.571,0,0,1,42,21.036ZM27.762,30.78,30.744,27.8l-6.762-6.762,6.762-6.762-2.982-2.982L21,18.054l-6.762-6.762-2.982,2.982,6.762,6.762L11.256,27.8l2.982,2.982L21,24.018Z" transform="translate(0 -0.036)" [attr.fill]="color" />
        </svg>
      </div>

     
      <svg *ngIf="name=='delete'" xmlns="http://www.w3.org/2000/svg" [attr.style]="style" [attr.width]="width" [attr.height]="height" viewBox="0 0 24 24" width="24px" [attr.fill]="color"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
     
      <svg id="edit" *ngIf="name=='edit'" [attr.fill]="color" xmlns="http://www.w3.org/2000/svg" [attr.style]="style" [attr.width]="width" [attr.height]="height" viewBox="0 0 30.097 30.069">
        <path id="edit-2" data-name="edit" d="M26.35,30.068H3.777a3.627,3.627,0,0,1-2.66-1.1,3.618,3.618,0,0,1-1.1-2.66V3.732a3.578,3.578,0,0,1,1.1-2.645A3.649,3.649,0,0,1,3.778,0h16.93L16.945,3.731H5.658a1.794,1.794,0,0,0-1.337.558,1.831,1.831,0,0,0-.544,1.322V24.423a1.794,1.794,0,0,0,.558,1.337,1.831,1.831,0,0,0,1.322.544H24.468a1.858,1.858,0,0,0,1.881-1.881V13.139l3.763-3.763v16.93a3.763,3.763,0,0,1-3.763,3.763ZM9.421,16.43l4.233,4.233L7.54,22.544Zm6.113,2.822-4.7-4.673L24.909.47a1.741,1.741,0,0,1,2.38,0l2.322,2.352A1.63,1.63,0,0,1,30.1,3.982a1.572,1.572,0,0,1-.485,1.19Z" transform="translate(-0.015 0.001)"/>
      </svg>

      <svg *ngIf="name=='cloud'" xmlns="http://www.w3.org/2000/svg" [attr.fill]="color" [attr.style]="style" [attr.width]="width" [attr.height]="height" viewBox="0 0 44.025 32.626">
        <path id="Path_8503" data-name="Path 8503" d="M37.637,33.585a9.5,9.5,0,0,0,4.57-10.628,9.343,9.343,0,0,0-9.024-7.119H30.835a14.84,14.84,0,0,0-27.656-3.2,15.287,15.287,0,0,0,2.05,17" transform="translate(0.015 -2.997)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
      </svg>

      <svg *ngIf="name=='upload-cloud'" xmlns="http://www.w3.org/2000/svg" [attr.style]="style" [attr.width]="width" [attr.height]="height" viewBox="0 0 36.021 30.002">
        <g id="upload" transform="translate(1.506 1.505)">
          <path id="Path_8501" data-name="Path 8501" d="M24,24l-6-6-6,6" transform="translate(-1.492 -4.503)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_8502" data-name="Path 8502" d="M18,18V31.5" transform="translate(-1.492 -4.503)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_8503" data-name="Path 8503" d="M30.585,27.585A7.5,7.5,0,0,0,27,13.5H25.11A12,12,0,1,0,4.5,24.45" transform="translate(-1.492 -4.503)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
          <path id="Path_8504" data-name="Path 8504" d="M24,24l-6-6-6,6" transform="translate(-1.492 -4.503)" fill="none" [attr.stroke]="color" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
        </g>
      </svg>

      <svg *ngIf="name=='circle-check'" xmlns="http://www.w3.org/2000/svg" [attr.style]="style" [attr.width]="width" [attr.height]="height" viewBox="0 0 126.402 126.402">
        <path id="Icon_awesome-check-circle" data-name="Icon awesome-check-circle" d="M126.965,63.764a63.2,63.2,0,1,1-63.2-63.2A63.2,63.2,0,0,1,126.965,63.764ZM56.453,97.228l46.891-46.891a4.078,4.078,0,0,0,0-5.766L97.578,38.8a4.077,4.077,0,0,0-5.767,0L53.57,77.046,35.716,59.191a4.078,4.078,0,0,0-5.767,0l-5.766,5.766a4.078,4.078,0,0,0,0,5.766l26.5,26.5a4.078,4.078,0,0,0,5.767,0Z" transform="translate(-0.563 -0.563)" [attr.fill]="color"/>
      </svg>
  `
})

export class Svgicon {
    @Input() name: string='paper';
    @Input() color: string="#343434";
    @Input() height: string='110px';
    @Input() width: string='91px';
    @Input() style: string='';
    constructor() {
      console.log(this.height, this.width);
    }
}