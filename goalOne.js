JsonFile = "goalOne.json";

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

            section = document.querySelector(".goalleft");

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
            

            const header1 = document.createElement("h3");
            header1.textContent = item.header1;
            section.appendChild(header1);
            header1.setAttribute("class", "info")


            const caption1 = document.createElement("p");
            caption1.textContent = item.caption1;
            section.appendChild(caption1);
            caption1.setAttribute("class", "info")

            const img1 = document.createElement("img");
            img1.src = item.imgURL1;
            section.appendChild(img1);
            img1.setAttribute("class", "displayimg");


            section = document.querySelector(".goalright");
            
            const header2 = document.createElement("h3");
            header2.textContent = item.header2;
            section.appendChild(header2);
            header2.setAttribute("class", "info")


            const caption2 = document.createElement("p");
            caption2.textContent = item.caption2;
            section.appendChild(caption2);
            caption2.setAttribute("class", "info")

            const img2 = document.createElement("img");
            img2.src = item.imgURL2;
            section.appendChild(img2);
            img2.setAttribute("class", "displayimg");

            const link = document.createElement("a");
            link.href = item.linkURL;
            link.textContent = `Learn more`
            section.appendChild(link);


        }
    })
});