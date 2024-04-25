import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerItemComponent } from './dealer-item.component';

describe('DealerItemComponent', () => {
  let component: DealerItemComponent;
  let fixture: ComponentFixture<DealerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
