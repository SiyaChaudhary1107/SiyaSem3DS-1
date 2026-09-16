
function calculateSum() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = document.getElementById('operation').value;
    switch(c){
        case 1:
            let sum =parseFloat(a) + parseFloat(b);
            alert("The sum is: " + sum);
            break;
        case 2:
            let difference = parseFloat(a) - parseFloat(b);
            alert("The difference is: " + difference);
            break;
        case 3:
            let product = parseFloat(a)*parseFloat(b);
            alert("The product is: " + product);
            break;
        case 4:
            let quotient = parseFloat(a)/parseFloat(b);
            alert("The quotient is: " + quotient);
            break;
        default:
            alert("Invalid operation selected.");
            break;
    }

}