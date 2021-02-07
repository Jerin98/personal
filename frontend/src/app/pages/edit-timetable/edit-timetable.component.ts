import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TtaskService } from 'src/app/ttask.service';
@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.scss']
})
export class EditTimetableComponent implements OnInit {
  [x: string]: any;

  constructor(private route: ActivatedRoute,private ttaskService: TtaskService,private router: Router) { }
   timetableId:string;
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.timetableId = params.timetableId;
         console.log(params.timetableId);
      }
    )
  }
  updateTimetable(title: string) {
    this.ttaskService.updateTimetable(this.timetableId, title).subscribe(() => {
      this.router.navigate(['/timetables', this.timetableId]);
    })
  }

}
