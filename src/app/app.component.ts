import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import {  interval } from 'rxjs';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  imageIndex:number=0;
  imagesList:string[]=["/assets/images/image1.jpg","/assets/images/image2.JPG","/assets/images/image3.JPG"];
  currentImage:string =this.imagesList[0];

  ngOnInit(){
   interval(1000).subscribe(res=>{
    if(this.imageIndex < this.imagesList.length-1 )
    {
      this.changeSlide("next");
    }
    else
    {
      this.imageIndex=0;
      this.currentImage =this.imagesList[0];
    }
   })
  }
  changeSlide(value){

    if(value == 'previous'){
      if(this.imageIndex >0)
      {
        this.imageIndex --;
        this.currentImage=this.imagesList[this.imageIndex];
      }
    }
    else{
      if(this.imageIndex < this.imagesList.length-1)
      {
        this.imageIndex ++;
        this.currentImage=this.imagesList[this.imageIndex];
      }
    }

  }
}
