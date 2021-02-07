import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TtaskService } from 'src/app/ttask.service';
@Component({
  selector: 'app-edit-ttask',
  templateUrl: './edit-ttask.component.html',
  styleUrls: ['./edit-ttask.component.scss']
})
export class EditTtaskComponent implements OnInit {
  ttaskId: string;
  timetableId: string;
  constructor(private route: ActivatedRoute, private ttaskService: TtaskService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.ttaskId = params.ttaskId;
        this.timetableId = params.timetableId;
      }
    )
  }
  updateTtask(title: string) {
    this.ttaskService.updateTtask(this.timetableId, this.ttaskId, title).subscribe(() => {
      this.router.navigate(['/timetables', this.timetableId]);
    })
  }
}
