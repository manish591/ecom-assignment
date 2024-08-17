<script lang="ts">
	import { COLLECTION_LIST } from '$lib/constants';
</script>

<div class="flex items-center gap-14">
	{#each COLLECTION_LIST as product (product)}
		<a
			href="/"
			class="cursor-pointer overflow-hidden hover:text-accent font-semibold text-lg relative before:content-[''] before:absolute before:h-[1px] before: before:w-full before:bg-accent before:bottom-0 hover:before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition"
		>
			{product}
		</a>
	{/each}
</div>
