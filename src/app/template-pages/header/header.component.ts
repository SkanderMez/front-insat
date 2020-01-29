import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerScript = 'assets/js/plugins.min.js';

  constructor() { }
  ngOnInit() {
    this.initilizeHeaderJQScript();
  }

  initilizeJQScript(url: string) {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);

  }
  initilizeHeaderJQScript() {
    this.initilizeJQScript(this.headerScript);
  }


}
