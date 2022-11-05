import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Users</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Photo</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td>
          {{ user.id }}
        </td>
        <td>
          {{ user.avatar }}
        </td>
        <td>
          {{ user.first_name }}
        </td>
        <td>
          {{ user.last_name }}
        </td>
        <td>
          {{ user.email }}
        </td>
      </tr>
    </tbody>
  </table>`,
  styles: [
    `p {
    font-family: Lato;
  }
  table {
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-size: 0.8rem;
    border-collapse: collapse;
  }
  td,
  th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px 20px;
  }
  
  th {
    background-color: rgb(235, 235, 235);
  }
  
  td {
    text-align: center;
  }
  `,
  ],
})
export class HelloComponent {
  @Input() users: any;
}
