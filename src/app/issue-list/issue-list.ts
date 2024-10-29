import { Component } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  imports: [],
  templateUrl: './issue-list.html',
  styleUrl: './issue-list.css'
})
export class IssueList {
  issues: Issue[] = [];

  constructor(private issueService: IssuesService) { }
  
  ngOnInit(): void {
    this.getIssues();
  }
  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }
}
