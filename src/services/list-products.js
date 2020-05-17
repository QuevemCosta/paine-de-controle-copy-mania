const apiUrl = 'http://localhost:3333/produtcts?'
const page = 'page='+1;


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
				valorAvista 
			} = product
			
		
			const productEle = document.createElement('li');
			const imageEle = document.createElement('img');
			const descriptionEle = document.createElement('strong');
			const valuesEle = document.createElement('span');
			const grupButonsEle = document.createElement('div');
			const btnEditEle = document.createElement('button');


			const textDescription = document.createTextNode(name);
			const textValue = document.createTextNode(`A vista ${valorAvista} ou em até ${parcelas} de ${valorAprazo}`);
			const textBtnEdit = document.createTextNode('Editar');

			imageEle.setAttribute('src',img);
			grupButonsEle.setAttribute('class','grup-button');
			
			productEle.setAttribute('id',cod);
			productEle.setAttribute('onclick',showUrl(cod))

			productEle.appendChild(imageEle);
			productEle.appendChild(textDescription);
			productEle.appendChild(textValue)



			document.getElementById('list-produtos-out').appendChild(productEle)		

		})
	})

}
listProducts()

function deliteProdutct(cod,name){
	const deliteUrl = 'http://localhost:3333/produtct/'

	confirm(`Deseja mesmo deletar permanetemento ${name}`)

	fetch(deliteUrl+cod,{
		method:'DELETE'
	})

}

function showProduct(cod){
	const showUrl = 'http://localhost:3333/produtct/'

	fetch(showUrl+cod,{
		method:'GET',
	})
}