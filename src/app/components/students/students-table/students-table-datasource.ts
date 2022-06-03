import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Student } from 'src/app/types/models/Student.type';
import { StudentsService } from 'src/app/services/students/students.service';

 


let students:Student[] = [];
let studentsList:Student[] = [
  { 
    id: 1,
    firstName:'Yoel',
    lastName: 'Ferrera',
    dob: new Date(),
    courses: []

},{ 
  id: 2,
  firstName:'Rodriguez',
  lastName: 'Gonzales',
  dob: new Date(),
  courses: []

},{ 
  id: 3,
  firstName:'Susana',
  lastName: 'Diaz',
  dob: new Date(),
  courses: []

},
];


export class StudentsTableDataSource extends DataSource<Student> { 
  data: Student [] = studentsList;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
      
  constructor(private _studentsService: StudentsService) {
    super();
     
  }
  allStudents(){
    this._studentsService.getStudents().subscribe((res:any)=>
    students = res)
  
  }
    
  
 
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Student[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Student[]): Student[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Student[]): Student[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }
    
    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'firstName': return compare(a.firstName, b.firstName, isAsc);      
        case 'lastName' : return compare(a.lastName, b.lastName, isAsc);
        default: return 0;
      }
    });
  }

  public filterData(firstName?: string, lastName?: string, birthday?:Date): Student[]{
    return this.data.filter((student:Student, index: number)=>{
      if ( firstName && !lastName){
        return student.firstName.includes(firstName)
      }else if (!firstName && lastName){
        return student.firstName.includes(lastName)
      }else if (firstName && lastName){
        return student.firstName.includes(firstName) &&  student.firstName.includes(lastName);
      }
      return student;
      
    })
  }
}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}




