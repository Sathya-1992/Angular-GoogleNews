import { Component, OnInit } from '@angular/core';
import { ShowCaseService } from '../show-case.service';

@Component({
  selector: 'app-news-showcase',
  templateUrl: './news-showcase.component.html',
  styleUrls: ['./news-showcase.component.css']
})
export class NewsShowcaseComponent implements OnInit {

  constructor(public showcase:ShowCaseService) { }

  ngOnInit(): void {
  }

}
