/// <reference path="./window.ts" />
import { Component, Input, provide, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'disqus',
  template: '<div id="disqus_thread"></div>',
  properties: ['identifier', 'shortname'],
  providers: [DOCUMENT, provide(Window, { useValue: window })]
})

export class Disqus {
  constructor(
    @Inject(DOCUMENT) private _dom,
    private _window: Window)
  {}

  /**
   * The unique identifier for the page
   */
  @Input() public identifier: string;

  /**
   * Your Disqus shortname
   */
  @Input() public shortname: string;

  /**
   * Component on init
   */
  ngOnInit() {
    if (this._window.DISQUS === undefined) {
      this._addScriptTag();
    } else {
      this._reset();
    }
  }

  /**
   * Reset Disqus with new information.
   */
  _reset() {
    this._window.DISQUS.reset({
      reload: true,
      config: this._getConfig()
    });
  }

  /**
   * Add the Disqus script to the document.
   */
  _addScriptTag() {
    this._window.disqus_config = this._getConfig();
    let container = this._getScriptContainer();
    let script = this._buildScriptTag(`//${this.shortname}.disqus.com/embed.js`);
    this._dom.appendChild(container, script);
  }

  /**
   * Get Disqus config
   */
  _getConfig() {
    let _self = this;
    return function () {
      console.log(_self._dom.location());
      this.page.url = _self._dom.location.path();
      this.page.identifier = _self.identifier;
      this.language = 'en';
    };
  }

  /**
   * Get the HEAD element
   * @return {HTMLHeadElement}
   */
  _getScriptContainer(): HTMLHeadElement {
    return this._dom.query('head');
  }

  /**
   * Build the Disqus script element.
   * @param  {string} src
   * @return {HTMLScriptElement}
   */
  _buildScriptTag(src: string): HTMLScriptElement {
    let script = this._dom.createScriptTag('src', src);
    script.async = true;
    script.type = 'text/javascript';
    script.setAttribute('data-timestamp', new Date().getTime().toString());
    return script;
  }
}
