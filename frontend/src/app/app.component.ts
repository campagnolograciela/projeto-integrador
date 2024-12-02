import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Medicamentos', url: '/folder/inbox', icon: 'bandage' },
    { title: 'Lembretes', url: '/folder/outbox', icon: 'alarm' },
    { title: 'Histórico', url: '/folder/favorites', icon: 'list' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
