

const translations7 = [
 "Lina hadde nylig flyttet til Norge og ønsket å forstå hvorfor nordmenn elsker å gå på tur.",
"En venn anbefalte henne å bli med i Den Norske Turistforening (DNT), og hun meldte seg straks inn.",
"Nå var det søndag, og Lina skulle delta på sin første DNT-tur.",

"På møteplassen ble Lina møtt av en stor gruppe medlemmer i alle aldre.",
"Turlederne, Kari og Per, ønsket alle velkommen og delte ut kart over ruten.",
"\"I dag skal vi gå en lett tur til en av DNTs hytter,\" sa Kari.",
"\"Det blir en flott dag i naturen.\"", 

"Lina la merke til hvor organisert alt var.",
"DNT-medlemmer får tilgang til et stort nettverk av merkede stier og over 500 hytter over hele Norge.",
"I tillegg tilbyr DNT mange aktiviteter og turer for medlemmene, fra korte dagsturer til lengre ekspedisjoner.",

"På turen begynte Lina å snakke med de andre deltakerne.",
"De fortalte henne om de mange fordelene ved å være DNT-medlem.",
"Ikke bare får man tilgang til fantastiske turmuligheter, men også til fellesskap og vennskap.",
"DNT organiserer mange sosiale aktiviteter, som turer med guide, kurs og familiearrangementer.",

"Da gruppen kom frem til hytta, ble Lina imponert over hvor koselig den var.",
"Kari og Per begynte å forberede lunsj, og de andre hjalp til.",
"Alle var glade og takknemlige for å dele denne opplevelsen.",
"Kari fortalte Lina at DNT har over 300 000 medlemmer og er en av Norges største og eldste friluftsorganisasjoner.",

"Lina følte seg inkludert og velkommen.",
"Hun innså at DNT ikke bare handlet om å gå på tur, men også om å skape minner og fellesskap.",
"Å være medlem av DNT ga henne muligheten til å oppleve Norges vakre natur på en trygg og hyggelig måte, samtidig som hun fikk nye venner.",

"Da turen var over, takket Lina Kari og Per.",
"\"Tusen takk for en fantastisk dag,\" sa hun.",
"\"Jeg ser virkelig frem til neste tur med DNT.\""

];



const startTimes7=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
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
