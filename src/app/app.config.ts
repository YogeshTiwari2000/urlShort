// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(), provideFirestore(() => getFirestore())]
// };


import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyBxk8H04-RuT8FHyPEW7S6UGflQExC34Os",
        authDomain: "urlshort-f37d6.firebaseapp.com",
        projectId: "urlshort-f37d6",
        storageBucket: "urlshort-f37d6.appspot.com",
        messagingSenderId: "77984990443",
        appId: "1:77984990443:web:fa5346112ce39a5806aaae",
        measurementId: "G-K608VY3RQL",
      })
    ),
  ],
};