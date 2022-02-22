import { Injectable } from '@angular/core';
import { Users } from '../models/users';

const USERKEY="user-key";
@Injectable({
  providedIn: 'root'
})
export class StorageService {


  constructor() { }

  saveUser(user:Users){
    localStorage.setItem(USERKEY,JSON.stringify(user));
  }
  removeUser(){
    localStorage.removeItem(USERKEY);
  }
  getUser():Users|null{
    const user=localStorage.getItem(USERKEY);
    return user?JSON.parse(user):null;
  }
}
