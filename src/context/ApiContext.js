//import axios from "axios"; // Axios importálása HTTP kérésekhez
import { createContext, useEffect, useState } from "react"; // Szükséges React hookok importálása
import { myAxios } from "./MyAxios";

// Új kontextus létrehozása, amely az API adatokat fogja tárolni
export const ApiContext = createContext("");

// ApiProvider komponens definiálása, amely az API-ból lekért adatokat tartalmazza
export const ApiProvider = ({ children }) => {
    const [termekLista, setTermekLista] = useState([]); // Állapot a termékek listájának tárolására
   // const vegpont = "https://fakestoreapi.com/products"; // API végpont URL-je

    // Aszinkron függvény az adatok lekérésére az API-ból
    const getAdat = async (vegpont) => {
        try {
            const response = await myAxios.get(vegpont); // HTTP GET kérés az API végpontra
            setTermekLista(response.data); // A válasz adatainak beállítása a termekLista állapotban
        } catch (err) {
            console.log("Hiba történt az adatok lekérdésekor:"); // Hibakezelés
        } finally {
            // A végrehajtás után lefutó kód (ha szükséges)
        }
    };

    // Aszinkron hívások kezelése useEffect hook segítségével
    useEffect(() => {
        getAdat("/products"); // Az adatok lekérése a komponens első renderelésekor
    }, []); // Üres dependency lista, tehát csak egyszer fut le

    // Visszatérünk a Provider elemmel, amely a termekLista-t osztja meg a children komponensekkel
    return (
        <ApiContext.Provider value={{ termekLista }}>
            {children}
        </ApiContext.Provider>
    );
};
