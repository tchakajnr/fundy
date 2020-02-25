<template>
  <v-dialog max-width="220px">
    <template v-slot:activator="{ on }">
      <v-btn class="primary" dark v-on="on">
        <v-icon left dark>mdi-wechat</v-icon>Alipay
      </v-btn>
    </template>
    <template>
      <v-card>
        <v-card-title>
          <h5>Scan QR code</h5>
        </v-card-title>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-img
                height="200"
                width="200"
                src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </v-dialog>
</template>
