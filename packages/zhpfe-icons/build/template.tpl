@font-face {
  font-weight: normal;
  font-family: '<%= fontName %>';
  font-style: normal;
  font-display: auto;
  src: url('http://cdn.rokku.icu/<%= cssClass %>.woff2') format('woff2'),
    url('http://cdn.rokku.icu/<%= cssClass %>.woff') format('woff'),
    url('http://cdn.rokku.icu/<%= cssClass %>.ttf') format('truetype');
}

.rk-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 '<%= fontName %>';
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;

  &::before {
    display: inline-block;
  }
}

<% _.each(glyphs, function(glyph) { %>.rk-icon-<%= glyph.fileName %>::before {
  content: '\<%= glyph.codePoint %>';
}

<% }); %>
