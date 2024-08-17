<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/cn';

	interface $$Props extends HTMLImgAttributes {}

	let imgSrc: $$Props['src'] = '';
	let imgAlt: $$Props['alt'] = '';
	let classname: $$Props['class'] = '';

	export { imgSrc as src };
	export { imgAlt as alt };
	export { classname as class };
</script>

<img src={imgSrc} alt={imgAlt} class={cn('h-5, w-5', classname)} {...$$restProps} />
