import { Component, OnInit } from '@angular/core';
import { TtaskService } from 'src/app/ttask.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ttask } from 'src/app/models/ttask.model';
@Component({
  selector: 'app-new-ttask',
  templateUrl: './new-ttask.component.html',
  styleUrls: ['./new-ttask.component.scss']
})
export class NewTtaskComponent implements OnInit {
  timetableId: string;
  constructor(private ttaskService: TtaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.timetableId = params['timetableId'];
       
    
      })
   
  }
  createTtask(title: string) {
    this.ttaskService.createTtask(title,this.timetableId).subscribe((newTtask:Ttask) => {
      this.router.navigate(['../'],{ relativeTo: this.route })
    });
  }

}
