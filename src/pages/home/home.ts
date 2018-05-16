import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import{AngularFireAuth} from 'angularfire2/auth'
import firebase from 'firebase'

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	provider = {

		name:'',
		profilePicture: '',
		email: '',
		loggedin: false
	}


	constructor(private fire: AngularFireAuth, 
		public navCtrl: NavController, 
		public ref: ChangeDetectorRef) {

	}

	

		login (provider) {
			let signInProvider = null;
			switch (provider) {
				case "facebook":
					signInProvider= new firebase.auth.FacebookAuthProvider();

					break;
				case "google":
					signInProvider=new firebase.auth.GoogleAuthProvider();

				// code...
					break;

				case "twitter":
					signInProvider = new firebase.auth.TwitterAuthProvider();

					break;

				case "github":
					signInProvider= new firebase.auth.GithubAuthProvider();
					break;

				}

				this.fire.auth.signInWithPopup (signInProvider)
				.then( res => { 
					console.log ('Logging in with '+ provider);
					this.provider.loggedin = true;
					this.provider.name=res.user.displayName;
					this.provider.email=res.user.email;
					this.provider.profilePicture=res.user.photoURL;			
					this.ref.detectChanges();
					console.log(res);

				})
				
			}
	

		logout() {
			this.fire.auth.signOut();
			this.provider.loggedin=false;

		}
	}

