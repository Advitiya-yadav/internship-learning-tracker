//todo: make a function so that it returns us the name and role of a user
var role;
function getUserRole(name,role){
    switch(role){
        case "Admin":
            return console.log(`
                Username is : ${name} and their role is ${role}
            `);
        case "Subadmin":
            return console.log(`
                Username is : ${name} and their role is ${role}
            `);
        case "testprep":
            return console.log(`
                Username is : ${name} and their role is ${role}
            `);
        case "user":
            return console.log(`
                Username is : ${name} and their role is ${role}
            `);
        default:
            return console.log(`
                Username is : ${name} and they are a normal user    
            `);
    }
}

getUserRole("Advitiya","testprep");