<script lang="ts">
	import { getContext } from 'svelte';

	import { Button } from '$lib/components/ui/button';
	import type { Writable } from 'svelte/store';

	let { isDropdownOpen } = getContext<{ isDropdownOpen: Writable<boolean> }>('dropdown');
</script>

<Button
	variant="outline"
	radius="md"
	class="gap-2 hover:bg-transparent hover:border-primary/60"
	on:click={() => {
		$isDropdownOpen = !$isDropdownOpen;
	}}
>
	<slot />
</Button>
