import { Component, Input, OnInit } from '@angular/core';
import { ShowCaseService } from '../show-case.service';

@Component({
  selector: 'app-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.css']
})
export class ShowcaseCardComponent implements OnInit {
  @Input() newsContent:any;
  constructor(public showcase:ShowCaseService) { }

  ngOnInit(): void {
  }

}
