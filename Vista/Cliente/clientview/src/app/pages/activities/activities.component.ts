import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ActivitiesService } from 'src/app/services/activities/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    
  
  constructor(private as:ActivitiesService) { }

  ngOnInit(): void {
  }

  actualClient(){
    this.as.actualUser().subscribe(cliente=> {
      console.log(cliente);
    });
  }

}
