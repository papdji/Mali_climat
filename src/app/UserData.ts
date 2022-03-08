import { Auth } from "firebase/auth";

export class UserData {
    static email(auth: Auth, email: any, password: any) {
      throw new Error('Method not implemented.');
    }
    email: string;
    nom: string;
    prenom: string;
    uid: string;
    ville: string;

    constructor(uid: string, email:string, nom: string, prenom: string,  ville: string) {
        this.uid = uid;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.ville = ville;

    }
}

export class LoginResult {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}

