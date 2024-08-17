<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	let dropdownOpen = false;
	let isDropdownOpen = writable(dropdownOpen);

	setContext('dropdown', {
		isDropdownOpen
	});
</script>

<div class="relative">
	<slot />
</div>
