import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ChatComponent } from "./chat/chat.component";
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterModule, NavbarComponent, ChatComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
   
  }
  
  


}
