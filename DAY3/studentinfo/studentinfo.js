let a = document.getElementById("grade_5").value ;
let b = document.getElementById("grade_1").value ;
let c = document.getElementById("grade_2").value ;
let d = document.getElementById("grade_3").value ;
let e = document.getElementById("grade_4").value ;

let name = document.getElementById("")

function result(){
    let total = a+b+c+d+e;
    let average = (total/5);
    let percentage = (total/500)*100;
    let grade;
    if(percentage>90){
        grade = a;
    }else if(percentage>80 && percentage<=90){
        grade = b;
    }else if(percentage>70 && percentage<=80){
        grade = c;
    }else if(percentage>60 && percentage<=70){
        grade = d;
    }else if(percentage>50 && percentage<=60){
        grade = e;
    }else{
        grade = f;
    }
    
    document.getElementById("result").innerHTML = 'Name: '

}