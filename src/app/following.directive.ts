import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFollowing]'
})
export class FollowingDirective {
 
  constructor(private el:ElementRef) {}

}
