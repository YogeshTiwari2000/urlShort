// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';
// import { provideHttpClient, withFetch } from '@angular/common/http';
// import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
// import { FIREBASE_OPTIONS } from '@angular/fire/compat';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient(withFetch()), provideRouter(routes),
//   provideFirestore(() => getFirestore()), // Provide Firestore
//   provideAuth(() => getAuth()), // Provide Authentication
//   {
//     provide: FIREBASE_OPTIONS,
//     useValue: {
//       apiKey: "AIzaSyBxk8H04-RuT8FHyPEW7S6UGflQExC34Os",
//       authDomain: "urlshort-f37d6.firebaseapp.com",
//       projectId: "urlshort-f37d6",
//       storageBucket: "urlshort-f37d6.firebasestorage.app",
//       messagingSenderId: "77984990443",
//       appId: "1:77984990443:web:fa5346112ce39a5806aaae",
//       measurementId: "G-K608VY3RQL"
//     }
//   },
//   provideFirebaseApp(() => initializeApp(
//     {
//       apiKey: "AIzaSyBxk8H04-RuT8FHyPEW7S6UGflQExC34Os",
//       authDomain: "urlshort-f37d6.firebaseapp.com",
//       projectId: "urlshort-f37d6",
//       storageBucket: "urlshort-f37d6.firebasestorage.app",
//       messagingSenderId: "77984990443",
//       appId: "1:77984990443:web:fa5346112ce39a5806aaae",
//       measurementId: "G-K608VY3RQL"
//     }
//   )),
//   ], // Use the defined routes
// })
//   .catch((err) => console.error(err));


// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBxk8H04-RuT8FHyPEW7S6UGflQExC34Os",
      authDomain: "urlshort-f37d6.firebaseapp.com",
      projectId: "urlshort-f37d6",
      storageBucket: "urlshort-f37d6.appspot.com",
      messagingSenderId: "77984990443",
      appId: "1:77984990443:web:fa5346112ce39a5806aaae",
      measurementId: "G-K608VY3RQL"
    })),
  ]
}).catch((err) => console.error(err));
