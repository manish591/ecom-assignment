<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { getContext } from 'svelte';

	let { isSelectOpen } = getContext<{
		isSelectOpen: Writable<boolean>;
	}>('select');
</script>

{#if $isSelectOpen}
	<div
		class="absolute left-0 top-[115%] w-full border border-primary/10 bg-background p-1 rounded-lg"
	>
		<slot />
	</div>
{/if}
