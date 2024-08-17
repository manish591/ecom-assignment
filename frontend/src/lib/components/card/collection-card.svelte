<script lang="ts">
	export let img: string;
	export let title: string;
</script>

<a href="/" class="block">
	<div class="relative border rounded-3xl border-foreground/10 pt-4 pb-8 md:pb-4">
		<img
			src={img}
			alt={title}
			class="relative z-10 scale-100 hover:scale-105 transition duration-500"
		/>
		<p class="capitalize absolute z-0 bottom-3 w-full text-center">{title}</p>
	</div>
</a>
