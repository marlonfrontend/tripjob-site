export { default as AppFooter } from '../..\\components\\AppFooter.vue'
export { default as AppHeader } from '../..\\components\\AppHeader.vue'

export const LazyAppFooter = import('../..\\components\\AppFooter.vue' /* webpackChunkName: "components_AppFooter'}" */).then(c => c.default || c)
export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components_AppHeader'}" */).then(c => c.default || c)
