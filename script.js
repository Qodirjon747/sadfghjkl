const ota=document.getElementById("ota");
const input=document.getElementById("input");


let davlatlar;

fetch("https://restcountries.com/v3.1/all")
.then(javob=> javob.json())
.then(data=> {
    chizish(data);
    davlatlar=data;
});


function chizish(malumot){
    ota.innerHTML='';
    malumot.map(d=>{
        const div=document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
         <img src=${d.flags.png} alt="sd" />
         <h3>${d.name.common}</h3>
        `;
        ota.appendChild(div);
    })
}

input.addEventListener("input",()=>{
    const d=davlatlar.filter(e=> e.name.common.toLowerCase().includes(input.value.toLowerCase()));
    chizish(d);
})