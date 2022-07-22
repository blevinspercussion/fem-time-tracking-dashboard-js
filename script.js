const mainContent = document.getElementById('main-content');

async function populatDetailCards() {
    const response = await fetch('./data.json');
    const data = await response.json();

    for (let i=0; i<data.length; i++) {
        // Create Detail Card elements
        let detailCard = document.createElement('div');
        let detailCardTop = document.createElement('div');
        let detailCardImage = document.createElement('div');
        let detailCardBottom = document.createElement('div');
        let detailCardTitle = document.createElement('p');
        let detailCardCurrentTime = document.createElement('h1');
        let detailCardPreviousTime = document.createElement('p');
        let ellipsis = document.createElement('img');

        // Set id and class of elements
        detailCard.id = (`detailCard${data[i].title}`);
        detailCard.classList.add('detail-card');

        // Add elements to the DOM

        mainContent.appendChild(detailCard);
        

    }
    
}



populatDetailCards();