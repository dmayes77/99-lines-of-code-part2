let div =document.createElement('div')
let button = document.createElement('button');
let btnText = document.createTextNode('Sing!');
button.appendChild(btnText);
div.appendChild(button);
document.body.appendChild(div);
div.className = 'container text-white';

button.addEventListener('click', singing);

function singing() {
let friends = ['April', 'Jermaine', 'Rachel', 'Larry', 'Tay', 'Michael'];
	for (var n = 0; n < friends.length; n++) {
		let div2 = document.createElement('div');
		let h3 = document.createElement('h3');
		div2.className = 'friend jumbotron';
		h3.innerHTML = friends[n];
		div.appendChild(div2);
		document.body.appendChild(div);
		div2.appendChild(h3);
		for (var num = 99; num > 0; num--) {
			let p = document.createElement('p');
			div2.appendChild(p);
			let oneLess = num - 1;
			if (num > 1) {
				p.append(
					num +
						' lines of code in the file, ' +
						num +
						' lines of code; ' +
						friends[n] +
						' strikes one out, clears it all out, ' +
						oneLess +
						' lines of code in the file.'
				);
			} else {
				p.append(
					'1 line of code in the file, 1 line of code; ' +
						friends[n] +
						' strikes one out, clears it all out, no more lines of code in the file.'
				);
			}
		}
	}
}
