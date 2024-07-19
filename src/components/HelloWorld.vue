<template>
  <v-app>
    <v-container>
      <v-btn @click="showAlert">Click Me</v-btn>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VBtn, VContainer } from "vuetify/components";

function showAlert() {
  alert("Button clicked!");
}
</script>

<style>
@import "vuetify/styles";
</style>
