// var firstName="Advitiya";
// var lastName="Yadav";
// var email="advitiyayadav2105@gmail.com";
// var Password="unlockforaadi";
// var confirmPassword="unlockforaadi";
// var courseCount=0;
// var isLoggedInFromGoogle=true;

// console.log(`
//     Full name is : ${firstName} ${lastName}
//     email id is : ${email}
//     password is ${Password}
// `)


var sellingPrice=799;
var listingPrice=299;
var discount=((sellingPrice-listingPrice)/sellingPrice)*100

displayDiscountPercentage=Math.round(discount)
console.log(`
    Listing Price: ${listingPrice}
    Selling Price: ${sellingPrice}
    Discount %: ${displayDiscountPercentage}%
    
    `)
