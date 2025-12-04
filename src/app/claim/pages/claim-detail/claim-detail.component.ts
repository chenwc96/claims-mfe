import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-claim-detail',
  templateUrl: './claim-detail.component.html',
  styleUrls: ['./claim-detail.component.scss']
})
export class ClaimDetailComponent implements OnInit {
  claimId: string = '';
  claim: any = null;

  // Mock data
  private claims = [
    {
      id: '1',
      title: 'Medical Consultation',
      amount: 150.00,
      status: 'pending',
      date: new Date('2024-11-15'),
      description: 'Regular checkup with Dr. Smith',
      provider: 'City Medical Center',
      receiptNumber: 'RCP-001'
    },
    {
      id: '2',
      title: 'Dental Cleaning',
      amount: 80.00,
      status: 'approved',
      date: new Date('2024-11-10'),
      description: 'Routine dental cleaning',
      provider: 'Smile Dental Clinic',
      receiptNumber: 'RCP-002'
    },
    {
      id: '3',
      title: 'Vision Exam',
      amount: 120.00,
      status: 'rejected',
      date: new Date('2024-11-05'),
      description: 'Annual eye examination',
      provider: 'Clear Vision Center',
      receiptNumber: 'RCP-003'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.claimId = this.route.snapshot.paramMap.get('id') || '';
    this.claim = this.claims.find(c => c.id === this.claimId);
  }

  goBack(): void {
    this.location.back();
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