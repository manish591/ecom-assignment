<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let img: string;
	export let title: string;
</script>

<a href="/" class="block">
	<div class="relative border rounded-3xl border-foreground/10 p-6">
		<img
			src={img}
			alt={title}
			class="relative z-10 scale-100 hover:scale-105 transition duration-500"
		/>
		<div class="mt-4">
			<p class="text-center text-xl">$180,00</p>
			<p class="capitalize text-center text-2xl w-[80%] mx-auto mt-4">{title}</p>
			<Button variant="secondary" class="mt-4 w-full font-bold shadow-[3px_5px_0_rgba(0,0,0,1)]">
				<span class="font-bold text-lg">Add To Cart</span>
			</Button>
		</div>
	</div>
</a>
