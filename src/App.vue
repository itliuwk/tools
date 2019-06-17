<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      const script = document.createElement('script');
      script.src = 'https://s19.cnzz.com/z_stat.php?id=1270854462&web_id=1270854462';
      script.type="text/javascript";
      script.language = 'JavaScript';
      document.body.appendChild(script);
    },
    watch: {
      '$route'() {
        if (window._czc) {
          let location = window.location;
          let contentUrl = location.pathname + location.hash;
          let refererUrl = '/';
          window._czc.push(['_trackPageview', contentUrl, refererUrl])
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
