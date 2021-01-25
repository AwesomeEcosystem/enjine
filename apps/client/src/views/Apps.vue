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
            Content
          </IonCardContent>
        </IonCard>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { Session } from '@scale/session'

export default {
  name: 'Folder',
  // data() {
  //   return {
  //     session: null,
  //     database: null
  //   }
  // },
  async mounted() {
    try {
      const session: any = new Session({
        host: 'ws://localhost:9090',
        gateway: 'data',
        // auth: ticket
      });

      let apps: any = [];

      setTimeout(() => {
        console.log(session);

        session.socket.emit('all', (err: any, res: any) => {
          if (err) {
            throw new Error(err)
          }
          apps = res;
        });
      }, 1000);

      return {
        session,
        apps
      }
    } catch (error) {
      console.log(error);
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
}
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
