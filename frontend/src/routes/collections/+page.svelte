<script lang="ts">
	import { Breadcrumb, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { CollectionCard } from '$lib/components/card';
	import { COLLECTIONS_DATA } from '$lib/constants';
</script>

<div class="pt-8">
	<div class="w-[95%] max-w-[1360px] mx-auto">
		<Breadcrumb>
			<a href="/">Home</a>
			<BreadcrumbSeparator />
			<a href="/">Collections</a>
		</Breadcrumb>
		<div class="mt-10">
			<h2 class="text-4xl md:text-5xl font-bold">Collections</h2>
		</div>
	</div>
</div>
<div class="py-10">
	<div class="w-[95%] max-w-[1360px] mx-auto">
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
			{#each COLLECTIONS_DATA as collection (collection.id)}
				<CollectionCard {...collection} />
			{/each}
		</div>
	</div>
</div>
