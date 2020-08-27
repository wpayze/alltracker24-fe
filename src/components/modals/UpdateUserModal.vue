<template>
  <v-row justify="center">

    <v-dialog v-model="show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Informacion de Cliente</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

            <v-col cols="12" sm="6">
                <v-text-field label="Nombres" v-model="modifiedUser.customer.name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="Apellidos" v-model="modifiedUser.customer.last_name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="Cédula" v-model="modifiedUser.customer.identification"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="Celular" v-model="modifiedUser.customer.cellphone"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="Teléfono" v-model="modifiedUser.customer.telephone"></v-text-field>
            </v-col>

            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="show = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="uptUser">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["showDialog", "user"],
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit("modify-show", value);
      },
    },
    modifiedUser: {
        get() {
            return this.user;
        },
        set() {

        }
    }
  },
  methods: {
    ...mapActions(["updateUser", "fetchUser"]), 
    async uptUser() {

      var data = {
        customer: this.modifiedUser.customer,
        user: { _id: this.modifiedUser._id }
      };

      let response = await this.updateUser({data, myUser: false});
      
      if ( !response.error ) {
        let nombre = response.company.name ? response.company.name : "";
        this.$toast.success(`Excelente ${nombre}. Datos del usuario actualizados correctamente.`);
        this.show = false;
      } else {
        this.$toast.error("Actualización de datos fallida.");
      }
    }

  }
};
</script>

<style>
</style>