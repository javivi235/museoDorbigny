<template>
    <v-content>
        <v-card id="f-contact" dark class="elevation-0">
            <v-card-title>Contacto</v-card-title>
            <v-list-item two-line>

                <v-list-item-content>
                    <v-list-item-title class="headline">Email</v-list-item-title>
                    <v-list-item-subtitle id="f-email">info@museodorbigny.org</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-list-item two-line>

                <v-list-item-content>
                    <v-list-item-title id="f-phone" class="headline">Teléfono</v-list-item-title>
                    <v-list-item-subtitle id="f-number">(+591 4) 44 8 6969</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item four-line>

                <v-list-item-content>
                    <v-list-item-title id="f-direction" class="headline">Dirección</v-list-item-title>
                    <v-list-item-subtitle id="f-name">Museo de Historia Natural Alcide d'Orbigny</v-list-item-subtitle>
                    <v-list-item-subtitle id="f-adress">Av. Potosi Nº 1458</v-list-item-subtitle>
                    <v-list-item-subtitle id="f-city">Cochabamba - Bolivia</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-card>
    </v-content>
</template>
<script>
export default {
  name: 'Contact'
}
</script>
<style scoped>

</style>
