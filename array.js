
var myArr=[

{
login: "natalie03",
avatar_url: "https://avatars.githubusercontent.com/u/8239005?v=2",
followers: 5,
following: 5,
location: "Charleston, SC / Louisville, KY",
name: "Natalie Miller"
},

{
login: "lapty",
avatar_url: "https://avatars.githubusercontent.com/u/8241367?v=2",
followers: 8,
following: 16,
location: "Charleston, SC",
name: "Charles Nguyen"
},


{
login: "ansleyjones",
avatar_url: "https://avatars.githubusercontent.com/u/8247044?v=2",
followers: 9,
following: 9,
location: "Rome, GA",
name: "Ansley Jones"
},


{
login: "crotten",
avatar_url: "https://avatars.githubusercontent.com/u/8238886?v=2",
followers: 10,
following: 40,
location: "Charleston, SC",
name: "Chris Otten"

},

];


$(document).ready(function(){
	var templateFunction= function(arr, $target){
		var fragment = "";
		for(var i=0; i < arr.length; i++)

		{

			fragment += "<div class= \"card\">"
			+ "<img src=\"" + arr[i].avatar_url + "\" alt=\"\">"
			+ "<h3>" + "Name: " + arr[i].name + "</h3>"
			+ "<ul>"
			+ "<li>" + "login: " +  arr[i].login +"</li>"
			+ "<li>" + "followers: " +  arr[i].followers + "</li>"
			+ "<li>" + "following: " + arr[i].following + "</li>"
			+ "<li>" + "location: " + arr[i].location + "</li>"
			+ "</ul>"
			+ "</div>"
		};

		$target.append(fragment);
	};


		templateFunction(myArr, $(".container"))
 


});