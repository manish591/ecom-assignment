<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { fly } from 'svelte/transition';

	import { Button } from '$lib/components/ui/button';
	import { Icon } from '$lib/components/ui/icon';
	import { COLLECTION_LIST } from '$lib/constants';

	let showMobileNavbar = false;
	let showCollectionsSection = false;

	let navbarMainSectionPosition = tweened(0, {
		duration: 300
	});
</script>

<div class="md:hidden">
	<Button
		variant="outline"
		size="icon"
		class="border-0 hover:bg-transparent"
		on:click={() => {
			showMobileNavbar = !showMobileNavbar;
		}}
	>
		<Icon src="/menu.svg" alt="menu" class="w-7 h-7" />
	</Button>
	{#if showMobileNavbar}
		<div
			in:fly={{ x: '-100%', duration: 300, opacity: 1 }}
			out:fly={{ x: '-100%', duration: 300, opacity: 1 }}
			class="fixed overflow-x-hidden inset-0 bg-background z-30 grid grid-cols-1 grid-rows-[auto_1fr_auto]"
		>
			<div class="border-b border-primary/20 py-6">
				<div class="flex items-center justify-between w-[90%] mx-auto">
					<h3 class="text-2xl">Menu</h3>
					<Button
						variant="outline"
						size="icon"
						class="border-0 hover:bg-transparent"
						on:click={() => {
							showMobileNavbar = !showMobileNavbar;
						}}
					>
						<Icon src="/cross.svg" alt="cross" class="w-8 h-8" />
					</Button>
				</div>
			</div>
			<div class="relative">
				<div
					class="absolute grid grid-cols-[100vw_100vw] slide"
					style="--navbarMainSectionPosition: {$navbarMainSectionPosition}"
				>
					<div class="w-full">
						<Button
							variant="outline"
							radius="none"
							class="w-full hover:bg-transparent hover:border-0 py-3 px-0 border-0 border-b border-primary/20"
							on:click={() => {
								showCollectionsSection = !showCollectionsSection;
								navbarMainSectionPosition.set(showCollectionsSection ? -50 : 0);
							}}
						>
							<div class="w-[90%] mx-auto flex items-center justify-between">
								<p>Collections</p>
								<Icon src="/arrow-right.svg" alt="arrow" />
							</div>
						</Button>
						<div class="py-3 border-b border-primary/20">
							<a href="/" class="block w-[90%] mx-auto">Login</a>
						</div>
					</div>
					<div class="w-full">
						<Button
							variant="outline"
							radius="none"
							class="bg-primary/10 w-full focus:outline-none hover:bg-transparent hover:border-0 py-3 px-0 border-0 border-b border-primary/20"
							on:click={() => {
								showCollectionsSection = !showCollectionsSection;
								navbarMainSectionPosition.set(showCollectionsSection ? -50 : 0);
							}}
						>
							<div class="w-[90%] mx-auto flex items-center gap-3">
								<Icon src="/arrow-right.svg" alt="arrow" class="rotate-180" />
								<p>Back</p>
							</div>
						</Button>
						{#each COLLECTION_LIST as collection (collection)}
							<div class="py-3 border-b border-primary/20">
								<a href="/" class="block w-[90%] mx-auto">{collection}</a>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="border-t border-primary/20 py-6 mt-auto">
				<div class="w-[90%] mx-auto">
					<div class="flex items-center gap-4">
						<a href="/">
							<Icon src="/github.svg" alt="github" />
						</a>
						<a href="/">
							<Icon src="/x.svg" alt="twitter" />
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.slide {
		transform: translateX(calc(var(--navbarMainSectionPosition) * 1%));
	}
</style>
