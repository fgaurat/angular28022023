import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clicked() should toggle #isOn', () => {
    const comp = new DemoComponent();
    expect(comp.isOn).withContext('off at first').toBe(false);
    comp.clicked();
    expect(comp.isOn).withContext('on after click').toBe(true);
    comp.clicked();
    expect(comp.isOn).withContext('off after second click').toBe(false);
  });

  it('#clicked() should set #message to "is on"', () => {
    const comp = new DemoComponent();
    expect(comp.message).withContext('off at first').toMatch(/is off/i);
    comp.clicked();
    expect(comp.message).withContext('on after clicked').toMatch(/is on/i);
    comp.clicked();
    expect(comp.message).withContext('on after second clicked').toMatch(/is off/i);
  });

  it("render a button",()=>{
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Switch');
  })

  it("render message",()=>{
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('is off');
  })

  it("render message 'is on' when button clicked",()=>{
    const fixture = TestBed.createComponent(DemoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button')
    button?.click()
    fixture.detectChanges();
    expect(compiled.querySelector('h2')?.textContent).toContain('is on');
  })
});
