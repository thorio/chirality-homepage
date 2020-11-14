<template>
  <Header :username="username" logoutLink="/logout" />
  <TileContainer :tiles="tiles" />
</template>

<script>
import Header from "./components/Header.vue";
import TileContainer from "./components/TileContainer.vue";
// eslint-disable-next-line no-unused-vars
const logoutLink = "k";

export default {
  name: "App",
  components: {
    Header,
    TileContainer
  },
  data() {
    return {
      username: "ok b",
      tiles: [
        {
          title: "Grafana",
          icon: "/icons/grafana.png",
          url: "https://grafana.chirality.de"
        },
        {
          title: "Home Assistant",
          icon: "/icons/homeassistant.png",
          url: "https://hass.chirality.de"
        },
        {
          title: "Nextcloud",
          icon: "/icons/nextcloud.png",
          url: "https://grafana.chirality.de"
        },
        {
          title: "Octoprint",
          icon: "/icons/octoprint.png",
          url: "https://grafana.chirality.de"
        },
        {
          title: "Pihole",
          icon: "/icons/pihole.png",
          url: "https://plex.chirality.de"
        },
        {
          title: "Plex",
          icon: "/icons/plex.png",
          url: "https://grafana.chirality.de"
        },
        {
          title: "Traefik",
          icon: "/icons/traefik.png",
          url: "https://grafana.chirality.de"
        }
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
body {
  margin: 0;
  background-color: #272c30;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #dcddde;
}
</style>
