<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	import { Button } from '$lib/components/ui/button';
	import { Icon } from '$lib/components/ui/icon';

	let { isSelectOpen } = getContext<{
		isSelectOpen: Writable<boolean>;
	}>('select');
</script>

<Button
	variant="outline"
	radius="md"
	class="w-full justify-start px-3 hover:bg-transparent hover:border-primary/60"
	on:click={() => {
		$isSelectOpen = !$isSelectOpen;
	}}
>
	<div class="w-full flex justify-between items-center">
		<slot />
		<Icon src="/arrow-right.svg" alt="arrow" class="rotate-90" />
	</div>
</Button>
