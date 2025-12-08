
JsonFile = "goalThree.json";



document.addEventListener("DOMContentLoaded", ()=>{
    fetch(JsonFile)
    .then(response => response.json())
    .then(responseData => {
        for (item of responseData) {

            section = document.querySelector(".goalname");
            section.textContent = item.header;

            section = document.querySelector(".logospace");
            const logo = document.createElement("img");
            logo.src = item.logoURL;
            section.appendChild(logo);
            logo.setAttribute("class", "goallogo");

            section = document.querySelector(".quote");
            section.textContent = item.quote;

            section = document.querySelector(".goalleft")

            const p1 = document.createElement("p");
            p1.textContent = item.sentence1;
            section.appendChild(p1);
            p1.setAttribute("class", "info");

            const p2 = document.createElement("p");
            p2.textContent = item.sentence2;
            section.appendChild(p2);
            p2.setAttribute("class", "info");

            const p3 = document.createElement("p");
            p3.textContent = item.sentence3;
            section.appendChild(p3);
            p3.setAttribute("class", "info");

            const imageElement = document.createElement("img");
            imageElement.src = item.imageURL;
            section.appendChild(imageElement);
            imageElement.setAttribute("class", "displayimg");

            section = document.querySelector(".goalright");

            const listTitle = document.createElement("h3");
            listTitle.textContent = item.title;
            listTitle.setAttribute("class", "info")
            section.appendChild(listTitle);

            const listElement = document.createElement("ul");
            section.appendChild(listElement);
            
            const g1 = document.createElement("li");
            g1.textContent = item.goal1;
            listElement.appendChild(g1);
            g1.setAttribute("class", "info");

            const g2 = document.createElement("li");
            g2.textContent = item.goal2;
            listElement.appendChild(g2);
            g2.setAttribute("class", "info");

            const g3 = document.createElement("li");
            g3.textContent = item.goal3;
            listElement.appendChild(g3);
            g3.setAttribute("class", "info");

            const g4 = document.createElement("li");
            g4.textContent = item.goal4;
            listElement.appendChild(g4);
            g4.setAttribute("class", "info");

        }
    })
});


