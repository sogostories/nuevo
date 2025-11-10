const translations7 = [

"Lina had recently moved to Norway and wanted to understand why Norwegians love going on hikes.", 
"A friend recommended that she join the Norwegian Trekking Association (DNT), and she signed up immediately.", 
"Now it was Sunday, and Lina was going to participate in her first DNT hike.", 
"At the meeting place, Lina was met by a large group of members of all ages.", 
"The tour leaders, Kari and Per, welcomed everyone and handed out maps of the route.",
"\"Today we are going on an easy hike to one of DNT's cabins,\" said Kari.",
"\"It will be a great day in nature.\"", 
"Lina noticed how organized everything was.",
"DNT members get access to a large network of marked trails and over 500 cabins all over Norway.", 
"In addition, DNT offers many activities and tours for members, from short day trips to longer expeditions.",
"On the hike, Lina started talking to the other participants.", 
"They told her about the many benefits of being a DNT member.",
"Not only do you get access to fantastic hiking opportunities, but also to community and friendship.", 
"DNT organizes many social activities, such as guided tours, courses, and family events.",
"When the group arrived at the cabin, Lina was impressed by how cozy it was.", 
"Kari and Per started preparing lunch, and the others helped.", 
"Everyone was happy and grateful to share this experience.",
"Kari told Lina that DNT has over 300,000 members and is one of Norway's largest and oldest outdoor organizations.", 
"Lina felt included and welcome.", 
"She realized that DNT was not just about going on hikes, but also about creating memories and community.", 
"Being a member of DNT gave her the opportunity to experience Norway's beautiful nature in a safe and pleasant way, while also making new friends.", 
"When the hike was over, Lina thanked Kari and Per.", 
"\"Thank you so much for a fantastic day,\" she said.", 
"\"I really look forward to the next hike with DNT.\""
];



const startTimes7=[15,25,32,39,48,55,57,62,73,75,80,88,93,101,109,116,122,128,140,143,152,164,167,171,176];
const vocabulary7 = [
  


/* Lina og DNT */
{ word: 'Lina',                translation: 'Lina' },
{ word: 'hadde',               translation: 'had' },
{ word: 'nylig',               translation: 'recently' },
{ word: 'flyttet',             translation: 'moved' },
{ word: 'til',                 translation: 'to' },
{ word: 'Norge',               translation: 'Norway' },
{ word: 'og',                  translation: 'and' },
{ word: 'ønsket',              translation: 'wanted' },
{ word: 'å',                   translation: 'to' },
{ word: 'forstå',              translation: 'understand' },
{ word: 'hvorfor',             translation: 'why' },
{ word: 'nordmenn',            translation: 'Norwegians' },
{ word: 'elsker',              translation: 'love' },
{ word: 'å gå på tur',         translation: 'to go hiking' },

{ word: 'En venn',             translation: 'A friend' },
{ word: 'anbefalte',           translation: 'recommended' },
{ word: 'henne',               translation: 'her' },
{ word: 'å bli med',           translation: 'to join' },
{ word: 'i',                   translation: 'in' },
{ word: 'Den Norske Turistforening', translation: 'The Norwegian Trekking Association' },
{ word: '(DNT)',               translation: '(DNT)' },
{ word: 'og',                  translation: 'and' },
{ word: 'hun',                 translation: 'she' },
{ word: 'meldte seg',          translation: 'signed up' },
{ word: 'straks',              translation: 'immediately' },
{ word: 'inn',                 translation: 'in' },

{ word: 'Nå',                  translation: 'Now' },
{ word: 'var',                 translation: 'was' },
{ word: 'det',                 translation: 'it' },
{ word: 'søndag',              translation: 'Sunday' },
{ word: 'og',                  translation: 'and' },
{ word: 'Lina',                translation: 'Lina' },
{ word: 'skulle',              translation: 'was going to' },
{ word: 'delta på',            translation: 'participate in' },
{ word: 'sin første',          translation: 'her first' },
{ word: 'DNT-tur',             translation: 'DNT trip' },



];

/**************  DOM  ****************/ 
const segments7 = Array.from(document.querySelectorAll('#storyText7 span'));
const toast7 = document.getElementById('toast7');
const audio7 = document.getElementById('storyAudio7');
const wordBtn7 = document.getElementById('wordModeBtn7');

/**************  STATE  ****************/ 
let readingIndex7=0;
let wordMode7=false;

/**************  AUDIO PLAYBACK (variable7)  ****************/ 
function clearHighlight7() {
  segments7.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate7() {
  if (wordMode7) return; // ignore in word mode
  const cur = audio7.currentTime;
  const idx = startTimes7.findIndex((s, i) => cur >= s && (i === startTimes7.length - 1 || cur < startTimes7[i + 1]));
  if (idx !== -1 && idx !== readingIndex7) {
    clearHighlight7();
    segments7[idx].classList.add('highlight');
    toast7.textContent = translations7[idx];
    toast7.style.display = 'block';
    readingIndex7 = idx;
  }
}
audio7.addEventListener('timeupdate', handleTimeUpdate7);
audio7.addEventListener('ended', () => {
  clearHighlight7();
  toast7.style.display = 'none';
  readingIndex7 = 0;
});

function playStory7() {
  exitWordMode7(); // exit word mode if active
  audio7.currentTime = startTimes7[readingIndex7];
  audio7.play();
  highlightCurrentSentence7(); // manually highlight on play
}
function highlightCurrentSentence7() {
  clearHighlight7();
  segments7[readingIndex7].classList.add('highlight');
  toast7.textContent = translations7[readingIndex7];
  toast7.style.display = 'block';
}

function pauseStory7() {
  audio7.pause();
  toast7.style.display = 'none';
  clearHighlight7();
}
/**************  SEGMENT CLICK – sentence playback (story7) ****************/
segments7.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex7 = idx;
    audio7.currentTime = startTimes7[idx];

    // Highlight immediately on click
    clearHighlight7();
    segments7[idx].classList.add('highlight');

    // Show translation immediately
    toast7.textContent = translations7[idx];
    toast7.style.display = 'block';

    playStory7();
  });
});
function toggleWordMode7() {
  wordMode7 ? exitWordMode7() : enterWordMode7();
}

function enterWordMode7() {
  wordMode7 = true;
  wordBtn7.textContent = 'Exit Word Mode';
  pauseStory7();
  toast7.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments7.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler7);
    });
  });
}
function exitWordMode7() {
  if (!wordMode7) return;
  wordMode7 = false;
  wordBtn7.textContent = 'Word Translation Mode';
  toast7.style.display = 'none';

  // restore original text (remove inner spans)
  segments7.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight7();
}
function wordClickHandler7(e) {
  e.stopPropagation();
  clearHighlight7();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary7
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary7.find(v => v.word.toLowerCase() === clean);
  toast7.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast7.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments7.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex7 = idx;
    audio7.currentTime = startTimes7[idx];
    audio7.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 7 ****************/
const flashcard7 = document.getElementById('flashcard7');
const flashcardContent7 = document.getElementById('flashcardContent7');
let currentWordIdx7 = 0;

function startVocabMode7() {
  exitWordMode7(); // Make sure word mode is off
  flashcard7.style.display = 'flex';
  currentWordIdx7 = 0;
  updateFlashcard7();
}

function updateFlashcard7() {
  flashcardContent7.textContent = vocabulary7[currentWordIdx7].word;
  flashcardContent7.dataset.side = 'word';
}

function revealMeaning7() {
  if (flashcardContent7.dataset.side === 'word') {
    flashcardContent7.textContent = vocabulary7[currentWordIdx7].translation;
    flashcardContent7.dataset.side = 'translation';
  } else {
    updateFlashcard7();
  }
}

function nextWord7() {
  currentWordIdx7 = (currentWordIdx7 + 1) % vocabulary7.length;
  updateFlashcard7();
}

function prevWord7() {
  currentWordIdx7 = (currentWordIdx7 - 1 + vocabulary7.length) % vocabulary7.length;
  updateFlashcard7();
}

function closeFlashcard7() {
  flashcard7.style.display = 'none';
}

/**************  MODAL – STORY 7 ****************/
function showDialog7() {
  document.getElementById('overlay7').style.display = 'block';
  document.getElementById('storyDialog7').style.display = 'block';
}

function closeDialog7() {
  pauseStory7();             // stop audio & highlight
  exitWordMode7();           // reset word mode
  flashcard7.style.display = 'none';
  document.getElementById('overlay7').style.display = 'none';
  document.getElementById('storyDialog7').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay7').addEventListener('click', closeDialog7);
