import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../models/todo.model';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import { SwipeGestureEventData, SwipeDirection } from 'ui/gestures';
import { Button } from 'ui/button';

@Component({
  selector: 'td-todo-item',
  moduleId: module.id,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() remove = new EventEmitter<null>();

  @ViewChild('removeConfirmButton') removeConfirmButton: ElementRef & {nativeElement: Button};
  @ViewChild('swipable') swipableRef: ElementRef;

  showRemoveConfirm = false;

  onRemove(): void {
    this.showRemoveConfirm = true;
  }

  onRemoveConfirm(): void {
    this.showRemoveConfirm = false;
    this.remove.emit();
  }

  onSwipe(e: SwipeGestureEventData) {
    switch (e.direction) {
      case SwipeDirection.left:
        this.swipeLeft();
        break;
      case SwipeDirection.right:
        this.swipeRight();
        break;
      default:
    }
  }

  swipeLeft(): void {
    if (this.showRemoveConfirm) { return; }

    const removeConfirmButtonSize = this.removeConfirmButton.nativeElement.getActualSize();
    const swipable = this.swipableRef.nativeElement;

    swipable.animate({
      translate: {x: -removeConfirmButtonSize.width, y: 0},
      duration: 200
    });

    this.showRemoveConfirm = true;
  }

  swipeRight(): void {
    if (!this.showRemoveConfirm) { return; }

    const swipable = this.swipableRef.nativeElement;

    swipable.animate({
      translate: {x: 0, y: 0},
      duration: 200
    });

    this.showRemoveConfirm = false;
  }
}
