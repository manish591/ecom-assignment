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
			<a href="/cart">Cart</a>
		</Breadcrumb>
		<div class="mt-10">
			<h2 class="text-4xl md:text-5xl font-bold">Shopping Cart</h2>
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
							class="bg-secondary/40 rounded-2xl rounded-b-none border-b border-primary/20 p-4 gap-6 grid grid-cols-[45%_40%_1fr]"
						>
							<h2>Product</h2>
							<h2>Quantity</h2>
							<h2 class="text-right">Total</h2>
						</div>
						<div class="grid grid-cols-[45%_40%_1fr] gap-6 p-6 items-center">
							<div class="rounded-lg p-3 grid grid-cols-[25%_1fr] gap-5 items-center">
								<div class="border border-primary/10 p-4 rounded-lg">
									<img
										src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png"
										alt="product"
										class="h-full w-full"
									/>
								</div>
								<div>
									<p>$12.52</p>
									<p class="w-[60%]">Bubbly Blanc de Blancs</p>
								</div>
							</div>
							<div>
								<div class="flex items-center justify-start gap-2">
									<Button variant="outline" size="icon" class="h-7 w-7">-</Button>
									<p>1</p>
									<Button variant="outline" size="icon" class="h-7 w-7">-</Button>
									<Button variant="link" class="p-0 text-sm">Remove</Button>
								</div>
							</div>
							<div>
								<p class="text-right">$12.50</p>
							</div>
						</div>
					</div>
					<div class="p-6 rounded-2xl border border-primary/10">
						<p>Total</p>
						<h2 class="mt-2 text-5xl font-bold">€25,00</h2>
						<Button class="shadow-[3px_5px_0_rgba(0,0,0,1)] w-full mt-6">Check Out</Button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
