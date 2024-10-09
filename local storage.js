//Local storage

//set something in the local storage
// localStorage.setItem("token", "hello");

// //getting bsomething from the kocal storage
// localStorage.getItem("token");

// //remove values in the locsl storage
// localStorage.removeItem("token")

// localStorage.clear()

//local storag can nonly take in strings

const user = {
  id: 1,
  theme: "dark",
};

// JSON.stringify
// javascript objeck notation
localStorage.setItem("user", JSON.stringify(user));
//JSON.parse
JSON.parse(localStorage.getItem("user"));

