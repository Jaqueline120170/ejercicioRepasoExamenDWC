const ListaClientes =['cliente1, cliente2, cliente3, cliente,4'] 

export function crearListaClientes (){
    const ul = document.createElement('ul');
    listaClientes.map(cliente =>{
        const li =document.createElement('li');
        const texto =document.createTextNode('articulo');
        li.appendChild(texto);
    })
}