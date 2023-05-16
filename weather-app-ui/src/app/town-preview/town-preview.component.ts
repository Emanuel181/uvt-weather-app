import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-town-preview',
  templateUrl: './town-preview.component.html',
  styleUrls: ['./town-preview.component.scss'],
})
export class TownPreviewComponent {
  @Input() title: string = 'Wind';
  @Input() img: string = '22';
  @Input() iconName: string = 'home';
  @Input() iconColor: string = 'red';
}
