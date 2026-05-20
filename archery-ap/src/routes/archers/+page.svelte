<script>
  let { data } = $props();
</script>

<h1 class="text-2xl font-semibold mb-4">Archers</h1>

<table class="w-full text-sm border-collapse">
  <thead>
    <tr class="border-b text-left text-gray-500">
      <th class="py-2 px-3">Id</th>
      <th class="py-2 px-3">Name</th>
      <th class="py-2 px-3">Gender</th>
      <th class="py-2 px-3">YOB</th>
    </tr>
  </thead>
  <tbody>
    {#each data.archers as archer}
      <tr class="border-b hover:bg-gray-50">
        <td class="py-2 px-3">{archer.Id}</td>
        <td class="py-2 px-3">{archer.Name}</td>
        <td class="py-2 px-3">{archer.Gender === 1 ? 'Female' : 'Male'}</td>
        <td class="py-2 px-3">{archer.YOB}</td>
      </tr>
    {/each}
  </tbody>
</table>