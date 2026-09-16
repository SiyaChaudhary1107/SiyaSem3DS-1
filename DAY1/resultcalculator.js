function calculateResult() {
    const maths = parseFloat(document.getElementById("maths").value);
    const dsa = parseFloat(document.getElementById("dsa").value);
    const oops = parseFloat(document.getElementById("oops").value);


    const total = maths + dsa + oops;
    const average = total / 3;
    const percentage = (total / 300) * 100;
    let grade = "";
    const resultArea = document.getElementById('resultArea');

    if (isNaN(maths) || isNaN(dsa) || isNaN(oops) || total > 300 || maths < 0 || dsa < 0 || oops < 0) {
        resultArea.innerHTML = "Enter valid numbers";
        return;
    }

    if (percentage >= 90 && percentage <= 100) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'fail';
    }

    resultArea.innerHTML = 
        `Total Marks: ${total} / 300<br>
         Percentage: ${percentage.toFixed(2)}%<br>
         Grade: ${grade}`;


}