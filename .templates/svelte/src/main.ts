import {{ properCase name }} from './{{properCase name}}.svelte';

!customElements.get('{{ dashCase name }}') && customElements.define('{{ dashCase name }}', {{ properCase name }});
export default {{ properCase name }};
