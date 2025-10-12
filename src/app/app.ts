import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ExpenseTable } from './expense-table/expense-table';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Dashboard,
    ExpenseTable
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('expense-tracker');
}
