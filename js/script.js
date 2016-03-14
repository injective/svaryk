var list = document.querySelector('.list');
var block = document.querySelector('#block');
var buttonClose = document.querySelectorAll('.close');
var buttonAdd = document.querySelector('#add');



[].forEach.call(buttonClose, function(elem){
    elem.addEventListener('click', handleClickButtonClose, false);
});

function handleClickButtonClose() {
    this.parentNode.remove();
}



buttonAdd.addEventListener('click', handleClickButtonAdd, false);

function handleClickButtonAdd() {
    var listNew = list.cloneNode(true);
    block.appendChild(listNew);
    listNew.querySelector('.close').addEventListener('click', handleClickButtonClose, false);

}

