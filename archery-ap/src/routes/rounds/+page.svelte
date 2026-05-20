<script>
  let { data } = $props();
  let selectedRound = $state(null);
  let schedule = $state([]);

  async function viewSchedule(roundId) {
    selectedRound = roundId;
    const res = await fetch(`/rounds/${roundId}`);
    const json = await res.json();
    schedule = json.schedule;
  }
</script>

<h1 class="text-2xl font-semibold mb-4">Rounds</h1>

<div class="flex gap-6">
  <div class="w-1/3">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="border-b text-left text-gray-500">
          <th class="py-2 px-3">Id</th>
          <th class="py-2 px-3">Name</th>
          <th class="py-2 px-3"></th>
        </tr>
      </thead>
      <tbody>
        {#each data.rounds as round}
          <tr class="border-b hover:bg-gray-50">
            <td class="py-2 px-3">{round.Id}</td>
            <td class="py-2 px-3">{round.Name}</td>
            <td class="py-2 px-3">
              <button 
                onclick={() => viewSchedule(round.Id)}
                class="text-blue-500 hover:underline text-xs">
                View
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="w-2/3">
    {#if selectedRound}
      <h2 class="text-lg font-semibold mb-3">Schedule for Round {selectedRound}</h2>
      <table class="w-full text-sm border-collapse">
        <thead>
          <tr class="border-b text-left text-gray-500">
            <th class="py-2 px-3">Num</th>
            <th class="py-2 px-3">Distance (m)</th>
            <th class="py-2 px-3">Face (cm)</th>
            <th class="py-2 px-3">Ends</th>
            <th class="py-2 px-3">Arrows</th>
          </tr>
        </thead>
        <tbody>
          {#each schedule as s}
            <tr class="border-b hover:bg-gray-50">
              <td class="py-2 px-3">{s.Num}</td>
              <td class="py-2 px-3">{s.Distance}m</td>
              <td class="py-2 px-3">{s.Face}cm</td>
              <td class="py-2 px-3">{s.NumEnds}</td>
              <td class="py-2 px-3">{s.NumEnds * 6}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else}
      <p class="text-gray-400 text-sm">Select a round to view its schedule.</p>
    {/if}
  </div>
</div>