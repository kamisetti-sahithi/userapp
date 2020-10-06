export class User{
    username:string;
    password:string;
    phoneNo:number;
    constructor(username:string,password:string,phoneNo:number){
        this.username=username;
        this.password=password;
        this.phoneNo=phoneNo;
    }
    getUsername():string {
        return this.username;
    }
    getPassword():string {
        return this.password;
    }
    getPhoneNo():number {
        return this.phoneNo;
    }
}