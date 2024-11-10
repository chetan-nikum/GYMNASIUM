document.getElementById('calculate-btn').addEventListener('click', function() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1); // Calculate BMI
        let category = '';

        // Determine BMI category
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        // Display the result
        document.getElementById('bmi-result').innerHTML = `Your BMI is <span style="color: var(--first-color);">${bmi}</span>, which falls into the category of <span style="color: var(--first-color);">${category}</span>.`;
    } else {
        document.getElementById('bmi-result').innerHTML = 'Please enter valid weight and height.';
    }
});
