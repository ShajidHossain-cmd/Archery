<script>
  let { data } = $props();
</script>

<h1 class="text-2xl font-semibold mb-4">Score History</h1>

<form method="GET" class="flex gap-4 mb-6">
  <select name="archerId" class="border rounded px-3 py-2 text-sm">
    <option value="">Select an archer...</option>
    {#each data.archers as archer}
      <option value={archer.Id} selected={data.archerId == archer.Id}>
        {archer.Name}
      </option>
    {/each}
  </select>
  <button type="submit" class="bg-gray-800 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
    Search
  </button>
</form>

{#if data.scores.length > 0}
  <table class="w-full text-sm border-collapse">
    <thead>
      <tr class="border-b text-left text-gray-500">
        <th class="py-2 px-3">Competition</th>
        <th class="py-2 px-3">Round</th>
        <th class="py-2 px-3">Date</th>
        <th class="py-2 px-3">Division</th>
        <th class="py-2 px-3">Score</th>
      </tr>
    </thead>
    <tbody>
      {#each data.scores as s}
        <tr class="border-b hover:bg-gray-50">
          <td class="py-2 px-3">{s.CompetitionName ?? '—'}</td>
          <td class="py-2 px-3">{s.RoundName}</td>
          <td class="py-2 px-3">{new Date(s.Date).toLocaleDateString()}</td>
          <td class="py-2 px-3">{s.Division}</td>
          <td class="py-2 px-3">{s.Score ?? '—'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else if data.archerId}
  <p class="text-gray-400 text-sm">No scores found.</p>
{/if}