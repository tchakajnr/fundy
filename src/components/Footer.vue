<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        <v-flex>
          <Socialicons />
        </v-flex>
      </v-col>

      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Code Trojans</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import Socialicons from "./Socialicons";

export default {
  components: {
    Socialicons
  },
  data: () => ({})
};
</script>

<style>
</style>

