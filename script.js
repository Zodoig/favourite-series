import { collection } from './collection.js';

console.log(collection);


const seriesContainer = document.querySelector(".flex-box");

collection.forEach(series => {
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
    seriesGenre.textContent = series.genre;
    seriesGenre.className = "genre";
    seriesDiv.appendChild(seriesGenre);

    const seriesTrailer = document.createElement('a');
    seriesTrailer.href = series.trailer;
    seriesTrailer.textContent = "Watch the trailer here.";
    seriesTrailer.className = "trailer";
    seriesDiv.appendChild(seriesTrailer);

    const seriesCast = document.createElement('h4');
    seriesCast.textContent = series.cast;
    seriesCast.className = "cast";
    seriesDiv.appendChild(seriesCast);

    const seriesDescription = document.createElement('p');
    seriesDescription.textContent = series.description;
    seriesDescription.className = "description";
    seriesDiv.appendChild(seriesDescription);

    seriesContainer.appendChild(seriesDiv);

});
