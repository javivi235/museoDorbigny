<template>
    <v-container class="contact-form pa-10">
        <v-card raised shaped class="pa-7">
            <v-card-title>Contáctanos</v-card-title>
            <v-card-subtitle>Comunícate con nosotros y nos pondremos en contacto contigo tan pronto como sea posible. ¡Esperamos tener noticias tuyas!</v-card-subtitle>
            <v-card-text>
                <form>
                    <v-text-field
                        label="Nombre"
                        required
                    ></v-text-field>
                    <v-text-field
                        label="Correo electrónico"
                        required
                    ></v-text-field>
                    <v-textarea
                    color="teal"
                    >
                    <template v-slot:label>
                        <div>
                        Mensaje
                        </div>
                    </template>
                    </v-textarea>
                    <v-btn class="mr-4 success">Enviar</v-btn>
                </form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
