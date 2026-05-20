<script>
 import './layout.css';
  let { children } = $props();
</script>

<nav class="bg-gray-800 text-white px-6 py-3 flex gap-6 text-sm">
  <a href="/" class="hover:text-gray-300">Dashboard</a>
  <a href="/archers" class="hover:text-gray-300">Archers</a>
  <a href="/competitions" class="hover:text-gray-300">Competitions</a>
  <a href="/rounds" class="hover:text-gray-300">Rounds</a>
  <a href="/scores" class="hover:text-gray-300">Scores</a>
  <a href="/records" class="hover:text-gray-300">Club Records</a>
</nav>

<main class="p-6">
  {@render children()}
</main>