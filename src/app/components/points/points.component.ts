import { Component, Input } from '@angular/core';
import { Point } from 'src/app/interfaces/point.interface';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
})
export class PointsComponent {
  @Input() points!: Point[];
  @Input() double: boolean = false;
}
