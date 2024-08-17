<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Icon } from '$lib/components/ui/icon';
	import CollectionsList from './collections-list.svelte';
	import MobileNavbar from './mobile-navbar.svelte';
</script>

<header>
	<div class="border-b border-foreground/10">
		<div class="py-4 md:py-6 w-[95%] max-w-[1360px] mx-auto">
			<div class="flex items-center justify-between">
				<MobileNavbar />
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
			<CollectionsList />
		</div>
	</div>
</header>
