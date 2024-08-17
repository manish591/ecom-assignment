<script lang="ts">
	import '../app.css';

	import { Footer } from '$lib/components/footer';
	import { Navbar } from '$lib/components/navbar';
</script>

<Navbar />
<slot />
<Footer />
