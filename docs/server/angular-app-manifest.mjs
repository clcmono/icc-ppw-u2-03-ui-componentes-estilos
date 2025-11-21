
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/03-ui-componentes-estilos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/03-ui-componentes-estilos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4465, hash: '0f7335b32d4ba8321bd038154330e9ecd076f6f7ab9d5f67ecf548ef3a742f20', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1092, hash: 'bd0a7145ac846eb3f5074d2071606f3b2967dec0c3f5de26b70847e137279c55', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12677, hash: '9f7052239bfa6f6836558f46f2b59007137171392ef727830462cc8248929aa8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZFFAVYGV.css': {size: 10691, hash: 'VoaJeVZ10ZI', text: () => import('./assets-chunks/styles-ZFFAVYGV_css.mjs').then(m => m.default)}
  },
};
