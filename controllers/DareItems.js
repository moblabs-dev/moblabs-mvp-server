'use strict';
import firebase from "../firebase.js";
import {io} from "../socket.js";


const firestore = firebase.firestore();
const daredb = firestore.collection("dare");

const dareObserver = daredb.onSnapshot((snapshot) => {
    console.log("Firestore Database => dareObserver has fired.");
    io.to("dare").emit("RECEIVE_DARE_HAS_CHANGED");
    console.log("Event => RECEIVED_DARE_HAS_CHANGED has been emitted to the socket.io server.");
});

export default dareObserver;
