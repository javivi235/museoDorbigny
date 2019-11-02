<template>
    <div :style="style">
        <v-container>
            <v-row>
                <v-col
                v-for="(item, i) in items"
                :key="i">
                    <v-card :color="color" class="column elevation-0">
                        <v-img
                        class="white--text align-end"
                        height="50vh"
                        :src="item.img"
                        >
                            <v-card-title>
                                {{item.title}}
                            </v-card-title>
                        </v-img>
                        <v-card-text class="text--primary">
                            {{item.content}}
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
  props: {
    color: String,
    items: Array
  },
  computed: {
    style () {
      return 'background-color: ' + this.color + '; height: 100vh;'
    }
  }
}
</script>
<style scoped>
.column {
    height: 80vh;
    width: 25vw;
    margin-top: 8vh;
}
</style>
