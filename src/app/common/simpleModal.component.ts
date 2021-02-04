import {Component, ElementRef, Inject, Input, ViewChild} from "@angular/core";
import {JQ_TOKEN} from "./jQuery.service";

@Component({
  selector: 'simple-modal',
  template: `
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dissmiss="modal" aria-label="Close">
              <span class="button" data-dismiss="modal" aria-label="Close">&times;</span>
            </button>
            <div class="modal-title">{{title}}</div>
          </div>
        </div>
        <div class="modal-body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body { height: 250px; overflow-y: scroll; }
  `]
})
export class SimpleModalComponent{
  @Input() title;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {
  }

  closeModal() {
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }
}
