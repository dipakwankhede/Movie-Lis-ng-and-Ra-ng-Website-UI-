


     lucide.createIcons();
const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=900&h=400&fit=crop&q=80",
    desc: "When the menace known as the Joker wreaks havoc on Gotham City, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Maggie Gyllenhaal"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    baseRating: 4.7,
    votes: 312
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    poster: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=400&fit=crop&q=80",
    desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    baseRating: 4.5,
    votes: 289
  },
  {
    id: 3,
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    poster: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=900&h=400&fit=crop&q=80",
    desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Diane Keaton"],
    director: "Francis Ford Coppola",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
    baseRating: 4.9,
    votes: 445
  },
  {
    id: 4,
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    poster: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=900&h=400&fit=crop&q=80",
    desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse.",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    director: "Christopher Nolan",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    baseRating: 4.6,
    votes: 267
  },
  {
    id: 5,
    title: "Spirited Away",
    genre: "Animation",
    year: 2001,
    poster: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=400&fit=crop&q=80",
    desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    cast: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino", "Mari Natsuki"],
    director: "Hayao Miyazaki",
    trailer: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    baseRating: 4.8,
    votes: 389
  },
  {
    id: 6,
    title: "Parasite",
    genre: "Drama",
    year: 2019,
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&h=400&fit=crop&q=80",
    desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
    director: "Bong Joon-ho",
    trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    baseRating: 4.7,
    votes: 301
  },
  {
    id: 7,
    title: "The Shining",
    genre: "Horror",
    year: 1980,
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=900&h=400&fit=crop&q=80",
    desc: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings.",
    cast: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers"],
    director: "Stanley Kubrick",
    trailer: "https://www.youtube.com/watch?v=S014oGZiSdI",
    baseRating: 4.4,
    votes: 211
  },
  {
    id: 8,
    title: "La La Land",
    genre: "Romance",
    year: 2016,
    poster: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=900&h=400&fit=crop&q=80",
    desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    cast: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"],
    director: "Damien Chazelle",
    trailer: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    baseRating: 4.3,
    votes: 254
  },
  {
    id: 9,
    title: "The Lord of the Rings",
    genre: "Fantasy",
    year: 2001,
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&h=400&fit=crop&q=80",
    desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom", "Cate Blanchett"],
    director: "Peter Jackson",
    trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
    baseRating: 4.8,
    votes: 419
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=900&h=400&fit=crop&q=80",
    desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of bandits intertwine in four tales of violence and redemption.",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    director: "Quentin Tarantino",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    baseRating: 4.6,
    votes: 388
  },
  {
    id: 11,
    title: "Everything Everywhere",
    genre: "Sci-Fi",
    year: 2022,
    poster: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=400&fit=crop&q=80",
    desc: "An aging Chinese immigrant is swept up in an insane adventure in which she alone can save the world by exploring other universes connecting with the lives she could have led.",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
    director: "Daniel Kwan & Daniel Scheinert",
    trailer: "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
    baseRating: 4.5,
    votes: 178
  },
  {
    id: 12,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    poster: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop&q=80",
    banner: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=900&h=400&fit=crop&q=80",
    desc: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with a low IQ.",
    cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
    director: "Robert Zemeckis",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    baseRating: 4.7,
    votes: 364
  }
];

// User ratings storage
const userRatings = {};

function starsHtml(rating, movieId, prefix = 'card') {
  let html = '';
  for (let i = 5; i >= 1; i--) {
    html += `<input type="radio" id="${prefix}-star${i}-m${movieId}" name="${prefix}-rating-m${movieId}" value="${i}" onchange="rateMovie(${movieId}, ${i}, '${prefix}')"/>
             <label for="${prefix}-star${i}-m${movieId}" title="${i} star">★</label>`;
  }
  return html;
}

function getAvgRating(movie) {
  if (!userRatings[movie.id]) return movie.baseRating;
  const totalVotes = movie.votes + 1;
  return ((movie.baseRating * movie.votes + userRatings[movie.id]) / totalVotes).toFixed(1);
}

function starsDisplay(rating) {
  const full = Math.round(rating);
  return '★'.repeat(full) + '☆'.repeat(5 - full);
}

function renderCard(movie, delay) {
  const avg = getAvgRating(movie);
  return `
  <div class="card" style="animation-delay:${delay}ms" onclick="openModal(${movie.id})">
    <div class="card-poster">
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy"/>
      <div class="card-poster-overlay"></div>
      <div class="genre-tag">${movie.genre}</div>
      <div class="year-tag">${movie.year}</div>
      <div class="quick-rate">
        <span class="star-icon">★</span>
        <span class="avg-val">${avg}</span>
      </div>
    </div>
    <div class="card-body">
      <div class="card-title">${movie.title}</div>
      <div class="card-desc">${movie.desc}</div>
      <div class="star-rating" onclick="event.stopPropagation()">${starsHtml(avg, movie.id, 'card')}</div>
      <div class="star-label">Tap to rate</div>
      <div class="card-footer">
        <div class="avg-rating">
          <span class="stars-display">${starsDisplay(avg)}</span>
          <span class="avg-num">${avg}</span>
          <span class="vote-count">(${movie.votes + (userRatings[movie.id] ? 1 : 0)})</span>
        </div>
        <button class="detail-btn" onclick="event.stopPropagation(); openModal(${movie.id})">Details</button>
      </div>
    </div>
  </div>`;
}

function rateMovie(movieId, stars, prefix) {
  userRatings[movieId] = stars;
  if (prefix === 'modal') {
    const labels = ['😐 Fair enough', '🙂 It was okay', '😊 Pretty good!', '😍 Loved it!', '🤩 Masterpiece!'];
    document.getElementById('rateFeedback').textContent = labels[stars - 1];
  }
  // Re-render grid to update avg
  filterMovies(false);
}

function filterMovies(resetAnim = true) {
  const q = document.getElementById('searchInput').value.toLowerCase();
  const genre = document.getElementById('genreFilter').value;
  const sort = document.getElementById('sortFilter').value;

  let filtered = movies.filter(m => {
    return (!q || m.title.toLowerCase().includes(q) || m.genre.toLowerCase().includes(q))
        && (!genre || m.genre === genre);
  });

  if (sort === 'rating') filtered.sort((a, b) => getAvgRating(b) - getAvgRating(a));
  else if (sort === 'year_desc') filtered.sort((a, b) => b.year - a.year);
  else if (sort === 'year_asc') filtered.sort((a, b) => a.year - b.year);
  else if (sort === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));

  document.getElementById('movieCount').textContent = filtered.length;

  if (filtered.length === 0) {
    document.getElementById('moviesGrid').innerHTML = `
      <div class="no-results">
        <h2>No Movies Found</h2>
        <p>Try a different search or filter.</p>
      </div>`;
    return;
  }

  document.getElementById('moviesGrid').innerHTML = filtered
    .map((m, i) => renderCard(m, resetAnim ? i * 60 : 0))
    .join('');
}

let currentModalId = null;

function openModal(movieId) {
  const movie = movies.find(m => m.id === movieId);
  currentModalId = movieId;

  document.getElementById('modalBanner').src = movie.banner;
  document.getElementById('modalPoster').src = movie.poster;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalDesc').textContent = movie.desc;
  document.getElementById('modalDirector').textContent = movie.director;
  document.getElementById('modalTrailerBtn').href = movie.trailer;

  const avg = getAvgRating(movie);
  document.getElementById('modalMeta').innerHTML = `
    <span class="meta-pill accent">★ ${avg} / 5</span>
    <span class="meta-pill">${movie.genre}</span>
    <span class="meta-pill">${movie.year}</span>
    <span class="meta-pill">${movie.votes + (userRatings[movie.id] ? 1 : 0)} ratings</span>
  `;

  document.getElementById('modalCast').innerHTML = movie.cast
    .map(c => `<div class="cast-chip">${c}</div>`).join('');

  document.getElementById('modalStars').innerHTML = starsHtml(avg, movieId, 'modal');

  // Pre-check user's rating if exists
  if (userRatings[movieId]) {
    const input = document.getElementById(`modal-star${userRatings[movieId]}-m${movieId}`);
    if (input) input.checked = true;
    const labels = ['😐 Fair enough', '🙂 It was okay', '😊 Pretty good!', '😍 Loved it!', '🤩 Masterpiece!'];
    document.getElementById('rateFeedback').textContent = labels[userRatings[movieId] - 1];
  } else {
    document.getElementById('rateFeedback').textContent = '';
  }

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });

// Init
filterMovies();
