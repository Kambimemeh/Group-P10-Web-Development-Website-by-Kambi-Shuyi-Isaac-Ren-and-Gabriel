// Load JSON from external file
fetch("home.json")
  .then(response => response.json())
  .then(data => {
    // Banner image
    const bannerBg = document.querySelector("#home .banner");
    bannerBg.innerHTML = `<img src="${data.banner.imageURL}" alt="${data.banner.alt}">`;

    // Select sections
    const leftSections = document.querySelectorAll("#navSection .left");
    const rightSection = document.querySelector("#navSection .right");

    // Goal 1 → first left
    leftSections[0].innerHTML = `
      <h2>${data.goals[0].goalname}</h2>
      <a href="${data.goals[0].linkURL}" target="_blank">
        <img src="${data.goals[0].imageURL}" alt="${data.goals[0].alt}">
      </a>
    `;

    // Goal 2 → right
    rightSection.innerHTML = `
      <h2>${data.goals[1].goalname}</h2>
      <a href="${data.goals[1].linkURL}" target="_blank">
        <img src="${data.goals[1].imageURL}" alt="${data.goals[1].alt}">
      </a>
    `;

    // Goal 3 → second left
    leftSections[1].innerHTML = `
      <h2>${data.goals[2].goalname}</h2>
      <a href="${data.goals[2].linkURL}" target="_blank">
        <img src="${data.goals[2].imageURL}" alt="${data.goals[2].alt}">
      </a>
    `;
  })
  .catch(error => console.error("Error loading JSON:", error));
