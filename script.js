// TODO: add code here
window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {

     let sortArr = [];
     for(let i =0; i<json.length;i++){
         sortArr.push(json[i])
     };

     sortArr.sort((a,b)=> (a.hoursInSpace < b.hoursInSpace))
     
        let astronautBuilder = () => {

        for (let i = 0; i < sortArr.length; i++) {
          let container = document.getElementById("container");
          container.innerHTML += `
     <div class="astronaut">
     <div class="bio">
     <h3>${sortArr[i].firstName} ${sortArr[i].lastName}</h3>
     <ul>
         <li>Hours in space: ${sortArr[i].hoursInSpace}</li>
         <li id="active${i}">Active: ${sortArr[i].active}</li>
         <li>Skills: ${sortArr[i].skills}</li>
      </ul>
      </div>
   <img class="avatar" src="${sortArr[i].picture}">
   </div>
`;
          if (json[i].active) {
            document.getElementById(`active${i}`).style.color = "green";
          }
        }
      };


      astronautBuilder();
      container.innerHTML += `<h2>Number of astronauts listed on this page: ${json.length}</h2>`
    });
  });
});
