import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
public shared: any;

  async ngOnInit() {
    try {
      // Load the service class from the Remote dynamically
      const m = await loadRemoteModule('remote-app', './data-service');
      
      // Access the Singleton instance
      // Since your service has the static _instance logic, 
      // this will get the same instance used everywhere.
      this.shared = new m.SharedDataService(); 
    } catch (e) {
      console.error("Failed to load remote service", e);
    }
  }

  updateUName(val: string) {
    if (this.shared) {
      this.shared.updateName(val);
    }
  }

}
