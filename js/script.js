const form = document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
//pegando as var e fazendo a conta.
    const weight = document.getElementById('weight').value;

    const height = document.getElementById('height').value; 

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');

    let description= '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

//------------------------------------------
//valorando qual é a descrição(condições).

    if (bmi < 18.5){
        description = 'cuidado! você está abaixo do peso!'
    } else if (bmi>=18.5 && bmi<=25){
        description='você está no peso ideal';
        value.classList.remove('attention');
        value.classList.add('normal');
        
    } else if (bmi>26 && bmi<=30){
        description='cuidado! você está com sobrepeso!';
    } else if(bmi>30 && bmi<=35){
        description='cuidado! você está com obesidade moderada!';
    } else if (bmi>35 && bmi<=40){
        description='cuidado! você está com obesidade severa!';
    } else {
        description='cuidado! você está com obesidade morbita!';
    }
//devolvendo os valores.
    value.textContent = bmi.replace('.',',');
//devolvendo a descrição.
    document.getElementById('description').textContent = description;
});