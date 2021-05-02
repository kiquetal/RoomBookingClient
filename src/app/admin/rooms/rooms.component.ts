import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Room} from "../model/Room";
import {ActivatedRoute,  Router} from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private dataService: DataService, private routes: ActivatedRoute, private router: Router) { }

  rooms: Array<Room> | undefined;
  selectedRoom: Room | undefined;
  ngOnInit(): void {

    this.dataService.getRooms().subscribe(value =>
    this.rooms = value);
    this.routes.queryParams.subscribe(next => {
      const id = next['id'];
      if (id) {
        // @ts-ignore
        this.selectedRoom=  this.rooms.find(value => value.id==id);
      }
    })

  }

  onSelectedRoom(id:number)
  {
    console.log(id);
    this.router.navigate(["admin","rooms"],{ queryParams:{id}});
  }

}
