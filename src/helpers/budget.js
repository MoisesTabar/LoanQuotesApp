

export function budgetHelper(cuantity, date){
    let totalCuantity;
    let totalDate;

    //first calculate the cuantity quotes
    if(cuantity <= 1000){
        totalCuantity = cuantity * .25;
    }
    else if(cuantity > 1000 && cuantity <= 5000){
        totalCuantity = cuantity * .20;
    }
    else if(cuantity > 5000 && cuantity <= 10000){
        totalCuantity = cuantity * .15;
    }
    else{
        totalCuantity = cuantity * .10;
    }

    switch(date){
        case 3:
            totalDate = cuantity * .05;
            break;
        case 6: 
            totalCuantity = cuantity * .10;
            break;
        case 12: 
            totalCuantity = cuantity * .015;
            break;
        case 24:
            totalCuantity = cuantity * .020;
            break;
        default:
            break;
    }   

    return totalCuantity + totalDate + cuantity;
}
