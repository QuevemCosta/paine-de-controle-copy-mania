function getProduct(){
    const product = document.getElementsByClassName('input-product')
    
    const x =  JSON.stringify(product)
    console.log(x)

}

const btnSubmit = document.getElementById('submit')
btnSubmit.addEventListener('click',getProduct)
