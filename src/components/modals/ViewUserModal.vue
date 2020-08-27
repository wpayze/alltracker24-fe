<template>
  <div class="text-center">
    <v-dialog v-model="show" width="500">
      <v-card>
        <v-card-title class="headline grey lighten-2">Usuario {{user._id}}</v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-container>
            <v-row>
                
            <v-col cols="12" sm="6" md="4">
                <p class="lab">Nombre</p>
                <p class="value">{{user.customer.name}}</p>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <p class="lab">Apellido</p>
                <p class="value">{{user.customer.last_name}}</p>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <p class="lab">Celular</p>
                <p class="value">{{user.customer.cellphone}}</p>
            </v-col>

            <v-col cols="12" sm="6" md="4">
                <p class="lab">Cédula</p>
                <p class="value">{{user.customer.identification}}</p>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <p class="lab">Casillero</p>
                <p class="value">{{user.customer.locker}}</p>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <p class="lab">Télefono</p>
                <p class="value">{{user.customer.telephone}}</p>
            </v-col>

            <v-col cols="12" sm="12" md="12">
                <p class="lab">Registrado el</p>
                <p class="value">{{user.createdAt}}</p>
            </v-col>

            </v-row>
          </v-container>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="show = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
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
  },
};
</script>

<style scoped>
    .lab {
        font-weight: bold;
    }
</style>