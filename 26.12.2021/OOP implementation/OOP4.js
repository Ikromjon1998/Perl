class User {
	static userCount = 0;
	static passwordLevel = 1;
	phoneNumber = "+99 890 9990999";
	email = "net.carieer@calvein.com";


	constructor(firstName, lastName, emailId = "", userId = "asinha") {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userId = userId;
		this.email = emailId;

		User.userCount++;

		console.log('User Count = ' + User.userCount);
	}

	getUserName() {
		return this.firstName + " " + this.lastName;
	}

	changeName(newFirstName, newLastName) {
		this.firstName = newFirstName;
		this.lastName = newLastName;
	}

	static create(firstName, lastName, emailId, userId) {
		return new User(firstName, lastName, emailId, userId);
	}

	whoAmI() {
		return "I am a User! " + " My email ID is " + this.email + " and my Password Level = " + User.passwordLevel;
	}
}
appUser = new User("Ravshan", "Umidov");

console.log( appUser.getUserName() + " with the Phone Number: " + appUser.phoneNumber);

anotherUser = User.create("Rustam", "Rashidov", "rustam.rashidov@uzbekistan.com", "rbattewad");

// console.log( anotherUser.getUserName() + " has a password level = " + User.#passwordLevel); <-- This will error out as you are trying to access private static variable. 

console.log( anotherUser.whoAmI());
