var city_country = function (city, country) {
    return " \" ".concat(city, " , ").concat(country, " \" ");
};
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Islamabad", "Pakistan"));
// function city_country(city: string, country: string): string {
//     return ` " ${city}, ${country} " `;
//   }
//   // Test the function
//   const result = city_country("Lahore", "Pakistan");
//   console.log(result); // Output: "Lahore, Pakistan"
