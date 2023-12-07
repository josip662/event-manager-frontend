<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
        <ion-button router-link="/login">Login</ion-button>
      </ion-header>
      <ion-item>
                    <ion-input
                      label-placement="floating"
                      value="example@gmai.com"  
                    >
                        <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
                    </ion-input>
                </ion-item>
                <ion-button router-link="/login">LogIn</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, 
         IonHeader, 
         IonToolbar, 
         IonTitle, 
         IonContent, 
         IonButton,
         IonItem,
         IonInput,
         IonText
        } from '@ionic/vue';


</script>
