// Game & App Database
const contentData = [
    // HORROR GAMES
    {
        id: 1,
        title: 'FNAF (Five Nights at Freddy\'s)',
        emoji: '🐻',
        description: 'Survive five nights guarding a pizzeria from possessed animatronics. Manage cameras and doors carefully!',
        category: 'horror',
        type: 'games',
        rating: 4.8,
        plays: 5200000,
        url: 'https://www.gamejolt.com/games/five-nights-at-freddy-s/4836/play',
        tags: ['fnaf', 'horror', 'survival']
    },
    {
        id: 2,
        title: 'FNAF 2',
        emoji: '🤖',
        description: 'The sequel continues the nightmare with new animatronics and deeper lore. Even scarier than the first!',
        category: 'horror',
        type: 'games',
        rating: 4.7,
        plays: 3500000,
        url: 'https://www.gamejolt.com/games/five-nights-at-freddy-s-2/5141/play',
        tags: ['fnaf', 'horror', 'survival']
    },
    {
        id: 3,
        title: 'Five Nights at Candy\'s',
        emoji: '🍬',
        description: 'Similar FNAF experience with different animatronics and a new setting. Very challenging!',
        category: 'horror',
        type: 'games',
        rating: 4.5,
        plays: 1800000,
        url: 'https://www.gamejolt.com/games/five-nights-at-candy-s/23904/play',
        tags: ['fnaf', 'horror', 'survival']
    },
    {
        id: 4,
        title: 'Poppy Playtime',
        emoji: '🧸',
        description: 'Escape from a creepy toy factory with sentient toys trying to capture you. Thrilling survival horror!',
        category: 'horror',
        type: 'games',
        rating: 4.6,
        plays: 2900000,
        url: 'https://www.gamejolt.com/games/poppy-playtime/613119/play',
        tags: ['horror', 'survival', 'scary']
    },

    // RHYTHM GAMES
    {
        id: 5,
        title: 'Friday Night Funkin (FNF)',
        emoji: '🎤',
        description: 'Epic rap battles with music rhythm gameplay. Hit the keys to the beat and defeat opponents!',
        category: 'rhythm',
        type: 'games',
        rating: 4.9,
        plays: 8500000,
        url: 'https://www.gamejolt.com/games/friday-night-funkin/583570/play',
        tags: ['fnf', 'rhythm', 'music']
    },
    {
        id: 6,
        title: 'Crazygames Friday Night Funkin',
        emoji: '🎵',
        description: 'Another version of FNF with smooth gameplay and great music tracks. Perfect rhythm experience!',
        category: 'rhythm',
        type: 'games',
        rating: 4.8,
        plays: 7200000,
        url: 'https://www.crazygames.com/game/fnf',
        tags: ['fnf', 'rhythm', 'music']
    },
    {
        id: 7,
        title: 'Beatmania',
        emoji: '🎹',
        description: 'Classic rhythm game with challenging tracks. Test your musical timing and reflexes!',
        category: 'rhythm',
        type: 'games',
        rating: 4.4,
        plays: 1200000,
        url: 'https://www.konami.com/games/beatmania/',
        tags: ['rhythm', 'music', 'classic']
    },
    {
        id: 8,
        title: 'Osu!',
        emoji: '⭕',
        description: 'Tap circles to the beat of music. One of the most popular rhythm games ever made!',
        category: 'rhythm',
        type: 'games',
        rating: 4.9,
        plays: 12000000,
        url: 'https://osu.ppy.sh/home',
        tags: ['rhythm', 'music', 'competitive']
    },

    // ACTION GAMES
    {
        id: 9,
        title: 'Ultrakill',
        emoji: '⚔️',
        description: 'Fast-paced FPS with incredible combat mechanics. Stylish, challenging, and absolutely brutal!',
        category: 'action',
        type: 'games',
        rating: 4.9,
        plays: 3800000,
        url: 'https://store.steampowered.com/app/1229490/ULTRAKILL/',
        tags: ['action', 'fps', 'combat']
    },
    {
        id: 10,
        title: 'Geometry Dash',
        emoji: '🔺',
        description: 'Jump through geometric obstacles in rhythm with music. Addictive platformer gameplay!',
        category: 'action',
        type: 'games',
        rating: 4.7,
        plays: 9800000,
        url: 'https://www.crazygames.com/game/geometry-dash',
        tags: ['action', 'platformer', 'rhythm']
    },
    {
        id: 11,
        title: 'Run 3',
        emoji: '🏃',
        description: 'Endless runner in space. Navigate tunnels and avoid obstacles in zero gravity!',
        category: 'action',
        type: 'games',
        rating: 4.6,
        plays: 6500000,
        url: 'https://www.crazygames.com/game/run-3',
        tags: ['action', 'platformer', 'endless']
    },
    {
        id: 12,
        title: 'Getting Over It',
        emoji: '⛏️',
        description: 'Hammer your way up a mountain with patience and skill. Incredibly challenging but rewarding!',
        category: 'action',
        type: 'games',
        rating: 4.5,
        plays: 4200000,
        url: 'https://www.crazygames.com/game/getting-over-it',
        tags: ['action', 'challenging', 'platformer']
    },
    {
        id: 13,
        title: 'Agar.io',
        emoji: '🟢',
        description: 'Real-time multiplayer battle. Eat smaller players and grow while avoiding larger ones!',
        category: 'action',
        type: 'games',
        rating: 4.4,
        plays: 15000000,
        url: 'https://agar.io',
        tags: ['action', 'multiplayer', 'casual']
    },
    {
        id: 14,
        title: 'Slither.io',
        emoji: '🐍',
        description: 'Multiplayer snake game with twists. Grow longer and eliminate other players!',
        category: 'action',
        type: 'games',
        rating: 4.3,
        plays: 12000000,
        url: 'https://slither.io',
        tags: ['action', 'multiplayer', 'snake']
    },
    {
        id: 15,
        title: 'Shell Shockers',
        emoji: '🐚',
        description: 'FPS game where you\'re an egg. Multiplayer battles with unique characters!',
        category: 'action',
        type: 'games',
        rating: 4.5,
        plays: 5600000,
        url: 'https://shellshockers.io',
        tags: ['action', 'fps', 'multiplayer']
    },
    {
        id: 16,
        title: 'Dino Game',
        emoji: '🦖',
        description: 'Chrome\'s offline dinosaur game. Jump over cacti and pterodactyls. Simple but addictive!',
        category: 'action',
        type: 'games',
        rating: 4.3,
        plays: 25000000,
        url: 'https://chromedino.com/',
        tags: ['action', 'endless', 'casual']
    },

    // PUZZLE GAMES
    {
        id: 17,
        title: '2048',
        emoji: '🔢',
        description: 'Combine tiles to reach 2048. Strategic puzzle game that\'s easy to learn, hard to master!',
        category: 'puzzle',
        type: 'games',
        rating: 4.6,
        plays: 8900000,
        url: 'https://play2048.co/',
        tags: ['puzzle', 'numbers', 'strategic']
    },
    {
        id: 18,
        title: 'Wordle Unlimited',
        emoji: '📝',
        description: 'Guess the word in 6 tries. Perfect for word game enthusiasts and brain teasers!',
        category: 'puzzle',
        type: 'games',
        rating: 4.7,
        plays: 10000000,
        url: 'https://wordleunlimited.org/',
        tags: ['puzzle', 'words', 'daily']
    },
    {
        id: 19,
        title: 'Portal 2',
        emoji: '🌀',
        description: 'Physics-based puzzle platformer. Use portals creatively to solve complex challenges!',
        category: 'puzzle',
        type: 'games',
        rating: 4.8,
        plays: 4500000,
        url: 'https://www.youtube.com/results?search_query=portal+2+play+online',
        tags: ['puzzle', 'platformer', 'physics']
    },
    {
        id: 20,
        title: 'Tetris',
        emoji: '⬛',
        description: 'Classic block-falling puzzle. Arrange tetrominos to complete lines and score points!',
        category: 'puzzle',
        type: 'games',
        rating: 4.7,
        plays: 30000000,
        url: 'https://tetris.com/play-tetris',
        tags: ['puzzle', 'classic', 'retro']
    },
    {
        id: 21,
        title: 'Sudoku',
        emoji: '📊',
        description: 'Logic puzzle game. Fill grids with numbers following specific rules. Brain training!',
        category: 'puzzle',
        type: 'games',
        rating: 4.5,
        plays: 7500000,
        url: 'https://sudoku.com',
        tags: ['puzzle', 'logic', 'numbers']
    },
    {
        id: 22,
        title: 'Cut the Rope',
        emoji: '✂️',
        description: 'Physics puzzle where you cut ropes to feed candy to a cute monster. Very addictive!',
        category: 'puzzle',
        type: 'games',
        rating: 4.6,
        plays: 5800000,
        url: 'https://www.crazygames.com/game/cut-the-rope',
        tags: ['puzzle', 'physics', 'cute']
    },

    // CASUAL GAMES
    {
        id: 23,
        title: 'Cookie Clicker',
        emoji: '🍪',
        description: 'Click cookies to earn money and buy upgrades. Incredibly addictive idle game!',
        category: 'casual',
        type: 'games',
        rating: 4.4,
        plays: 20000000,
        url: 'https://cookieclicker.com/',
        tags: ['casual', 'idle', 'addictive']
    },
    {
        id: 24,
        title: 'Flappy Bird',
        emoji: '🐦',
        description: 'Tap to make the bird fly through pipes. Simple controls, deceptively difficult!',
        category: 'casual',
        type: 'games',
        rating: 4.2,
        plays: 18000000,
        url: 'https://flappybird.io/',
        tags: ['casual', 'arcade', 'simple']
    },
    {
        id: 25,
        title: 'Among Us',
        emoji: '👽',
        description: 'Social deduction game. Find the impostor among crewmates. Perfect with friends!',
        category: 'casual',
        type: 'games',
        rating: 4.3,
        plays: 22000000,
        url: 'https://www.innersloth.com/games/among-us/',
        tags: ['casual', 'multiplayer', 'social']
    },
    {
        id: 26,
        title: 'Memory Game',
        emoji: '🧠',
        description: 'Match pairs of emoji cards. Test your memory with progressively harder levels!',
        category: 'casual',
        type: 'games',
        rating: 4.4,
        plays: 3200000,
        url: 'https://www.crazygames.com/game/memory',
        tags: ['casual', 'memory', 'educational']
    },
    {
        id: 27,
        title: 'Pac-Man',
        emoji: '👻',
        description: 'Classic arcade game. Collect dots while avoiding ghosts in a maze. Timeless fun!',
        category: 'casual',
        type: 'games',
        rating: 4.5,
        plays: 25000000,
        url: 'https://pacman.withgoogle.com/',
        tags: ['casual', 'arcade', 'classic']
    },
    {
        id: 28,
        title: 'Space Invaders',
        emoji: '👾',
        description: 'Classic shooter game. Defend Earth from waves of alien invaders. Nostalgic arcade fun!',
        category: 'casual',
        type: 'games',
        rating: 4.4,
        plays: 16000000,
        url: 'https://www.crazygames.com/game/space-invaders',
        tags: ['casual', 'arcade', 'shooter']
    },

    // APPS
    {
        id: 101,
        title: 'YouTube',
        emoji: '📺',
        description: 'Video streaming platform. Watch millions of videos, from tutorials to entertainment!',
        category: 'casual',
        type: 'apps',
        rating: 4.6,
        plays: 1000000000,
        url: 'https://www.youtube.com',
        tags: ['app', 'streaming', 'video']
    },
    {
        id: 102,
        title: 'Discord',
        emoji: '💬',
        description: 'Communication platform. Voice, video, and text chat with communities worldwide!',
        category: 'casual',
        type: 'apps',
        rating: 4.7,
        plays: 500000000,
        url: 'https://discord.com',
        tags: ['app', 'communication', 'social']
    },
    {
        id: 103,
        title: 'Spotify Web',
        emoji: '🎧',
        description: 'Music streaming service. Listen to millions of songs from your favorite artists!',
        category: 'casual',
        type: 'apps',
        rating: 4.5,
        plays: 400000000,
        url: 'https://open.spotify.com',
        tags: ['app', 'music', 'streaming']
    },
    {
        id: 104,
        title: 'Twitch',
        emoji: '📹',
        description: 'Live streaming platform. Watch gamers, streamers, and creators go live!',
        category: 'casual',
        type: 'apps',
        rating: 4.4,
        plays: 300000000,
        url: 'https://www.twitch.tv',
        tags: ['app', 'streaming', 'live']
    },
    {
        id: 105,
        title: 'Reddit',
        emoji: '🔗',
        description: 'Community discussion platform. Find communities about anything you\'re interested in!',
        category: 'casual',
        type: 'apps',
        rating: 4.3,
        plays: 250000000,
        url: 'https://www.reddit.com',
        tags: ['app', 'social', 'community']
    },
    {
        id: 106,
        title: 'ChatGPT',
        emoji: '🤖',
        description: 'AI assistant. Ask questions and get intelligent responses powered by OpenAI!',
        category: 'casual',
        type: 'apps',
        rating: 4.8,
        plays: 200000000,
        url: 'https://chat.openai.com',
        tags: ['app', 'ai', 'assistant']
    },
    {
        id: 107,
        title: 'Figma',
        emoji: '🎨',
        description: 'Design tool. Create and collaborate on UI/UX designs with your team online!',
        category: 'casual',
        type: 'apps',
        rating: 4.6,
        plays: 50000000,
        url: 'https://www.figma.com',
        tags: ['app', 'design', 'tool']
    },
    {
        id: 108,
        title: 'VS Code Online',
        emoji: '💻',
        description: 'Web-based code editor. Write and manage code directly from your browser!',
        category: 'casual',
        type: 'apps',
        rating: 4.7,
        plays: 75000000,
        url: 'https://github.dev',
        tags: ['app', 'code', 'development']
    },
];

let favorites = JSON.parse(localStorage.getItem('gameHubFavorites')) || [];
let currentFilter = 'all';
let currentSearchTerm = '';

// DOM Elements
const contentGrid = document.getElementById('contentGrid');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const gameCountSpan = document.getElementById('gameCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    updateGameCount();
});

// Render Content
function renderContent() {
    const filteredContent = filterContent();
    contentGrid.innerHTML = '';

    if (filteredContent.length === 0) {
        contentGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">No games or apps found matching your criteria.</p>';
        return;
    }

    filteredContent.forEach(item => {
        const card = createCard(item);
        contentGrid.appendChild(card);
    });
}

// Create Card
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'content-card';
    card.innerHTML = `
        <div class="card-image">${item.emoji}</div>
        <div class="card-info">
            <div class="card-title">${item.title}</div>
            <span class="card-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
            <p class="card-description">${item.description}</p>
            <div class="card-rating">
                <span>⭐ ${item.rating}</span>
                <span>👥 ${(item.plays / 1000000).toFixed(1)}M</span>
            </div>
            <button class="card-button" onclick="openModal(${item.id})">View Details</button>
        </div>
    `;
    return card;
}

// Filter Content
function filterContent() {
    let filtered = contentData;

    // Apply category filter
    if (currentFilter !== 'all' && currentFilter !== 'favorites') {
        filtered = filtered.filter(item => item.category === currentFilter || item.type === currentFilter);
    }

    // Apply favorites filter
    if (currentFilter === 'favorites') {
        filtered = filtered.filter(item => favorites.includes(item.id));
    }

    // Apply search filter
    if (currentSearchTerm) {
        filtered = filtered.filter(item => 
            item.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(currentSearchTerm.toLowerCase()))
        );
    }

    return filtered;
}

// Open Modal
function openModal(id) {
    const item = contentData.find(x => x.id === id);
    if (!item) return;

    document.getElementById('modalImage').textContent = item.emoji;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalRating').textContent = item.rating;
    document.getElementById('modalPlays').textContent = (item.plays / 1000000).toFixed(1) + 'M';
    document.getElementById('modalCategory').textContent = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    
    const playBtn = document.getElementById('playBtn');
    playBtn.href = item.url;
    playBtn.target = '_blank';

    const favBtn = document.getElementById('favBtn');
    favBtn.textContent = favorites.includes(item.id) ? '❤️ Remove from Favorites' : '❤️ Add to Favorites';
    favBtn.onclick = () => toggleFavorite(item.id);

    modal.classList.add('active');
}

// Close Modal
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// Toggle Favorite
function toggleFavorite(id) {
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('gameHubFavorites', JSON.stringify(favorites));
    
    // Update button text
    const favBtn = document.getElementById('favBtn');
    favBtn.textContent = favorites.includes(id) ? '❤️ Remove from Favorites' : '❤️ Add to Favorites';
}

// Filter Buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderContent();
    });
});

// Search
searchBtn.addEventListener('click', () => {
    currentSearchTerm = searchInput.value;
    renderContent();
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        currentSearchTerm = searchInput.value;
        renderContent();
    }
});

// Update Game Count
function updateGameCount() {
    gameCountSpan.textContent = contentData.length;
}