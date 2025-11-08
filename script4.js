

const translations2 = [
  "The cabin culture in Norway is an important part of Norwegian life.",
  "Many Norwegians have a cabin, which is a small house in nature.",
  "Cabins can be in the mountains, by the sea, in the forest, or on islands.",
  "Cabins can be old or new, large or small, simple or luxurious.",
  "The word 'hytte' comes from the old Norse word 'hýtti', which means 'small house'.",
  "The first evidence that Norwegians had cabins is from the 1100s.",
  "Back then, cabins were used by farmers, hunters, and fishermen.",
  "Later, the cabins were used by artists, writers, and royalty.",
  "Today, nearly 400,000 Norwegians have a cabin.",
  "Norwegians like to go on cabin trips to relax, enjoy themselves, and be outdoors.",
  "They often go on cabin trips on Fridays and stay until Sunday. Many Norwegians call it the 'Friday trip'.",
  "At the office, very few people come to work on Fridays, or most Norwegians leave early so they can avoid traffic on the way to the cabin.",
  "They also go on cabin trips during holidays such as Easter, Christmas, and May 17th.",
  "They go on cabin trips in both summer and winter.",
  "When Norwegians are on a cabin trip, they do many different activities.",
  "They go hiking in nature, fish, swim, bike, play games, read books, and cook food.",
  "Typical hiking food at the cabin includes for example Kvikk Lunsj, clementines, sandwiches with cheese and ham, sausages, etc.",
  "The cabin culture in Norway is central because it shows how Norwegians love nature and their families.",
  "The cabin is a place where Norwegians can be themselves and have fun together.",
  "The cabin is a symbol of the Norwegian people and their values.",
  "In Norway, there are many mountains and beautiful nature, so the cabins provide an opportunity to enjoy this."
];



const startTimes2=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
const vocabulary2 = [
  


  /* Cabin Culture */
  { word: 'hytte',              translation: 'cabin' },
  { word: 'hyttetur',           translation: 'cabin trip' },
  { word: 'hytteliv',           translation: 'cabin life' },
  { word: 'hyttene',            translation: 'the cabins' },
  { word: 'naturen',            translation: 'nature' },
  { word: 'fjellene',           translation: 'the mountains' },
  { word: 'sjøen',              translation: 'the sea' },
  { word: 'øyer',               translation: 'islands' },
  { word: 'gamle',              translation: 'old' },
  { word: 'nye',                translation: 'new' },
  { word: 'store',              translation: 'large' },
  { word: 'små',                translation: 'small' },
  { word: 'enkle',              translation: 'simple' },
  { word: 'luksuriøse',         translation: 'luxurious' },
  { word: 'kunstnere',          translation: 'artists' },
  { word: 'forfattere',         translation: 'writers' },
  { word: 'bønder',             translation: 'farmers' },
  { word: 'jegere',             translation: 'hunters' },
  { word: 'fiskere',            translation: 'fishermen' },
  { word: 'avslappe',           translation: 'relax' },
  { word: 'fredag',             translation: 'Friday' },
  { word: 'søndag',             translation: 'Sunday' },
  { word: 'påske',              translation: 'Easter' },
  { word: 'jul',                translation: 'Christmas' },
  { word: 'mai',                translation: 'May' },
  { word: 'aktiviteter',        translation: 'activities' },
  { word: 'gå tur',             translation: 'hiking' },
  { word: 'fiske',              translation: 'fishing' },
  { word: 'sykle',              translation: 'bike' },
  { word: 'svømme',             translation: 'swim' },
  { word: 'spille',             translation: 'play' },
  { word: 'lese',               translation: 'read' },
  { word: 'lage mat',           translation: 'cook food' },
  { word: 'verdier',            translation: 'values' },
  { word: 'familie',            translation: 'family' },
  { word: 'seg selv',           translation: 'themselves' },
  { word: 'kos',                translation: 'coziness' },
  { word: 'fredelig',           translation: 'peaceful' },
  { word: 'folk',               translation: 'people' },
  { word: 'fjell',              translation: 'mountain' },
  { word: 'natur',              translation: 'nature' }


];

/**************  DOM  ****************/ 
const segments2 = Array.from(document.querySelectorAll('#storyText2 span'));
const toast2 = document.getElementById('toast2');
const audio2 = document.getElementById('storyAudio2');
const wordBtn2 = document.getElementById('wordModeBtn2');

/**************  STATE  ****************/ 
let readingIndex2=0;
let wordMode2=false;

/**************  AUDIO PLAYBACK (variable2)  ****************/ 
function clearHighlight2() {
  segments2.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate2() {
  if (wordMode2) return; // ignore in word mode
  const cur = audio2.currentTime;
  const idx = startTimes2.findIndex((s, i) => cur >= s && (i === startTimes2.length - 1 || cur < startTimes2[i + 1]));
  if (idx !== -1 && idx !== readingIndex2) {
    clearHighlight2();
    segments2[idx].classList.add('highlight');
    toast2.textContent = translations2[idx];
    toast2.style.display = 'block';
    readingIndex2 = idx;
  }
}
audio2.addEventListener('timeupdate', handleTimeUpdate2);
audio2.addEventListener('ended', () => {
  clearHighlight2();
  toast2.style.display = 'none';
  readingIndex2 = 0;
});


function playStory2() {
  exitWordMode2(); // exit word mode if active
  audio2.currentTime = startTimes2[readingIndex2];
  audio2.play();
  highlightCurrentSentence2(); // manually highlight on play
}
function highlightCurrentSentence2() {
  clearHighlight2();
  segments2[readingIndex2].classList.add('highlight');
  toast2.textContent = translations2[readingIndex2];
  toast2.style.display = 'block';
}

function pauseStory2() {
  audio2.pause();
  toast2.style.display = 'none';
  clearHighlight2();
}
/**************  SEGMENT CLICK – sentence playback (story2) ****************/
segments2.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex2 = idx;
    audio2.currentTime = startTimes2[idx];

    // Highlight immediately on click
    clearHighlight2();
    segments2[idx].classList.add('highlight');

    // Show translation immediately
    toast2.textContent = translations2[idx];
    toast2.style.display = 'block';

    playStory2();
  });
});
function toggleWordMode2() {
  wordMode2 ? exitWordMode2() : enterWordMode2();
}

function enterWordMode2() {
  wordMode2 = true;
  wordBtn2.textContent = 'Exit Word Mode';
  pauseStory2();
  toast2.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments2.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler2);
    });
  });
}
function exitWordMode2() {
  if (!wordMode2) return;
  wordMode2 = false;
  wordBtn2.textContent = 'Word Translation Mode';
  toast2.style.display = 'none';

  // restore original text (remove inner spans)
  segments2.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight2();
}
function wordClickHandler2(e) {
  e.stopPropagation();
  clearHighlight2();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary2
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary2.find(v => v.word.toLowerCase() === clean);
  toast2.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast2.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments2.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex2 = idx;
    audio2.currentTime = startTimes2[idx];
    audio2.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 2 ****************/
const flashcard2 = document.getElementById('flashcard2');
const flashcardContent2 = document.getElementById('flashcardContent2');
let currentWordIdx2 = 0;

function startVocabMode2() {
  exitWordMode2(); // Make sure word mode is off
  flashcard2.style.display = 'flex';
  currentWordIdx2 = 0;
  updateFlashcard2();
}

function updateFlashcard2() {
  flashcardContent2.textContent = vocabulary2[currentWordIdx2].word;
  flashcardContent2.dataset.side = 'word';
}

function revealMeaning2() {
  if (flashcardContent2.dataset.side === 'word') {
    flashcardContent2.textContent = vocabulary2[currentWordIdx2].translation;
    flashcardContent2.dataset.side = 'translation';
  } else {
    updateFlashcard2();
  }
}

function nextWord2() {
  currentWordIdx2 = (currentWordIdx2 + 1) % vocabulary2.length;
  updateFlashcard2();
}

function prevWord2() {
  currentWordIdx2 = (currentWordIdx2 - 1 + vocabulary2.length) % vocabulary2.length;
  updateFlashcard2();
}

function closeFlashcard2() {
  flashcard2.style.display = 'none';
}

/**************  MODAL – STORY 2 ****************/
function showDialog2() {
  document.getElementById('overlay2').style.display = 'block';
  document.getElementById('storyDialog2').style.display = 'block';
}

function closeDialog2() {
  pauseStory2();             // stop audio & highlight
  exitWordMode2();           // reset word mode
  flashcard2.style.display = 'none';
  document.getElementById('overlay2').style.display = 'none';
  document.getElementById('storyDialog2').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay2').addEventListener('click', closeDialog2);
