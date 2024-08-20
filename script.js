import { collection } from './collection.js';

const seriesContainer = document.querySelector(".flex-box");
const searchBar = document.getElementById('search-bar');


const displaySeries = (seriesList) => {
    seriesContainer.innerHTML = ''; 
    seriesList.forEach(series => {
        const seriesDiv = document.createElement('div');
        seriesDiv.className = "flex-item";

        const seriesTitle = document.createElement('h2');
        seriesTitle.textContent = series.title;
        seriesTitle.className = "title";
        seriesDiv.appendChild(seriesTitle);

        const seriesPicture = document.createElement('img');
        seriesPicture.src = series.picture;
        seriesPicture.alt = "series title with logo";
        seriesPicture.className = "picture";
        seriesDiv.appendChild(seriesPicture);

        const seriesGenre = document.createElement('h3');
        seriesGenre.textContent = series.genres.join(', '); 
        seriesGenre.className = "genre";
        seriesDiv.appendChild(seriesGenre);

        const seriesTrailer = document.createElement('a');
        seriesTrailer.href = series.trailer;
        seriesTrailer.textContent = "Watch the trailer here.";
        seriesTrailer.className = "trailer";
        seriesDiv.appendChild(seriesTrailer);

        const seriesCast = document.createElement('h4');
        seriesCast.textContent = series.cast.join(', ');
        seriesCast.className = "cast";
        seriesDiv.appendChild(seriesCast);

        const seriesDescription = document.createElement('p');
        seriesDescription.textContent = series.description;
        seriesDescription.className = "description";
        seriesDiv.appendChild(seriesDescription);

        seriesDiv.addEventListener('mouseenter', () => {
            seriesContainer.querySelectorAll('.flex-item').forEach(item => {
                if (item !== seriesDiv) {
                    item.classList.add('gray-out');
                } else {
                    item.classList.add('hovered');
                }
            });
        });
        
        seriesDiv.addEventListener('mouseleave', () => {
            seriesContainer.querySelectorAll('.flex-item').forEach(item => {
                item.classList.remove('gray-out', 'hovered');
            });
        });

        seriesContainer.appendChild(seriesDiv);
    });
};


displaySeries(collection);


searchBar.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredSeries = collection.filter(series =>
        series.title.toLowerCase().includes(query)
    );
    displaySeries(filteredSeries);
});
