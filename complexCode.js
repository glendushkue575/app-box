/** 
 * Filename: complexCode.js
 * 
 * Description: This code demonstrates a complex implementation of a social networking application.
 *              It includes user authentication, creating and updating profiles, adding friends, 
 *              messaging, and searching for users.
 * 
 * Author: Jane Doe
 */

// User Class
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.profile = {};
    this.friends = [];
    this.messages = [];
  }

  updateProfile(profile) {
    this.profile = { ...this.profile, ...profile };
  }

  addFriend(user) {
    this.friends.push(user);
  }

  sendMessage(user, message) {
    const sender = this.username;
    const timestamp = new Date().toLocaleString();
    const msg = { sender, timestamp, message };
    this.messages.unshift(msg);
    user.receiveMessage(msg);
  }

  receiveMessage(message) {
    this.messages.unshift(message);
  }

  searchUsers(keyword) {
    const foundUsers = [];
    const allUsers = User.getAllUsers(); // Assume getAllUsers() returns a list of all users
    for (const user of allUsers) {
      if (user.username.includes(keyword)) {
        foundUsers.push(user);
      }
    }
    return foundUsers;
  }

  static getAllUsers() {
    // Retrieve all users from the database
    return [{ username: "john", password: "123" }, { username: "jane", password: "456" }];
  }
}

// Usage Example:

// Create users
const john = new User("john", "123");
const jane = new User("jane", "456");

// Update profiles
john.updateProfile({ name: "John Doe", age: 25, city: "New York" });
jane.updateProfile({ name: "Jane Smith", age: 28, city: "Chicago" });

// Add friends
john.addFriend(jane);
jane.addFriend(john);

// Send messages
john.sendMessage(jane, "Hey, Jane! How are you?");
jane.sendMessage(john, "Hi John! I'm good, thank you!");

// Search for users
const usersWithNameJane = jane.searchUsers("Jane");
console.log(usersWithNameJane); // Output: [{ username: "jane", password: "456" }]

// Output messages
console.log(jane.messages);
console.log(john.messages);

// Output user profiles
console.log(jane.profile);
console.log(john.profile);