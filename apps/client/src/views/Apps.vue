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
            <div class="" v-for="(data, _id) in database.data" v-bind:key="_id">
              {{ data }}
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

    let ticket: any = reactive({});
    let session: any = reactive({});

    const database: any = reactive({
      data: []
    });

    onMounted(async () => {
      ticket = await auth.login({ username: 'admin', password: 'admin' }).catch(e => console.log(e))
      console.log(ticket);

      session = new Session({
        host: 'http://localhost:9090',
        gateway: 'data',
        // ticket
      })

      database.data = await session.emit('all')

      // session.socket.on('put')
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
