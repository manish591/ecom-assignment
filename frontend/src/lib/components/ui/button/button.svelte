<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { cn } from '$lib/utils/cn';

	const buttonVariants = cva(
		'inline-flex items-center justify-center whitespace-nowrap text-md font-bold transition-colors disabled:pointer-events-none disabled:opacity-50',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-accent',
					outline: 'border border-primary/30 bg-background hover:bg-accent hover:border-accent',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-black',
					link: 'text-primary underline-offset-4 hover:underline'
				},
				size: {
					default: 'h-12 px-5 py-4',
					sm: 'h-10 px-4 py-3',
					lg: 'h-14 px-8 py-5',
					icon: 'w-10 h-10 p-0'
				},
				radius: {
					default: 'rounded-[30px]',
					full: 'rounded-full',
					md: 'rounded-lg',
					none: 'rounded-none'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default',
				radius: 'default'
			}
		}
	);

	interface $$Props extends HTMLButtonAttributes, VariantProps<typeof buttonVariants> {}

	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export let radius: $$Props['radius'] = 'default';
</script>

<button
	{...$$restProps}
	on:click
	class={cn(buttonVariants({ variant, size, radius, class: $$props.class }))}
>
	<slot></slot>
</button>
