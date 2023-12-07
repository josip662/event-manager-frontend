<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title> This is login page</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <h1>Log In</h1>
            <ion-list lines="none">
                <ion-item>
                    <ion-input
                      label-placement="floating"
                      value="example@gmai.com"  
                    >
                        <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
                    </ion-input>
                </ion-item>
            </ion-list>
            <LoginButton :label="buttonTittle"></LoginButton>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonList, IonItem, IonInput, IonText,} from '@ionic/vue';
import LoginButton from '@/components/buttons/LoginButton.vue'

const buttonTittle = 'LOG IN'
</script>

<style scoped>
ion-input {
    border: solid 1px black;
    border-radius: 10px;
    margin: 10px;
}
</style>