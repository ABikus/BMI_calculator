function calculateBmi() {
   
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);


    let bmi = (weight / (height * height) * 10000)

   document.getElementById('heading').innerHTML = 'Your BMI is: '
   document.getElementById('bmi-output').innerHTML = bmi.toFixed(2)

   if (bmi <= 18.5) {
    document.getElementById('bmi-output').style.color = 'yellow';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('bmi-output').style.color = 'green';
} else {
    document.getElementById('bmi-output').style.color = 'red';
}
    
document.getElementById('clearBtn').style.display = 'inline';
}
function reload() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('heading').innerHTML = '';
    document.getElementById('bmi-output').innerHTML = '';
    document.getElementById('clearBtn').style.display = 'none';
}