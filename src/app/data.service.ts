import {Injectable} from '@angular/core';
import {Layout, LayoutContainer, Room} from "./admin/model/Room";
import {User} from "./admin/model/User";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rooms: Array<Room>;

  private users:Array<User>;

  getUsers():Observable<Array<User>>  {
    return of(this.users);
  }

  addUser(password:string,user?: User ):Observable<User> {


    // @ts-ignore
    user.id=this.users.length+1;
    this.users.push(user!!);
    return of(user!!);

  }

  getRooms() : Observable<Array<Room>>  {

    return of(this.rooms);
  }

  saveUser(user:User):Observable<User> {

    const findUser = this.users.find(value => value.id == user.id);

    // @ts-ignore
    findUser.name=user.name;

    // @ts-ignore
    return of(findUser);

  }

  constructor() {

    this.rooms = new Array<Room>();
    this.users = new Array<User>();
    const room1= new Room();
    room1.id=1;
    room1.name='First Room';
    room1.location='center';
    const arrayLayout=new Array<LayoutContainer>();
    let layaout1 = new LayoutContainer();
    layaout1.capacity=50;
    layaout1.layout=Layout.USHAPE;
    let layaout2 = new LayoutContainer();
    layaout1.capacity=20;
    layaout1.layout=Layout.BOARD;
    let layout3 = new LayoutContainer();
    layout3.capacity=10;
    layout3.layout = Layout.THEATER;
    arrayLayout.push(layaout1,layaout2,layout3);
    room1.capacities=arrayLayout;
    const room2= new Room();
    room2.id=2;
    room2.name='Second Room';
    room2.location='right';

    const arrayLayout1=new Array<LayoutContainer>();
    let layaout11 = new LayoutContainer();
    layaout11.capacity=50;
    layaout11.layout=Layout.USHAPE;

    arrayLayout1.push(layaout11);
    room2.capacities=arrayLayout1;

    this.rooms.push(room1,room2);

    const user1=new User();
    user1.id=1;
    user1.name="kiquetal";

    const user2 = new User();
    user2.id = 2;
    user2.name = "my name";

    this.users.push(user1,user2);

  }
}
