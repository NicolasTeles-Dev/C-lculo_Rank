let vitoria = 43;
let derrota = 7;

function calcularRank(vitoria, derrota){
    let rank = vitoria - derrota;
    let nivel;

    if(rank < 10){
        nivel = "Ferro";
    }
    else if(rank >= 11 && rank <= 20){
        nivel = "Bronze";
    }
    else if(rank >= 21 && rank <= 50){
        nivel = "Prata";
    }
    else if(rank >= 51 && rank <= 80){
        nivel = "Ouro";
    }
    else if(rank >= 81 && rank <= 90){
        nivel = "Diamante";
    }
    else if(rank >= 91 && rank <= 100){
        nivel = "Lendário";
    }
    else if(rank >= 101){
        nivel = "Imortal";
    }

    console.log("O Herói tem um saldo de " + rank + " e está no nível de " + nivel);
}

calcularRank(vitoria, derrota);
