import { Component, OnInit, Input, ViewChild, ElementRef,HostBinding, Renderer2 } from '@angular/core';
import { S3Client, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";
@Component({
  selector: 'drag-drop-file',
  templateUrl: './drag-drops.component.html',
  styleUrls: ['./drag-drops.component.scss']
})
export class DragDropsComponent implements OnInit {
  progressBar: number=0;
  isConfirmation:string='none';
  @ViewChild('dragDrop',{static:true}) dragDrop:ElementRef;

  constructor(private renderer: Renderer2, ) { }

  ngOnInit(): void {

  }

  chooseFile($event, fileInput){
    if(this.isConfirmation=='none'){
      console.log('AA');
      fileInput.click();
    }else{
      // switch (key) {
      //   case value:
          
      //     break;
      
      //   default:
      //     break;
      // }
      console.log('BB', fileInput, $event.target);
    }
  }

  /**@ASK_CONFIRMATION_UPLOAD_FILES */
  confirmation(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
    }

    if(this.isConfirmation=='none'){
      this.isConfirmation='asking';
    }
  }

  
  /**@CONFIRM_UPLOAD */
  uploadFile($event){
    this.isConfirmation='done';
    let that = this;
    let progress=setInterval(()=>{
      if(that.progressBar>100){
        clearInterval(progress);
        that.isConfirmation='none';
        this.renderer.addClass(that.dragDrop.nativeElement,"before-upload");
        this.renderer.removeClass(that.dragDrop.nativeElement,"after-upload");
      }
      that.progressBar++;
    },1);
  }

  /**@CONFIRMATION_CANCEL_ORDER */
  cancelUpload(){
    this.isConfirmation='in-process..';
    setTimeout(() =>{
      this.isConfirmation='none';
    },100)
  }

}
