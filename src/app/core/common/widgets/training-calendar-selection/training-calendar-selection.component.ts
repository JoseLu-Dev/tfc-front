import { TrainingSpecs } from './../../models/trainings-day.model';
import { CustomCalendarComponent } from '../custom-calendar/custom-calendar.component';
import { Day } from '../custom-calendar/day.model';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-training-calendar-selection',
  templateUrl: './training-calendar-selection.component.html',
  styleUrls: ['./training-calendar-selection.component.scss'],
})
export class TrainingCalendarSelectionComponent implements OnInit {

  @ViewChild(CustomCalendarComponent)
  calendar: CustomCalendarComponent;

  /**
   * Training selected
   */
  @Output() trainingSelected = new EventEmitter<TrainingSpecs>();

  public daySelected: Day;

  constructor() { }

  ngOnInit() { }

  getAndShowDaySelectedInCalendar(day: Day) {
    this.daySelected = day;
  }

  onTrainingSelected(training: TrainingSpecs) {
    this.trainingSelected.next(training);
  }
}
