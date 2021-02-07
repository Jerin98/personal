import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { TimetableViewComponent } from './pages/timetable-view/timetable-view.component';
import { NewTimetableComponent } from './pages/new-timetable/new-timetable.component';
import { EditTimetableComponent } from './pages/edit-timetable/edit-timetable.component';
import { NewTtaskComponent } from './pages/new-ttask/new-ttask.component';
import { EditTtaskComponent } from './pages/edit-ttask/edit-ttask.component';

const routes: Routes = [
  {path : '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'new-list', component: NewListComponent },
  { path: 'edit-list/:listId', component: EditListComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'timetables', component: TimetableViewComponent },
  {path:'timetables/:timetableId',component:TimetableViewComponent},
  { path: 'timetables/:timetableId/new-ttask', component: NewTtaskComponent },
   { path: 'timetables/:timetableId/edit-ttask/:ttaskId', component: EditTtaskComponent },
  { path: 'new-timetable', component: NewTimetableComponent },
  { path: 'edit-timetable/:timetableId', component: EditTimetableComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: TaskViewComponent },
  {path:'lists/:listId',component:TaskViewComponent},
  { path: 'lists/:listId/new-task', component: NewTaskComponent },
  { path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
