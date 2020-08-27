<template>
  <div id="UserConfigs">
    <div id="buttons-div">
      <button type="button" id="save-button" @click="uptUser()">Guardar Cambios</button>
    </div>
    <br />

    <v-row>
      <v-col cols="12" lg="6" sm="12">
        <div class="card">
          <div class="card-title">
            <p>Estados</p>
            <br />

            <div class="card-container">
              <label>Agregar nuevo estado</label>
              <v-row>
                <v-col cols="12" md="4" sm="12">
                  <v-text-field label="Texto" v-model="newState.text"></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                  <v-text-field label="Color" v-model="newState.color"></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="12">
                  <button
                    class="color-option"
                    style="background:#2196F3"
                    @click="newState.color='#2196F3'"
                  >Azul</button>
                  <button
                    class="color-option"
                    style="background:#F44336"
                    @click="newState.color='#F44336'"
                  >Rojo</button>
                  <button
                    class="color-option"
                    style="background:#4CAF50"
                    @click="newState.color='#4CAF50'"
                  >Verde</button>
                  <button
                    class="color-option"
                    style="background:#FFD600"
                    @click="newState.color='#FFD600'"
                  >Amarillo</button>
                  <button
                    class="color-option"
                    style="background:#9C27B0"
                    @click="newState.color='#9C27B0'"
                  >Morado</button>
                  <button
                    class="color-option"
                    style="background:#FB8C00"
                    @click="newState.color='#FB8C00'"
                  >Naranja</button>

                </v-col>
              </v-row>
              <v-btn color="#B3E5FC" @click="addState()">AGREGAR</v-btn>
            </div>

            <br />
            <p>Estados Actuales (Puede ordenar con jalar y soltar)</p>

            <ul>
              <li
                :key="i"
                v-for="(state, i) in newStates"
                draggable="true"
                @dragover.prevent
                @dragstart="dragStart(i)"
                @drop="dragFinish(i)"
              >
                <v-row>
                  <v-col cols="12" md="6">
                    <input class="stateInput" type="text" v-model="state.text" />
                  </v-col>
                  <v-col cols="12" md="6">
                    <input class="stateColor" type="text" v-model="state.color" />
                    <label :style="{background: state.color, color: '#fff', padding:'5px'}">&#x2B05;</label>
                    <button class="borrarState" @click=" newStates.splice(i,1) " >X</button>
                  </v-col>
                </v-row>
              </li>
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["user"],
  data() {
    return {
      newState: { text: "", color: "" },
      dragging: {},
      newStates: []
    };
  },
  methods: {
    ...mapActions(["updateUser", "fetchUser"]),
    async uptUser() {

      var data = {
        company:  {
          _id: this.user.company._id,
          configs: {
            states: this.newStates
          }
        }
      };

      let response = await this.updateUser({data, myUser: true});
      if ( !response.error ) {
        let nombre = response.customer ? response.customer.name : response.company.name;
        this.$toast.success(`Excelente ${nombre}. Datos actualizados correctamente.`);
      } else {
        this.$toast.error("Actualización de datos fallida.");
      }

    },
    addState(){
      this.newStates.push( { text: this.newState.text, color: this.newState.color } );
      this.newState.text = "";
      this.newState.color = "";
    },
    dragStart(which) {
      this.dragging = which;
    },
    dragFinish(to) {
      this.newStates.splice(to, 0, this.newStates.splice(this.dragging, 1)[0]);
    }
  },
  created: function(){
    this.fetchUser();
    this.newStates = this.user.company.configs.states;
  }
};
</script>

<style scoped>
#UserConfigs {
  display: grid;
  grid-template-columns: 1fr;
}

#buttons-div {
  text-align: right;
  background: #191e3a;
  padding: 10px 0;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.0901961),
    0 1px 20px 0 rgba(0, 0, 0, 0.08), 0px 1px 11px 0px rgba(0, 0, 0, 0.06);
}

#save-button {
  background: #3b3f5c;
  padding: 0.4375rem 1.25rem;
  font-size: 14px;
  border: 1px solid transparent;
  color: #fff;
  margin: 0 8px;
  cursor: pointer;
  border-radius: 5px;
}

#save-button:hover {
  background: #1b55e2;
}

.color-option {
  padding: 5px;
}

ul {
  list-style-type: none;
}

label {
  text-transform: none;
}

.stateInput {
  border: 1px gray solid;
  width: 100%;
  height: 100%;
}

.stateColor {
  width:50%;
}

.borrarState {
  background: #EF9A9A;
  padding:5px;
  margin: 0 10px
}

.color-option {
  font-size: 14px;
  text-transform: none;
  color: #fff;
}
</style>