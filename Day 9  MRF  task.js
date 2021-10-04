// Solving problems using array functions on rest countries data.

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
if (xhr.readyState === XMLHttpRequest.DONE)
{
var s=xhr.responseText;
}
let m=JSON.parse(s);

console.log("a.Get all the countries from Asia continent /region using Filter function");

console.log(m.filter((x)=>x.region=="Asia"));

console.log("b.Get all the countries with a population of less than 2 lakhs using Filter function");

console.log(m.filter((x)=>x.population<200000));

console.log("c.Print the following details name, capital, flag using forEach function");

m.forEach((x)=>{console.log(x.name,x.capital,x.flag);});

console.log("d.Print the total population of countries using reduce function");

console.log(m.reduce((total,current)=>{ return total+current.population;},0));

console.log("e.Print the country which uses US Dollars as currency.")

console.log(m.filter((x)=>x.currencies[0].name=="United States dollar"));
};
xhr.open('GET', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true);
xhr.setRequestHeader('Accept', 'application/json');
xhr.send(null);

