import firebase from "../Config/FirebaseConfig";

const SocialMediaAuth = (provider) => {
	return firebase
		.auth()
		.signInWithPopup(provider)
		.then((res) => {
			return res.user;
		})
		.catch((error) => {
			console.log(error);
		});
};

export default SocialMediaAuth;
