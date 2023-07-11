import myData from "./data.mjs";
let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let questionIndex = document.querySelector('.questionIndex');

//question 1
const questionOne = `
    <form class="question1-form">
    <div class="block">
        <label for="first-name">first name *</label>
        <input type="text" placeholder="ali">
    </div>
    <div class="block">
        <label for="last-name">last name *</label>
        <input type="text">
    </div>
    <div class="block">
        <label for="email">email *</label>
        <input type="text" placeholder="example@gmail.com">
    </div>
    </form>
`

let data = myData;
console.log(myData);

let count = 0;

nextBtn.addEventListener('click',function(el){
    el.preventDefault();
    document.querySelector('.desc').innerHTML = data[count];
    count +=1;
    questionIndex.innerHTML = `${count}/${data.length}`;
    prevBtn.style.display = 'block';
    if(count > data.length){
        document.querySelector('.desc').innerHTML = ' thanks for submiting our review team will contact your within 24hours . '
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled')
        prevBtn.style.display = 'none';
        questionIndex.innerHTML = `${data.length}/${data.length}`
    }
})


prevBtn.addEventListener('click',function(el){
    el.preventDefault();
    count -=1;
    document.querySelector('.desc').innerHTML = data[count];
    
    questionIndex.innerHTML = `${count}/${data.length}`;
    if(count < 0){
        questionIndex.innerHTML = `questions`;
       document.querySelector('.desc').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque molestias temporibus quam sapiente doloremque optio dolorem repudiandae, nostrum laborum iste ipsam! Culpa atque non error minus exercitationem delectus dolorum dicta quae ratione nostrum! Laboriosam illo tempore placeat, voluptates expedita doloremque, hic officia laudantium blanditiis facilis vitae quidem est, quisquam non pariatur! Obcaecati, consequuntur. Ipsa similique aliquid commodi veniam facilis nihil possimus? Hic, laboriosam. Possimus incidunt, accusamus ab in et sint minima harum eaque eveniet a laborum quod saepe labore tempora accusantium optio enim cumque nesciunt eius? Libero hic, autem ullam id voluptate illo quis aperiam eos nam! Aspernatur, nemo!'
       prevBtn.style.display = 'none';
       count+=1
    }
})