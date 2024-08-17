<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { Button } from '$lib/components/ui/button';

	let { isSelectOpen, change } = getContext<{
		isSelectOpen: Writable<boolean>;
		selectValue: Writable<string | undefined>;
		change: (value: string) => void;
	}>('select');

	export let value: string;
</script>

<Button
	variant="outline"
	size="sm"
	class="border-0 w-full px-2 justify-start py-1.5 hover:bg-primary/10 transition rounded-lg"
	on:click={() => {
		$isSelectOpen = !$isSelectOpen;
		change(value);
	}}
>
	<slot />
</Button>
