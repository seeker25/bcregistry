<template>
  <v-container></v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  middleware({ $config, redirect }) {
    return redirect($config.supportFilingUrl);
  }
})
</script>