import { keyframes } from '@angular/animations';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectedTopic]'
})
export class SelectedTopicDirective{
  constructor(private el:ElementRef, private renderer:Renderer2) {}
  @Input() set appSelectedTopic(value:object){
    let result = Object.entries(value);
    
    for(let index of result){
      
      if(index[1]){
        this.renderer.addClass(this.el.nativeElement,index[0]);
        if(index[0]=="Follow"){
          this.el.nativeElement.lastChild.textContent = index[0]+"ing";
        }
      }
      else{
        this.renderer.removeClass(this.el.nativeElement,index[0]);
        if(index[0]=="Follow"){
          this.el.nativeElement.lastChild.textContent = index[0];
        }
      }
      
    }
  }
}
