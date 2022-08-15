// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let astroContainer = document.getElementById("container")
            
            // sort by hours in space most to least
            json.sort(function(b,a){
                return b.hoursInSpace - a.hoursInSpace;
            });

            // build html astronaut profiles
            for (let i = 0; i < json.length; i++){
            astroContainer.innerHTML +=`
                <div class="astronaut">
                    <div class="bio">
                        <h3> ${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace} </li>
                            <li class="active">Active: ${json[i].active} </li>
                            <li>Skills: ${json[i].skills} </li>
                        </ul>
                    </div>
                    <img class="avatar" src=${json[i].picture}>
                </div> 
                `;
            }

            // color active astronauts text green
            let liObject = document.getElementsByClassName("active");
            console.log(json)
            for (let i = 0; i < liObject.length; i++){
                if (json[i].active === true){
                    liObject[i].style.color="green";
                }
            }
            // create p and add astronaut count
            const para = document.createElement("p");
            para.innerText = `Astronaut Count: ${json.length}`;
            document.body.appendChild(para);
        });
    });
});