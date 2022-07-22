function main(){
    let calculateForm = document.querySelector('#imc');

    function imcCalc(peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function weightResult(imc){
        let weight;
        switch (true){
            case (imc < 18.5): weight = 'você está abaixo do peso'; break;
            case (imc > 18.5 && imc < 24.9): weight = 'você está com o peso normal'; break;
            case (imc > 25 && imc < 29.9): weight = 'você está com sobrepeso'; break;
            case (imc > 30 && imc < 34.9): weight = 'você está com obesidade grau 1'; break;
            case (imc > 35 && imc < 39.9): weight = 'você está obesidade grau 2'; break;
            case (imc > 40): weight = 'você está com obesidade grau 3';
        }

        return weight;
    }

    function imcResult(event){
        let inputPeso = event.target.querySelector('#peso');
        let inputAltura = event.target.querySelector('#altura');

        let peso = Number(inputPeso.value);
        let altura = Number(inputAltura.value);

        if (!peso || !altura){
            return `Insira um peso ou altura válidos.`;
        }

        else if ((peso || altura) <= 0){
            return `Insira valores maiores que zero`;
        }

        else { 
            let imcValue = imcCalc(peso, altura);
            imcValue = Number(imcValue);
            return imcValue;
        }
    }

    function setImc(imc, weightLvl){
        if ((typeof imc) !== (typeof 1)){
            const result = document.querySelector('#result');
            result.innerHTML = '';
            const paragraph = document.createElement('div');
            paragraph.classList.add('invalid')
            paragraph.innerHTML = `${imc}`;
            result.appendChild(paragraph);
        }

        else{
            const result = document.querySelector('#result');
            result.innerHTML = '';
            const paragraph = document.createElement('div');
            paragraph.classList.add('success')
            paragraph.innerHTML = `${imc} ${weightLvl}`;
            result.appendChild(paragraph);
        }
    }

    function resultFunc(event){
        event.preventDefault();
        let imc = imcResult(event);
        let weightLvl = weightResult(imc);
        setImc(imc, weightLvl)
    }

    calculateForm.addEventListener('submit', resultFunc);
}

main()