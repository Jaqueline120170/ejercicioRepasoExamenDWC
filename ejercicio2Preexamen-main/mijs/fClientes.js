const listaClientes =['cliente1, cliente2, cliente3, cliente,4'] 

export function crearListaClientes (){
    listaClientesDiv = document.getElementById('clientes');
    listaClientesDiv.innerHTML = 
    listaClientes.map(cliente =>{
        const li =document.createElement('li');
        const texto = document.createTextNode(cliente);
        li.appendChild(texto);
    })
}