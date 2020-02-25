<template>
  <div class="students{
">
    <h1 class="subheading grey--text">Students</h1>

     <div>
    <v-breadcrumbs :items="items">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
  </div>


 <div class="text-center">
    <v-btn rounded color="lighten-2 white--text primary mr-3 mx-0 mb-3" light
    @click="loadDetails"
    >Load 2017 students</v-btn>
  </div>

     <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">First Name</th>
          <!-- <th class="text-left">Last Name</th> -->
          <th class="text-left">Student_ID</th>
          <!-- <th class="text-left">Major</th> -->
          <th class="text-left">Total amt paid</th>
          <th class="text-left">Topup</th>

        </tr>
      </thead>
       <tbody>
          <tr v-for="student in students" :key="student.major">
            <td>{{ student.firstName }}</td>
            <!-- <td>{{student.lastName}}</td> -->
            <td>{{ student.studentID }}</td>
            <!-- <td>{{student.major}}</td> -->
            <td>{{ student.payment }}</td>
            <td>

              
    <v-expansion-panels>
      <v-expansion-panel
        
      >
        <v-expansion-panel-header>
          <!-- <v-icon class="mx-2" light center fab dark color="success">fa-caret-down</v-icon> -->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
      <h5>{{student.studentID}}</h5>
      <v-row class="light--text" >
      <v-col cols="12" sm="3">
        <v-btn class="mx-2" fab dark color="indigo" @click="addThirty(student.id)">
            +30
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn class="mx-2" fab dark color="indigo" @click="addBig(student.id)">
            +100
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn class="mx-0" fab dark color="indigo" @click="subtractThirty(student.id)">
            -30
          </v-btn>
      </v-col>
      <v-col cols="12" sm="3">
        <v-btn class="mx-0" fab dark color="indigo" @click="subtractBig(student.id)">
            -100
          </v-btn>
      </v-col>
    </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  
            </td>
          </tr>
        </tbody>
    </template>
  </v-simple-table>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
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
      student: 0,
      // students: this.$store.state.students,
      // payments: [],
      tabs: null,
      text: "Lorem ipsu",
      payment: {},
      firstName: "",
      lastName: "",
      major: "",
      pay: "",
       
    };
  },
  created() {
        this.loadDetails()
        setInterval(this.$store.actions.loadDetails, 500)
        console.log("ggg");
        
    },
  computed:{
    ...mapState([
      'students'
    ]),
    ...mapActions([
      'loadDetails'
    ])
    
  },
  methods: {
    addThirty(st) {
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
    },
    addBig(st){
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/payments100/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

    },
    subtractThirty(st){
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/subtract30/${st}`, {})
        .then(
          response => {
            /* eslint-disable */
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );

    },
    subtractBig(st){
      this.$http
        .post(`https://fundapi.herokuapp.com/v1/subtract100/${st}`, {})
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
  //    searchStudent: async function(studentID) {
  //     fetch(`https://fundapi.herokuapp.com/v1/student/${studentID}`)
  //       .then(res => {
  //         return res.json();
  //       })
  //       .then(([data]) => {
  //         this.firstName = data.firstName;
  //         this.lastName = data.lastName;
  //         this.major = data.major;
  //         this.pay = data.payment;
  //         if (data.payment === 0) {
  //           this.time =
  //             "According to records you are not part of the fund contact secretary for details";
  //         } else {
  //           this.isMember = true;
  //           const month = (this.payment) / 30;
  //           if (month === 1) {
  //             this.time = `You have paid your subscriptions for only 1 month`;
  //           } else {
  //             this.time = `You have paid your subscriptions for ${data.payment /
  //               30} months`;
  //           }
  //         }
          
  //       });
  //   },
  //   loadPayments(){
  //     this.$http.get('https://fundapi.herokuapp.com/v1/payments/')
  //               .then(resp=>{
  //                 return resp.json()
  //                 /* eslint-disable */
  //               }).then(data =>{
  //                 const pay =[];
  //                 for(let key in data){
  //                   pay.push(data[key]);
  //                 }
  //                 this.payments = pay;

  //               });
            

  //   },
  //   loadDetails(){
  //     this.$http.get('https://fundapi.herokuapp.com/v1/payments/')
  //                 .then(response=>{
  //                   return response.json();
  //                   /* eslint-disable */
  //                 })
  //                 .then(data=> {
  //                   const studentsRecieved =[];
  //                   for(let key in data){
  //                     studentsRecieved.push(data[key]);
  //                   }
  //                   // this.students = studentsRecieved;
                    
  //                 });         

  //   },
  //   addPayment(studentID){
  //     this.$http.get(`https://fundapi.herokuapp.com/v1/student/${studentID}.json`)
      

  //   },
  //   getId(st) {
  //     this.$http
  //       .post(`https://fundapi.herokuapp.com/v1/payments/${st}`, {})
  //       .then(
  //         response => {
  //           /* eslint-disable */
  //           console.log(response);
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       );
  //   }
  }
};
</script>
 <style scoped>
 .students{
   margin:10px;
   padding:20px;
 }
 </style>
