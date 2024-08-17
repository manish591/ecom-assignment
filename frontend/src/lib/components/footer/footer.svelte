<script>
	import { FOOTER_LINKS } from '$lib/constants';
</script>

<footer class="bg-[#352820] text-foreground/70">
	<div class="border-t border-foreground/10">
		<div class="w-[95%] max-w-[1360px] mx-auto md:grid md:grid-cols-2">
			<div class="py-6">
				<h3 class="text-xl">Local</h3>
				<p class="text-sm mt-4 md:w-[50%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aspernatur quae voluptate
					perspiciatis id accusantium fugiat omnis beatae illum nam.
				</p>
			</div>
			<div class="py-6">
				<h3 class="text-xl">Quick Links</h3>
				<div class="mt-4 grid grid-cols-1 gap-2">
					{#each FOOTER_LINKS as link (link)}
						<a
							href="/"
							class="capitalize inline-block w-max cursor-pointer overflow-hidden hover:text-accent text-sm relative before:content-[''] before:absolute before:h-[1px] before: before:w-full before:bg-accent before:bottom-0 hover:before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition"
							>{link}</a
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="py-6 border-t border-foreground/10">
		<div class="w-[95%] max-w-[1360px] mx-auto">
			<h3 class="text-sm">Copyright © 2024 LOCAL DRINKS</h3>
		</div>
	</div>
</footer>
