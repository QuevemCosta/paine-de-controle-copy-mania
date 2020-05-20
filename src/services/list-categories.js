const categoriesUrl = 'http://localhost:3333/categories/?'

function listCategories(){
	fetch(categoriesUrl)
	.then(response => response.json())
	.then(data => {		
		const categories = data

		//output in list-category
		categories.map(function(category){
			const {name,descricao} = category
			
			const nameElement = document.createElement('option')
			const nameText = document.createTextNode(name)

			nameElement.setAttribute('value',name)

			const output = document.getElementById('list-category')

			nameElement.appendChild(nameText)

			output.appendChild(nameElement)


		})
	})

}
listCategories()
