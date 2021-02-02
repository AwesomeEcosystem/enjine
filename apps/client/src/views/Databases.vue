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
        Databases
        <div class="" v-if="databases">
          {{ databases }}
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-sm>
                IonCol [size="12"] [size-sm]
              </IonCol>
              <IonCol size="12" size-sm>
                IonCol [size="12"] [size-sm]
              </IonCol>
              <IonCol size="12" size-sm>
                IonCol [size="12"] [size-sm]
              </IonCol>
              <IonCol size="12" size-sm>
                IonCol [size="12"] [size-sm]
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { Session } from '@scale/session'

export default {
  name: 'Databases',
  async asyncData() {
    try {
      let databases: any = [];
      const session: any = new Session({
        host: 'ws://localhost:9090',
        gateway: 'data',
        // auth: ticket
      });

      setTimeout(() => {
        console.log(session);

        session.socket.emit('all', (err: any, res: any) => {
          if (err) {
            throw new Error(err)
          }
          databases = res;
        });
      }, 1000);

      return {
        session,
        databases
      };
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
    IonCol,
    IonGrid,
    IonRow
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
