import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { throwError } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { BackendService } from 'src/app/services/backend-service/backend.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: BackendService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MaterialModule,
        HttpClientTestingModule
      ],
      declarations: [ DashboardComponent ],
      providers:[BackendService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(BackendService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Change order to ascending for students according to marks', () => {
    component.order = 'Ascending';
    component.students = [
      {
        "id": 1,
        "name": "Annete Watson",
        "marks": 9.3
      },
      {
        "id": 2,
        "name": "Calvin Steward",
        "marks": 8.9
      },
      {
        "id": 3,
        "name": "Ralph Richards",
        "marks": 8.7
      }
    ];
    component.changeOrder('Ascending');
    expect(component.students[0].marks).toBe(8.7);
  });
  it('should Change order to descending for students according to marks', () => {
    component.order = 'Ascending';
    component.students = [
      {
        "id": 1,
        "name": "Annete Watson",
        "marks": 8.7
      },
      {
        "id": 2,
        "name": "Calvin Steward",
        "marks": 8.9
      },
      {
        "id": 3,
        "name": "Ralph Richards",
        "marks": 9.3
      }
    ];
    component.changeOrder('Descending');
    expect(component.students[0].marks).toBe(9.3);
  });



  it('should fetch cards after intializing component', () => {
    let cards = [
      {
        "id": 1,
        "title": "Students",
        "type": "profiles",
        "line1": 62
      },
      {
        "id": 2,
        "title": "Average Markes",
        "type": "calculation",
        "line1": 6.8
      },
      {
        "id": 3,
        "title": "Underperforming students",
        "type": "calculation",
        "line1": 9,
        "line2": "(14%)"
      }
    ];
    spyOn(service, "getDashBoardCards").and.returnValue(of(cards));
    component.ngOnInit();
    expect(component.cards.length).toBe(3);  

  });


  
  it('should fetch students after intializing component', () => {
    let students = [
        {
          "id": 1,
          "name": "Annete Watson",
          "marks": 9.3
        },
        {
          "id": 2,
          "name": "Calvin Steward",
          "marks": 8.9
        }
    ];
    spyOn(service, "getStudents").and.returnValue(of(students));
    component.ngOnInit();
    expect(component.students.length).toBe(2);  

  });

  it('should populate error message with proper error message when error in API while fetching students', () => {
    spyOn(service, "getStudents").and.returnValue(throwError('error in students api'));
    component.ngOnInit();
    expect(component.errorMessage).toBe('error in students api');  

  });

  it('should populate error message with proper error message when error in API while fetching cards', () => {
    spyOn(service, "getDashBoardCards").and.returnValue(throwError('error in cards'));
    component.ngOnInit();
    expect(component.errorMessage).toBe('error in cards');  

  });



});
