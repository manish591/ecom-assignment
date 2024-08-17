<script lang="ts">
	import { writable } from 'svelte/store';
	import { onMount, setContext } from 'svelte';

	let selectOpen = false;
	let currentValue = '';
	let selectValue = writable(currentValue);
	let isSelectOpen = writable(selectOpen);

	setContext('select', {
		isSelectOpen,
		selectValue,
		change: (value: string) => {
			currentValue = value;
			$selectValue = currentValue;
		}
	});

	export { currentValue as value };
</script>

<div class="relative w-[220px] text-left">
	<slot />
</div>
