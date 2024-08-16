<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	interface $$Props extends HTMLImgAttributes {}
</script>

<img {...$$props} src={$$props.src} alt={$$props.alt} class={cn('h-5, w-5', $$props.class)} />
