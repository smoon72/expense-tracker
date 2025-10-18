import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Transaction } from '../../models/Transaction';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-expense-table',
  imports: [
    ButtonModule,
    CommonModule,
    TableModule,
    ToolbarModule
  ],
  templateUrl: './expense-table.html',
  styleUrl: './expense-table.scss'
})
export class ExpenseTable implements OnInit{
  items: MenuItem[] = [
    {
      label: 'Add',
      icon: PrimeIcons.PLUS_CIRCLE,
      command: () => this._add()
    }
  ];

  transactions: Transaction[] = [
    {
      id: 1,
      date: new Date('2025-10-12'),
      amount: 100,
      category: 'Food',
      description: 'red boil crab'
    },
    {
      id: 2,
      date: new Date('2025-10-12'),
      amount: 2000,
      category: 'Travel',
      description: 'Thailand'
    }
  ];

  // I get a duplicate error
  // get transactionList(): Transaction[] {
  //   return this._transactionList;
  // }
  // set transactionList(value: Transaction[]) {
  //   this._transactionList = value;
  // }

  ngOnInit(): void {

  }

  private _add() {
    
  }
}
