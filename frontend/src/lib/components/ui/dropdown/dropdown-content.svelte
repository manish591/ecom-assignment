<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	let { isDropdownOpen } = getContext<{ isDropdownOpen: Writable<boolean> }>('dropdown');
</script>

{#if $isDropdownOpen}
	<button
		on:click={() => {
			$isDropdownOpen = !$isDropdownOpen;
		}}
		class="fixed z-20 top-0 left-0 right-0 bottom-0 w-full h-full"
	/>
	<div
		class="z-30 border border-primary/10 absolute w-[300px] left-0 top-[115%] bg-background rounded-lg"
		transition:fade={{ duration: 300 }}
	>
		<slot />
	</div>
{/if}
