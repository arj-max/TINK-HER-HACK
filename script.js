const quotes = {
    happiness: [
        { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
        { quote: "The only way to find true happiness is to risk being completely cut open.", author: "Chuck Palahniuk" },
        { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
        { quote: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
        { quote: "Count your age by friends, not years. Count your life by smiles, not tears.", author: "John Lennon" },
        { quote: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius" },
        { quote: "Do more of what makes you happy.", author: "Unknown" },
        { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { quote: "Happiness is a journey, not a destination.", author: "Buddha" },
        { quote: "A joyful heart is the inevitable result of a heart burning with love.", author: "Mother Teresa" }
    ],
    sadness: [
        { quote: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
        { quote: "The walls we build around us to keep sadness out also keep out the joy.", author: "Jim Rohn" },
        { quote: "It’s so hard to forget pain, but it’s even harder to remember sweetness.", author: "Chuck Palahniuk" },
        { quote: "Behind every sweet smile, there is a bitter sadness that no one can ever see.", author: "Tupac Shakur" },
        { quote: "You cannot protect yourself from sadness without protecting yourself from happiness.", author: "Jonathan Safran Foer" },
        { quote: "Sadness flies away on the wings of time.", author: "Jean de La Fontaine" },
        { quote: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water.", author: "Christopher Morley" },
        { quote: "Nothing can cure the soul but the senses, just as nothing can cure the senses but the soul.", author: "Oscar Wilde" },
        { quote: "The word ‘happy’ would lose its meaning if it were not balanced by sadness.", author: "Carl Jung" },
        { quote: "Sadness is but a wall between two gardens.", author: "Kahlil Gibran" }
    ],
    motivation: [
        { quote: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
        { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
        { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
    ],
    love: [
        { quote: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
        { quote: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
        { quote: "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", author: "Rabindranath Tagore" },
        { quote: "We are shaped and fashioned by what we love.", author: "Johann Wolfgang von Goethe" },
        { quote: "Love yourself first and everything else falls into line.", author: "Lucille Ball" },
        { quote: "Where there is love there is life.", author: "Mahatma Gandhi" },
        { quote: "In the end, love you take is equal to the love you make.", author: "Paul McCartney" },
        { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
        { quote: "To love is to burn, to be on fire.", author: "Jane Austen" },
        { quote: "Love is an endless act of forgiveness.", author: "Maya Angelou" }
    ],
    life: [
        { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
        { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
        { quote: "In the end, it's not the years in your life that count, it's the life in your years.", author: "Abraham Lincoln" },
        { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
        { quote: "Life isn't about finding yourself. It's about creating yourself.", author: "George Bernard Shaw" },
        { quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
        { quote: "The biggest adventure you can take is to live the life of your dreams.", author: "Oprah Winfrey" },
        { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
        { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" }
    ],
    success: [
        { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
        { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
        { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
        { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
        { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
        { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
        { quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
        { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" }
    ],
    faith: [
        { quote: "Faith is taking the first step even when you don't see the whole staircase.", author: "Martin Luther King Jr." },
        { quote: "Faith is the strength by which a shattered world shall emerge into the light.", author: "Helen Keller" },
        { quote: "Faith is not believing that God can, it is knowing that He will.", author: "Anonymous" },
        { quote: "Faith is the bird that feels the light when the dawn is still dark.", author: "Rabindranath Tagore" },
        { quote: "Faith is the substance of things hoped for, the evidence of things not seen.", author: "Hebrews 11:1" },
        { quote: "Let your faith be bigger than your fear.", author: "Anonymous" },
        { quote: "Faith does not make things easy, it makes them possible.", author: "Anonymous" },
        { quote: "Without faith, nothing is possible. With it, nothing is impossible.", author: "Mary McLeod Bethune" },
        { quote: "Faith is the key to all miracles and all mysteries.", author: "Anonymous" },
        { quote: "The smallest seed of faith is better than the largest fruit of happiness.", author: "Henry David Thoreau" }
    ],
    perseverance: [
        { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
        { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.", author: "Vince Lombardi" },
        { quote: "Patience, persistence and perspiration make an unbeatable combination for success.", author: "Napoleon Hill" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { quote: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews" },
        { quote: "Perseverance is the key to overcoming obstacles.", author: "Unknown" },
        { quote: "Perseverance is the secret of all triumphs.", author: "Victor Hugo" }
    ],
    dreams: [
        { quote: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.", author: "Langston Hughes" },
        { quote: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
        { quote: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "Dreams are the touchstones of our character.", author: "Henry David Thoreau" },
        { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
        { quote: "A dream doesn’t become reality through magic; it takes sweat, determination, and hard work.", author: "Colin Powell" },
        { quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
        { quote: "Dreams come true. Without that possibility, nature would not incite us to have them.", author: "John Updike" }
    ],
    resilience: [
        { quote: "The oak fought the wind and was broken, the willow bent when it must and survived.", author: "Robert Jordan" },
        { quote: "Do not judge me by my success, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela" },
        { quote: "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up.", author: "Mary Holloway" },
        { quote: "She stood in the storm, and when the wind did not blow her way, she adjusted her sails.", author: "Elizabeth Edwards" },
        { quote: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
        { quote: "Tough times never last, but tough people do.", author: "Robert H. Schuller" },
        { quote: "Resilience is accepting your new reality, even if it’s less good than the one you had before.", author: "Elizabeth Edwards" },
        { quote: "Rock bottom became the solid foundation on which I rebuilt my life.", author: "J.K. Rowling" },
        { quote: "Although the world is full of suffering, it is also full of the overcoming of it.", author: "Helen Keller" },
        { quote: "We don’t even know how strong we are until we are forced to bring that hidden strength forward.", author: "Isabel Allende" }
    ],
    time: [
        { quote: "Time is what we want most, but what we use worst.", author: "William Penn" },
        { quote: "Lost time is never found again.", author: "Benjamin Franklin" },
        { quote: "Time is a created thing. To say ‘I don’t have time’ is like saying, ‘I don’t want to.’", author: "Lao Tzu" },
        { quote: "The trouble is, you think you have time.", author: "Buddha" },
        { quote: "Time takes it all, whether you want it to or not.", author: "Stephen King" },
        { quote: "We must use time as a tool, not as a couch.", author: "John F. Kennedy" },
        { quote: "Time flies over us, but leaves its shadow behind.", author: "Nathaniel Hawthorne" },
        { quote: "Better three hours too soon than a minute too late.", author: "William Shakespeare" },
        { quote: "Time is a great teacher, but unfortunately, it kills all its pupils.", author: "Louis Hector Berlioz" },
        { quote: "The two most powerful warriors are patience and time.", author: "Leo Tolstoy" }
    ],
    self_discovery: [
        { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { quote: "You must find the place inside yourself where nothing is impossible.", author: "Deepak Chopra" },
        { quote: "He who knows others is wise; he who knows himself is enlightened.", author: "Lao Tzu" },
        { quote: "At the center of your being you have the answer; you know who you are and you know what you want.", author: "Lao Tzu" },
        { quote: "Not until we are lost do we begin to understand ourselves.", author: "Henry David Thoreau" },
        { quote: "Self-discovery often happens when we move out of our comfort zone.", author: "Unknown" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { quote: "You are not a drop in the ocean. You are the entire ocean in a drop.", author: "Rumi" },
        { quote: "The privilege of a lifetime is to become who you truly are.", author: "Carl Jung" }
    ],
    fear: [
        { quote: "Do the thing you fear, and the death of fear is certain.", author: "Ralph Waldo Emerson" },
        { quote: "Fear is only as deep as the mind allows.", author: "Japanese Proverb" },
        { quote: "Nothing in life is to be feared, it is only to be understood.", author: "Marie Curie" },
        { quote: "Fear is the path to the dark side. Fear leads to anger, anger leads to hate, hate leads to suffering.", author: "Yoda" },
        { quote: "Fear kills more dreams than failure ever will.", author: "Suzy Kassem" },
        { quote: "He who is not everyday conquering some fear has not learned the secret of life.", author: "Ralph Waldo Emerson" },
        { quote: "Being scared is part of being alive. Accept it. Walk through it.", author: "Robin Sharma" },
        { quote: "Fear has two meanings: Forget Everything And Run or Face Everything And Rise. The choice is yours.", author: "Zig Ziglar" },
        { quote: "Fear makes the wolf bigger than he is.", author: "German Proverb" },
        { quote: "Feel the fear and do it anyway.", author: "Susan Jeffers" }
    ],
    hope: [
        { quote: "Hope is the thing with feathers that perches in the soul.", author: "Emily Dickinson" },
        { quote: "Keep your face always toward the sunshine, and shadows will fall behind you.", author: "Walt Whitman" },
        { quote: "Learn from yesterday, live for today, hope for tomorrow.", author: "Albert Einstein" },
        { quote: "Hope is being able to see that there is light despite all of the darkness.", author: "Desmond Tutu" },
        { quote: "Once you choose hope, anything’s possible.", author: "Christopher Reeve" },
        { quote: "Hope is a waking dream.", author: "Aristotle" },
        { quote: "Even the darkest night will end and the sun will rise.", author: "Victor Hugo" },
        { quote: "A single thread of hope is still a very powerful thing.", author: "Unknown" },
        { quote: "There was never a night or a problem that could defeat sunrise or hope.", author: "Bernard Williams" },
        { quote: "Hope is the only thing stronger than fear.", author: "Suzanne Collins" }
    ],
    anger: [
        { quote: "For every minute you are angry, you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
        { quote: "Anger is a wind that blows out the lamp of the mind.", author: "Robert G. Ingersoll" },
        { quote: "Holding onto anger is like drinking poison and expecting the other person to die.", author: "Buddha" },
        { quote: "The best fighter is never angry.", author: "Lao Tzu" },
        { quote: "Anybody can become angry—that is easy. But to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way—that is not within everybody’s power and is not easy.", author: "Aristotle" },
        { quote: "Speak when you are angry and you will make the best speech you will ever regret.", author: "Ambrose Bierce" },
        { quote: "Silence is the best answer to anger.", author: "Ali Ibn Abi Talib" },
        { quote: "When angry, count to ten before you speak. If very angry, count to one hundred.", author: "Thomas Jefferson" },
        { quote: "Resentment is like drinking poison and then hoping it will kill your enemies.", author: "Nelson Mandela" },
        { quote: "Anger, if not restrained, is frequently more hurtful to us than the injury that provokes it.", author: "Seneca" }
    ],
    loneliness: [
        { quote: "Sometimes, you need to be alone. Not to be lonely, but to enjoy your free time being yourself.", author: "Unknown" },
        { quote: "The greatest thing in the world is to know how to belong to oneself.", author: "Michel de Montaigne" },
        { quote: "If you are lonely when you’re alone, you are in bad company.", author: "Jean-Paul Sartre" },
        { quote: "Loneliness and the feeling of being unwanted is the most terrible poverty.", author: "Mother Teresa" },
        { quote: "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.", author: "Maya Angelou" },
        { quote: "We live as we dream – alone.", author: "Joseph Conrad" },
        { quote: "Pray that your loneliness may spur you into finding something to live for, great enough to die for.", author: "Dag Hammarskjöld" },
        { quote: "The eternal quest of the human being is to shatter his loneliness.", author: "Norman Cousins" },
        { quote: "The time you feel lonely is the time you most need to be by yourself.", author: "Douglas Coupland" },
        { quote: "Loneliness expresses the pain of being alone, and solitude expresses the glory of being alone.", author: "Paul Tillich" }
    ],
    change: [
        { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
        { quote: "Change is painful, but nothing is as painful as staying stuck somewhere you don’t belong.", author: "Mandy Hale" },
        { quote: "Everyone thinks of changing the world, but no one thinks of changing himself.", author: "Leo Tolstoy" },
        { quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts" },
        { quote: "When we are no longer able to change a situation, we are challenged to change ourselves.", author: "Viktor Frankl" },
        { quote: "To improve is to change; to be perfect is to change often.", author: "Winston Churchill" },
        { quote: "Life belongs to the living, and he who lives must be prepared for changes.", author: "Johann Wolfgang von Goethe" },
        { quote: "Change is the end result of all true learning.", author: "Leo Buscaglia" },
        { quote: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
        { quote: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don’t belong.", author: "Unknown" }
    ],
    failure: [
        { quote: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
        { quote: "Success is not built on success. It’s built on failure.", author: "Sumner Redstone" },
        { quote: "I have not failed. I’ve just found 10,000 ways that won’t work.", author: "Thomas Edison" },
        { quote: "Failure is not falling down but refusing to get up.", author: "Chinese Proverb" },
        { quote: "There is no failure except in no longer trying.", author: "Elbert Hubbard" },
        { quote: "Failure is the key to success; each mistake teaches us something.", author: "Morihei Ueshiba" },
        { quote: "Mistakes are proof that you are trying.", author: "Unknown" },
        { quote: "Only those who dare to fail greatly can ever achieve greatly.", author: "Robert F. Kennedy" },
        { quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
        { quote: "The only real mistake is the one from which we learn nothing.", author: "Henry Ford" }
    ],
    courage: [
        { quote: "Courage is not the absence of fear, but rather the judgment that something else is more important than fear.", author: "Ambrose Redmoon" },
        { quote: "It takes courage to grow up and become who you really are.", author: "E.E. Cummings" },
        { quote: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
        { quote: "Have enough courage to trust love one more time and always one more time.", author: "Maya Angelou" },
        { quote: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner" },
        { quote: "Life shrinks or expands in proportion to one’s courage.", author: "Anaïs Nin" },
        { quote: "Do not pray for an easy life; pray for the strength to endure a difficult one.", author: "Bruce Lee" },
        { quote: "Fortune favors the brave.", author: "Virgil" },
        { quote: "The brave man is not he who does not feel afraid, but he who conquers that fear.", author: "Nelson Mandela" },
        { quote: "Without courage, wisdom bears no fruit.", author: "Baltasar Gracián" }
    ],
    friendship: [
        { quote: "A real friend is one who walks in when the rest of the world walks out.", author: "Walter Winchell" },
        { quote: "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.’", author: "C.S. Lewis" },
        { quote: "A friend is someone who knows all about you and still loves you.", author: "Elbert Hubbard" },
        { quote: "The only way to have a friend is to be one.", author: "Ralph Waldo Emerson" },
        { quote: "A friend to all is a friend to none.", author: "Aristotle" },
        { quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.", author: "Mark Twain" },
        { quote: "Friendship is the only cement that will ever hold the world together.", author: "Woodrow Wilson" },
        { quote: "True friendship comes when the silence between two people is comfortable.", author: "David Tyson Gentry" },
        { quote: "Friendship is not about whom you have known the longest. It is about who came and never left your side.", author: "Unknown" },
        { quote: "A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow.", author: "William Shakespeare" }
    ],
    strength: [
        { quote: "You never know how strong you are until being strong is your only choice.", author: "Bob Marley" },
        { quote: "With the new day comes new strength and new thoughts.", author: "Eleanor Roosevelt" },
        { quote: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
        { quote: "Courage isn’t having the strength to go on—it is going on when you don’t have strength.", author: "Napoleon Bonaparte" },
        { quote: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
        { quote: "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.", author: "Christopher Reeve" },
        { quote: "You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
        { quote: "Do not pray for an easy life; pray for the strength to endure a difficult one.", author: "Bruce Lee" },
        { quote: "Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.", author: "William Ellery Channing" },
        { quote: "Sometimes you don’t realize your own strength until you come face to face with your greatest weakness.", author: "Susan Gale" }
    ],
    wisdom: [
        { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
        { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
        { quote: "Wisdom begins in wonder.", author: "Socrates" },
        { quote: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.", author: "William Shakespeare" },
        { quote: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein" },
        { quote: "Do not seek to follow in the footsteps of the wise; seek what they sought.", author: "Matsuo Bashō" },
        { quote: "It is not the man who has too little, but the man who craves more, that is poor.", author: "Seneca" },
        { quote: "Wisdom is the reward you get for a lifetime of listening when you would rather have talked.", author: "Mark Twain" },
        { quote: "To acquire knowledge, one must study; but to acquire wisdom, one must observe.", author: "Marilyn vos Savant" }
    ]

}
let currentQuote = null;
let favorites = [];

// Function to Generate a Quote
function generateQuote() {
    const category = document.getElementById('category').value;
    const categoryQuotes = quotes[category];

    if (categoryQuotes && categoryQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
        const quote = categoryQuotes[randomIndex];
        currentQuote = quote;

        document.getElementById('quote').innerText = `"${quote.quote}" — ${quote.author}`;

        // Apply the corresponding background gradient
        document.body.className = ''; // Reset previous backgrounds
        document.body.classList.add(category); // Apply new category background

        // Update Like/Unlike Button Display
        if (favorites.some(fav => fav.quote === quote.quote)) {
            document.getElementById('like-button').style.display = 'none';
            document.getElementById('unlike-button').style.display = 'inline-block';
        } else {
            document.getElementById('like-button').style.display = 'inline-block';
            document.getElementById('unlike-button').style.display = 'none';
        }
    } else {
        document.getElementById('quote').innerText = "Sorry, no quotes available for this category.";
    }
}

// Function to Like a Quote
function toggleLike() {
    if (!currentQuote) return;

    const index = favorites.findIndex(fav => fav.quote === currentQuote.quote);

    if (index === -1) {
        // Add to favorites
        favorites.push(currentQuote);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }

    updateFavoritesList();
}

// Function to Update Favorites List
function updateFavoritesList() {
    const list = document.getElementById('favourites-list');
    list.innerHTML = ""; // Clear existing list

    favorites.forEach(quote => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `"${quote.quote}" — ${quote.author} <button onclick="removeFromFavorites('${quote.quote}')">Remove</button>`;
        list.appendChild(listItem);
    });

    // Update button visibility
    if (favorites.some(fav => fav.quote === currentQuote?.quote)) {
        document.getElementById('like-button').style.display = 'none';
        document.getElementById('unlike-button').style.display = 'inline-block';
    } else {
        document.getElementById('like-button').style.display = 'inline-block';
        document.getElementById('unlike-button').style.display = 'none';
    }
}

// Function to Remove a Quote from Favorites
function removeFromFavorites(quoteText) {
    favorites = favorites.filter(fav => fav.quote !== quoteText);
    updateFavoritesList();
}
// Function to share the quote
function shareQuote(platform) {
    if (!currentQuote) {
        alert("Generate a quote first!");
        return;
    }

    const text = `"${currentQuote.quote}" — ${currentQuote.author}`;
    let url = "";

    if (platform === "twitter") {
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    } else if (platform === "facebook") {
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
    } else if (platform === "whatsapp") {
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    }

    window.open(url, "_blank");
}

// Event Listeners for Sharing Buttons
document.getElementById("share-twitter").addEventListener("click", function () {
    shareQuote("twitter");
});

document.getElementById("share-facebook").addEventListener("click", function () {
    shareQuote("facebook");
});

document.getElementById("share-whatsapp").addEventListener("click", function () {
    shareQuote("whatsapp");
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Change button text based on mode
    this.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';


});
// Function to add a custom quote
function addCustomQuote() {
    const quoteText = document.getElementById('custom-quote').value;
    const authorText = document.getElementById('custom-author').value;
    const category = document.getElementById('custom-category').value;

    if (quoteText && authorText) {
        const customQuote = { quote: quoteText, author: authorText, category: category };

        // Retrieve the existing custom quotes from localStorage or initialize an empty array
        const customQuotes = JSON.parse(localStorage.getItem('customQuotes')) || [];

        // Add the new custom quote to the list
        customQuotes.push(customQuote);

        // Save the updated list of custom quotes back to localStorage
        localStorage.setItem('customQuotes', JSON.stringify(customQuotes));

        // Clear the input fields
        document.getElementById('custom-quote').value = '';
        document.getElementById('custom-author').value = '';

        // Update the display of custom quotes
        displayCustomQuotes();
    } else {
        alert("Please enter both a quote and an author.");
    }
}

// Function to display custom quotes
function displayCustomQuotes() {
    const customQuotes = JSON.parse(localStorage.getItem('customQuotes')) || [];
    const customQuotesList = document.getElementById('custom-quotes-list');
    customQuotesList.innerHTML = '';  // Clear the list first

    // Loop through each custom quote and display it
    customQuotes.forEach((quote, index) => {
        const li = document.createElement('li');
        li.innerHTML = `"${quote.quote}" — ${quote.author} 
        <button onclick="removeCustomQuote(${index})">❌ Remove</button>`;
        customQuotesList.appendChild(li);
    });
}

// Function to remove a custom quote
function removeCustomQuote(index) {
    const customQuotes = JSON.parse(localStorage.getItem('customQuotes')) || [];

    // Remove the quote at the given index
    customQuotes.splice(index, 1);

    // Save the updated list back to localStorage
    localStorage.setItem('customQuotes', JSON.stringify(customQuotes));

    // Update the display
    displayCustomQuotes();
}

// Load and display custom quotes when the page loads
window.onload = function() {
    displayCustomQuotes();  // Display custom quotes on page load
};
