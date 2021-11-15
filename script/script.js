const maxNum = document.getElementById('max');
const minNum = document.getElementById('min');
const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');
const massage = document.getElementById('message');
let arrayNum = [];

function getRandomInteger(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function generate(event) {
	event.preventDefault();
	let inputminValue = min.value;
	let inputmaxValue = max.value;
	if (arrayNum.length === (inputmaxValue - inputminValue + 1)) {
		massage.innerText = 'Error';
		generate.setAttribute('disabled', 'disabled');
		min.setAttribute('disabled', 'disabled');
		max.setAttribute('disabled', 'disabled');
		return;
	}
	if (inputminValue.length === 0 && inputmaxValue.length === 0) {
		output.innerText = 'Value must not be empty';
		return;
	}
	inputminValue = Number(inputminValue);
	inputmaxValue = Number(inputmaxValue);
	if (inputmaxValue <= inputminValue) {
		massage.innerText = 'Error';
		return;
	}
	if (Number.isInteger(inputminValue) === false && Number.isInteger(inputmaxValue) === false) {
		output.innerText = 'Only integer';
		return;
	}
	const random = getRandomInteger(inputminValue, inputmaxValue);
	if (!arrayNum.includes(random)) {
		arrayNum.push(random);
		massage.innerText = random;
		return;
	}
}
function reset(event) {
	event.preventDefault();
	massage.innerText = '';
	min.value = '';
	max.value = '';
	arrayNum.length = 0;
	generate.removeAttribute('disabled');
	min.removeAttribute('disabled');
	max.removeAttribute('disabled');
}

generateBtn.addEventListener('click', generate);
resetBtn.addEventListener('click', reset);







 