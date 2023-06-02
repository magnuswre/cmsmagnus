import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.scss'
import { BrowserRouter } from 'react-router-dom'

import CartProvider from './contexts/CartContext.jsx'
import UserContextProvider from './contexts/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <UserContextProvider>
        <App />
        </UserContextProvider>
    </CartProvider>
  </BrowserRouter>
);


// I denna uppgift ska du enskilt bygga upp ett Content Management System (CMS) i React.js som är kopplat 
// till den produkt-databas som ni använder i gruppuppgiften.
// Det är okej att ni hjälper varandra med uppgiften men det huvudsakliga arbetet ska utföras individuellt.


// All sidor som behövs för din lösning ska vara byggda med React.js och du ska använda react-router för att navigera mellan dessa.
// Alla variabelnamn och funktioners namn ska vara på engelska.
// Du ska kommentera i din kod där det kan vara lämpligt och alla kommentarer skall vara skrivna på engelska.
// Man ska kunna logga in på sidan med ett administratörs konto.
// Du ska lista upp alla produkter i en förenklad lista på en egen sida.
// Man ska kunna få upp information om en enskild produkt på en separat sida.
// Man ska kunna ändra på och uppdatera en produkt på databasen.
// Man ska kunna ta bort en produkt från databasen.
// Man ska kunna lägga till en ny produkt på databasen.


// För betyget väl godkänt (VG):
// + Alla routes ska vara skyddade så att man blir omdirigerad till en login / start sida om man inte är inloggad.
//   Man ska som inloggad administratör kunna se alla ordrar från alla användare i en lista.
// Man ska kunna se detaljer om en enskild order på en separat sida.
// Man ska kunna ändra orderstatus på en order från tex: "pending" till "in transit" eller liknande.
// Du ska ha minst ett enkelt enhetstest.

// Instruktioner
// Här kommer du att behöva fundera ut själv vilka sidor som kan behövas för att lösa uppgiften. Tänk på att det är eran gemensamma backend lösning som ni har i gruppen som ska användas. Därför kan det vara bra att redan från start gemensamt bygga iordning eran backend för att fungera med ett sådant här system.
// Skulle du behöva någon ändring i systemet så får du ta upp det med gruppen och ni får göra ett gemensamt beslut om detta är okej eller inte.

