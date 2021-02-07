import { Component, OnInit } from '@angular/core';
import { TtaskService } from 'src/app/ttask.service';
import { Router } from '@angular/router';
import { Timetable } from 'src/app/models/timetable.model';
@Component({
  selector: 'app-new-timetable',
  templateUrl: './new-timetable.component.html',
  styleUrls: ['./new-timetable.component.scss']
})
export class NewTimetableComponent implements OnInit {
 

  constructor(private ttaskService: TtaskService,private router: Router) { }

  ngOnInit(): void {
  }
  createTimetable(title: string) {
    this.ttaskService.createTimetable(title).subscribe((timetable: Timetable) => {
      console.log(timetable);
      // now we navigate
      this.router.navigate([ '/timetables', timetable._id ]); 
    });
  }


}
