import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../../model/User";
import {DataService} from "../../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit,OnChanges {


  password: string | undefined;
  @Input()
  user: User = new User;
  formUser: User | undefined ;
  allUsers: Array<User> | undefined
  password2: string | undefined;

  equality:boolean = false;
  nameIsValid:boolean=false;
  constructor(private dataService: DataService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.formUser = Object.assign({},this.user);

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'])
    {
      this.formUser = Object.assign({},this.user);


    }
  }


  onSubmit():void {
    // @ts-ignore
    if (this.formUser.id == null) {

      // @ts-ignore
      this.dataService.addUser(this.password,this.formUser).subscribe(value =>
        {
          this.router.navigate(["admin", "users"],{queryParams:{
          action:'view',id:value.id}}
          );
        }

      );
    } else {
      this.dataService.saveUser(this.formUser!!).subscribe(value =>

        this.router.navigate(["admin", "users"], {
          queryParams: {
            'action': 'view',
            'id': this.formUser?.id
          }
        })
      )
    }
  }

  checkValid():void {
    console.log("aa");
    // @ts-ignore
    console.log(this.formUser.name.trim().length > 0);
    // @ts-ignore
    this.nameIsValid = this.formUser.name.trim().length>0;
  }

  checkEquality() {
    this.equality = this.password == this.password2;
  }
}
