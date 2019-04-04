import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';


  player: YT.Player;
  private id: string = 'XqZsoesa55w';

  savePlayer(player) {
    this.player = player;
    console.log('Vide url', player.getVideoUrl());
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
