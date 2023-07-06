const  tabObject=  JSON.parse(localStorage.getItem('todoList'))  || [{name: 'make dinner',
dueDate: '2022-12-22'}] ;
const prElement=document.querySelector('.pr');
render();

const jsButton=document.querySelector('.js-btn');
jsButton.addEventListener('click',()=>{
  add();
})



function add(){
const addElement= document.querySelector('.input-add');
const name=addElement.value;
const dateElement=document.querySelector('.js-date');
const dueDate=dateElement.value;

 
//  tab.push({name:name,dueDate:dueDate});
tabObject.push({name,dueDate}); // this is a shortcut because the properties and the variables have the same name 
setItem();
 render();
 addElement.value= '';
}
function enter(event){
    if(event.key==='Enter')
    {
      add();
    }
}

function render(){
    let todolist='';
    tabObject.forEach((value,index)=>{ // instead of function(){}
    const  {name,dueDate} = value;  // with distruction
    // const name = value.name;                  // without distruction
    //const dueDate = value.dueDate;

    todolist+= html=`
    <div>${name}</div>  
    <div> ${dueDate}  </div>
    <button class="btn-delete js-delete">Delete</button>
  `;

    })

  //   for(i=0;i<tabObject.length;i++){ 
  //   //  const name=tab.namee;
  //   //  const dueDate=tab.dueDate;

  //  const  {name,dueDate} = tabObject[i] ;
 // const name = tabObject[i].name;   without distruction
  //const dueDate = tabObject[i].dueDate;
  // // divs doesnt have a default style
  //   todolist+= html=`
  //   <div>${name}</div>  
  //   <div> ${dueDate}  </div>
  //   <button class="btn-delete" onclick="tabObject.splice(${i},1); render(); deleteItem();">Delete</button>
  // `;
  //   }
    prElement.innerHTML=todolist;

    //we do this eventListner afer adding the html to ourpage
    // we do querySelectorAll will give us the element on the page that have the class js-delete
    //
    document.querySelectorAll('.js-delete')
    .forEach((deleteButton,index) => {
    // we loop through the querySelectALL using for each and for each button we add an event listener
      deleteButton.addEventListener('click',()=>{

        console.log(index); // even if the value gets deleted after the loop and this function will always have access to index
        tabObject.splice(index,1); // as soon as the forEach ends, index gets deleted
        render();  
        deleteItem();
      })

    });

    console.log(index); // undefined
    
}

function setItem(){
  localStorage.setItem('todoList', JSON.stringify(tabObject));
}

function deleteItem(){
  localStorage.removeItem('todoList');
}