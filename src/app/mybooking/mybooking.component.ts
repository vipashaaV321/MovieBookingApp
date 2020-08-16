import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})

export class MybookingComponent implements OnInit {
  data:any;
  parentData:{}
  @Input() sample:{}
constructor(private route:ActivatedRoute) {
   }
ngOnInit(): void {
  this.route.queryParamMap.subscribe(params => {
  this.parentData = params.get("Tickets").replace("{","").replace("}","").replace("\"","").replace("\"","").replace("\"","").replace("\""," ").replace("\""," ").replace("\"","").replace("\"","").replace("\""," ").replace("\""," ").replace("\"","");

})
this.sample=this.parentData;
}
}
