function calculateBmi() {
   
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height))

   document.getElementById('heading').innerHTML = 'Your BMI is: '
   document.getElementById('bmi-output').innerHTML = bmi


}