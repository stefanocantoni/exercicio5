function verificarMes() {
    var inputNumero = document.getElementById("numero");
    var resultado = document.getElementById("resultado");
    
    var numero = parseInt(inputNumero.value);

    if (numero >= 1 && numero <= 12) {
        var meses = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        resultado.textContent = "Mês correspondente: " + meses[numero - 1];
    } else {
        resultado.textContent = "Valor de mês incorreto";
    }
}