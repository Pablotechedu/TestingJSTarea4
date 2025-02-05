function convertLength() {
  const inputAmount = parseFloat(document.getElementById("inputAmount").value);
  const inputUnit = document.getElementById("inputUnit").value;

  const rates = {
    metro: { metro: 1, centimetro: 100, milimetro: 1000 },
    centimetro: { metro: 0.01, centimetro: 1, milimetro: 10 },
    milimetro: { metro: 0.001, centimetro: 0.1, milimetro: 1 },
  };

  const metros = inputAmount * rates[inputUnit].metro;
  const centimetros = inputAmount * rates[inputUnit].centimetro;
  const milimetros = inputAmount * rates[inputUnit].milimetro;

  document.getElementById("metroValue").innerText = `${metros.toFixed(2)} m`;
  document.getElementById("centimetroValue").innerText = `${centimetros.toFixed(
    2
  )} cm`;
  document.getElementById("milimetroValue").innerText = `${milimetros.toFixed(
    2
  )} mm`;
}
