class User {constructor( firstName, lastName, userId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userId = userId;
    }
    getUserName() {
    return this.firstName + " " + this.lastName;
    }
    changeName(newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
    }
    // get userId(){
    //     return this.userId;
    // }
}

class PowerUser extends User {
    constructor (firstName, lastName, userId, role) {
        super(firstName, lastName, userId);
        this.role = role;
    }
    getUserRole () {
        return this.role;
    }

    // get userId(){
    //     return super.userId;
    // }
    // set userId(uId){
    //     this.userId = uId
    // }
    
}

appUser = new PowerUser("Alo", "Tohirov", "atohirov", "Accountant");
// document.getElementById("name").innerHTML = appUser.getUserName();
// document.getElementById("userId").innerHTML = appUser.getUserId();
// document.getElementById("roleId").innerHTML = appUser.getUserRole();
console.log( appUser instanceof PowerUser);
console.log( appUser instanceof User);

class CustomMap extends Map {
	get(entry) {
		let valueForKey = super.get(entry);

		if ( valueForKey == undefined ) {
			return "The value for the " + entry + " does not exist!";
		} else {
			return valueForKey;
		}
	}
}

let userArray = [['rb', 'Ranjit Battewad'], ['as', 'Abhilasha Sinha'], ['ar', 'Alok Ranjan']];

let mapInstance = new CustomMap(userArray);

console.log(mapInstance.get('as'));

console.log(mapInstance.get('ps'));
