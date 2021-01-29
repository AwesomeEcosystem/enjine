<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        Apps
        <IonCard>
          <IonCardHeader>
            Header
          </IonCardHeader>
          <IonCardContent>
            <div class="" v-for="(data) in database.user" v-bind:key="data">
              {{ data.username }}
            </div>
          </IonCardContent>
        </IonCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent } from '@ionic/vue';
import { Auth, Session } from '@scale/session'
// IonCol, IonGrid, IonRow
export default defineComponent({ // TODO Interfaces
  name: 'Folder',
  setup() {

    const auth = new Auth({
      host: 'http://localhost:9090',
      gateway: 'auth'
    })

    let ticket: any = {};
    let session: any = {};

    const database: any = reactive({
      data: [],
      user: []
    });

    onMounted(async () => {
      ticket = await auth.login({ username: 'admin', password: 'admin' })
      console.log(ticket);

      session = new Session({
        host: 'http://localhost:9090',
        gateway: 'user',
        ticket
      })

      database.user = await session.emit('all')
    })

    return {
      auth,
      ticket,
      session,
      database
    }
  },
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent
  }
})
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
