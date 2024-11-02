// Convert temperature function
function convertTemperature() {
    // Get input values
    const temperature = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDisplay = document.getElementById("result");

    // Validate input to ensure it’s a number
    if (isNaN(temperature) || temperature === "") {
        resultDisplay.innerHTML = "Please enter a valid number.";
        return;
    }

    // Parse the input to a float for calculations
    const temp = parseFloat(temperature);
    let result;

    // Conversion logic based on selected unit
    if (unit === "Celsius") {
        const fahrenheit = (temp * 9/5) + 32;
        const kelvin = temp + 273.15;
        result = `${temp}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (unit === "Fahrenheit") {
        const celsius = (temp - 32) * 5/9;
        const kelvin = (temp - 32) * 5/9 + 273.15;
        result = `${temp}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else if (unit === "Kelvin") {
        const celsius = temp - 273.15;
        const fahrenheit = (temp - 273.15) * 9/5 + 32;
        result = `${temp}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    // Display the result
    resultDisplay.innerHTML = result;
}
