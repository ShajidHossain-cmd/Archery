<script>
  let { data } = $props();
</script>

<h1 class="text-2xl font-semibold mb-6">Dashboard</h1>

<div class="grid grid-cols-3 gap-4 mb-8">
  <div class="border rounded p-4">
    <div class="text-sm text-gray-500 mb-1">Archers</div>
    <div class="text-3xl font-semibold">{data.archerCount}</div>
  </div>
  <div class="border rounded p-4">
    <div class="text-sm text-gray-500 mb-1">Competitions</div>
    <div class="text-3xl font-semibold">{data.competitionCount}</div>
  </div>
  <div class="border rounded p-4">
    <div class="text-sm text-gray-500 mb-1">Rounds</div>
    <div class="text-3xl font-semibold">{data.roundCount}</div>
  </div>
</div>

<h2 class="text-lg font-semibold mb-3">Recent Competitions</h2>
<table class="w-full text-sm border-collapse">
  <thead>
    <tr class="border-b text-left text-gray-500">
      <th class="py-2 px-3">Name</th>
      <th class="py-2 px-3">Round</th>
      <th class="py-2 px-3">Date</th>
      <th class="py-2 px-3">Championship</th>
    </tr>
  </thead>
  <tbody>
    {#each data.recentCompetitions as comp}
      <tr class="border-b hover:bg-gray-50">
        <td class="py-2 px-3">{comp.Name ?? '—'}</td>
        <td class="py-2 px-3">{comp.RoundName}</td>
        <td class="py-2 px-3">{new Date(comp.Date).toLocaleDateString()}</td>
        <td class="py-2 px-3">{comp.ClubChampionship ? '✅ Yes' : 'No'}</td>
      </tr>
    {/each}
  </tbody>
</table>