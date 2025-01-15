import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailsDialogComponent } from './character-details-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';

describe('CharacterDetailsDialogComponent', () => {
  let component: CharacterDetailsDialogComponent;
  let fixture: ComponentFixture<CharacterDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterDetailsDialogComponent],
      imports: [DialogModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(async () => {
       
    fixture = TestBed.createComponent(CharacterDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir o evento onClose ao chamar closeDialog', () => {
  
    spyOn(component.onClose, 'emit');
    component.closeDialog();
    expect(component.onClose.emit).toHaveBeenCalled();

  });
});
