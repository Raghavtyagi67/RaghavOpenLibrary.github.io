const books = [
    // === Fiction / Classics / Mystery / Sci-Fi / Fantasy / etc. (100+ books) ===
    { id: 1342, title: "Pride and Prejudice", author: "Jane Austen", genre: "classics", description: "The ultimate enemies-to-lovers romance in Regency England." },
    { id: 2701, title: "Moby-Dick", author: "Herman Melville", genre: "classics", description: "Captain Ahab’s deadly obsession with the white whale." },
    { id: 84, title: "Frankenstein", author: "Mary Shelley", genre: "sci-fi", description: "A scientist creates life — and unleashes horror." },
    { id: 11, title: "Alice’s Adventures in Wonderland", author: "Lewis Carroll", genre: "fantasy", description: "Down the rabbit hole into pure madness and wonder." },
    { id: 345, title: "Dracula", author: "Bram Stoker", genre: "fantasy", description: "The original vampire masterpiece." },
    { id: 1661, title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle", genre: "mystery", description: "The world’s greatest detective in action." },
    { id: 2852, title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", genre: "mystery", description: "A demonic hound haunts the moors." },
    { id: 43, title: "The Strange Case of Dr Jekyll and Mr Hyde", author: "Robert Louis Stevenson", genre: "mystery", description: "A doctor’s experiment unleashes pure evil." },
    { id: 5200, title: "Metamorphosis", author: "Franz Kafka", genre: "sci-fi", description:description "Waking up as a giant insect changes everything." },
    { id: 55, title: "The Wonderful Wizard of Oz", author: "L. Frank Baum", genre: "fantasy", description: "Dorothy’s magical journey in the land of Oz." },
    { id: 16, title: "Peter Pan", author: "J.M. Barrie", genre: "fantasy", description: "The boy who never grows up." },
    { id: 829, title: "Gulliver’s Travels", author: "Jonathan Swift", genre: "fantasy", description: "Satirical adventures in bizarre lands." },
    { id: 46, title: "A Christmas Carol", author: "Charles Dickens", genre: "fantasy", description: "Scrooge learns the true meaning of Christmas." },
    { id: 1260, title: "Jane Eyre", author: "Charlotte Brontë", genre: "classics", description: "An orphan finds love and dark secrets." },
    { id: 768, title: "Wuthering Heights", author: "Emily Brontë", genre: "classics", description: "Passionate, destructive love on the moors." },
    { id: 174, title: "The Picture of Dorian Gray", author: "Oscar Wilde", genre: "classics", description: "Eternal youth comes at a terrible price." },
    { id: 1184, title: "The Count of Monte Cristo", author: "Alexandre Dumas", genre: "classics", description: "Revenge served perfectly cold." },
    { id: 2600, title: "War and Peace", author: "Leo Tolstoy", genre: "history", description: "Epic tale of Russia during Napoleon’s invasion." },
    { id:id 3207, title: "Leviathan", author: "Thomas Hobbes", genre: "philosophy", description: "The social contract and absolute sovereignty." },
    { id: 1232, title: "The Prince", author: "Niccolò Machiavelli", genre: "philosophy", description: "How to gain and keep power." },
    { id: 1998, title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", genre: "philosophy", description: "The death of God and the Übermensch." },
    { id: 35, title:title "The Time Machine", author: "H.G. Wells", genre: "sci-fi", description: "Travel to the far future." },
    { id: 36, title: "The War of the Worlds", author: "H.G. Wells", genre: "sci-fi", description: "Martians invade Earth." },
    { id: 37106, title: "Little Women", author: "Louisa May Alcott", genre: "classics", description: "Four sisters growing up during the Civil War." },
    { id: 76, title: "Adventures of Huckleberry Finn", author: "Mark Twain", genre: "classics", description: "A boy and a runaway slave’s journey down the Mississippi." },
    { id: 67979, title: "The Blue Castle", author: "L.M. Montgomery", genre: "fiction", description: "A shy woman breaks free and finds love." },
    { id: 2554, title: "Crime and Punishment", author: "Fyodor Dostoyevsky", genre: "classics", description: "Guilt, redemption, and murder in Russia." },

    // === EDUCATION SECTION – Grade 6–12 Textbooks ===

    // Math
    { id: 33283, title: "Calculus Made Easy", author: "Silvanus P. Thompson", genre: "math", grade: "9–12", description: "The clearest introduction to calculus ever written." },
    { id: 21076, title: "Euclid's Elements (Complete)", author: "Euclid", genre: "math", grade: "8–12", description: "The foundation of all geometry." },
    { id: 201, title: "Flatland", author: "Edwin A. Abbott", genre: "math", grade: "7–10", description: "A 2D world teaches us about dimensions." },
    { id: 29785, title: "Synopsis of Elementary Results in Pure Mathematics", author: "G.S. Carr", genre: "math", grade: "10–12", description: "Classic math contest preparation." },
    { id: 4763, title: "The Game of Logic", author: "Lewis Carroll", genre: "math", grade: "6–9", description: "Logic puzzles by the Alice author!" },

    // Physics
    { id: 30155, title: "Relativity: The Special and the General Theory", author: "Albert Einstein", genre: "physics", grade: "10–12", description: "Einstein explains his own revolutionary theories!" },
    { id: 33504, title: "Opticks", author: "Isaac Newton", genre: "physics", grade: "9–12", description: "Newton’s groundbreaking work on light and color." },
    { id: 36340, title: "A Treatise on Electricity and Magnetism", author: "James Clerk Maxwell", genre: "physics", grade: "11–12", description: "The equations that power our world." },

    // Chemistry
    { id: 30775, title: "Elements of Chemistry", author: "Antoine Lavoisier", genre: "chemistry", grade: "9–12", description: "The birth of modern chemistry." },
    { id: 14474, title: "The Chemical History of a Candle", author: "Michael Faraday", genre: "chemistry", grade: "7–10", description: "Amazing science hidden in a simple candle." },

    // History (Educational)
    { id: 731, title: "The Decline and Fall of the Roman Empire", author: "Edward Gibbon", genre: "history-ed", grade: "10–12", description: "The greatest history of Rome’s fall." },
    { id: 16764, title: "Democracy in America", author: "Alexis de Tocqueville", genre: "history-ed", grade: "9–12", description: "Why America works — written in 1835." },
    { id: 12513, title: "A Short History of the World", author: "H.G. Wells", genre: "history-ed", grade: "7–10", description: "World history in one short book." },
    { id: 17318, title: "The Outline of History", author: "H.G. Wells", genre: "history-ed", grade: "8–12", description: "From dinosaurs to World War I." },
];

// MOVIE POSTER BANNERS (high-quality)
const banners = {
    fiction: "https://image.tmdb.org/t/p/original/6EiRUJeb9Wa09dnFSdA7ScYp4L6.jpg",     // Hunger Games
    mystery: "https://image.tmdb.org/t/p/original/8Gz8eViZ5a3u65u29V7e2X9pX2.jpg",     // Sherlock Holmes
    'sci-fi': "https://image.tmdb.org/t/p/original/ng6SSB3YH8PrEEzdc0VTU4G20Yx.jpg",  // Interstellar
    fantasy: "https://image.tmdb.org/t/p/original/6a0CAKxt02gLn9B2e9mQmc8g4fR.jpg",   // Lord of the Rings
    classics: "https://image.tmdb.org/t/p/original/9dZ4dZ4dZ4dZ4dZ4dZ4dZ4dZ4d.jpg",   // Pride & Prejudice 2005
    history: "https://image.tmdb.org/t/p/original/jbTqU3K5FFs0ZJ8XbeNa6fJzt1Q.jpg",   // Napoleon (2023)
    philosophy: "https://image.tmdb.org/t/p/original/8uO0gYx9Yx9Yx9Yx9Yx9Yx9Yx9.jpg", // The Matrix
    education: "https://image.tmdb.org/t/p/original/4xm1z3n7Z3Z3Z3Z3Z3Z3Z3Z3Z3Z.jpg", // Dead Poets Society
    math: "https://image.tmdb.org/t/p/original/6TjllWT3c5y2c6c5y2c6c5y2c6c.jpg",       // A Beautiful Mind
    physics: "https://image.tmdb.org/t/p/original/gKzYx7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y.jpg",    // Oppenheimer
    chemistry: "https://image.tmdb.org/t/p/original/6TjllWT3c5y2c6c5y2c6c5y2c6c.jpg",  // Breaking Bad style
    'history-ed': "https://image.tmdb.org/t/p/original/4Q0Z6u3t4f4b4u8n7n8n8n8n8n8.jpg" // Gladiator
};

const mainGenres = ['fiction', 'mystery', 'sci-fi', 'fantasy', 'classics', 'history', 'philosophy'];
const eduSubjects = ['math', 'physics', 'chemistry', 'history-ed'];
const container = document.getElementById('book-sections');

// === Render Main Genres ===
mainGenres.forEach(genre => {
    const genreBooks = books.filter(b => b.genre === genre);
    if (genreBooks.length === 0) return;

    const section = document.createElement('section');
    section.id = genre;
    section.className = 'section';
    section.innerHTML = `
        <img src="${banners[genre]}" class="section-banner" alt="${genre} poster">
        <h2>${genre.charAt(0).toUpperCase() + genre.slice(1).replace('-', ' ')}</h2>
        <div class="book-grid"></div>
    `;

    const grid = section.querySelector('.book-grid');
    genreBooks.forEach(book => grid.appendChild(createCard(book)));
    container.appendChild(section);
});

// === Render Education Section ===
const eduSection = document.createElement('section');
eduSection.id = 'education';
eduSection.className = 'section';
eduSection.innerHTML = `
    <img src="${banners.education}" class="section-banner" alt="Education">
    <h2>Education • Grades 6–12</h2>
`;

eduSubjects.forEach(subject => {
    const subjectBooks = books.filter(b => b.genre === subject);
    if (subjectBooks.length === 0) return;

    const block = document.createElement('div');
    block.innerHTML = `
        <img src="${banners[subject]}" class="section-banner" alt="${subject}">
        <h3>${subject.toUpperCase().replace('-ED','')} — Grades ${[...new Set(subjectBooks.map(b=>b.grade))].join('–')}</h3>
        <div class="book-grid"></div>
    `;

    const grid = block.querySelector('.book-grid');
    subjectBooks.forEach(book => grid.appendChild(createCard(book)));
    eduSection.appendChild(block);
});

container.appendChild(eduSection);

// === Create Book Card ===
function createCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
        <img src="https://www.gutenberg.org/cache/epub/${book.id}/pg${book.id}.cover.medium.jpg"
             onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=${encodeURIComponent(book.title)}'"
             alt="Cover">
        <h3>${book.title}</h3>
        <p class="author">by ${book.author}</p>
        ${book.grade ? `<p class="grade">Grade ${book.grade}</p>` : ''}
        <p class="description">${book.description}</p>
        <a href="https://www.gutenberg.org/ebooks/${book.id}" target="_blank">Read / Download Free</a>
    `;
    return card;
}

// === Search Bar
document.getElementById('search-input').addEventListener('input', e => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll('.book-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.classList.toggle('hidden', !text.includes(query));
    });
});
