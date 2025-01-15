import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-character-details-dialog',
  templateUrl: './character-details-dialog.component.html',
  styleUrl: './character-details-dialog.component.scss'
})
export class CharacterDetailsDialogComponent {

  @Input() visible: boolean = false;
  @Input() character: any = null; 
  @Output() onClose = new EventEmitter<void>(); 


  closeDialog() {
    this.onClose.emit();
  }

}
