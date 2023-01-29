//Iteración #1: Interacion con el DOM
/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const country = document.createElement("ul");
document.body.appendChild(country);
countries.forEach((str) =>{
    const li = document.createElement("li");
    li.innerHTML = str;
    country.appendChild(li);
});

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeItem = document.querySelectorAll(".fn-remove-me");
 removeItem.forEach((item) => {
   item.remove();
 });

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const dataFunction = document.querySelector('[data-function="printHere"]')
const ul2 = document.createElement("ul");
cars.forEach((element) => {
    const li2 = document.createElement("li");
    let car = document.createTextNode(element);
    li2.appendChild(car);
    ul2.appendChild(li2);
    dataFunction.appendChild(ul2);
  });

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const title = document.createElement("div");
const img1 = document.createElement("ul");
document.body.appendChild(title);
title.appendChild(img1);
countries2.forEach(element => {
  let h4 = document.createElement("h4");
  let img = document.createElement("img");
  let li = document.createElement("li");
  h4.innerHTML += element.title;
  img.src += element.imgUrl;
  img1.appendChild(li);
  li.appendChild(h4);
  li.appendChild(img);
})

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/
const remove = document.createElement("button");
remove.innerHTML = "Eliminar ultimo Elemento";
document.body.appendChild(remove);

remove.addEventListener("click", () =>{
  img1.removeChild(img1.lastChild);
})

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/
const all = document.querySelectorAll("ul");
const remove2 = document.createElement("button");
remove2.innerHTML = "Elminar este elemento";
all.appendChild(remove2);

remove.addEventListener("click", () =>{
  all.removeChild(all);
});
