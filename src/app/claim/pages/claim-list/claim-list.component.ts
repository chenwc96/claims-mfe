import { Component, OnInit } from '@angular/core';

interface Claim {
  id: string;
  title: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  date: Date;
}

@Component({
  selector: 'app-claim-list',
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.scss']
})
export class ClaimListComponent implements OnInit {
  claims: Claim[] = [
    {
      id: '1',
      title: 'Medical Consultation',
      amount: 150.00,
      status: 'pending',
      date: new Date('2024-11-15')
    },
    {
      id: '2',
      title: 'Dental Cleaning',
      amount: 80.00,
      status: 'approved',
      date: new Date('2024-11-10')
    },
    {
      id: '3',
      title: 'Vision Exam',
      amount: 120.00,
      status: 'rejected',
      date: new Date('2024-11-05')
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'approved': return 'success';
      case 'rejected': return 'danger';
      case 'pending': return 'warning';
      default: return 'medium';
    }
  }
}