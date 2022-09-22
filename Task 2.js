class Coffee{
    //Declare protected (private) fields
    constructor(totalBill) {
    this.totalBill=totalBill;
  }
    // EspressoMilk = 60;
    // EspressoCream = 75;
    // EspressoLatte = 100;
    // CapMilk = 80;
    // CapCream = 90;
    // CapLatte = 125;
    // LatteMilk = 100;
    // LatteCream = 125;
    // Lat = 150;
    espMilk() {
        console.log("Milk Added in Espresso.");
        updateBill(60);
    }
    espCream() {
        console.log("Cream Added in Espresso.");
        updateBill(75);
    }
    espLatte() {
        console.log("Latte Added in Espresso.");
        updateBill(100);
    }
    capMilk() {
        console.log("Milk Added in Cappuccino.");
        updateBill(80);
    }
    capCream() {
        console.log("Cream Added in Cappuccino.");
        updateBill(90);
    }
    capLatte() {
        console.log("Latte Added in Cappuccino.");
        updateBill(125);
    }
    latMilk() {
        console.log("Milk Added in Latte.");
        updateBill(100);
    }
    latCream() {
        console.log("Cream Added in Latte.");
        updateBill(125);
    }
    latLatte() {
        console.log("Latte Added in Latte.");
        updateBill(150);
    }
    addCups(x){
        x===1 ? 
        console.log(x + " more cup added.") :
        console.log(x + " more cups added.");
        updateBill(totalBill*1);
    }
    updateBill(x) {
        totalBill = this.totalBill + x;
    }
    Bill(totalBill){
        return this.totalBill;
    }
}

var choice;
var coffee = new Coffee(0);
do{
    console.log("Menu: ")
    console.log("Espresso   -> 1. Milk     2. Cream      3. Latte");
    console.log("Cappuccino -> 4. Milk     5. Cream      6. Latte");
    console.log("Latte      -> 7. Milk     8. Cream      9. Latte");
    console.log("Press 0 to Exit!");
    choice = prompt("Enter Choice: ");
    switch(choice){
        case 1:
            coffee.espMilk(); break;
        case 2:
            coffee.espCream(); break;
        case 3:
            coffee.espLatte(); break;
        case 4:
            coffee.capMilk(); break;
        case 5:
            coffee.capCream(); break;
        case 6:
            coffee.capLatte(); break;
        case 7:
            coffee.latMilk(); break;
        case 8:
            coffee.latCream(); break;
        case 9:
            coffee.latLatte(); break;
        default: 
            break;
    }
        var ans = prompt("Do you want to add more Cups: Y/N");
        ans==="Y" ? 
        var cups = prompt("Enter number of Cups you want to add: ")
        coffee.addCups(cups)
        :
        console.log("Your Total Bill Amount: ", coffee.Bill());
}while(choice!==0);