<script>
  let { data } = $props();
</script>

<h1 class="text-2xl font-semibold mb-4">Competitions</h1>

<table class="w-full text-sm border-collapse">
  <thead>
    <tr class="border-b text-left text-gray-500">
      <th class="py-2 px-3">Id</th>
      <th class="py-2 px-3">Name</th>
      <th class="py-2 px-3">Round</th>
      <th class="py-2 px-3">Date</th>
      <th class="py-2 px-3">Championship</th>
    </tr>
  </thead>
  <tbody>
    {#each data.competitions as comp}
      <tr class="border-b hover:bg-gray-50">
        <td class="py-2 px-3">{comp.Id}</td>
        <td class="py-2 px-3">{comp.Name ?? '—'}</td>
        <td class="py-2 px-3">{comp.RoundName}</td>
        <td class="py-2 px-3">{new Date(comp.Date).toLocaleDateString()}</td>
        <td class="py-2 px-3">{comp.ClubChampionship ? '✅ Yes' : 'No'}</td>
      </tr>
    {/each}
  </tbody>
</table>