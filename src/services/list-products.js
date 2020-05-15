const apiUrl = 'http://localhost:3333/produtcts?'
const page = 1

function listProducts(produtcts){
	fetch(apiUrl+page)
	.then(response => response.json())
	.then(data => {
		const produtcts = data.data
		//console.log(produtcts);

		


		//saida em id list-produtos-out
		produtcts.map(function(product){
			const {
				cod,
				img,
				name,
				parcelas,
				status,
				valorAprazo,
				valorAvista } = product
			console.log(cod)

		
			const productEle = document.createElement('li');
			const imageEle = document.createElement('img');
			const descriptionEle = document.createElement('strong');
			const valuesEle = document.createElement('span');
			const grupButonsEle = document.createElement('div');
			const btnEditEle = document.createElement('button');
			const btnDeliteEle = document.createElement('button');


			const textDescription = document.createTextNode(name);
			const textValue = document.createTextNode(`A vista ${valorAvista} ou em até ${parcelas} de ${valorAprazo}`);
			const textBtnEdit = document.createTextNode('Editar');
			const textBtnDelete = document.createTextNode('Deletar');

			imageEle.setAttribute('src',img);
			grupButonsEle.setAttribute('class','grup-button');

			btnEditEle.appendChild(textBtnEdit);
			btnDeliteEle.appendChild(textBtnDelete);

			grupButonsEle.appendChild(btnEditEle);
			grupButonsEle.appendChild(btnDeliteEle);

			productEle.appendChild(imageEle);
			productEle.appendChild(textDescription);
			productEle.appendChild(textValue)
			productEle.appendChild(grupButonsEle)



			document.getElementById('list-produtos-out').appendChild(productEle)		


		})

		//console.log(data.pagination)
	})

}
listProducts()
