
fetch("home.json")
    .then(response => response.json())
    .then(responseData => {
        const sectionElement = document.createElement('section')
        const home = document.getElementById('#home');
        const imageofElement = document.createElement('img')
        const banner = document.createElement('.banner')

        imageofElement.src = item.imageURL;
        imageofElement.alt = item.alt;
        home.appendChild(imageofElement);
        sectionElement.appendChild(home);

        const h2ofElement = document.createElement('h2');
        h2ofElement.textContent = `This is the Goal: ${item.goalname}`;
        home.appendChild(h2ofElement)

        const p2ofElement = document.createElement('p');
        p2ofElement.textContent = `Link: ${item.linkURL}`;
        home.appendChild(p2ofElement)

        const p3ofElement = document.createElement('p');
        p3ofElement.textContent = item.quote;
        home.appendChild(p3ofElement)

        const h3ofElement = document.createElement('h3');
        h3ofElement.textContent = item.style;
        home.appendChild(h2ofElement);
    }
    );

