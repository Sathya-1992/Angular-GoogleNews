import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NewsShowcase } from '../newsModel';
import { ShowCaseService } from '../show-case.service';

@Component({
  selector: 'app-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.css']
})
export class ShowcaseCardComponent implements OnInit {
  @Input() newsContent:any;
  index!:number;
  constructor(public showcase:ShowCaseService, public dataService:DataService) { }

  ngOnInit(): void {
  }
  addFollowing(source:NewsShowcase){
    
    this.index=this.dataService.followTopicHeader[2].topicArray.indexOf(source.publisher);
    if(this.index===-1){
      this.dataService.followTopicHeader[2].topicArray.push(source.publisher);
      source.isFollow=!source.isFollow;
    }else{
      this.dataService.followTopicHeader[2].topicArray.splice(this.index,1);
      source.isFollow=!source.isFollow;
    }
  }
}
