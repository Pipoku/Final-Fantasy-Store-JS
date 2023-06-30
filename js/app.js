import itemList from "./Classes/itemList/itemList.js"
//Global Variables
let items = new itemList();
let firstTime = 0
const myButton = document.getElementById("myButton");

//Arrow functions
let showTotal = () =>{ 

    if(items.totalPrice>=parseFloat(99.99)) {
        alert("Wow traveller, you will have a nice adventure, total = $"+items.totalPrice)
    }
    else if (items.totalPrice > 0 && items.totalPrice <= 99.99) {
        alert("Well traveller, your total is $"+items.totalPrice)
    }
    else alert("You have nothing in your inventory :( ")
    alert(items.getItemsAsString())
}

//Beginning :D
myButton.addEventListener( "click", function() {
    //Local Variables
    let firstResponse = ""
    let response
    
    alert("Welcome to Final Fantasy World Pre-Idea Store!")
    alert("Here you will find anything that you need, for the adventure!")
    firstResponse = prompt("Do you wanna start? Yes or No ").toLowerCase()
    
    if(firstResponse == "yes"){
    
        alert("Let the fun begging!")
        alert("Here you can see the options, choose wisely but don't be afraid to do more than one!")
    
        while(firstResponse == "yes"){
            if(items.numberOfItems===undefined){
               response = prompt('1 - Games \n2 - Store \n3- My Cart items: '+0+' \n4- About us\n5-Pay')
            } else response = prompt('1 - Games \n2 - Store \n3- My Cart items: '+items.numberOfItems+' \n4- About us\n5-Pay')
        
            switch (response) {
                case "1":
                    gameMenu(true)
                    break;
                case "2":
                    stores()
                    break;
                case "3":
                    showTotal()
                    response = prompt("Do you wanna decrement the number of items? Yes or No").toLowerCase()
                    if(response == "yes"){
                        gameMenu(false)
                    }
                    break;
                case "4":
                    aboutUs()
                    break;
                case "5":
                    payCart()
                    return
                default:
                    alert("Thats not an option, take a look again")
            }
            
            firstResponse = prompt("Do you want to continue? Yes or No").toLowerCase()
        }
        alert("Hope we see meet again fellow, good travell!")
    }
})


//Classic Functions
function gameMenu(flag) {
    //local Variables
    let menuResponse
    let quantityItems

    funnyInteract()
    
    menuResponse = parseInt(prompt("1- Final fantasy 1 original edition\n2- Final fantasy 12 special edition\n3- Final fantasy 7 overrated edition\n4- Final Fantasy 9 gold edition goty fifi-lovers edition\n\nWhat do you wanna choose?"))
    if(menuResponse>0 && menuResponse<5){quantityItems = parseInt(prompt("How many copys you want?"))}
    switch (menuResponse) {

        case 1:
            if(flag){
                if(items.isItemExists("Final fantasy 1 original edition")){
                    items.incrementItemQuantity("Final fantasy 1 original edition",quantityItems)
                } else items.newItem("Final fantasy 1 original edition",parseFloat(59.99),"10cm x 7cm",quantityItems)
            } else items.decrementItemQuantity("Final fantasy 1 original edition",quantityItems)
            break;
        case 2:
            if(flag){
                if(items.isItemExists("Final fantasy 12 special edition")){
                    items.incrementItemQuantity("Final fantasy 12 special edition",quantityItems)
                } else items.newItem("Final fantasy 12 special edition",parseFloat(79.99),"10cm x 7cm",quantityItems)
            } else items.decrementItemQuantity("Final fantasy 12 special edition",quantityItems)
            break;
        case 3:
            if(flag){
                if(items.isItemExists("Final fantasy 7 overrated edition")){
                    items.incrementItemQuantity("Final fantasy 7 overrated edition",quantityItems)
                } else items.newItem("Final fantasy 7 overrated edition",parseFloat(7.77),"10cm x 7cm",quantityItems)
            } else items.decrementItemQuantity("Final fantasy 7 overrated edition",quantityItems)
            break;
        case 4:
            if(flag){
                if(items.isItemExists("Final Fantasy 9 gold edition goty fifi-lovers edition")){
                    items.incrementItemQuantity("Final Fantasy 9 gold edition goty fifi-lovers edition",quantityItems)
                } else items.newItem("Final Fantasy 9 gold edition goty fifi-lovers edition",parseFloat(99.99),"10cm x 7cm",quantityItems)
                alert("You know what is good fellow")
            } else items.decrementItemQuantity("Final Fantasy 9 gold edition goty fifi-lovers edition",quantityItems)
            break;
    }
}

function stores(){
    alert("We currently work in \n>GameVerse\n>PlayHaven\n>LevelUp Gaming\n>PixelPulse Games\n>GameHub Emporium\nFrom your local citys, come ask for any game you want!")
}

function aboutUs(){
    alert("Welcome to our Final Fantasy Store, the ultimate destination for fans and enthusiasts of the iconic Final Fantasy franchise. Immerse yourself in a world of captivating adventures and memorable characters as you explore our extensive collection of Final Fantasy games. From the classics that started it all to the latest releases, we have something for everyone. With multiple physical locations, our stores offer a unique shopping experience where you can browse exclusive merchandise, connect with fellow fans, and discover the magic of Final Fantasy. Our knowledgeable and friendly staff are here to assist you, whether you're seeking to relive nostalgic moments or embark on new journeys. Beyond games, we also offer a wide range of merchandise, including collectibles, apparel, soundtracks, and artbooks, allowing you to showcase your love for Final Fantasy in style.")
}

function funnyInteract(){
    firstTime = firstTime + 1

    switch (firstTime){
        case 1:
            alert("Hello fellow traveller, time no seen\nLook at what treasures we have here (°▽°)/ ")
            break;
        case 2:
            alert("Hello fellow, you miss something?\nTake a look ( ´ ▽ ` )ﾉ ")
            break;
        case 3:
            alert("Hey you, i see, need something else? (´• ω •`)ﾉ ")
            break;
        case 4:
            alert("I know we have our story fellow, but stop, take a look and lets finish this (っಠ‿ಠ)っ ")
            break;
        case 5:
            alert("Im starting to thing you won't stop doing this \n|_・) ")
            break;
        case 6:
            if(items.numberOfItems>2 && items.numberOfItems !== undefined){
                alert("OH COME ONE, HOW MANY COPYS YOU WANT (ノʘ言ʘ)ﾉ")
            }
            else if(items.numberOfItems==1 && items.numberOfItems !== undefined){
                alert("Take the game and leave pleaase (*°ｰ°)ﾉ")
            }
            else alert("Are you joking? Stops asking if you are not taking anygame fellow (┛◉Д◉)┛彡┻━┻ ")
            break;
        case 7:
            alert("Well you win... take a look or do what you want... ( ・・)つ-●●●  ")
            break;
        default:
            break;
    }

}
function payCart(){
    const bodyTabla = document.querySelector('#items tbody');

    // Clear the tbody content
    bodyTabla.innerHTML = '';

    // Generate the table rows and append them to the tbody
    bodyTabla.innerHTML = items.getItemsAsHtml();

    items.resetQuantities()
    firstTime = 0

}