import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/service/user.service';
import {User} from '../../shared/model/user';
@Component({
  selector: 'task0users',
  template: `
    <h3>User table</h3>
    <table class="tg">
        <tr>
            <th width="80">ID</th>
            <th width="120">Name</th>
        </tr>
        <tr *ngFor="let user of userArr">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
        </tr>
    </table>
`,
  styleUrls: ['./app/shared/css/style.css'],
  providers: [UserService]
})
export class Task0UserComponent implements OnInit{

    private userArr: User[];

    constructor(private userService:UserService) {
        this.userArr = [];
    }

    ngOnInit() {
        this.userService.getAllUsers().then(voteArr => this.userArr = voteArr);          
    }

 }