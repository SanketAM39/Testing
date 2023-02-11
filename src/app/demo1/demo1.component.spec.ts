import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Demo1Component } from './demo1.component';

describe('Demo1Component', () => {
  let component: Demo1Component;
  let fixture: ComponentFixture<Demo1Component>;
  let el: DebugElement;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Demo1Component);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render', () => {
    let pElements = el.queryAll(By.css('p')); // returns array
    expect(pElements[0].nativeElement.textContent).toBe('demo1 works!');

    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTruthy();
    component.title = 'Demo';
    fixture.detectChanges();
    let textElements = el.queryAll(By.css('.title'));
    expect(textElements[0].nativeElement.textContent).toBe('Demo');
  });
  it('should render button with text subscribed and button should be disabled after click', () => {
    const btnElements = el.queryAll(By.css('.subscribe'));
    expect(btnElements[0].nativeElement.textContent).toBe('Subscribe');
    expect(btnElements[0].nativeElement.disabled).toBeTruthy();
  });
});
