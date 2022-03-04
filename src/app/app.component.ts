import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'ROCKETS', url: '/folder/test1', icon: 'rocket' },
    { title: 'ROCKETS', url: '/folder/test2', icon: 'rocket' },
    { title: 'ROCKETS', url: '/folder/Favorites', icon: 'rocket' },
    { title: 'ROCKETS', url: '/folder/Archived', icon: 'rocket' },
    { title: 'ROCKETS', url: '/folder/Trash', icon: 'rocket' },
    { title: 'ROCKETS', url: '/folder/Spam', icon: 'rocket' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
