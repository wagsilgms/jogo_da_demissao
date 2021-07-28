let result = '';
let protec = Math.floor(Math.random() * 6);

document.querySelectorAll('.func').forEach(item => {
    item.addEventListener('click', selecFunc);
});

let funcs = document.querySelectorAll('.func.vis').length;

function selecFunc(e) {
    let func = e.currentTarget.getAttribute('data');

    if (func == protec) {
        result = 'loss';
    } else {
        demissFunc(func);
    }

    if (result == 'loss') {
        alert('Que mal. Você demitiu o funcionário protegido!', window.location.href = window.location.href);
    } else {
        --funcs;
        if (funcs === 1) {
            alert('Parabéns. Você manteve o funcionário certo!', window.location.href = window.location.href);
        } else if(funcs == 3) {
            alert('Cuidado, restam apenas 3 funcionários');
        } else if(funcs == 2) {
            alert('Agora é a decisão final. Qual deles será o escohido?');
        }
    }
}

function demissFunc(func){
    document.querySelector(`div[data="${func}"]`).classList.remove('vis');
}