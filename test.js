let fakture = [];
let id = 0;

const itemContainer = document.querySelector('.input-container');
const inpName = document.getElementById('txt-company-name');
const inpPib = document.getElementById('txt-company-pib');
const date = document.getElementById('txt-time');
const cena = document.getElementById('txt-value');

const btnSub = document.getElementById('btn-add');

const isValid = () =>
	inpName.value.trim() !== '' &&
	inpPib.value.trim() !== '' &&
	inpPib.value.trim().length === 8 &&
	!Number.isNaN(Number(inpPib.value)) &&
	!Number.isNaN(Number(cena.value)) &&
	cena.value.trim() !== '';

const itemList = document.getElementById('item-list');
const divCont = document.querySelector('.item-container');

btnSub.addEventListener('click', (e) => {
	e.preventDefault();
	if (!isValid()) {
		alert('pogresan unos');
		return;
	}

	const divInfo = document.createElement('div');
	divInfo.className = 'item-info';

	const div = document.createElement('div');

	const labelName = document.createElement('label');
	labelName.className = 'company-name';
	labelName.textContent = inpName.value + ' ';

	const labelPib = document.createElement('label');
	labelPib.className = 'company-pib';
	labelPib.textContent = inpPib.value + ' ';

	const labelDate = document.createElement('label');
	labelDate.className = 'time-created';
	labelDate.textContent = date.valu + ' ';

	const labelCena = document.createElement('label');
	labelCena.className = 'price-value';
	labelCena.textContent = cena.value + ' ';

	div.appendChild(labelName, labelPib, labelDate, labelCena);

	divInfo.appendChild(div);

	const divTime = document.createElement('div');
	const labelTime = document.createElement('label');
	labelTime.className = 'insert-timestamp';
	labelTime.innerHTML = `${new Date()}, ${new Date().getHours()}: ${new Date().getMinutes()}`;

	divTime.appendChild(labelTime);
	divInfo.appendChild(divTime);

	const divAction = document.createElement('div');
	divAction.className = 'item-actions';

	const btnDel = document.createElement('button');
	btnDel.className = 'item-trashCan';
	btnDel.textContent = 'DELETE';

	btnDel.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.parentElement.parentElement.remove();
	});

	divAction.appendChild(btnDel);
	divInfo.appendChild(divAction);

	divCont.appendChild(divInfo);

	fakture.push({
		name: inpName.value,
		PIB: inpPib.value,
		dateIssued: date.value,
		currency: 'RSD',
		id: id
	});

	id++;

	console.log(fakture[fakture.length - 1]);

	inpName.value = '';
	inpPib.value = '';
	date.value = '';
	cena.value = '';
});
