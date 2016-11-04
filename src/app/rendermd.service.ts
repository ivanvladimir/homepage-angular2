import {Injectable} from '@angular/core';

@Injectable()
export class RendermdService {
    public md;
    public autorender;
    constructor() {
        let Remarkable = require('remarkable');
        let hljs       = require('highlight.js');
        this.md        = new Remarkable({
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                      try {
                        return hljs.highlight(lang, str).value;
                      } catch (err) {}
                    }

                    try {
                      return hljs.highlightAuto(str).value;
                    } catch (err) {}

                    return ''; // use external default escaping
                  },
            html: true,
            breaks: false
        });

   }

    render (text: String) {
        return this.md.render(text);
   }
}
