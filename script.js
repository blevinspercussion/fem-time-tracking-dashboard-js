// Get main DOM elements
const mainContent = document.getElementById('main-content');

const dailyLink = document.getElementById("daily-link");
const weeklyLink = document.getElementById("weekly-link");
const monthlyLink = document.getElementById("monthly-link");

// Function to dynamically populate detail cards with correct info from JSON file
async function populateDetailCards(timePeriod) {
    const response = await fetch('./data.json');
    const data = await response.json();

    console.log(timePeriod);

    for (let i=0; i<data.length; i++) {
        // Create Detail Card elements
        let detailCard = document.createElement('div');
        let detailCardTop = document.createElement('div');
        let detailCardImage = document.createElement('img');
        let detailCardBottom = document.createElement('div');
        let detailCardBottomLeft = document.createElement('div');
        let detailCardTitle = document.createElement('p');
        let detailCardCurrentTime = document.createElement('h1');
        let detailCardPreviousTime = document.createElement('p');
        let ellipsisDiv = document.createElement('div');
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

        detailCardBottomLeft.id = (`detail-card-bottom-left${data[i].title}`);
        detailCardBottomLeft.classList.add('detail-card-bottom-left');

        detailCardTitle.id = (`detail-card-title${data[i].title}`);
        detailCardCurrentTime.id = (`detail-card-current-time${data[i].title}`);

        detailCardPreviousTime.id = (`detail-card-previous-time${data[i].title}`);
        detailCardPreviousTime.classList.add('last-week-text');

        ellipsis.classList.add('ellipsis');

        // Add images to detail cards
        ellipsis.src = './img/icon-ellipsis.svg';

        // Add text to card elements
        detailCardTitle.textContent = `${data[i].title}`;
        
        switch (timePeriod) {
            case 'daily':
                detailCardCurrentTime.textContent = `${data[i].timeframes.daily.current} hrs`;
                detailCardPreviousTime.textContent = `Last week - ${data[i].timeframes.daily.previous} hrs`;
                break;

            case 'weekly':
                detailCardCurrentTime.textContent = `${data[i].timeframes.weekly.current} hrs`;
                detailCardPreviousTime.textContent = `Last week - ${data[i].timeframes.weekly.previous} hrs`;
                break;

            case 'monthly':
                detailCardCurrentTime.textContent = `${data[i].timeframes.monthly.current} hrs`;
                detailCardPreviousTime.textContent = `Last week - ${data[i].timeframes.monthly.previous} hrs`;
                break;

            default:
                detailCardCurrentTime.textContent = '--';
                detailCardPreviousTime.textContent = '--';
        }

        // Set colors of elements

        switch(data[i].title) {
            case 'Work':
                detailCard.style.gridRowStart = 1;
                detailCard.style.gridRowEnd = 2;
                detailCard.style.gridColumnStart = 2;
                detailCard.style.gridColumnEnd = 3;
                detailCardImage.src = './img/icon-work.svg';
                detailCardTop.style.backgroundColor = 'var(--light-orange)';
                break;
            
            case 'Play':
                detailCard.style.gridRowStart = 1;
                detailCard.style.gridRowEnd = 2;
                detailCard.style.gridColumnStart = 3;
                detailCard.style.gridColumnEnd = 4;
                detailCardImage.src = './img/icon-play.svg';
                detailCardTop.style.backgroundColor = 'var(--soft-blue)';
                break;

            case 'Study':
                detailCard.style.gridRowStart = 1;
                detailCard.style.gridRowEnd = 2;
                detailCard.style.gridColumnStart = 4;
                detailCard.style.gridColumnEnd = 5;
                detailCardImage.src = './img/icon-study.svg';
                detailCardTop.style.backgroundColor = 'var(--light-red)';
                break;
            
            case 'Exercise':
                detailCard.style.gridRowStart = 2;
                detailCard.style.gridRowEnd = 3;
                detailCard.style.gridColumnStart = 2;
                detailCard.style.gridColumnEnd = 3;
                detailCardImage.src = './img/icon-exercise.svg';
                detailCardImage.style.marginTop = 0;
                detailCardTop.style.backgroundColor = 'var(--lime-green)';
                break;

            case 'Social':
                detailCard.style.gridRowStart = 2;
                detailCard.style.gridRowEnd = 3;
                detailCard.style.gridColumnStart = 3;
                detailCard.style.gridColumnEnd = 4;
                detailCardImage.src = './img/icon-social.svg';
                detailCardTop.style.backgroundColor = 'var(--violet)';
                break;

            case 'Self Care':
                detailCard.style.gridRowStart = 2;
                detailCard.style.gridRowEnd = 3;
                detailCard.style.gridColumnStart = 4;
                detailCard.style.gridColumnEnd = 5;
                detailCardImage.src = './img/icon-self-care.svg';
                detailCardTop.style.backgroundColor = 'var(--soft-orange)';
                break;
        }


        // Add elements to the DOM

        mainContent.appendChild(detailCard);
        detailCard.appendChild(detailCardTop);
        detailCardTop.appendChild(detailCardImage);
        detailCard.appendChild(detailCardBottom);
        detailCardBottom.appendChild(detailCardBottomLeft);
        detailCardBottomLeft.appendChild(detailCardTitle);
        detailCardBottomLeft.appendChild(detailCardCurrentTime);
        detailCardBottomLeft.appendChild(detailCardPreviousTime);
        detailCardBottom.appendChild(ellipsis);


        

    }
    
}



populateDetailCards();

dailyLink.addEventListener('click', () => {
    populateDetailCards('daily');
    dailyLink.classList.add('selected-link');
    weeklyLink.classList.remove('selected-link');
    monthlyLink.classList.remove('selected-link');

    // dailyLink.style.color = 'white';
    // weeklyLink.style.color = 'var(--desaturated-blue)';
    // monthlyLink.style.color = 'var(--desaturated-blue)';

});

weeklyLink.addEventListener('click', () => {
    populateDetailCards('weekly');
    dailyLink.classList.remove('selected-link');
    weeklyLink.classList.add('selected-link');
    monthlyLink.classList.remove('selected-link');
    // weeklyLink.style.color = 'white';
    // dailyLink.style.color = 'var(--desaturated-blue)';
    // monthlyLink.style.color = 'var(--desaturated-blue)';
});

monthlyLink.addEventListener('click', () => {
    populateDetailCards('monthly');
    dailyLink.classList.remove('selected-link');
    weeklyLink.classList.remove('selected-link');
    monthlyLink.classList.add('selected-link');
    // monthlyLink.style.color = 'white';
    // dailyLink.style.color = 'var(--desaturated-blue)';
    // weeklyLink.style.color = 'var(--desaturated-blue)';
})