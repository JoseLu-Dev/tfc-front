import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-set-list',
  templateUrl: './exercises-set-list.component.html',
  styleUrls: ['./exercises-set-list.component.scss'],
})
export class ExercisesSetListComponent implements OnInit {

  public exercisesSets = new Array(5);

  constructor() { }

  ngOnInit() {}

}
