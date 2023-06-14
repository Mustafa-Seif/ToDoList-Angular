import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsContainerComponent } from './items-container.component';

describe('ItemsContainerComponent', () => {
  let component: ItemsContainerComponent;
  let fixture: ComponentFixture<ItemsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsContainerComponent]
    });
    fixture = TestBed.createComponent(ItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
