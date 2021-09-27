let save_num = document.getElementById("save_el")
let number = document.getElementById("num")
let count = 0;

function incre(){
    count++
    number.innerText=count
}

function save(){
    let countstr = count + " - "
    save_num.innerText +=countstr;
    console.log(count);

}