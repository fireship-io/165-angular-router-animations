import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-page',
  template: `
    <p>
    <h1>Right Page</h1>
    <iframe src="https://giphy.com/embed/jeXiz1RAvzX44" width="480" height="326" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/right-dr-evil-jeXiz1RAvzX44"></a>
    </p>
  `,
  styles: []
})
export class RightPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
