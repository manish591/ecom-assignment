<script>
	import { Button } from '$lib/components/ui/button';
</script>

<div class="my-12">
	<div class="border border-primary/10 w-[95%] max-w-[450px] mx-auto p-6 rounded-2xl">
		<div>
			<h2 class="text-xl font-bold">Signup</h2>
			<p class="mt-2 opacity-[0.6] text-sm">Enter your information to create an account</p>
		</div>
		<div class="mt-6">
			<form class="grid grid-cols-1 gap-3">
				<div class="flex items-center gap-4">
					<div class="flex flex-col gap-1">
						<label for="firstname" class="capitalize">firstname</label>
						<input
							name="firstname"
							id="firstname"
							required
							class="w-full bg-transparent p-2 rounded-md border border-primary/10"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label for="lastname" class="capitalize">lastname</label>
						<input
							name="lastname"
							id="lastname"
							required
							class="w-full bg-transparent p-2 rounded-md border border-primary/10"
						/>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<label for="email" class="capitalize">email</label>
					<input
						name="email"
						id="email"
						required
						class="w-full bg-transparent p-2 rounded-md border border-primary/10"
					/>
				</div>
				<div class="flex flex-col gap-1">
					<label for="password" class="capitalize">password</label>
					<input
						name="password"
						id="password"
						required
						class="w-full bg-transparent p-2 rounded-md border border-primary/10"
					/>
				</div>
				<Button radius="md" class="">Create an account</Button>
			</form>
			<div class="mt-6">
				<p class="text-center">Already have an account? <a class="underline" href="/">Login</a></p>
			</div>
		</div>
	</div>
</div>
