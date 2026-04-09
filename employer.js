// employer.js
const jobs = Array.from({length:20}, (_,i)=>({id:i, name:"Job "+i}));

let page = 0;
const rowsPerPage = 5;

function render(){
  const start = page * rowsPerPage;
  const data = jobs.slice(start, start+rowsPerPage);
  const tbody = document.getElementById("jobData");
  tbody.innerHTML = "";
  data.forEach(j=>{
    tbody.innerHTML += `
    <tr>
      <td>${j.name}</td>
      <td>Worker</td>
      <td>
        👁️
        <button onclick="openChat()">💬</button>
        <button onclick="completeJob(${j.id})">✔</button>
      </td>
    </tr>`;
  });
}
render();

document.getElementById("next").onclick=()=>{page++; render();}
document.getElementById("prev").onclick=()=>{page--; render();}

function openChat(){
  document.getElementById("chatModal").classList.add("active");
}
document.getElementById("closeChat").onclick=()=>{
  document.getElementById("chatModal").classList.remove("active");
};

function completeJob(id){
  document.getElementById("ratingModal").classList.add("active");
}

document.getElementById("submitRating").onclick=()=>{
  document.getElementById("ratingModal").classList.remove("active");
  document.getElementById("historyList").innerHTML += "<li>Completed Job</li>";
};