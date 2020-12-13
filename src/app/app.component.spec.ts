import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

describe('AppComponent', () => {
  let fixture;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'course-dashboard'`, () => {

    expect(component.title).toEqual('course-dashboard');
  });

  it('should render App nav bar', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-nav-bar')).not.toBeNull();
    expect(compiled.querySelector('app-nav-bar')).not.toBeUndefined();

  });

  it('should render App user menur', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-user-menu')).not.toBeNull();
    expect(compiled.querySelector('app-user-menu')).not.toBeUndefined();

  });

  it('should render App mobile nav', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-mobile-nav')).not.toBeNull();
    expect(compiled.querySelector('app-mobile-nav')).not.toBeUndefined();

  });

  it('should render App dashboard', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-dashboard')).not.toBeNull();
    expect(compiled.querySelector('app-dashboard')).not.toBeUndefined();

  });

});
