<template>
  <div id="UserInfo">

    <div id="buttons-div">
      <button type="button" id="save-button" @click="uptUser">Guardar Cambios</button>
    </div>
    <br>

    <div class="card">
      <div class="card-title">
        <p>Informaci&oacute;n General</p>
        <br />
      </div>

      <div class="card-form">
        <div class="card-form-input">
          <label>Usuario desde</label>
          <input type="text" v-model="userinfo.createdAt" disabled />
        </div>

        <div class="card-form-input">
          <label>Email</label>
          <input type="text" v-model="userinfo.email" disabled />
        </div>

        <div class="card-form-input" v-if="userinfo.type == 'customer' ">
          <label>N&uacute;mero de Casillero</label>
          <input type="text" v-model="userinfo.customer.locker" disabled />
        </div>

        <div class="card-form-input" v-if="userinfo.type == 'customer' ">
          <label>Compa&ntilde;ia</label>
          <input type="text" v-model="userinfo.company.name" disabled />
        </div>
      </div>

    </div>
    <br />
    <div class="card">
      <div class="card-title">
        <p>Informaci&oacute;n Personal</p>
        <br />
      </div>

      <div class="card-form" v-if="userinfo.type == 'customer' ">

        <div class="card-form-input">
          <label>Nombres</label>
          <input type="text" v-model="userinfo.customer.name" />
        </div>

        <div class="card-form-input">
          <label>Apellidos</label>
          <input type="text" v-model="userinfo.customer.last_name" />
        </div>

        <div class="card-form-input">
          <label>Celular</label>
          <input type="text" v-model="userinfo.customer.cellphone" />
        </div>

        <div class="card-form-input">
          <label>Tel&eacute;fono</label>
          <input type="text" v-model="userinfo.customer.telephone" />
        </div>

        <div class="card-form-input">
          <label>C&eacute;dula</label>
          <input type="text" v-model="userinfo.customer.identification" />
        </div>
      </div>

      <div class="card-form" v-else>
        <div class="card-form-input">
          <label>Nombre de la Empresa</label>
          <input type="text" v-model="userinfo.company.name" />
        </div>

        <div class="card-form-input">
          <label>RTN</label>
          <input type="text" v-model="userinfo.company.rtn" />
        </div>

        <div class="card-form-input">
          <label>Celular</label>
          <input type="text" v-model="userinfo.company.cellphone" />
        </div>

      </div>

    </div>
    <br />
    <div class="card">
      <div class="card-title">
        <p>Direcci&oacute;n</p>
        <br />
      </div>

      <div class="card-form">
        <div class="card-form-input">
          <label>Linea 1</label>
          <input type="text" v-model="userinfo.defaultAddress.line1" />
        </div>

        <div class="card-form-input">
          <label>Linea 2</label>
          <input type="text" v-model="userinfo.defaultAddress.line2" />
        </div>

        <div class="card-form-input">
          <label>Ciudad</label>
          <input type="text" v-model="userinfo.defaultAddress.city" />
        </div>

        <div class="card-form-input">
          <label>Departamento</label>
          <input type="text" v-model="userinfo.defaultAddress.department" />
        </div>

        <div class="card-form-input">
          <label>C&oacute;digo Postal</label>
          <input type="text" v-model="userinfo.defaultAddress.zipcode" />
        </div>

        <div class="card-form-input">
          <label>Pa&iacute;s</label>
          <input type="text" v-model="userinfo.defaultAddress.country" disabled />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UserInfo",
  computed: mapGetters(["user"]),
  data() {
    return {
      userinfo: {},
    };
  },
  methods: {
     ...mapActions(["updateUser", "fetchUser"]), 
    async uptUser() {

      var data = {
        address:  this.userinfo.defaultAddress,
        company:  this.userinfo.company,
        customer: this.userinfo.customer,
        user: {_id: this.user._id} //Pronto la password.
      };

      let response = await this.updateUser({data, myUser: true});
      
      if ( !response.error ) {
        let nombre = response.customer ? response.customer.name : response.company.name;
        this.$toast.success(`Excelente ${nombre}. Datos actualizados correctamente.`);
      } else {
        this.$toast.error("Actualización de datos fallida.");
      }
    }
  },
  created: function(){
    this.fetchUser();
    this.userinfo = this.user;
  }
};
</script>

<style scoped>
#UserInfo {
  display: grid;
  grid-template-columns: 1fr;
}

#buttons-div {
  text-align: right;
  background:#191e3a;
  padding: 10px 0;
  border-radius:10px;
  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.0901961),
    0 1px 20px 0 rgba(0, 0, 0, 0.08), 0px 1px 11px 0px rgba(0, 0, 0, 0.06);
}

#save-button {
  background:#3b3f5c;
  padding: 0.4375rem 1.25rem;
  font-size: 14px;
  border: 1px solid transparent;
  color:#fff;
  margin: 0 8px;
  cursor:pointer;
  border-radius: 5px;
}

#save-button:hover {
  background:#1b55e2;
}

</style>