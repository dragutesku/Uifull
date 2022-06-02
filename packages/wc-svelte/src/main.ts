import WcSvelte from './WcSvelte.svelte';

!customElements.get('wc-svelte') && customElements.define('wc-svelte', WcSvelte);
export default WcSvelte;
