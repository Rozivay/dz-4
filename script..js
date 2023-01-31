const cont = document.querySelector(".cont")

const promis = fetch(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
const data = response.json()

return data
}).then((data)=>{
console.log(data);
for(indx in data){
    console.log(indx);
    console.log(data[indx]);
    cont.innerHTML += `<li>name:${data[indx].name},  phone:${data[indx].phone}</li>`
}
})