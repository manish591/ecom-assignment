<script lang="ts">
	import '../app.css';

	import type { LayoutData } from './$types';
	import { Footer } from '$lib/components/footer';
	import { Navbar } from '$lib/components/navbar';
	import { userLoginStatus } from '$lib/store/user';

	export let data: LayoutData;
	userLoginStatus.updateLoginStatus(data.isLoggedIn);
</script>

<Navbar />
<slot />
<Footer />
