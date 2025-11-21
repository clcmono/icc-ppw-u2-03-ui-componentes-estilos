
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
    'index.csr.html': {size: 5882, hash: '4253c1f922260d1e31499aabc8872894d9580c45dea60011eca01a9a6bd19d69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: '0e81e97cce7d48d3dcfba3786cdc97f80f7a9820a1324bc55fab0f0ca6a957f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14168, hash: '7e2fe4eeda4c1dc7a06f8e9f80d1da16ed0a65a7313ac78a9ea1accf8a69f27b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4DLBUBPL.css': {size: 13660, hash: 'DhoZumkmG4M', text: () => import('./assets-chunks/styles-4DLBUBPL_css.mjs').then(m => m.default)}
  },
};
