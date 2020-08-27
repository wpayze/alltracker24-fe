<template>
  <div id="Users">
    <template>
      <v-card>
        <v-card-title>
          Clientes de {{user.company.name}}
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table :headers="headers" :items="users" :search="search">
          <template v-slot:item.actions="{ item }">
            
            <v-icon small class="mr-2" @click="openModal('showUser', item)">mdi-eye</v-icon>
            <v-icon small class="mr-2" @click="openModal('updateUser', item)">mdi-pencil</v-icon>
            <!-- <v-icon small @click="deleteItem(item)">mdi-block-helper</v-icon> -->
          </template>
        </v-data-table>
      </v-card>

      <div data-app>
        <UpdateUserModal
          v-if="selectedUser"
          :showDialog="showUptUserDialog"
          :user="selectedUser"
          @modify-show="(sh) => showUptUserDialog = sh"
        />
        <ViewUserModal
          v-if="selectedUser"
          :showDialog="showViewUserDialog"
          :user="selectedUser"
          @modify-show="(sh) => showViewUserDialog = sh"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import UpdateUserModal from "./modals/UpdateUserModal"
import ViewUserModal from "./modals/ViewUserModal"

export default {
  name: "UserInfo",
  computed: mapGetters(["users"]),
  props: ["user"],
  components: {
    UpdateUserModal,
    ViewUserModal
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    openModal(type, user) {
      this.selectedUser = user;

      switch (type) {
        case "updateUser":
          this.showUptUserDialog = true;
          break;
        case "showUser":
          this.showViewUserDialog = true;
          break;
      }
    },
  },
  created: function () {
    this.fetchUsers();
  },
  data() {
    return {
      showUptUserDialog: false,
      showViewUserDialog: false,
      selectedUser: null,
      search: "",
      headers: [
        {
          text: "Nombres",
          align: "start",
          sortable: false,
          value: "customer.name",
        },
        {
          text: "Apellidos",
          sortable: false,
          value: "customer.last_name",
        },
        {
          text: "Cédula",
          sortable: false,
          value: "customer.identification",
        },
        {
          text: "Ciudad",
          sortable: false,
          value: "defaultAddress.city"
        },
        {
          text: "Dirección",
          sortable: false,
          value: "defaultAddress.line1"
        },
        {
          text: "Casillero",
          value: "customer.locker",
        },
        {
          text: "Correo Electrónico",
          value: "email",
          sortable: false,
        },
        {
          text: "Celular",
          value: "customer.cellphone",
          sortable: false,
        },
        { text: "Acciones", value: "actions", sortable: false },
      ],
    };
  },
};
</script>