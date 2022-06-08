<template>
  <div id="crud_project_app">
    <div class="crud_project_main_nav">
      <div class="topnav">
        <router-link to="/"> FLUENT DONATION PROFILE </router-link>
        <router-link
          v-for="menuItem in topMenus"
          :key="menuItem.route"
          active-class="ninja-tab-active"
          exact
          :class="['ninja-tab']"
          :to="{ name: menuItem.route }"
        >
          {{ menuItem.title }}
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AdminApp",
  data() {
    return {
      topMenus: [],
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || "Some Default Title";
      },
    },
  },
  methods: {
    setTopmenu() {
      this.topMenus = this.applyFilters("crud_project_top_level_menu", [
        {
          route: "donation_forms",
          title: "Donation Forms",
        },
        // {
        //   route: "donation_details",
        //   title: "Donation Details",
        // },

      ]);
    },
  },
  mounted() {
    this.setTopmenu();
  },
};
</script>
<style>
.topnav {
  background-color: #fff;
  overflow: hidden;
  border-top: 1px solid #32373c2b;
  border-bottom: 1px solid #32373c2b;
  width: 100%;
}
.update-nag {
  display: none;
}
/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
/* Add a color to the active/current link */
.topnav a.ninja-tab-active {
  font-weight: bold;
  border-bottom: 1px solid #ffa92c;
}
.crud_project_main_nav {
  margin: 0 0 0 -20px;
}
</style>
