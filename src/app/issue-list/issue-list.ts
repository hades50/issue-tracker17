import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-issue-list',
  imports: [ClarityModule, ReactiveFormsModule, IssueList],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.css',
  standalone: true,
})
export class IssueList implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }
  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }
}
