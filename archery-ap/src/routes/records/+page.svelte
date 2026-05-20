<script>
  let { data } = $props();
</script>

<h1 class="text-2xl font-semibold mb-4">Club Records</h1>

<table class="w-full text-sm border-collapse">
  <thead>
    <tr class="border-b text-left text-gray-500">
      <th class="py-2 px-3">Round</th>
      <th class="py-2 px-3">Top Score</th>
      <th class="py-2 px-3">Archer</th>
      <th class="py-2 px-3">Competition</th>
      <th class="py-2 px-3">Date</th>
    </tr>
  </thead>
  <tbody>
    {#each data.records as r}
      <tr class="border-b hover:bg-gray-50">
        <td class="py-2 px-3">{r.RoundName}</td>
        <td class="py-2 px-3 font-semibold">{r.TopScore}</td>
        <td class="py-2 px-3">{r.ArcherName}</td>
        <td class="py-2 px-3">{r.CompetitionName ?? '—'}</td>
        <td class="py-2 px-3">{new Date(r.Date).toLocaleDateString()}</td>
      </tr>
    {/each}
  </tbody>
</table>