//JavaScript-be nem szerepelhet kötőjel =>background-color helyett backgroundColor

//--------CHANGE TAG----------
function changeH1(){
    document.querySelector("h1").innerHTML = "I see you";
}

/*--------CHANGE STYLE--------
function changeStyle() {
    document.querySelector("img").style.width = "50px";
}*/

/*--------VALIDATION-----------
function validate() {
  //validation logic
    var input = document.querySelector(".input-validate"); 
    var inputValue = input.value;
    if (inputValue < 6 || inputValue>20){...}
    }
}*/

/*--------NOTE-----------------
1.VARIBLES
var valtozo = 1;
    - objektum
    - első használatkor derül ki a válzotó típusa
    - tíusok: egyszerű: number, string, object, boolean
              összetett: var array = [1,2,3]; var set = [1;2;3];var obj = {"elso": 1, "masodik": 2};
    arrya[0] 1-et ad vissza
    obj["elso"] 1 et ad vagy obj.elso
    Tömb elemeinek összefűzése: arr.join(", ") + ".";
2.PROTOTYPE
    String.prototype => Itt van a sztring prototípusa
    String.prototype.alert = function(){
    var str = this.trim();
    return "Fontos: " + str + "!";
    }
 */
