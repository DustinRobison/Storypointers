"use client";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config";

// TODO debug and find out why .env.local vars arent working in browser when prefixed as docs recommend: https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
// const {
//   NEXT_PUBLIC_APIKEY,
//   NEXT_PUBLIC_AUTHDOMAIN,
//   NEXT_PUBLIC_DATABASEURL,
//   NEXT_PUBLIC_PROJECTID,
//   NEXT_PUBLIC_STORAGEBUCKET,
//   NEXT_PUBLIC_MESSAGINGSENDERID,
//   NEXT_PUBLIC_APPID,
//   NEXT_PUBLIC_MEASUREMENTID,
// } = process.env;

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
