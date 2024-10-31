import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueList } from './issue-list/issue-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IssueList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'issue-tracker';
}
