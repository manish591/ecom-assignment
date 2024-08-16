<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { Button } from '$lib/components/button';
	import { Icon } from '$lib/components/icon';
	import '../app.css';

	const productCategories = ['Red', 'White', 'Rose', 'Sparkling', 'Not wine'];
	let visible = false;
	let toggle = false;

	let position = tweened(0, {
		duration: 300
	});
</script>

<header>
	<div class="border-b border-foreground/10">
		<div class="py-4 md:py-6 w-[95%] max-w-[1360px] mx-auto">
			<div class="flex items-center justify-between">
				<div class="md:hidden">
					<Button
						variant="outline"
						size="icon"
						class="border-0 p-0 hover:bg-transparent"
						on:click={() => {
							visible = !visible;
						}}
					>
						<Icon src="/menu.svg" alt="menu" class="w-7 h-7" />
					</Button>
					{#if visible}
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
											visible = !visible;
										}}
									>
										<Icon src="/cross.svg" alt="cross" class="w-8 h-8" />
									</Button>
								</div>
							</div>
							<div class="relative">
								<div
									class="absolute grid grid-cols-[100vw_100vw] slide"
									style="--position: {$position}"
								>
									<div class="w-full">
										<Button
											on:click={() => {
												toggle = !toggle;
												position.set(toggle ? -50 : 0);
											}}
											variant="outline"
											class="block bg-transparent rounded-none w-full focus:outline-none hover:bg-transparent py-3 px-0 border-0 border-b border-primary/20"
										>
											<div class="w-[90%] mx-auto flex items-center justify-between">
												<p>Products</p>
												<Icon src="/arrow-right.svg" alt="arrow" />
											</div>
										</Button>
										<div class="py-3 border-b border-primary/20">
											<p class="w-[90%] mx-auto">Login</p>
										</div>
									</div>
									<div class="w-full">
										<Button
											on:click={() => {
												toggle = !toggle;
												position.set(toggle ? -50 : 0);
											}}
											variant="outline"
											class="block bg-primary/10 rounded-none w-full focus:outline-none hover:bg-transparent py-3 px-0 border-0 border-b border-primary/20"
										>
											<div class="w-[90%] mx-auto flex items-center gap-3">
												<Icon src="/arrow-right.svg" alt="arrow" class="rotate-180" />
												<p>Back</p>
											</div>
										</Button>
										<div class="py-3 border-b border-primary/20">
											<p class="w-[90%] mx-auto">Red</p>
										</div>
										<div class="py-3 border-b border-primary/20">
											<p class="w-[90%] mx-auto">White</p>
										</div>
										<div class="py-3 border-b border-primary/20">
											<p class="w-[90%] mx-auto">Rose</p>
										</div>
										<div class="py-3 border-b border-primary/20">
											<p class="w-[90%] mx-auto">Sparkling</p>
										</div>
										<div class="py-3 border-b border-primary/20">
											<p class="w-[90%] mx-auto">Not Wine</p>
										</div>
									</div>
								</div>
							</div>
							<div class="border-t border-primary/20 py-6 mt-auto">
								<div class="w-[90%] mx-auto">footer</div>
							</div>
						</div>
					{/if}
				</div>
				<div>
					<h1 class="text-5xl font-logo">Local</h1>
				</div>
				<div class="relative mr-2 md:hidden">
					<Icon src="/cart-light.svg" alt="cart" class="w-6 h-6" />
					<span
						class="bg-primary text-primary-foreground w-4 h-4 text-xs rounded-full absolute right-[-20%] top-[-20%] flex items-center justify-center"
						>2</span
					>
				</div>
				<div class="items-center gap-4 hidden md:flex">
					<Button class="flex items-center gap-3">
						<Icon src="/cart.svg" alt="cart" />
						<span>$12.56 (0)</span>
					</Button>
					<Button variant="outline" class="flex items-center gap-3">
						<Icon src="/account.svg" alt="cart" />
						<span>Account</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
	<div class="border-b border-foreground/10 hidden md:block">
		<div class="py-6 max-w-[1360px] mx-auto">
			<div class="flex items-center gap-14">
				{#each productCategories as product (product)}
					<p
						class="cursor-pointer overflow-hidden hover:text-accent font-semibold text-lg relative before:content-[''] before:absolute before:h-[1px] before: before:w-full before:bg-accent before:bottom-0 hover:before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition"
					>
						{product}
					</p>
				{/each}
			</div>
		</div>
	</div>
</header>
<slot />
<footer class="bg-[#352820] text-foreground/70">
	<div class="border-t border-foreground/10">
		<div class="w-[95%] max-w-[1360px] mx-auto md:grid md:grid-cols-2">
			<div class="py-6">
				<h3 class="text-xl">Local</h3>
				<p class="text-sm mt-4 md:w-[50%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur quae voluptate
					perspiciatis id accusantium fugiat omnis beatae illum nam.
				</p>
			</div>
			<div class="py-6">
				<h3 class="text-xl">Quick Links</h3>
				<div class="mt-4 grid grid-cols-1 gap-2">
					<a href="/" class="underline">Home</a>
					<a href="/" class="underline">Products</a>
					<a href="/" class="underline">Login</a>
				</div>
			</div>
		</div>
	</div>
	<div class="py-6 border-t border-foreground/10">
		<div class="w-[95%] max-w-[1360px] mx-auto">
			<h3 class="text-sm">Copyright © 2024 LOCAL DRINKS</h3>
		</div>
	</div>
</footer>

<style>
	.slide {
		transform: translateX(calc(var(--position) * 1%));
	}
</style>
