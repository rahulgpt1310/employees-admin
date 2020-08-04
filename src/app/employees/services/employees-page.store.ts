import { Injectable } from '@angular/core';
import { EmployeesPage } from '../states/empolyees-page';
import { StoreService } from '../../core/services/store.service';

@Injectable({
    providedIn: 'root'
})
export class EmployeesPageStore extends StoreService<EmployeesPage> {
    protected store: string = 'employees-page';

    constructor() {
        super({
            loading: true,
            employees: [],
            totalDrivers: 0,
            totalEmployees: 0,
            totalRosarioEmployees: 0
        })
    }
}
