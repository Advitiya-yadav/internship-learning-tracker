var user="Client";

switch(user){
    case "Admin":
        return console.log("You have full access");
        break;
    case "Client":
        return console.log("Logged in as Client User");
        break;
}