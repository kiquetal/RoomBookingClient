import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../data.service";
import {User} from "../model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserEditComponent} from "./user-edit/user-edit.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Array<User> | undefined;
  selectedUser: User | undefined;
  action: string | undefined;
  constructor(private dataService: DataService, private route:ActivatedRoute, private router:Router) {

  }



  ngOnInit(): void {

    this.dataService.getUsers().subscribe(value =>
      this.users = value);


    this.route.queryParams.subscribe(queryparams =>{

      const id = queryparams['id'];
      this.action = queryparams['action'];
      if (this.action=="add")
      {
        if (!this.selectedUser)
          this.selectedUser=new User();
      }
      console.log("[u]"+ this.selectedUser);
      if (id)
      {
        // @ts-ignore
        this.selectedUser = this.users.find(value => value.id==id);

      }
    })


  }

  selectUser(id: number) {


    this.router.navigate(["admin","users"],{queryParams:{id,action:'view'}});
  }

  addUser():void {

    this.selectedUser=new User();
    this.router.navigate(["admin","users"],{queryParams:{
      action:'add'
      }});

  }
}
