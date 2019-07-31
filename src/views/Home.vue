<template>
  <div class="home">
    <div class="firstRow">
      <h3>employee</h3>
      <div class="employeeButton">add employee</div>
    </div>
    <div class="secondRow">
      <div class="projects">
        <table class="projectList">
          <tr>
            <td>
              <img src="../assets/images/interniaLogo2_1.png" />
            </td>
            <td>
              <p>All Employees</p>
            </td>
          </tr>

          <div>
            <p>PROJECT</p>
          </div>

          <tr class="projectsItem">
            <td>
              <div>
                <img src="../assets/images/cfarena.jpg" />
              </div>
            </td>
            <td>
              <p>Arena Sport</p>
            </td>
          </tr>
          <tr class="projectsItem">
            <td>
              <div>
                <img src="../assets/images/dribble.png" />
              </div>
            </td>
            <td>
              <p>DSV</p>
            </td>
          </tr>
          <tr class="projectsItem active">
            <td>
              <div class="sm">SM</div>
            </td>
            <td>
              <p>Seafood Mall</p>
            </td>
          </tr>
          <tr class="projectsItem">
            <td>
              <div class="fs">FS</div>
            </td>
            <td>
              <p>FireStar</p>
            </td>
          </tr>
          <tr class="projectsItem">
            <td>
              <div class="zb">7.</div>
            </td>
            <td>
              <p>Zeta Bank</p>
            </td>
          </tr>
          <div>
            <p>STATUS</p>
          </div>
          <tr class="projectsItem">
            <td>
              <div class="ft">FT</div>
            </td>
            <td>
              <p>Full time</p>
            </td>
          </tr>
          <tr class="projectsItem">
            <td>
              <div class="pt">PT</div>
            </td>
            <td>
              <p>Part time</p>
            </td>
          </tr>
        </table>

        <div class="projectButton">add project</div>
      </div>
      <div class="users">
        <Table v-bind:users="following" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Table from "../components/Table";

export default {
  name: "home",
  components: {
    Table
  },
  data() {
    return {
      userInfo: {},
      following: [],
      loading: false
    };
  },
  methods: {
    fetchUserData() {
      return this.$http.get("");
    },
    fetchUserFollowing() {
      return this.$http.get("/following");
    },
    fetchData() {
      axios
        .all([this.fetchUserData(), this.fetchUserFollowing()])
        .then(
          axios.spread(
            function(userData, followingList) {
              this.userInfo = userData.data;
              this.following = followingList.data;
            }.bind(this)
          )
        )
        .catch(e => console.log(e));
    }
  },
  beforeMount() {
    this.fetchData();
  }
};
</script>
<style lang="scss">
@import "../utilities/globalVar";

.home {
  display: grid;
  grid-template-columns: 90%;
  justify-content: center;
  font-size: 10px;
  background: #f0f0f0;

  .firstRow {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-family: "Varela Round";
      font-size: 3em;
      font-weight: 900;
    }
    .employeeButton {
      width: 180px;
      height: 3em;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      color: white;
      font-size: 1.4em;
      font-family: "roboto";
      background-color: #0ec9ae;
    }
  }
  .secondRow {
    display: grid;
    grid-template-columns: 25% 73%;
    grid-column-gap: 2%;
    height: fit-content;
    .projects {
      position: relative;
      background-color: white;
      border-radius: 15px;
      height: fit-content;
      padding: 10%;
      box-shadow: 1px 1px 2px #888888;

      .projectButton {
        position: absolute;
        width: 180px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        color: white;
        font-size: 1.4em;
        font-family: "roboto";
        background-color: #8454df;
        bottom: -3%;
        left: 18%;
      }
    }
    .projectList {
      margin-bottom: 20px;
      border-collapse: separate;
      border-spacing: 0 10px;

      div {
        width: 100%;
        color: #cdccd3;
        font-weight: 300;
        font-family: "roboto";
        font-size: 1.1em;
        p {
          float: left;
        }
      }
      align-items: center;
      width: 100%;
      tr {
        td {
          padding: 5px;
          img {
            border-radius: 50%;
            width: 40px;
            height: 40px;
          }
          div {
            width: 40px;
            height: 40px;
            justify-self: center;
            margin-left: 15%;
            color: white;
            font-size: 1.5em;
            justify-content: center;
            display: flex;
            align-items: center;
            border-radius: 50%;
          }
          .sm {
            background-color: rgb(66, 182, 228);
          }
          .fs {
            background-color: rgb(223, 72, 92);
          }
          .zb {
            background-color: rgb(94, 202, 161);
          }
          .ft {
            background-color: rgb(13, 69, 158);
          }
          .pt {
            background-color: rgb(61, 141, 61);
          }
          p {
            float: left;
            font-size: 1.7em;
          }
        }
      }
      .projectsItem {
        td {
          &:first-of-type {
            border-radius: 10px 0px 0px 10px;
          }
          &:last-of-type {
            border-radius: 0px 10px 10px 0px;
          }

          div {
            width: 40px;
            height: 40px;
            object-fit: contain;
            border-radius: 50%;
            border: 1px solid #f0f0f0;
          }
          img {
            max-width: 40px;
            max-height: 40px;
          }
          p {
            float: left;
            font-size: 1.3em;
          }
        }
        &:hover,
        &.active {
          background-color: #f2f4f5;
        }
      }
    }
  }
  .users {
    background-color: transparent;
    height: 100%;
  }
}
</style>
