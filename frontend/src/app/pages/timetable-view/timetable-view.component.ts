import { Component, OnInit } from '@angular/core';
import { TtaskService } from 'src/app/ttask.service';
import { ActivatedRoute, Params,Router} from '@angular/router';
import { Timetable } from 'src/app/models/timetable.model';
import { Ttask } from 'src/app/models/ttask.model';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable-view.component.html',
  styleUrls: ['./timetable-view.component.scss']
})
export class TimetableViewComponent implements OnInit {
  
  timetable:any;
  ttasks:any;
  selectedTimetableId: string;
  timetables: any[];
 

  constructor(private ttaskService:TtaskService,private route: ActivatedRoute,private router: Router) { }
 
  ngOnInit(): void {
   
    this.route.params.subscribe(

      (params:Params)=>{
        if (params.timetableId) {
          this.selectedTimetableId = params.timetableId;
        this.ttaskService.getTtasks(params.timetableId).subscribe((ttasks: any[]) => {
          this.ttasks=ttasks;
        
      })
    }
    else {
      this.ttasks = undefined;
    }
    }
    )
      this.ttaskService.getTimetables().subscribe((timetables: any[]) => {
        this.timetables=timetables;
      })
    }
    onTtaskClick(ttask: Ttask) {
      // we want to set the task to completed
      this.ttaskService.complete(this.ttasks).subscribe(() => {
        // the task has been set to completed successfully
        console.log("Completed successully!");
        ttask.completed = !ttask.completed;
      })
    }
    onDeleteTimetableClick() {
      this.ttaskService.deleteTimetable(this.selectedTimetableId).subscribe((res: any) => {
         this.router.navigate(['/timetables']);
        console.log(res);
      })
    }
    onDeleteTtaskClick(id: string) {
      this.ttaskService.deleteTtask(this.selectedTimetableId, id).subscribe((res: any) => {
        this.ttasks = this.ttasks.filter(val => val._id !== id);
        console.log(res);
      })
    }
  

}
