/*Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

Create a Parent Class called Vehicles
Define properties and methods for the super Class
Consider the inheritance concept
Define 2 other Child classes and name them Motorbikes and Trucks
Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicles = /** @class */ (function () {
    function Vehicles(a, b, c, d) {
        this.brand = a;
        this.color = b;
        this.carType = c;
        this.productionYear = d;
        // this.price = d;
        // this.power = e;
        // this.technology = f;
        // model = "";
        // fuel_type = "";
        // registration_year = "";
        console.log(this);
        // <p>${this.price}</p>
        // <p>${this.power}</p>
        // <p>${this.technology}</p>
    }
    Vehicles.prototype.ShowMessage = function () {
        return "                brand: " + this.brand + "\n                color: " + this.color + "\n                type: " + this.carType + "\n                production year: " + this.productionYear + "\n                ";
    };
    return Vehicles;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(a, b, c, d, price, technology, power) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.price = price;
        _this.technology = technology;
        _this.power = power;
        return _this;
    }
    Motorbikes.prototype.ShowMessageagain = function () {
        return _super.prototype.ShowMessage.call(this) + "\n                 price: " + this.price + "\n                 technology: " + this.technology + "\n                 power: " + this.power + "\n                 ";
    };
    return Motorbikes;
}(Vehicles));
var motorcycle = new Motorbikes("Harley Davidson", "red", "sport", 2015, 12.000, "blue motion", "300 ps");
console.log(motorcycle.ShowMessageagain());
document.getElementById("demo").innerHTML = motorcycle.ShowMessageagain();
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(a, b, c, d, numberOfWheels, numberOfSeats, fuelType) {
        var _this = _super.call(this, a, b, c, d) || this;
        _this.numberOfWheels = numberOfWheels;
        _this.numberOfSeats = numberOfSeats;
        _this.fuelType = fuelType;
        return _this;
    }
    Trucks.prototype.ShowMessageNext = function () {
        return _super.prototype.ShowMessage.call(this) + "\n                Number of wheels: " + this.numberOfWheels + "\n                Number of seats: " + this.numberOfSeats + "\n                Fuel type: " + this.fuelType + "\n                ";
    };
    return Trucks;
}(Vehicles));
var truck = new Trucks("Mercedes", "black", "scania", 2004, 14, 2, "diesel");
console.log(truck.ShowMessageNext());
document.getElementById("demo").innerHTML = truck.ShowMessageNext();
// for (let i = 0; i < carsJson.length; i++) {
//     // create card-div
//     var cardContainer = document.createElement("div");
//     cardContainer.setAttribute("id", "cardContainer" + [i]);
//     document.getElementById("container").appendChild(cardContainer);
//     // create cardMini-div
//     var cardMini = document.createElement("div");
//     cardMini.setAttribute("id", "cardMini" + [i]);
//     document.getElementById("cardContainer" + [i]).appendChild(cardMini);
//     // create <img> Mini
//     var imgMini = document.createElement("img");
//     imgMini.setAttribute("src", carsJson[i].image);
//     document.getElementById("cardMini" + [i]).appendChild(imgMini);
//     // create <p> imgage text
//     var imgMiniText = document.createElement("p");
//     var imgMiniTextNode = document.createTextNode(carsJson[i].carBrand);
//     imgMiniText.appendChild(imgMiniTextNode);
//     document.getElementById("cardMini" + [i]).appendChild(imgMiniText);
//     // create cardMaxi-div
//     var cardMaxi = document.createElement("div");
//     cardMaxi.setAttribute("id", "cardMaxi" + [i]);
//     document.getElementById("cardContainer" + [i]).appendChild(cardMaxi);
//     // create <img> Maxi
//     var imgMaxi = document.createElement("img");
//     imgMaxi.setAttribute("src", carsJson[i].image);
//     document.getElementById("cardMaxi" + [i]).appendChild(imgMaxi);
//      // create <div> text container
//      var textContainer = document.createElement("p");
//      textContainer.setAttribute("id", "textContainer" + [i]);
//      document.getElementById("cardMaxi" + [i]).appendChild(textContainer);
//     // create <p> title text
//     var imgMaxiText = document.createElement("p");
//     var imgMaxiTextNode = document.createTextNode(carsJson[i].carBrand);
//     imgMaxiText.appendChild(imgMaxiTextNode);
//     document.getElementById("textContainer" + [i]).appendChild(imgMaxiText);
//     // create <p> detail text
//     var imgMaxiDetailText = document.createElement("p");
//     var imgMaxiDetailTextNode = document.createTextNode("Production Year: " + carsJson[i].productionYear);
//     imgMaxiDetailText.appendChild(imgMaxiDetailTextNode);
//     document.getElementById("textContainer" + [i]).appendChild(imgMaxiDetailText);
//     // create <p> price text
//     var imgMaxiPrice = document.createElement("p");
//     var imgMaxiPriceNode = document.createTextNode("$" + carsJson[i].price);
//     imgMaxiPrice.appendChild(imgMaxiPriceNode);
//     document.getElementById("textContainer" + [i]).appendChild(imgMaxiPrice);
// }
// let cardMinis = document.querySelectorAll("[id*=cardMini]");
// let cardMaxis = document.querySelectorAll("[id*=cardMaxi]");
// let cardContainers = document.querySelectorAll("[id*=cardContainer]");
// // console.log(cardMinis);
// for (let i = 0; i < cardMinis.length; i++){
//     cardMinis[i].addEventListener("click", function(){
//         cardMaxis[i].style.display = "flex";
//         cardContainers[i].setAttribute("style", "width: 100%;");
//         cardMinis[i].style.display = "none";
//     });
//     cardMaxis[i].addEventListener("click", function(){
//         cardMinis[i].style.display = "block";
//         cardContainers[i].setAttribute("style", "width: auto;");
//         cardMaxis[i].style.display = "none";
//     });
// }
/*
var array: Array<{fName: string, lName: string, img: string, showMessage: Function}> = [];
 class person1 {
     fName:string;
     lName:string;
     img:string;
     constructor(a:string,b,c){ //constructor a will not take the type of the fName from parameter of class person1
         this.fName = a;
         this.lName = b;
         this.img = c;
         console.log(this);
         array.push(this);
         console.table(array);
     }

     showMessage(){
         return `   <$>${this.fName}</$>
                    <p>${this.lName}</p>
                    <img src="${this.img}">`
     }
 }
 new person1("Vali", "Seri", "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg");
new person1("The", "Vali", "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg");
 new person1("Ai", "dddd","https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg");

 
class test extends person1{
     salary: number;
     constructor(a,b,c, num){
         super(a,b,c);
         this.salary = num;
         //array.push(this);
     }
     showMessage(){
         return `${super.showMessage()} <p>and the salary is ${this.salary}</p>`;
         
     }
 }
 new test("Vali", "test", "https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg", 3000);
 //var array = [person2, person3, person4];
 console.table(array);

 for (let val of array)
 {
    document.getElementById("demo").innerHTML += val.showMessage();
 }


 //document.getElementById("demo").innerHTML = person2.showMessage();
 //document.getElementById("demo").innerHTML += person2.showMessage();
 //document.getElementById("demo").innerHTML += person2.showMessage();
 */ 
