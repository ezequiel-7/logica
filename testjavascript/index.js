function app(){

    var divElement = document.createElement("div");
    var novoH1 = document.createElement("h1");

    divElement.className = 'test0';
    novoH1.innerText = "Texto dentro do h1";
    divElement.appendChild(novoH1);
    document.getElementById("app").appendChild(divElement);

    var divElement2 = document.createElement("div");
    var navElement = document.createElement('nav');
    var ulElement = document.createElement('ul');
    var liElement = document.createElement('li');

    divElement2.className = 'test1';
    liElement.innerText = 'Texto escrito na linha do <li>';
    ulElement.appendChild(liElement);
    navElement.appendChild(ulElement);
    divElement2.appendChild(navElement);
    document.getElementById("app").appendChild(divElement2);

    var divElement3 = document.createElement("div");
    var novoH2 = document.createElement("h2");
    var novoElement = document.createElement("p");

    divElement3.className = 'test2';
    novoElement.innerText = "Este e o primeiro parágrafo no javascript";
    novoH2.innerText = "Texto dentro do h2";
    divElement3.appendChild(novoH2);
    divElement3.appendChild(novoElement);
    document.getElementById("app").appendChild(divElement3);

    var formElement = document.createElement("form");
    var labelElement = document.createElement("label");
    var inputElement = document.createElement("input");
    var buttonElement = document.createElement('button');

    novoH1.style.color = "#f00";
    novoH2.style.color = "#1916dd";

    formElement.className = 'test3';
    labelElement.className = 'test4';
    labelElement.innerText = "Nome Completo";
    inputElement.id = 'test5';
    inputElement.type = 'text';
    inputElement.placeholder = 'Digite seu Nome Completo';
    formElement.appendChild(labelElement);
    formElement.appendChild(inputElement);
    formElement.appendChild(buttonElement);
    
    buttonElement.innerText = 'Adicionar';
    
    buttonElement.onclick = function(){
        alert("Adicionado");
    }

    document.getElementById("app").appendChild(formElement);
}

app();