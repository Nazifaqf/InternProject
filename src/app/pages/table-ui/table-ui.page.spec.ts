import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableUIPage } from './table-ui.page';

describe('TableUIPage', () => {
  let component: TableUIPage;
  let fixture: ComponentFixture<TableUIPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableUIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
