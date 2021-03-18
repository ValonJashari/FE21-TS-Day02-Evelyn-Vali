/*Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

Create a Parent Class called Vehicles
Define properties and methods for the super Class
Consider the inheritance concept
Define 2 other Child classes and name them Motorbikes and Trucks
Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)

*/
var array: Array<Vehicles> = [];
class Vehicles {
    brand:"";
    color:"";
    carType:"";
    productionYear:number;
    img:"";

    constructor(a, b, c, d, e) {
        this.brand = a;
        this.color = b;
        this.carType = c;
        this.productionYear = d;
        this.img = e;
        array.push(this);
        console.table(array);

        console.log(this);
    }
    ShowMessage() {
        return `                brand: ${this.brand}
                color: ${this.color}
                type: ${this.carType}
                production year: ${this.productionYear}
                <img src="${this.img}">
                `
    }
    }

 class Motorbikes extends Vehicles {
     price: number;
     technology: "";
     power: "";

     constructor(a, b, c, d, e, price, technology, power) {
         super(a, b, c, d, e);
         this.price = price;
         this.technology = technology;
         this.power = power;
     }
     ShowMessage() {
         return `${super.ShowMessage()}
                 price: ${this.price}
                 technology: ${this.technology}
                 power: ${this.power}
                 `
     }
 }

 let motorcycle = new Motorbikes("Harley Davidson", "red", "sport", 2015, "https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690_1280.jpg", 12.000, "blue motion", "300 ps");
 console.log(motorcycle.ShowMessage());
//  document.getElementById("demo").innerHTML = motorcycle.ShowMessage();

class Trucks extends Vehicles {
    numberOfWheels: number;
    numberOfSeats: number;
    fuelType: "";
    constructor(a, b, c, d, e, numberOfWheels, numberOfSeats, fuelType) {
        super(a, b, c, d, e);
        this.numberOfWheels = numberOfWheels;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
    }
    ShowMessage() {
        return `${super.ShowMessage()}
                Number of wheels: ${this.numberOfWheels}
                Number of seats: ${this.numberOfSeats}
                Fuel type: ${this.fuelType}
                `
    }
}

let truck = new Trucks("Mercedes", "black", "scania", 2004, "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", 14, 2, "diesel");
console.log(truck.ShowMessage());
// document.getElementById("demo").innerHTML = truck.ShowMessage();

for (let vali of array) {
    document.getElementById("demo").innerHTML += vali.ShowMessage();
}

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