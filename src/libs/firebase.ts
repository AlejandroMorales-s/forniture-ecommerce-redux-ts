import {initializeApp, getApps, getApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"
import {getAuth} from 'firebase/auth'

let app 
if(!getApps.length){
    app= initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        appId: process.env.REACT_APP_APP_ID,
    })
} else {
    app = getApp()
}

export const database = getFirestore(app)
export const auth = getAuth(app)