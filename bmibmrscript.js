// Toggle BMI and BMR calculator visibility
function showCalculator(type) {
    if (type === 'bmi') {
        document.getElementById('bmi-form').style.display = 'block';
        document.getElementById('bmr-form').style.display = 'none';
        document.getElementById('bmi-btn').classList.add('active');
        document.getElementById('bmr-btn').classList.remove('active');
    } else {
        document.getElementById('bmi-form').style.display = 'none';
        document.getElementById('bmr-form').style.display = 'block';
        document.getElementById('bmr-btn').classList.add('active');
        document.getElementById('bmi-btn').classList.remove('active');
    }
}

// BMI Calculation
function calculateBMI() {
    const height = parseFloat(document.getElementById('bmi-height').value);
    const weight = parseFloat(document.getElementById('bmi-weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = weight / (height * height);
    let result = `Your BMI is ${bmi.toFixed(2)}.`;

    if (bmi < 18.5) {
        result += ' You are underweight.';
    } else if (bmi <= 24.9) {
        result += ' You have a normal weight.';
    } else {
        result += ' You are overweight.';
    }

    document.getElementById('bmi-result').textContent = result;
}

// BMR Calculation
function calculateBMR() {
    const age = parseInt(document.getElementById('bmr-age').value);
    const weight = parseFloat(document.getElementById('bmr-weight').value);
    const height = parseFloat(document.getElementById('bmr-height').value);
    const gender = document.getElementById('bmr-gender').value;
    const activity = document.getElementById('activity-level').value;

    if (!age || !weight || !height || age <= 0 || weight <= 0 || height <= 0) {
        alert('Please enter valid age, weight, and height values.');
        return;
    }

    let bmr;
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityFactors = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
    };

    const dailyCalories = bmr * activityFactors[activity];
    document.getElementById('bmr-result').textContent = `Your BMR is ${bmr.toFixed(2)} kcal/day. Daily calorie needs: ${dailyCalories.toFixed(2)} kcal/day.`;
}
