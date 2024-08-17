<script lang="ts">
	import { Breadcrumb, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Filters } from '$lib/components/filters';
	import { ProductCard } from '$lib/components/card';
</script>

<div class="pt-8">
	<div class="w-[95%] max-w-[1360px] mx-auto">
		<Breadcrumb>
			<a href="/">Home</a>
			<BreadcrumbSeparator />
			<a href="/">Collections</a>
			<BreadcrumbSeparator />
			<a href="/">Red</a>
		</Breadcrumb>
		<div class="mt-10">
			<h2 class="text-5xl font-bold">Red</h2>
		</div>
	</div>
</div>
<Filters />
<div class="py-10">
	<div class="w-[95%] max-w-[1360px] mx-auto">
		<div class="grid grid-cols-4 gap-8">
			<ProductCard
				img="https://res.cloudinary.com/dcugqfvvg/image/upload/v1723910826/16-white_201626e1-67fd-4f57-8d22-b111fc7f9f5b_ddetoz.png"
				title="Wine O'clock Somewhere 2011"
			/>
		</div>
	</div>
</div>
