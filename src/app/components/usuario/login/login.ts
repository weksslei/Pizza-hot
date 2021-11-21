import { Component, Input } from "@angular/core";

@Component({
    selector: "login",
    templateUrl: "login.html",
    styleUrls: ["./login.css"]
})

export class LoginComponent{
   
    @Input()
    public email= "algum@email.com";
    @Input()
    public? :string ;
}