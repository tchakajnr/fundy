<template>
    <v-app>
        <v-content class="fill-height primary lighten-3" fluid>
            <v-row align="center" justify="center">
                <v-col cols="11" sm="10" md="6" xs="10" lg="6" xl="4">
                    <v-card class="elevation-12 signinup">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-card-text class="mt-12">
                                            <h2 class="text-center lighten-2 white--text primary pa-4">
                                                Please sign in
                                            </h2>
                                            <v-form>
                                                <v-text-field
                                                    label="Student Number"
                                                    name="text"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="primary"
                                                    v-model="va"

                                               />
                                                <v-text-field
                                                    label="Password"
                                                    id="password"
                                                    prepend-icon="lock"
                                                    type="text"
                                                    color="primary"
                                               />
                                            </v-form>
                                            <h4 class="text-center mt-3" @click="step++">New user ? sign up</h4>
                                        </v-card-text>
                                        <div class="text-center mt-3">
                                            <!-- <v-btn rounded color="lighten-2 white--text primary">SIGN IN</v-btn> -->
                                            <!-- <router-link
                                            to="/students"
                                            >
                                                <v-btn rounded color="lighten-2 white--text primary">SIGN IN</v-btn>
                                            </router-link> -->
                                            <router-link class="router" to="/dashboard">
                                                <v-btn rounded color="lighten-2 white--text primary" @click="searchStudent(va)">SIGN IN</v-btn>
                                            </router-link>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                               <v-window-item :value="2">
                                <v-row>
                                    <v-col cols="12" md="12">
                                        <v-card-text class="mt-12">
                                            <h3 class="text-center lighten-2 white--text primary pa-4">
                                                Create account
                                            </h3>
                                            <v-form>
                                                <v-text-field
                                                    label="Full Name"
                                                    name="text"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="primary"
                                               />
                                                <v-text-field
                                                    label="Student Number"
                                                    name="text"
                                                    prepend-icon="person"
                                                    type="text"
                                                    color="primary"
                                               />
                                                <v-text-field
                                                    label="Password"
                                                    id="password"
                                                    prepend-icon="lock"
                                                    type="text"
                                                    color="primary"
                                               />
                                            </v-form>
                                            <h3 class="text-center mt-3" @click="step--">Already registered ? sign in</h3>
                                        </v-card-text>
                                        <div class="text-center mt-3">
                                            <v-btn rounded color="lighten-2 white--text primary">SIGN UP</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-content>
    </v-app>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  computed:{
    ...mapActions([
      'loadDetails'
    ]),
    ...mapState([
      'student'
    ])
  },
  data() {
    return {
      link:"/dashboard",
      va:'BK2017',
         step:1,
    props:{
        source:String
    },
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Students',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Financial Reports',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
      ],
       isMember:false,
      time: '',
      bk: "BK20170",
      post: "https://fundapi.herokuapp.com/v1/student/",
      // student: this.$store.state.student,
      students: [],
      payments: [],
      tabs: null,
      text: "Lorem ipsu",
      payment: {},
      firstName: "",
      lastName: "",
      major: "",
      pay: "",
       
    };
  },
  methods: {
     searchStudent(studentID) {
       /* eslint-disable */ 
       console.log(studentID);
       
      fetch(`https://fundapi.herokuapp.com/v1/student/${studentID}`)
        .then(res => {
          return res.json();
        })
        .then(([data]) => {
          // this.firstName = data.firstName;
          // this.lastName = data.lastName;
          // this.major = data.major;
          // this.pay = data.payment;
          // console.log(data.firstName);
          this.$store.state.student = data;
          this.$store.state.payment = data.payment;
          
          if (data.payment === 0) {
            this.$store.state.time =
              "According to records you are not part of the fund contact secretary for details";

          } else {
            this.$store.state.isMember = true;
            const month = Math.floor((this.payment) / 30);
            if (month === 1) {
              this.$store.state.time = `You have paid your subscriptions for only 1 month`;
            } else {
            
              this.$store.state.time= `You have paid your subscriptions for ${Math.floor(this.$store.state.payment /
                30)} months`;
            }
          }
          
        });
    },
    addPayment(studentID){
      this.$http.get(`https://fundapi.herokuapp.com/v1/student/${studentID}.json`)
      

    },
    getId(st) {
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/payments/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>

<style>
.router{
    text-decoration: none !important;
}
    .signinup{
        margin-top:200px;
    }
</style>