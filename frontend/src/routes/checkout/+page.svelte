<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Breadcrumb, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';

	let isCartEmpty = false;
</script>

<div class="pt-8">
	<div class="w-[95%] max-w-[1360px] mx-auto">
		<Breadcrumb>
			<a href="/">Home</a>
			<BreadcrumbSeparator />
			<a href="/">Checkout</a>
		</Breadcrumb>
		<div class="mt-10">
			<h2 class="text-4xl md:text-5xl font-bold">Checkout</h2>
		</div>
	</div>
</div>
<div class="h-full">
	<div class="w-[95%] max-w-[1360px] mx-auto h-full">
		{#if isCartEmpty}
			<div class="h-full flex justify-center pt-48">
				<div class="inline-block text-center">
					<h2 class="text-2xl">Your cart is empty</h2>
					<Button variant="outline" class="mt-4">
						<span class="font-bold text-lg">Continue Shopping</span>
					</Button>
				</div>
			</div>
		{:else}
			<div class="py-10">
				<div class="grid grid-cols-[1fr_350px] gap-8 items-start">
					<div class="border border-primary/10 rounded-2xl">
						<div
							class="bg-secondary/40 rounded-2xl rounded-b-none border-b border-primary/20 p-4 gap-6 grid grid-cols-1"
						>
							<h2>Address</h2>
						</div>
						<div class="grid grid-cols-[45%_40%_1fr] gap-6 p-6 items-center">
							{#if true}
								<div>not address</div>
							{/if}
						</div>
					</div>
					<div class="p-6 rounded-2xl border border-primary/10">
						<p>Total</p>
						<h2 class="mt-2 text-5xl font-bold">€25,00</h2>
						<div class="grid grid-cols-1 gap-4 mt-6">
							<div
								class="rounded-lg border border-primary/10 p-4 grid grid-cols-[25%_1fr] gap-5 items-center"
							>
								<div class="p-4 rounded-lg bg-secondary/40">
									<img
										src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png"
										alt="product"
										class="h-full w-full"
									/>
								</div>
								<div>
									<p>$12.52 x <strong class="text-bold text-lg">2</strong></p>
									<p class="w-[70%] truncate text-ellipsis">Bubbly Blanc de Blancs</p>
								</div>
							</div>
						</div>
						<Button class="shadow-[3px_5px_0_rgba(0,0,0,1)] w-full mt-6">Buy Now</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
