
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/icc-ppw-u2-03-ui-componentes-estilos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/icc-ppw-u2-03-ui-componentes-estilos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5857, hash: '57707ecd91c0d299d35c679720665689f4f50bf46b12c833d069a14b30331807', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1103, hash: '4cd78afd7a76f809056a3bcb0768d27a580aed51767ac2ba8914158b97a70b32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14143, hash: '9de486bba2c5fc844c8ca7d9ec3194a51e72e34fc14e17146140787742b1e1d6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4DLBUBPL.css': {size: 13660, hash: 'DhoZumkmG4M', text: () => import('./assets-chunks/styles-4DLBUBPL_css.mjs').then(m => m.default)}
  },
};
