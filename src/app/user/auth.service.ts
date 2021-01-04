import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class AuthService{
  currentUser: IUser | undefined;

  loginUser(userName: string, password: string){
    this.currentUser = {
      id: 1,
      userName: 'userName',
      firstName: 'John',
      lastName: 'Papaj'
    }
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
