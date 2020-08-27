<template>
  <div id="app">
    <Header  :user = "user" />
    <Sidebar :user = "user" />
    <Main    :user = "user" />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Main,
    Footer,
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  created: function () {
    this.fetchUser();
  },
  computed: mapGetters(["user"]),
  // created: function() {
  //     localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjMwYWVmZTNhM2U4NDQ1YTQwODhhNDEiLCJpYXQiOjE1OTc4MTY3MTB9.iJneQuGOU8qj4HJGdclLganOl23C-2Byfa0KB-b-Nak");
  // }
};
</script>

<style>
html {
  height: 100%;
}

body {
  font-family: "Nunito", sans-serif;
  margin: 0px !important;
  background: #f1f2f3;
  min-height: 100%;
}

th {
  text-align: left;
}

#Header {
  grid-area: Header;
}
#Sidebar {
  grid-area: Sidebar;
  border-right: 1px #d6d9dc solid;
}
#Main {
  grid-area: Main;
}
#Footer {
  grid-area: Footer;
}
#app {
  min-height: 100vh;
  display: grid;
  grid-template:
    "Header" auto
    "Sidebar" auto
    "Main" auto
    "Footer" 22px;
}
@media (min-width: 768px) {
  #app {
    min-height: 100vh;
    display: grid;
    grid-template:
      "Header Header" 120px
      "Sidebar Main" auto
      "Footer Footer" 30px/
      15% auto;
  }
}
.route {
  text-decoration: none;
}
.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px 0 rgba(85, 85, 85, 0.0901961),
    0 1px 20px 0 rgba(0, 0, 0, 0.08), 0px 1px 11px 0px rgba(0, 0, 0, 0.06);
  padding: 1em;
}
.card-title {
  text-transform: uppercase;
  color: #3b3f5c;
  font-size: 15px;
  font-weight: bold;
}
.card-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 13px;
}
.card-form-input label {
  display: block;
}
.card-form-input input {
  border: 1px solid #bfc9d4;
  color: #3b3f5c;
  font-size: 15px;
  letter-spacing: 1px;
  border-radius: 6px;
  padding: 10px 0;
  padding-left: 3px;
  width: 100%;
}
.card-form-input input:disabled {
  opacity: 0.6;
}

.card-container {
  border: 2px #f1f2f3 solid;
  padding: 8px;
}
</style>