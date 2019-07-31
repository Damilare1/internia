<template>
  <div id="app">
    <nav class="navBar">
      <div class="logo">
        <img src="./assets/images/interniaLogo_1.png" alt="logo" />
        <h2>Internia</h2>
      </div>
      <div class="menuItems">
        <ul>
          <li>
            Calendar
            <span></span>
          </li>
          <li>
            Statistic
            <span></span>
          </li>
          <li class="active">
            Employee
            <span></span>
          </li>
          <li>
            Client
            <span></span>
          </li>
          <li>
            Equipment
            <span></span>
          </li>
        </ul>
      </div>
      <div class="extras">
        <ul>
          <li>
            <BellIcon />
          </li>
          <li class="new">
            <EmailOutlineIcon />
          </li>
          <li>
            <img v-if="profileImg" :src="profileImg" alt="logo" />
            <img
              v-else
              src="./assets/images/baseline_account_circle_black_48dp.png"
            />
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import BellIcon from "vue-material-design-icons/Bell.vue";
import EmailOutlineIcon from "vue-material-design-icons/EmailOutline.vue";

export default {
  name: "app",
  components: {
    BellIcon,
    EmailOutlineIcon
  },
  data() {
    return {
      profileImg: ""
    };
  },
  beforeMount() {
    this.$http.get("").then(response => {
      this.profileImg = response.data.avatar_url;
    });
  }
};
</script>

<style lang="scss">
@import "./utilities/globalVar";

body {
  margin: 0;
  padding: 0;
  font-family: "roboto";
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navBar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 10px;
  padding: 0;
  margin: 0;
  .logo {
    display: flex;
    align-items: center;
    font-family: "Varela Round";
    font-weight: 900;
    font-size: 2em;
    margin-left: 2%;
    img {
      width: auto;
      height: auto;
      max-width: 45px;
      max-height: 45px;
      margin-right: 10px;
    }
  }
}
.menuItems {
  width: 40%;
  ul {
    justify-content: space-between;
    width: 100%;
    li {
      position: relative;
      font-size: 1.8em;
      color: #ccd2d7;
      width: fit-content;
      display: flex;
      flex-direction: column;

      &:hover,
      &.active {
        color: #323232;
        span {
          position: absolute;
          bottom: -35px;
          display: block;
          height: 0.2em;
          background-color: #0ec9ae;
          width: 100%;
        }
      }
    }
  }
}

.extras {
  width: 12%;
  margin-right: 2%;
  height: fit-content;
  ul {
    width: 100%;
    justify-content: space-between;
  }
  img {
    width: auto;
    height: auto;
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
  }
}
</style>
