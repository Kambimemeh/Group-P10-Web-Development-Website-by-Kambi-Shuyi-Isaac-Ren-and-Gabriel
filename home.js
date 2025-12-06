
fetch("home.json")
    .then(response => response.json())
    .then(data => {
        const home = document.getElementById('#home');
        const imageofElement = document.createElement('img')
        imageofElement.src = item.imageURL;
        imageofElement.alt = item.alt;
        home.appendChild(imageofElement);
        sectionElement.appendChild(home);

        const h6ofElement = document.createElement('h6');
        h6ofElement.innerText = item.style;
        home.appendChild(h6ofElement);

        const p1ofElement = document.createElement('p');
        p1ofElement.innerText = item.text;
        home.appendChild(p1ofElement)

        const pofElement = document.createElement('p');
        pofElement.innerText = `Link: ${item.linkURL}`;
        home.appendChild(pofElement)

        home.setAttribute('id', 'home')
    }
    );

