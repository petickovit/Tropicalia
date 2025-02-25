ducument.addEventListener ('DOMContentLoaded', function () {
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuirFonteBotao = document.getElementById('dimunir-fonte');
let tamanhoAtualFonte = 1;
aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte = 1;
})