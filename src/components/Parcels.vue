<template>
  <div id="Parcels">

    <v-btn color="#BBDEFB" text-color="#fff" v-if="user.type == 'company'" @click="openModal()">
        <v-icon left>mdi-plus</v-icon> Nuevo Paquete
    </v-btn>

      <v-card style="margin-top:10px">
        <v-card-title>
          Paquetes de {{ user.company.name ? user.company.name : user.customer.name }}
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

        <v-data-table :headers="headers" :items="parcels" :search="search">
            <template v-slot:item.status="{ item }">
                <v-chip class="ma-2" label :color="item.status.color" text-color="#fff">{{ item.status.text }}</v-chip>
            </template>
        </v-data-table>

      </v-card>

      <div data-app>
        <addParcelModal
          :showDialog="showAddParcelDialog"
          :users="users"
          :user="user"
          @modify-show="(sh) => showAddParcelDialog = sh"
        />
      </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import addParcelModal from "../components/modals/addParcelModal"

export default {
  name: "Parcels",
  computed: mapGetters(["parcels", "users"]),
  props: ["user"],
  methods: {
    ...mapActions(["fetchUsers","fetchParcels"]),
    openModal() {
      this.showAddParcelDialog = true;
    }
  },
  components: {
    addParcelModal
  },
  data() {
    return {
      showAddParcelDialog: false,
      search: "",
      headers: [
        {
          text: "Número",
          sortable: false,
          value: "number",
        },
        {
          text: "Casillero",
          sortable: false,
          value: "customer.locker",
        },
        {
          text: "Cliente",
          sortable: false,
          value: "customer.name",
        },
        {
          text: "Cédula del Cliente",
          sortable: false,
          value: "customer.identification",
        },
        {
          text: "Tracking",
          sortable: false,
          value: "tracking",
        },
        {
          text: "Proveedor",
          sortable: false,
          value: "provider",
        },
        {
          text: "Peso a Cobrar (Libras)",
          sortable: false,
          value: "weight",
        },
        {
          text: "Total a Pagar (Lps)",
          sortable: false,
          value: "total",
        },
        {
          text: "Estado",
          sortable: false,
          value: "status",
        }
      ],
    };
  },
  created: function() {
      this.fetchUsers();
      this.fetchParcels();
  }
};
</script>

<style>
</style>