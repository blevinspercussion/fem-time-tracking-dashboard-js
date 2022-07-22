const mainContent = document.getElementById('main-content');

async function populatDetailCards() {
    const response = await fetch('./data.json');
    const data = await response.json();

    for (let i=0; i<data.length; i++) {
        let detailCard = document.createElement('div');
        detailCard.id = (`detailCard${data[i].title}`);
        mainContent.appendChild(detailCard);
        

    }
    
}



populatDetailCards();