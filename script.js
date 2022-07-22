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
        detailCardTop.classList.add('detail-card-top');

        detailCardImage.id = (`detail-card-image${data[i].title}`);
        detailCardImage.classList.add('detail-card-image');

        detailCardBottom.id = (`detail-card-bottom${data[i].title}`);
        detailCardBottom.classList.add('detail-card-bottom');

        detailCardTitle.id = (`detail-card-title${data[i].title}`);
        detailCardCurrentTime.id = (`detail-card-current-time${data[i].title}`);

        detailCardPreviousTime.id = (`detail-card-previous-time${data[i].title}`);
        detailCardPreviousTime.classList.add('last-week-text');

        // Add images to detail cards
        ellipsis.src = './img/icon-ellipsis.svg';

        // Add text to card elements
        detailCardTitle.textContent = `${data[i].title}`;
        detailCardCurrentTime.textContent = `${data[i].timeframes.daily.current}`;
        detailCardPreviousTime.textContent = `Last week - ${data[i].timeframes.daily.previous}`;

        // Set colors of elements
        detailCardBottom.style.backgroundColor = "var(--dark-blue)";
        detailCardTop.style.backgroundColor = "var(--light-orange)";

        switch(data[i].title) {
            case 'Work':
                detailCard.style.gridRowStart = 1;
                detailCard.style.gridRowEnd = 2;
                detailCard.style.gridColumnStart = 2;
                detailCard.style.gridColumnEnd = 3;
                detailCardTop.style.color = 'var(--light-red)';
                break;
            
            case 'Play':
                detailCard.style.gridRowStart = 1;
                detailCard.style.gridRowEnd = 2;
                detailCard.style.gridColumnStart = 3;
                detailCard.style.gridColumnEnd = 4;
                detailCardTop.style.color = 'var(--soft-blue)';
                break;

            case 'Study':
                detailCard.style.gridRowStart = 1;
                detailCard.style.gridRowEnd = 2;
                detailCard.style.gridColumnStart = 4;
                detailCard.style.gridColumnEnd = 5;
                detailCardTop.style.color = 'var(--light-red)';
                break;
            
            case 'Exercise':
                detailCard.style.gridRowStart = 2;
                detailCard.style.gridRowEnd = 3;
                detailCard.style.gridColumnStart = 2;
                detailCard.style.gridColumnEnd = 3;
                detailCardTop.style.color = 'var(--light-red)';
                break;

            case 'Social':
                detailCard.style.gridRowStart = 2;
                detailCard.style.gridRowEnd = 3;
                detailCard.style.gridColumnStart = 3;
                detailCard.style.gridColumnEnd = 4;
                detailCardTop.style.color = 'var(--light-red)';
                break;

            case 'Selfcare':
                detailCard.style.gridRowStart = 2;
                detailCard.style.gridRowEnd = 3;
                detailCard.style.gridColumnStart = 4;
                detailCard.style.gridColumnEnd = 5;
                detailCardTop.style.color = 'var(--light-red)';
                break;
        }


        // Add elements to the DOM

        mainContent.appendChild(detailCard);
        detailCard.appendChild(detailCardTop);
        detailCardTop.appendChild(detailCardImage);
        detailCard.appendChild(detailCardBottom);
        detailCardBottom.appendChild(detailCardTitle);
        detailCardBottom.appendChild(detailCardCurrentTime);
        detailCardBottom.appendChild(detailCardPreviousTime);
        detailCardBottom.appendChild(ellipsis);


        

    }
    
}



populatDetailCards();