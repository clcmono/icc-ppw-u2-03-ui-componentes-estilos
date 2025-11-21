
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://clcmono.github.io/icc-ppw-u2-03-ui-componentes-estilos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-03-ui-componentes-estilos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4501, hash: 'ae80acab6341f4446c87554b29f0b5c6a046be8fa0bfed6c6b8409e553b0ba03', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: '6c799da47b983b3f923db19fb36e9100553a522a54b0824a751daeafb244f8d2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12713, hash: '26ec0b65f314720ea65681e779f4e85d97a73b3c321fb5d65b06ca616c008ab0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZFFAVYGV.css': {size: 10691, hash: 'VoaJeVZ10ZI', text: () => import('./assets-chunks/styles-ZFFAVYGV_css.mjs').then(m => m.default)}
  },
};
