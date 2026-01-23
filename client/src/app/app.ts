import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EmployeesListComponent,
    MatToolbarModule,
  ],
  template: `
    <mat-toolbar>
      <span>Employees Management System</span>
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        display: flex;
        justify-content: center;
        padding: 2rem 4rem;
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('client');
}
