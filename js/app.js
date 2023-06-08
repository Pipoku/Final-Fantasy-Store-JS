//Global Variables
let total = 0
let items = 0
let firstTime = 0
const myButton = document.getElementById("myButton");

//Arrow functions
let calculateTotal = (precio,cantidad=1) =>{ total = total + precio * cantidad; items = items + cantidad}

let showTotal = () =>{ 

    if(total>=99.99) {
        alert("Wow traveller, you will have a nice adventure, total = $"+total)
    }
    else if (total > 0 && total <= 99.99) {
        alert("Well traveller, your total is $"+total)
    }
    else alert("You have nothing in your inventory :( ")
}

//Beginning :D
myButton.addEventListener( "click", function() {
    //Local Variables
    let firstResponse = ""
    let response
    
    alert("Welcome to Final Fantasy World Pre-Idea Store!")
    alert("Here you will find anything that you need, for the adventure!")
    firstResponse = prompt("Do you wanna start? Yes or No ")
    
    if(firstResponse == "Yes" || firstResponse == "yes"){
    
        alert("Let the fun begging!")
        alert("Here you can see the options, choose wisely but don't be afraid to do more than one!")
    
        while(firstResponse == "yes" || firstResponse == "Yes"){
    
            response = prompt('1 - Games \n2 - Store \n3- My Cart items: '+items+' \n4- About us\n5-Pay')
        
            switch (response) {
                case "1":
                    gameMenu()
                    break;
                case "2":
                    stores()
                    break;
                case "3":
                    showTotal()
                    break;
                case "4":
                    aboutUs()
                    break;
                case "5":
                    payCart()
                    break;
                default:
                    alert("Thats not an option, take a look again")
            }
            
            firstResponse = prompt("Do you want to continue? Yes or No")
        }
        alert("Hope we see meet again fellow, good travell!")
    }
})


//Classic Functions
function gameMenu() {
    //local Variables
    let menuResponse
    let cantidadItems

    funnyInteract()
    
    menuResponse = parseInt(prompt("1- Final fantasy 1 original edition\n2- Final fantasy 12 special edition\n3- Final fantasy 7 overrated edition\n4- Final Fantasy 9 gold edition goty fifi-lovers edition\n\nWhat do you wanna choose?"))
    if(menuResponse>0 && menuResponse<5){cantidadItems = parseInt(prompt("How many copys you want?"))}
    switch (menuResponse) {
        case 1:
            calculateTotal(59.99,cantidadItems)
            break;
        case 2:
            calculateTotal(79.99,cantidadItems)
            break;
        case 3:
           calculateTotal(7.77,cantidadItems)
            break;
        case 4:
            calculateTotal(99.99,cantidadItems)
            alert("You know what is good fellow")
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
            if(items>2){
                alert("OH COME ONE, HOW MANY COPYS YOU WANT (ノʘ言ʘ)ﾉ")
            }
            else if(items==1){
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
    //for the fun of this, i only put to 0 the variables
    total = 0
    items = 0
}