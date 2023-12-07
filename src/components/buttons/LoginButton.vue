<template>
    <ion-button
    color="tertiary"
    expand="full"
    size="large"
    shape="round"

    >
    {{ props.label }}
        <ion-icon slot="end" :icon="arrowForwardCircle"></ion-icon>
    </ion-button>
</template>

<script setup lang="ts">
import { IonButton, IonIcon,} from '@ionic/vue'
import { arrowForwardCircle } from 'ionicons/icons';


const props = defineProps({
    label: { type: String, required: true }
})

</script>

<style scoped>
ion-button {
    margin: 10px 30px 10px 30px;
}
</style>