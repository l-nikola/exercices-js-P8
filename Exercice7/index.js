function convertToBinary() {
  const decimalInput = document.getElementById("decimalInput").value;
  const binaryResult = document.getElementById("binaryResult");

  // Check if the input have only decimal number
  if (!decimalInput.match(/^\d+$/)) {
    binaryResult.textContent = "";
    return;
  }

  const decimalNumber = Number(decimalInput);
  const binary = decimalNumber.toString(2);
  binaryResult.textContent = `Binaire : ${binary}`;
}
