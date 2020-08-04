import { Injectable } from '@angular/core';
import { FirestoreService } from '../../core/services/firestore.service';
import { Employee } from '../../models/employees';

@Injectable({
    providedIn: 'root'
})
export class EmployeeFirestore extends FirestoreService<Employee> {

    protected basePath: string = 'employees';

}
