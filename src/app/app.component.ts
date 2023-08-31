import { Component,OnInit,AfterViewInit} from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  ngAfterViewInit(): void {
    let timeline=gsap.timeline({});
    // timeline.from('.background', {
    //   y:-500,
    //   duration: 1,
    // });
    timeline.from('.images', {
      y:500,
  
      duration: 1,
    });
    timeline.from('.initText', {
      x:-500,
      opacity:0,
      duration: 0.5,
    });
    timeline.from('.initText2', {
      x:-500,
      opacity:0,
      duration: 0.5,
    });
  }
  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin); 
  }
 
  title = 'swiggy';
  menuBars:boolean=false;
  callMenu(){
    
    this.menuBars=!this.menuBars;
    let element=document.querySelector('.menuHidden');
    element?.classList.toggle('hidden');

    const timeline=gsap.timeline();
    
  }

  
}
