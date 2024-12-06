function calculate() {
    const a = parseFloat(document.getElementById('coefA').value) || 0;
    const b = parseFloat(document.getElementById('coefB').value) || 0;
    const c = parseFloat(document.getElementById('coefC').value) || 0;
    const resultDiv = document.getElementById('result');

    if (a === 0) {
        resultDiv.className = 'alert alert-warning';
        resultDiv.textContent = 'Koeficient "a" nesmí být 0. Nejedná se o kvadratickou rovnici.';
        resultDiv.classList.remove('d-none');
        return;
    }

    const discriminant = b ** 2 - 4 * a * c;
    let message;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        message = `Rovnice má dva reálné kořeny: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
        resultDiv.className = 'alert alert-success';
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        message = `Rovnice má jeden reálný kořen: x = ${x.toFixed(2)}`;
        resultDiv.className = 'alert alert-info';
    } else {
        message = 'Rovnice nemá reálné kořeny.';
        resultDiv.className = 'alert alert-danger';
    }

    resultDiv.textContent = message;
    resultDiv.classList.remove('d-none');
}

document.getElementById('calculateBtn').addEventListener('click', calculate);