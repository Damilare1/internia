<template>
  <table>
    <tr>
      <th>
        <input type="checkbox" />
      </th>
      <th></th>
      <th>
        Employee
        <span>
          <ArrowUpIcon :size="10" />
        </span>
      </th>
      <th>
        Salary
        <span>
          <ArrowUpIcon :size="10" />
        </span>
      </th>
      <th>
        Status
        <span>
          <ArrowDownIcon :size="10" class="icon-2x" />
        </span>
      </th>
      <th>Manage</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img :src="user.avatar_url" :alt="user.login" />
      </td>
      <td>
        <div class="users">
          <p>{{ user.login }}</p>
          <p>Software engineer</p>
        </div>
      </td>
      <td>
        <div>
          <p>
            3.200 NOK
            <span>+300</span>
          </p>
          <p>full time</p>
        </div>
      </td>
      <td>
        <div>
          <p>{{ user.type }}</p>
          <p>2 months</p>
        </div>
      </td>
      <td>
        <div class="modifiers">
          <LeadPencilIcon class="pen" />
          <span>|</span>
          <TrashCanOutlineIcon class="trash" />
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import LeadPencilIcon from "vue-material-design-icons/LeadPencil.vue";
import TrashCanOutlineIcon from "vue-material-design-icons/TrashCanOutline.vue";
import ArrowUpIcon from "vue-material-design-icons/ArrowUp.vue";
import ArrowDownIcon from "vue-material-design-icons/ArrowDown.vue";

export default {
  name: "Table",
  props: {
    users: Array
  },
  components: {
    LeadPencilIcon,
    TrashCanOutlineIcon,
    ArrowUpIcon,
    ArrowDownIcon
  },
  beforeMount() {
    console.log(this.users);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  background-color: transparent;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  tr {
    input[type="checkbox"] {
      width: 1.4em;
      height: 1.4em;
      margin: 0;
      -moz-appearance: none;
      border: 1px solid #777;
      outline: #0ec9ae;
      border-radius: 3px;
      background-color: #eee;
      user-select: none;
    }
    th {
      &:not(:first-of-type) {
        text-align: left;
        text-transform: uppercase;
        font-weight: 800;
      }

      .material-design-icon.icon-2x {
        color: purple;
      }
    }
    td {
      .users {
        p {
          &:first-of-type {
            font-size: 1.5em;
            font-weight: bold;
          }
        }
      }

      cursor: context-menu;
      &:first-of-type {
        border-radius: 10px 0px 0px 10px;
      }
      &:last-of-type {
        border-radius: 0px 10px 10px 0px;
      }
      .modifiers {
        display: flex;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        color: #ccd2d7;
        font-weight: 500;
        .pen,
        .trash {
          &:hover {
            color: red;
          }
        }
        span {
          font-size: 40px;
          font-weight: 50;
        }
      }
      img {
        max-width: 40px;
        max-height: 40px;
        border-radius: 50%;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      p {
        text-align: left;
        display: flex;
        font-family: "roboto";
        &:first-of-type {
          font-size: 1.5em;
          font-weight: 500;
        }

        &:nth-of-type(2) {
          font-size: 1.2em;
          margin-top: 0.2em;
          font-weight: 500;
          color: #ccd2d7;
        }

        span {
          background-color: #0ec9ae;
          color: white;
          text-align: center;
          display: flex;
          align-items: center;
          align-self: center;
          justify-content: center;
          margin-left: 5px;
          height: 15px;
          width: 30px;
          border-radius: 15px;
          font-size: 0.7em;
        }
      }
    }

    &:not(:first-of-type) {
      background-color: white;
      p {
        margin: 0;
      }
      &:hover {
        box-shadow: 3px 3px 10px #888888;
        border-radius: 10px;
      }
    }
  }
}
</style>
