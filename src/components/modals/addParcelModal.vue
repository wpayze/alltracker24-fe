<template>
  <v-row justify="center">

    <v-dialog v-model="show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nuevo Paquete</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>

            <v-col cols="12" sm="6">
                <v-text-field label="Casillero" v-model="newParcel.locker" ref="locker"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="Tracking" v-model="newParcel.tracking"></v-text-field>
            </v-col>
          
            <v-col cols="12" md="4" sm="6">
              <p><strong>Nombres</strong></p>
              <p>{{ userByLocker ? userByLocker.customer.name : "---" }}</p>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <p><strong>Apellidos</strong></p>
              <p>{{userByLocker ? userByLocker.customer.last_name : "---"}}</p>
            </v-col>
            <v-col cols="12" md="4" sm="6">
              <p><strong>C&eacute;dula</strong></p>
              <p>{{userByLocker ? userByLocker.customer.identification : "---"}}</p>
            </v-col>

            <v-col cols="12" sm="6">
                <v-text-field label="Peso" v-model="newParcel.weight"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-select
                  :items="user.company.configs.states"
                  label="ESTADO"
                  item-text="text"
                  item-value="{text,color}"
                  v-model="newParcel.status"
                  solo
                ></v-select>
            </v-col>
          
            </v-row>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="show = false">Cerrar</v-btn>
          <v-btn color="blue darken-1" text @click="show = false">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-row>
</template>

<script>
export default {
  props: ["showDialog", "users", "user"],
  data() {
    return {
      newParcel: {}
    }
  },
  computed: {
    show: {
      get() {
        return this.showDialog;
      },
      set(value) {
        this.$emit("modify-show", value);
      },
    },
    userByLocker: function() {
        let locker = this.newParcel.locker;
        let userByL = this.users.filter( user => user.customer.locker == locker );

        if (userByL.length == 0) 
          return null 
        else 
          return userByL[0]
    }
  }
};
</script>

<style>
</style>