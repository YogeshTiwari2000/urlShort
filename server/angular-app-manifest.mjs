
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/urlShort/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/urlShort/url-short",
    "route": "/urlShort"
  },
  {
    "renderMode": 2,
    "route": "/urlShort/url-short"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8167, hash: '807d72ab2b3a07cd1e3930ef309189b1cbf014f842c7f51550eb2535b8fcab97', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8185, hash: 'eb1b1f45342c503ca18f5aa5c254d6453fa8fec918b7788dc6a73600049bcd2b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'url-short/index.html': {size: 10714, hash: 'bb0d2614149bca46e5460c9481160add5ce60490bb495e3b019d588b6b1c75c3', text: () => import('./assets-chunks/url-short_index_html.mjs').then(m => m.default)},
    'styles-7Y5LZEVX.css': {size: 378, hash: '4WHlGK/Xl94', text: () => import('./assets-chunks/styles-7Y5LZEVX_css.mjs').then(m => m.default)}
  },
};
