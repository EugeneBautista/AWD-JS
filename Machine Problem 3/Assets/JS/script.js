var check = 0;

function Color(day){
    const square = ["mon-square", "tue-square", "wed-square", "thu-square", "fri-square", "sat-square", "sun-square"]
    const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
    var check = 0;
    let box;
    let boxdown;
    
    for(let i = 0; i < square.length; i++){
        name = days[i] + "-down";
        if(document.getElementById(square[i]).className.match(name)){
            check = 1;
            box = square[i];
            boxdown = days[i] + "-up";
            break;
        }
    }

    if (check == 0){
        document.getElementById(day+"-square").className = day + "-down";
    }

    else if (check == 1){
        document.getElementById(day+"-square").className = day + "-down";
        document.getElementById(box).className = boxdown;
    }

}