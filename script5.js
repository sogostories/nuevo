

const translations5 = [
"Oljen som forandret Norge:",
"Pavlo bor i Stavanger.",
"Han kom til Norge for ett år siden og jobber nå på et verft.",
"Der bygger de deler til oljeplattformer.",
"Han liker jobben sin, men han lurer på noe.",
"En dag i lunsjen spør han kollegaen sin, Lars:",
"«Hvorfor er olje så viktig i Norge?»",
"Lars smiler.",
"«Det er en lang historie,» sier han.",
"«Det startet på lille julaften i 1969.»",
"Lille julaften 1969",
"Det er 23. desember 1969.",
"Folk i Norge gjør seg klare til jul.",
"De pynter juletreet og lager mat, men i Stavanger skjer det noe stort.",
"Et amerikansk selskap, Phillips Petroleum, har lett etter olje i Nordsjøen.",
"Og nå fant de den!",
"Det nye oljefeltet heter Ekofisk.",
"Det er et av de største i verden.",
"Nå forstår Norge at landet har mye olje.",
"Dette forandrer alt.",
"Fra fisk til olje",
"Før Norge fant olje, var det et fattig land.",
"Mange jobbet med fiske og skipsfart.",
"Noen flyttet til USA for å finne arbeid.",
"Men etter 1969 begynte oljearbeidet.",
"Staten lagde et norsk oljeselskap – Statoil.",
"Mange nye jobber ble skapt.",
"Spesielt i Stavanger.",
"Byen blir kalt \"oljebyen\".",
"«Så oljen gjorde Norge rikt?» spør Pavlo.",
"«Ja,» sier Lars.",
"«Men Norge ville bruke pengene på en smart måte.»",
"Oljefondet – penger for framtiden",
"I 1990 lagde staten Oljefondet.",
"Norge sparer oljepenger for framtiden.",
"I dag er fondet et av de største i verden!",
"Pengene brukes på skoler, sykehus og pensjoner.",
"Men oljen varer ikke evig.",
"En dag vil den ta slutt.",
"Hva skjer i framtiden?",
"Pavlo ser ut av vinduet.",
"Ute ligger havet, der oljen kommer fra.",
"«Hva skjer når Norge ikke har mer olje?» spør han.",
"Lars tenker litt.",
"«Vi må finne andre løsninger,» sier han.",
"«Vindkraft, solenergi … Kanskje du og jeg skal jobbe med det i framtiden?»",
"Pavlo smiler.",
"«Kanskje det!»"


];



const startTimes5=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
const vocabulary5 = [
  

/* Ski Culture - Word by Word */
{ word: 'Norge',             translation: 'Norway' },
{ word: 'er',                translation: 'is' },
{ word: 'kjent',             translation: 'known' },
{ word: 'for',               translation: 'for' },
{ word: 'sin',               translation: 'its' },
{ word: 'sterke',            translation: 'strong' },
{ word: 'skitradisjon',      translation: 'ski tradition' },
{ word: 'man',               translation: 'one / people' },
{ word: 'hører',             translation: 'hear' },
{ word: 'ofte',              translation: 'often' },
{ word: 'uttrykket',         translation: 'the expression' },
{ word: 'Nordmenn',          translation: 'Norwegians' },
{ word: 'født',              translation: 'born' },
{ word: 'på',                translation: 'on' },
{ word: 'beina',             translation: 'the legs / feet' },

{ word: 'historisk',         translation: 'historical' },
{ word: 'sett',              translation: 'seen / considered' },
{ word: 'har',               translation: 'has / have' },
{ word: 'ski',               translation: 'ski(s)' },
{ word: 'vært',              translation: 'been' },
{ word: 'et',                translation: 'a' },
{ word: 'viktig',            translation: 'important' },
{ word: 'fremkomstmiddel',   translation: 'means of transport' },

{ word: 'helleristning',     translation: 'rock carving' },
{ word: 'Bølamannen',        translation: 'the Bøla man' },
{ word: 'i',                 translation: 'in' },
{ word: 'Trondheimsfjorden', translation: 'Trondheim Fjord' },
{ word: 'er',                translation: 'is' },
{ word: 'ca',                translation: 'about' },
{ word: '6000',              translation: '6000' },
{ word: 'år',                translation: 'years' },
{ word: 'gammel',            translation: 'old' },
{ word: 'og',                translation: 'and' },
{ word: 'viser',             translation: 'shows' },
{ word: 'en',                translation: 'a / one' },
{ word: 'mann',              translation: 'man' },

{ word: 'for',               translation: 'to / for' },
{ word: 'å',                 translation: 'to (infinitive marker)' },
{ word: 'komme',             translation: 'come / get' },
{ word: 'seg',               translation: 'oneself' },
{ word: 'frem',              translation: 'forward / ahead' },
{ word: 'i',                 translation: 'in' },
{ word: 'den',               translation: 'the' },
{ word: 'tøffe',             translation: 'tough' },
{ word: 'norske',            translation: 'Norwegian' },
{ word: 'villmarka',         translation: 'wilderness' },
{ word: 'med',               translation: 'with' },
{ word: 'skog',              translation: 'forest' },
{ word: 'innsjøer',          translation: 'lakes' },

{ word: 'ble',               translation: 'was / were' },
{ word: 'skiene',            translation: 'the skis' },
{ word: 'brukt',             translation: 'used' },
{ word: 'som',               translation: 'as' },
{ word: 'praktiske',         translation: 'practical' },
{ word: 'hjelpemidler',      translation: 'tools / aids' },
{ word: 'for',               translation: 'for' },
{ word: 'jakt',              translation: 'hunting' },
{ word: 'transport',         translation: 'transport' },
{ word: 'og',                translation: 'and' },
{ word: 'overlevelse',       translation: 'survival' },

{ word: 'de',                translation: 'the / they' },
{ word: 'første',            translation: 'first' },
{ word: 'skiene',            translation: 'skis' },
{ word: 'var',               translation: 'were' },
{ word: 'laget',             translation: 'made' },
{ word: 'av',                translation: 'of' },
{ word: 'tre',               translation: 'wood' },
{ word: 'og',                translation: 'and' },
{ word: 'hadde',             translation: 'had' },
{ word: 'en',                translation: 'a' },
{ word: 'enkel',             translation: 'simple' },
{ word: 'form',              translation: 'shape' },
{ word: 'lange',             translation: 'long' },
{ word: 'smale',             translation: 'narrow' },
{ word: 'planker',           translation: 'planks' },
{ word: 'med',               translation: 'with' },
{ word: 'opphøyde',          translation: 'raised' },
{ word: 'tupper',            translation: 'tips' },

{ word: 'skigåing',          translation: 'skiing' },
{ word: 'har',               translation: 'has' },
{ word: 'dermed',            translation: 'therefore' },
{ word: 'vært',              translation: 'been' },
{ word: 'en',                translation: 'a' },
{ word: 'del',               translation: 'part' },
{ word: 'av',                translation: 'of' },
{ word: 'den',               translation: 'the' },
{ word: 'norske',            translation: 'Norwegian' },
{ word: 'kulturarven',       translation: 'cultural heritage' },
{ word: 'lenge',             translation: 'long' },
{ word: 'før',               translation: 'before' },
{ word: 'moderne',           translation: 'modern' },
{ word: 'skianlegg',         translation: 'ski resorts' },
{ word: 'og',                translation: 'and' },
{ word: 'preppede løyper',   translation: 'groomed trails' },




];

/**************  DOM  ****************/ 
const segments5 = Array.from(document.querySelectorAll('#storyText5 span'));
const toast5 = document.getElementById('toast5');
const audio5 = document.getElementById('storyAudio5');
const wordBtn5 = document.getElementById('wordModeBtn5');

/**************  STATE  ****************/ 
let readingIndex5=0;
let wordMode5=false;

/**************  AUDIO PLAYBACK (variable5)  ****************/ 
function clearHighlight5() {
  segments5.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate5() {
  if (wordMode5) return; // ignore in word mode
  const cur = audio5.currentTime;
  const idx = startTimes5.findIndex((s, i) => cur >= s && (i === startTimes5.length - 1 || cur < startTimes5[i + 1]));
  if (idx !== -1 && idx !== readingIndex5) {
    clearHighlight5();
    segments5[idx].classList.add('highlight');
    toast5.textContent = translations5[idx];
    toast5.style.display = 'block';
    readingIndex5 = idx;
  }
}
audio5.addEventListener('timeupdate', handleTimeUpdate5);
audio5.addEventListener('ended', () => {
  clearHighlight5();
  toast5.style.display = 'none';
  readingIndex5 = 0;
});

function playStory5() {
  exitWordMode5(); // exit word mode if active
  audio5.currentTime = startTimes5[readingIndex5];
  audio5.play();
  highlightCurrentSentence5(); // manually highlight on play
}
function highlightCurrentSentence5() {
  clearHighlight5();
  segments5[readingIndex5].classList.add('highlight');
  toast5.textContent = translations5[readingIndex5];
  toast5.style.display = 'block';
}

function pauseStory5() {
  audio5.pause();
  toast5.style.display = 'none';
  clearHighlight5();
}
/**************  SEGMENT CLICK – sentence playback (story5) ****************/
segments5.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex5 = idx;
    audio5.currentTime = startTimes5[idx];

    // Highlight immediately on click
    clearHighlight5();
    segments5[idx].classList.add('highlight');

    // Show translation immediately
    toast5.textContent = translations5[idx];
    toast5.style.display = 'block';

    playStory5();
  });
});
function toggleWordMode5() {
  wordMode5 ? exitWordMode5() : enterWordMode5();
}

function enterWordMode5() {
  wordMode5= true;
  wordBtn5.textContent = 'Exit Word Mode';
  pauseStory5();
  toast5.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments5.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler5);
    });
  });
}
function exitWordMode5() {
  if (!wordMode5) return;
  wordMode5 = false;
  wordBtn5.textContent = 'Word Translation Mode';
  toast5.style.display = 'none';

  // restore original text (remove inner spans)
  segments5.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight5();
}
function wordClickHandler5(e) {
  e.stopPropagation();
  clearHighlight5();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary5
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary5.find(v => v.word.toLowerCase() === clean);
  toast5.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast5.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments5.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex5 = idx;
    audio5.currentTime = startTimes5[idx];
    audio5.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 5 ****************/
const flashcard5 = document.getElementById('flashcard5');
const flashcardContent5 = document.getElementById('flashcardContent5');
let currentWordIdx5 = 0;

function startVocabMode5() {
  exitWordMode5(); // Make sure word mode is off
  flashcard5.style.display = 'flex';
  currentWordIdx5 = 0;
  updateFlashcard5();
}

function updateFlashcard5() {
  flashcardContent5.textContent = vocabulary5[currentWordIdx5].word;
  flashcardContent5.dataset.side = 'word';
}

function revealMeaning5() {
  if (flashcardContent5.dataset.side === 'word') {
    flashcardContent5.textContent = vocabulary5[currentWordIdx5].translation;
    flashcardContent5.dataset.side = 'translation';
  } else {
    updateFlashcard5();
  }
}

function nextWord5() {
  currentWordIdx5 = (currentWordIdx5 + 1) % vocabulary5.length;
  updateFlashcard5();
}

function prevWord5() {
  currentWordIdx5 = (currentWordIdx5 - 1 + vocabulary5.length) % vocabulary5.length;
  updateFlashcard5();
}

function closeFlashcard5() {
  flashcard5.style.display = 'none';
}

/**************  MODAL – STORY 5 ****************/
function showDialog5() {
  document.getElementById('overlay5').style.display = 'block';
  document.getElementById('storyDialog5').style.display = 'block';
}

function closeDialog5() {
  pauseStory5();             // stop audio & highlight
  exitWordMode5();           // reset word mode
  flashcard5.style.display = 'none';
  document.getElementById('overlay5').style.display = 'none';
  document.getElementById('storyDialog5').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay5').addEventListener('click', closeDialog5);
