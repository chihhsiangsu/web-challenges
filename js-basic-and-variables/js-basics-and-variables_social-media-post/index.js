console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--

let title = "March Pupup!";
let content = "Next Pop up is coming on next week";
let popular = "Likes:";
let numberOfLikes = 250;
const accountUser = "SuSu";
let isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. 
Then increase the number of likes by one and log the updated like count. 
Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--

console.log(title);
console.log(content);
console.log(popular, numberOfLikes);
console.log(accountUser);
console.log(isReported);

numberOfLikes = numberOfLikes + 100;
console.log(popular, numberOfLikes);

// --^-- write your code here --^--
