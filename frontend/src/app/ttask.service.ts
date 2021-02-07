import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Ttask } from './models/ttask.model';
@Injectable({
  providedIn: 'root'
})
export class TtaskService {

  constructor(private webReqService: WebRequestService) { }
  getTimetables() {
    return this.webReqService.get('timetables');
  }
  createTimetable(title:string){
    // send web req to create a list
  return this.webReqService.post('timetables', { title });
   }
updateTimetable(id: string, title: string) {
    // We want to send a web request to update a list
    return this.webReqService.patch(`timetables/${id}`, { title });
}
getTtasks(timetableId: string) {
  return this.webReqService.get(`timetables/${timetableId}/ttasks`);
}
updateTtask(timetableId: string, ttaskId: string, title: string) {
  // We want to send a web request to update a list
  return this.webReqService.patch(`timetables/${timetableId}/ttasks/${ttaskId}`, { title });
}
deleteTimetable(id: string) {
  return this.webReqService.delete(`timetables/${id}`);
}
deleteTtask(timetableId: string, ttaskId: string) {
  return this.webReqService.delete(`timetables/${timetableId}/ttasks/${ttaskId}`);
}
createTtask(title: string, timetableId: string) {
  // We want to send a web request to create a task
  return this.webReqService.post(`timetables/${timetableId}/ttasks`, { title });
}
complete(ttask: Ttask) {
  return this.webReqService.patch(`timetables/${ttask._timetableId}/ttasks/${ttask._id}`,{
  completed: !ttask.completed 
     });
    }
}
