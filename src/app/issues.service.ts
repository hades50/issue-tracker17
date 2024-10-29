import { Issue } from './issue';

export class IssuesService {
  private issues: Issue[] = [];

  constructor() {}

  public getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }
}
