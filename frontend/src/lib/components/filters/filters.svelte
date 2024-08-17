<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Icon } from '$lib/components/ui/icon';
	import { Dropdown, DropdownTrigger, DropdownContent } from '$lib/components/ui/dropdown';
	import { Select, SelectTrigger, SelectContent, SelectItem } from '$lib/components/ui/select';

	let selectValue = '';
</script>

<div class="pt-10">
	<div class="w-[95%] max-w-[1360px] mx-auto">
		<div class="flex items-center justify-between">
			<div>
				<h3>Filter:</h3>
				<div class="flex items-center gap-2 mt-2">
					<Dropdown>
						<DropdownTrigger>
							<span>Availability</span>
							<Icon src="/arrow-right.svg" alt="arrow" class="rotate-90" />
						</DropdownTrigger>
						<DropdownContent>
							<div class="p-4 border-b border-primary/10 flex items-center justify-between">
								<p>0 Selected</p>
								<Button variant="link" class="p-0 h-full">Reset</Button>
							</div>
							<div class="px-4 py-2">No items selected</div>
						</DropdownContent>
					</Dropdown>
					<Dropdown>
						<DropdownTrigger>
							<span>Price</span>
							<Icon src="/arrow-right.svg" alt="arrow" class="rotate-90" />
						</DropdownTrigger>
						<DropdownContent>
							<div class="p-4 border-b border-primary/10 flex items-center justify-between">
								<p>0 Selected</p>
								<Button variant="link" class="p-0 h-full">Reset</Button>
							</div>
							<div class="px-4 py-2">No items selected</div>
						</DropdownContent>
					</Dropdown>
				</div>
			</div>
			<div>
				<h3>Sort:</h3>
				<div class="mt-2">
					<Select bind:value={selectValue}>
						<SelectTrigger>
							<span>{selectValue ? selectValue : 'Select an option'}</span>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="mango">Mango</SelectItem>
							<SelectItem value="apple">Apple</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- filters end -->
