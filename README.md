![](media/b0e74e5e0d398443008de5afa078663c.jpg)

INFORMATIKOS FAKULTETAS

**T120B165 Saityno taikomųjų programų projektavimas**

**Projekto ataskaita**

|  Studentas:   | Robertas Trumpauskas, IFF-9/9  |
|---------------|--------------------------------|
|  Dėstytojai:  | Tomas Blažauskas               |

KAUNAS 2022

**Turinys**

[1. Sprendžiamo uždavinio aprašymas 3](#sprendžiamo-uždavinio-aprašymas)

[1.1. Sistemos paskirtis 3](#sistemos-paskirtis)

[1.2. Funkciniai reikalavimai 3](#funkciniai-reikalavimai)

[2. Sistemos architektūra 4](#sistemos-architektūra)

[3. API specifikacija 5](#api-specifikacija)

[4. Wireframes 14](#wireframes)

[5. Išvados 19](#išvados)

# Sprendžiamo uždavinio aprašymas

## Sistemos paskirtis

Projekto tikslas – Sukurti ekskursijų „book‘inimo“, pirkimo puslapį.

Veikimo principas – pačią kuriamą platformą sudaro dvi dalys: internetinė aplikacija, kuria naudosis vartotojai, administratorius bei aplikacijų programavimo sąsaja (angl. trump. API).

Vartotojas, norėdamas naudotis šia platforma, prisiregistruos prie internetinės aplikacijos ir galės peržiųrėti galimas ekskursijas ir jų aprašimus, jas pirkti, gauti įvairius el. laiškus.

Administratorius gali sukurti naujas ekskursijas, jas redaguoti, šalinti, peržiūrėti kas yra užsisake tam tikras ekskursijas.

Repozitorija: https://github.com/Ropke13/Saitynai

## Funkciniai reikalavimai

Neregistruotas sistemos naudotojas galės:

1.  Peržiūrėti platformos reprezentacinį puslapį.
2.  Peržiūrėti galimas ekskursijas.
3.  Prisijungti prie internetinės aplikacijos.

    Registruotas sistemos naudotojas galės:

    1\. Atsijungti nuo internetinės aplikacijos; 2.

    Prisijungti (užsiregistruoti) prie platformos;

4.  Peržiūrėti galimas ekskursijas.
5.  Peržiūrėti savo užsakymus.
6.  Atšaukti rezervacija.
7.  Gauti el. Laiškus apie įvairius patvirtinimus(rezervacijos, mokejimo).

    Administratorius galės:

8.  Sukurti naujas ekskursijas.
9.  Redaguoti ekskursijas
10. Šalinti ekskursijas.

# Sistemos architektūra

Naudojamos technologijos: Node.js, Express.js, MongoDB.

2.1 pav. pavaizduota kuriamos sistemos diegimo diagrama.

![](media/4385c60edd1c39b7bb7da84d6de1a979.jpg)

**2.1 pav.** Sistemos diegimo diagrama

# API specifikacija

-   Turu CRUD

| **Gauti visus turus**          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API metodas                    | GET                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Kelias iki metodo              | /api/v1/tours                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Vartotojai, galintys pasiekti  | Visi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Paskirtis                      | Gauti visus turus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Užklausos „Header“ dalis       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Užklausos struktūra            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Atsakymo struktūra             | {   "startLocation": {   "type": "Point",   "coordinates": [   -106.822318,   39.190872   ],   "description": "Aspen, USA"   },   "ratingAverage": 4.5,   "ratingsQuantity": 6,   "images": [   "tour-3-1.jpg",   "tour-3-2.jpg",   "tour-3-3.jpg"   ],   "createdAt": "2022-10- 20T22:11:04.427Z",   "startDates": [   "2022-01-05T10:00:00.000Z",   "2022-02-12T10:00:00.000Z",   "2023-01-06T10:00:00.000Z"   ],   "_id": "5c88fa8cf4afda39709c295a",   "name": "The Snow Adventurer",   "duration": 4,   "maxGroupSize": 10,   "difficulty": "difficult",   "price": 997,    |
| Atsakymo kodas                 | 200 (OK)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Galimi klaidų kodai            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Užklausos pavyzdys             | 127.0.0.1:3000/api/v1/tours                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Gauto atsakymo pavyzdys        | {   "startLocation": {   "type": "Point",   "coordinates": [   -106.822318,   39.190872                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                |  ],   "description": "Aspen, USA"   },   "ratingAverage": 4.5,   "ratingsQuantity": 6,   "images": [   "tour-3-1.jpg",   "tour-3-2.jpg",   "tour-3-3.jpg"   ],   "createdAt": "2022-10- 20T22:11:04.427Z",   "startDates": [   "2022-01-05T10:00:00.000Z",   "2022-02-12T10:00:00.000Z",   "2023-01-06T10:00:00.000Z"   ],   "_id": "5c88fa8cf4afda39709c295a",   "name": "The Snow Adventurer",   "duration": 4,   "maxGroupSize": 10,   "difficulty": "difficult",   "price": 997,                                                                                             |

| **Gauti 1 tura**               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API metodas                    | GET                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Kelias iki metodo              | /api/v1/tours/{id}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Vartotojai, galintys pasiekti  | Visi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Paskirtis                      | Gauti konkretu tura                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Užklausos „Header“ dalis       | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Užklausos struktūra            | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Atsakymo struktūra             | "tour": {   "startLocation": {   "type": "Point",   "coordinates": [   -106.822318,   39.190872   ],   "description": "Aspen, USA"   },   "ratingAverage": 4.5,   "ratingsQuantity": 6,   "images": [   "tour-3-1.jpg",   "tour-3-2.jpg",   "tour-3-3.jpg"   ],   "createdAt": "2022-10-20T22:11:04.427Z",   "startDates": [                                                                                                                                                                                                                                                                                         |
|                                |  "2022-01-05T10:00:00.000Z",   "2022-02-12T10:00:00.000Z",   "2023-01-06T10:00:00.000Z"   ],   "_id": "5c88fa8cf4afda39709c295a",   "name": "The Snow Adventurer",   "duration": 4,   "maxGroupSize": 10,   "difficulty": "difficult",   "price": 997,   "summary": "Exciting adventure in the sn                                                                                                                                                                                                                                                                                                                    |
| Atsakymo kodas                 | 200 (OK)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Galimi klaidų kodai            | 404 - nerastas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Užklausos pavyzdys             | 127.0.0.1:3000/api/v1/tours/5c88fa8cf4afda39709c295a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Gauto atsakymo pavyzdys        | "tour": {   "startLocation": {   "type": "Point",   "coordinates": [   -106.822318,   39.190872   ],   "description": "Aspen, USA"   },   "ratingAverage": 4.5,   "ratingsQuantity": 6,   "images": [   "tour-3-1.jpg",   "tour-3-2.jpg",   "tour-3-3.jpg"   ],   "createdAt": "2022-10-20T22:11:04.427Z",   "startDates": [   "2022-01-05T10:00:00.000Z",   "2022-02-12T10:00:00.000Z",   "2023-01-06T10:00:00.000Z"   ],   "_id": "5c88fa8cf4afda39709c295a",   "name": "The Snow Adventurer",   "duration": 4,   "maxGroupSize": 10,   "difficulty": "difficult",   "price": 997,   "summary": "Exciting adven    |

| **Sukurti nauja tura**         |                |
|--------------------------------|----------------|
| API metodas                    | POST           |
| Kelias iki metodo              | /api/v1/tours  |
| Vartotojai, galintys pasiekti  | Admin          |

| Paskirtis                 | Sukurti nauja tura                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Užklausos „Header“ dalis  | “Authorization”: Bearer {access_token}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Užklausos struktūra       | "status": "success",   "data": {   "tour": {   "startLocation": {   "type": "Point",   "coordinates": [] },   "ratingAverage": 4.5,   "ratingsQuantity": 0,   "images": [],   "createdAt": "2022-12- 22T21:04:10.861Z",   "startDates": [],   "_id": "63a4cdaa6b70b934648ccaf3",   "name": "Testsdcsdcsdc",   "duration": 1,   "maxGroupSize": 1,   "difficulty": "easy",   "price": 1,   "summary": "Test test tes",   "imageCover": "tour-3-cover.jpg",   "locations": [],   "__v": 0,   "durationWeeks": 0.14285714285714285,   "id": "63a4cdaa6b70b934648ccaf3"   }   }  }    |
| Atsakymo struktūra        | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Atsakymo kodas            | 201 (OK)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Galimi klaidų kodai       | 400 (Bad request)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Užklausos pavyzdys        | 127.0.0.1:3000/api/v1/tours                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Gauto atsakymo pavyzdys   | "status": "success",   "data": {   "tour": {   "startLocation": {   "type": "Point",   "coordinates": [] },   "ratingAverage": 4.5,   "ratingsQuantity": 0,   "images": [],   "createdAt": "2022-12- 22T21:04:10.861Z",   "startDates": [],   "_id": "63a4cdaa6b70b934648ccaf3",   "name": "Testsdcsdcsdc",   "duration": 1,                                                                                                                                                                                                                                                      |
|                           |  "maxGroupSize": 1,   "difficulty": "easy",   "price": 1,   "summary": "Test test tes",   "imageCover": "tour-3-cover.jpg",   "locations": [],   "__v": 0,   "durationWeeks": 0.14285714285714285,   "id": "63a4cdaa6b70b934648ccaf3"   }   }  }                                                                                                                                                                                                                                                                                                                                  |

| **Ištrinti turą**              |                                         |
|--------------------------------|-----------------------------------------|
| API metodas                    | DELETE                                  |
| Kelias iki metodo              | /api/v1/tours/{id}                      |
| Vartotojai, galintys pasiekti  | Admin                                   |
| Paskirtis                      | Ištrinti turą                           |
| Užklausos „Header“ dalis       | “Authorization”: Bearer {access_token}  |
| Užklausos struktūra            | -                                       |
| Atsakymo struktūra             | -                                       |
| Atsakymo kodas                 | 204 (no Content)                        |
| Galimi klaidų kodai            | -                                       |
| Užklausos pavyzdys             | -                                       |
| Gauto atsakymo pavyzdys        | -                                       |

| Redaguoti turą                 |                                                                                                                                                                               |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API metodas                    | PATCH                                                                                                                                                                         |
| Kelias iki metodo              | /api/v1/tours/{id}                                                                                                                                                            |
| Vartotojai, galintys pasiekti  | Admin                                                                                                                                                                         |
| Paskirtis                      | Redaguoti turą                                                                                                                                                                |
| Užklausos „Header“ dalis       | “Authorization”: Bearer {access_token}                                                                                                                                        |
| Užklausos struktūra            | {   "name": "sitas turetu pasikeisti123",   "duration": 8  }                                                                                                                  |
| Atsakymo struktūra             | "status": "success",   "data": {   "tour": {   "startLocation": {   "type": "Point",   "coordinates": [   -115.172652,   36.110904   ], "description": "Las Vegas, USA"   },  |

|                          |  "ratingAverage": 4.5,   "ratingsQuantity": 7,   "images": [   "tour-5-1.jpg",   "tour-5-2.jpg",   "tour-5-3.jpg"   ],   "createdAt": "2022-10- 20T22:11:04.427Z",   "startDates": [   "2021-08-05T09:00:00.000Z",   "2022-03-20T10:00:00.000Z",   "2022-08-12T09:00:00.000Z"   ],   "_id": "5c88fa8cf4afda39709c2961",   "name": "sitas turetu pasikeisti123s",   "duration": 8,   "maxGroupSize": 15,   "difficulty": "medium",   "price": 1497,                                                                                                               |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Atsakymo kodas           | 200(OK)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Galimi klaidų kodai      | 400(Bad Request)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Užklausos pavyzdys       | 127.0.0.1:3000/api/v1/tours/5c88fa8cf4afda39709c2961                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Gauto atsakymo pavyzdys  | "status": "success",   "data": {   "tour": {   "startLocation": {   "type": "Point",   "coordinates": [   -115.172652,   36.110904   ], "description": "Las Vegas, USA"   },   "ratingAverage": 4.5,   "ratingsQuantity": 7,   "images": [   "tour-5-1.jpg",   "tour-5-2.jpg",   "tour-5-3.jpg"   ],   "createdAt": "2022-10- 20T22:11:04.427Z",   "startDates": [   "2021-08-05T09:00:00.000Z",   "2022-03-20T10:00:00.000Z",   "2022-08-12T09:00:00.000Z"   ],   "_id": "5c88fa8cf4afda39709c2961",   "name": "sitas turetu pasikeisti123s",   "duration": 8,  |
|                          |  "maxGroupSize": 15,   "difficulty": "medium",   "price": 1497,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

-   Atsiliepimai CRUD

| **Gauti visus turo atsiliepimus**  |                                                                                                                                                                                                                                           |
|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API metodas                        | GET                                                                                                                                                                                                                                       |
| Kelias iki metodo                  | /api/v1/tours/{id}/reviews                                                                                                                                                                                                                |
| Vartotojai, galintys pasiekti      | Visi                                                                                                                                                                                                                                      |
| Paskirtis                          | Gauti turo visus atsiliepimus                                                                                                                                                                                                             |
| Užklausos „Header“ dalis           | -                                                                                                                                                                                                                                         |
| Užklausos struktūra                | -                                                                                                                                                                                                                                         |
| Atsakymo struktūra                 | "reviews": [   {   "_id": "6351d49203cb0c1a9cb24092",   "review": "Amazing tour",   "rating": 5,   "tour": "5c88fa8cf4afda39709c2955",   "createdAt": "2022-10- 20T23:06:58.165Z",   "__v": 0,   "id": "6351d49203cb0c1a9cb24092"   },    |
| Atsakymo kodas                     | 200 (OK)                                                                                                                                                                                                                                  |
| Galimi klaidų kodai                | 404 (Not found)                                                                                                                                                                                                                           |
| Užklausos pavyzdys                 | 127.0.0.1:3000/api/v1/tours/{id}/reviews                                                                                                                                                                                                  |
| Gauto atsakymo pavyzdys            | "reviews": [   {   "_id": "6351d49203cb0c1a9cb24092",   "review": "Amazing tour",   "rating": 5,   "tour": "5c88fa8cf4afda39709c2955",   "createdAt": "2022-10- 20T23:06:58.165Z",   "__v": 0,   "id": "6351d49203cb0c1a9cb24092"   },    |

| **Gauti turo atsiliepimą**     |                                                                                                                                                                                                                                                                          |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API metodas                    | GET                                                                                                                                                                                                                                                                      |
| Kelias iki metodo              | /api/v1/tours/{id}/reviews/{reviewID}                                                                                                                                                                                                                                    |
| Vartotojai, galintys pasiekti  | Visi                                                                                                                                                                                                                                                                     |
| Paskirtis                      | Gaut specifinio turo 1 atsiliepimą                                                                                                                                                                                                                                       |
| Užklausos „Header“ dalis       | -                                                                                                                                                                                                                                                                        |
| Užklausos struktūra            | -                                                                                                                                                                                                                                                                        |
| Atsakymo struktūra             | "review": {                                                                                                                                                                                                                                                              |
|                                |  "_id": "6351d49203cb0c1a9cb24092",   "review": "Amazing tour",   "rating": 5,   "tour": "5c88fa8cf4afda39709c2955",   "createdAt": "2022-10- 20T23:06:58.165Z",   "__v": 0,   "id": "6351d49203cb0c1a9cb24092"   }                                                      |
| Atsakymo kodas                 | 200 (OK)                                                                                                                                                                                                                                                                 |
| Galimi klaidų kodai            | 404 (Not Found)                                                                                                                                                                                                                                                          |
| Užklausos pavyzdys             | 127.0.0.1:3000/api/v1/tours/5c88fa8cf4afda39709c2955  /reviews/6351d49203cb0c1a9cb24092                                                                                                                                                                                  |
| Gauto atsakymo pavyzdys        | "status": "success",   "data": {   "review": {   "_id": "6351d49203cb0c1a9cb24092",   "review": "Amazing tour",   "rating": 5,   "tour": "5c88fa8cf4afda39709c2955",   "createdAt": "2022-10- 20T23:06:58.165Z",   "__v": 0,   "id": "6351d49203cb0c1a9cb24092"   } }    |

| **Ištrinti atsiliepimą**       |                                                                                          |
|--------------------------------|------------------------------------------------------------------------------------------|
| API metodas                    | DELETE                                                                                   |
| Kelias iki metodo              | /api/v1/tours/{id}/reviews/{id}                                                          |
| Vartotojai, galintys pasiekti  | Admin, User                                                                              |
| Paskirtis                      | Istrinti atsiliepimą                                                                     |
| Užklausos „Header“ dalis       | “Authorization”: Bearer {access_token}                                                   |
| Užklausos struktūra            | -                                                                                        |
| Atsakymo struktūra             | -                                                                                        |
| Atsakymo kodas                 | 204 (no Content)                                                                         |
| Galimi klaidų kodai            | -                                                                                        |
| Užklausos pavyzdys             | 127.0.0.1:3000/api/v1/tours/5c88fa8cf4afda39709c296c  /reviews/63527179d4d7da38cc3fef35  |
| Gauto atsakymo pavyzdys        |                                                                                          |

-   Užsakymai CRUD

| **Gauti užsakymo informacija**  |                                                                                                                                                                                          |
|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API metodas                     | GET                                                                                                                                                                                      |
| Kelias iki metodo               | /api/v1/bookings/{id}                                                                                                                                                                    |
| Vartotojai, galintys pasiekti   | Vartotojas                                                                                                                                                                               |
| Paskirtis                       | Gauti informacija apie užsakymą                                                                                                                                                          |
| Užklausos „Header“ dalis        | “Authorization”: Bearer {access_token}                                                                                                                                                   |
| Užklausos struktūra             | -                                                                                                                                                                                        |
| Atsakymo struktūra              | "status": "success",   "data": {   "booking": {   "_id": "635279daf6ad3422180278fb",   "createdAt": "2022-10- 21T10:52:10.611Z",   "__v": 0,   "id": "635279daf6ad3422180278fb"   } }    |
| Atsakymo kodas                  | 200(OK)                                                                                                                                                                                  |
| Galimi klaidų kodai             | 404(Not Found)                                                                                                                                                                           |
| Užklausos pavyzdys              | 127.0.0.1:3000/api/v1/bookings/635279daf6ad3422180278fb                                                                                                                                  |
| Gauto atsakymo pavyzdys         | "booking": {   "_id": "635279daf6ad3422180278fb",   "createdAt": "2022-10- 21T10:52:10.611Z",   "__v": 0,   "id": "635279daf6ad3422180278fb"   }                                         |

# Wireframes

-   Index page Wireframe:

![](media/a5cc4fbb87436e060be0c823fa8117fe.jpg)

Rezultatas:

![](media/b45886af6c29ff276ee33f40a99a1b73.jpg)

-   Tour detail page Wireframe:

![](media/51b5ae315c4f220a14522c4579756744.jpg)

Rezultatas:

![](media/1ab4415d7227207efcd5a43cc999d9f3.jpg)

![](media/71efcf6f79b998d594e8649ce672f302.jpg)

-   Login page Wireframe:

![](media/58a0189f7502b0f6eac17bd43e74e96d.jpg)

Rezultatas:

![](media/d1b422fb98b522cd8fd1db891cec8f4b.jpg)

# Išvados

Saitynų taikomųjų programų projektavimo moduliui buvo sukurta svetainė, skirta įvairių turų užsisakymui, peržiūrai. Buvo suprogramuotos CRUD funkcijos su užsakymais, Turais bei atsiliepimais. Kuriant serverio dalį buvo remtąsi REST principais, įrankiai, kuriais buvo naudojimąsi – Node.js, Expres.js, duomenų bazė - MongoDb. Vartotjo sąsaja buvo sukurta pasinaudojant PUG templates. Projekto pabaigoje sudaryta dokumentacija - aprašytas kiekvienas API kreipinys, kokius parametrus reikia paduoti bei koks yra numatomas rezultatas. Svetaines pilnai užbaigti nepavyko, nes praleista per daug laiko kuriant vartotojo sąsaja. API užklausas pavyko padaryti visas kurios buvo planuotos.
