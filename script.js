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
        detailCard.id = (`detail-card${data[i].title}`);
        detailCard.classList.add('detail-card');

        detailCardTop.id = (`detail-card-top${data[i].title}`);
        detailCard.classList.add('detail-card-top');

        detailCardImage.id = (`detail-card-image${data[i].title}`);
        detailCardImage.classList.add('detail-card-image');

        detailCardBottom.id = (`detail-card-bottom${data[i].title}`);
        detailCardBottom.classList.add('detail-card-bottom');

        detailCardTitle.id = (`detail-card-title${data[i].title}`);
        detailCardCurrentTime.id = (`detail-card-current-time${data[i].title}`);

        detailCardPreviousTime.id = (`detail-card-previous-time${data[i].title}`);
        detailCardPreviousTime.classList.add('last-week-text');

        // Add images to detail cards
        

        

        // Add elements to the DOM

        mainContent.appendChild(detailCard);
        detailCard.appendChild(detailCardTop);

        

    }
    
}



populatDetailCards();