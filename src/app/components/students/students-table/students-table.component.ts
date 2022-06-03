import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, merge, Observable } from 'rxjs';
import { StudentsService } from 'src/app/services/students/students.service';
import { Student } from 'src/app/types/models/Student.type';
import { StudentsTableDataSource } from './students-table-datasource';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})

export class StudentsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Student>;
  dataSource: StudentsTableDataSource;
  
firstNameSearch : string = "";
lastNameSearch: string = "";
birthdaySearch: Date= new Date();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'dob','actions'];

  
public students: Array<Student> = []

 constructor(private _router: Router, private _studentsService: StudentsService) {
    this.dataSource = new StudentsTableDataSource(this._studentsService);
  }

  ngAfterViewInit(): void {
    
    this._studentsService.getStudents().subscribe((res:any) =>{
      this.students = res;
    }
    );
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    
   
  };
   
  goToStudentDetail(student: any){
    console.log(`students/${student.id}`);
    this._router.navigate([`/students/${student.id}`,student]);
  }
  
  filterData(){
    console.log('First Name Search:', this.firstNameSearch);
    console.log('Last Name Search:', this.lastNameSearch);
    console.log(' Search:', this.firstNameSearch);
    this.table.dataSource = this.dataSource.filterData(this.firstNameSearch, this.lastNameSearch, this.birthdaySearch);
    

   
  }

}

  
