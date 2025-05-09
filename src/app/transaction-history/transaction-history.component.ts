import { Component, OnInit } from '@angular/core';

interface Transaction {
  helmetId: number;
  duration: number;
  cost: number;
  date: string;
}

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  displayedColumns: string[] = ['helmetId', 'duration', 'cost', 'date']; // Define which columns to display
  transactionHistory: Transaction[] = [];  // Define the type of transactionHistory as an array of Transaction objects
  totalHelmetsRented: number = 0;
  totalAmountSpent: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Simulate data or fetch from an API
    this.transactionHistory = [
      { helmetId: 101, duration: 30, cost: 15, date: '2025-05-08' },
      { helmetId: 102, duration: 45, cost: 22.5, date: '2025-05-07' },
      // Add more sample transaction data here
    ];

    // Calculate summary information
    this.totalHelmetsRented = this.transactionHistory.length;
    this.totalAmountSpent = this.transactionHistory.reduce((sum, txn) => sum + txn.cost, 0);
  }
}
