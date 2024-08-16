<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { cn } from '$lib/utils/cn';

	const buttonVariants = cva(
		'inline-flex items-center justify-center whitespace-nowrap rounded-[30px] text-md font-bold transition-colors  disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-accent',
					outline: 'border border-primary bg-background hover:bg-accent hover:border-accent',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
					link: 'text-primary underline-offset-4 hover:underline'
				},
				size: {
					default: 'h-12 px-5 py-4',
					sm: 'h-10 px-5',
					icon: 'h-10 w-10'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof buttonVariants> {}

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
</script>

<button
	{...$$restProps}
	on:click
	class={cn(buttonVariants({ variant, size, class: $$props.class }))}
>
	<slot></slot>
</button>
