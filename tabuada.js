document.getElementById('tabuadaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = parseInt(document.getElementById('number').value);
    const quantidade = parseInt(document.getElementById('sequence').value);
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = ''; 

  
    resultado.innerHTML += `<strong>Tabuada do ${numero} (${quantidade} multiplicações):</strong><br><br>`;

    for (let i = 0; i <= quantidade; i++) {
        resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
    }
});
