<script lang="ts">
  export let data
  let news = data.news

  import OneItem from '$lib/OneItem.svelte'
</script>

<div>
  <OneItem
    photo={news.photo}
    title={news.title}
    contain={news.contain}
    date={news.time_created.split('-')[2].split('T')[0]}
    month={news.time_created.split('-')[1]}
    year={news.time_created.split('-')[0]}
    time={news.time_created.split('T')[1].substring(0, 5)}
  />
</div>
