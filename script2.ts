function hitung() {
  const koefisien = parseFloat(document.getElementById('koefisien').value);
  const pangkat = parseFloat(document.getElementById('pangkat').value);

  const turunan = koefisien * pangkat * Math.pow(x, pangkat - 1);
  const integral = (koefisien / (pangkat + 1)) * Math.pow(x, pangkat + 1) + ' + C';

  const hasilDiv = document.getElementById('hasil');
  hasilDiv.innerHTML = `
    <p>Turunan: ${turunan}x^${pangkat - 1}</p>
    <p>Integral: ${integral}</p>
  `;
}