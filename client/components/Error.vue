<template>
  <v-card>
    <v-toolbar
      class="secondary"
      dense
      dark
      card
    >
      <v-toolbar-title>
        {{ $t(`ui.errors.title`) }}
      </v-toolbar-title>
    </v-toolbar>
    {{ route }}
    <v-card-text class="text-xs-center">
      <h1 class="display-4 font-weight-black teal--text">
        {{ error.statusCode }}
      </h1>
      <h4 class="headline">
        {{ $t(`ui.errors.${error.statusCode}`) }}
      </h4>
      <v-btn
        color="teal"
        class="white--text mt-5"
        @click="back"
      >
        {{ $t('ui.back') }}
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['error']
};
</script>
