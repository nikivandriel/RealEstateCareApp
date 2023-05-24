<template>
    <RouterLink class="clickable-card" :to=action.routerLink v-for="(action) in quickActionData.actions">
        <ion-card>
            <ion-card-header>
                <ion-card-title class="card-title">{{ action.title }}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-icon :src="getImageUrl(action.svg)"></ion-icon>
            </ion-card-content>
        </ion-card>
    </RouterLink>
</template>
  
<script lang="js">
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/vue';
import { readerOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import quickActionData from '@/data/quickActionData';
import mixins from '@/mixins/mixins';
import '../theme/main.css';

export default defineComponent({
    name: 'QuickAction',
    components: { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon },
    props: {
    },
    setup() {
        return {
            readerOutline
        }
    },
    data() {
        return {
            quickActionData
        }
    },
    mixins: [mixins],
});
</script>

<style scoped>
ion-card {
    margin-inline: 12px;
}

ion-icon {
    font-size: 96px;
    color: #00a8a0;
}

.clickable-card {
    text-decoration: none;
    width: 200px;
}

.card-title {
    font-size: 22px;
}

@media screen and (max-width: 410px) {
    .clickable-card {
        width: 180px;
    }

    .card-title {
        font-size: 18px;
    }
}
</style>