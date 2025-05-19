<script>
  let { data } = $props();

  console.log(data);
</script>

<ul>
  {#each data.countries as country (country.id)}
    <li>{country.name}</li>
  {/each}
</ul>