

const translations3 = [
  "Historically, skis have been an important means of transportation in Norway.",
"The rock carving “Bølamannen” in the Trondheim Fjord is about 6000 years old and shows a man on skis.",
"To get through the harsh Norwegian wilderness with forests and lakes, skis were used as practical tools for hunting, transport, and survival.",
"The first skis were made of wood, and had a simple shape – long, narrow planks with raised tips.",
"Skiing has therefore been part of Norwegian cultural heritage long before modern ski resorts and groomed trails.",
"In the 1800s, skis began to be used as a sport in Norway.",
"Since then, skiing has developed a lot, and Norway has definitely become one of the world’s leading nations on the ski track.",
"Norway has won many medals in international competitions such as World Championships and the Olympics.",
"This has also made skiing so popular.",
"It is not only because of the gold medals that skiing has become popular.",
"It is also because Norway has a varied and beautiful winter landscape.",
"Today it is common to see Norwegians in the mountains.",
"Many spend weekends and holidays in the mountains to go skiing.",
"In addition, it can be said that Norwegians have a strong tradition of using nature for recreation, and skiing is therefore a perfect way to do this in winter.",
"Skiing is for everyone, both children and adults, athletes and ordinary hikers.",
"It is common to go skiing with the family, and then enjoy a break with a cup of hot cocoa.",
"Children also learn to ski at an early age through ski days at school.",
"Just remember not to walk in the ski track, as skiers can get angry.",
"But, are Norwegians really born with skis on their feet?",
"Even though this is a funny cliché, Norwegians are not literally born with skis on their feet.",
"Some love it, while others would rather be on a beach in the south when winter comes.",
"What is certain is that skiing is an important part of Norwegian identity and culture, and that as a skiing nation Norway has a deep love for snow, nature, and community.",
"The joy of skiing lasts a lifetime."

];



const startTimes3=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
const vocabulary3 = [
  


/* Ski Culture */
{ word: 'historisk',        translation: 'historical' },
{ word: 'sett',             translation: 'seen / considered' },
{ word: 'ski',              translation: 'ski(s)' },
{ word: 'viktig',           translation: 'important' },
{ word: 'fremkomstmiddel',  translation: 'means of transport' },
{ word: 'helleristning',    translation: 'rock carving' },
{ word: 'Bølamannen',       translation: 'the Bøla man' },
{ word: 'Trondheimsfjorden',translation: 'Trondheim Fjord' },
{ word: 'år',               translation: 'year' },
{ word: 'gammel',           translation: 'old' },
{ word: 'viser',            translation: 'shows' },
{ word: 'mann',             translation: 'man' },
{ word: 'villmarka',        translation: 'wilderness' },
{ word: 'skog',             translation: 'forest' },
{ word: 'innsjøer',         translation: 'lakes' },
{ word: 'praktiske',        translation: 'practical' },
{ word: 'hjelpemidler',     translation: 'tools / aids' },
{ word: 'jakt',             translation: 'hunting' },
{ word: 'transport',        translation: 'transport' },
{ word: 'overlevelse',      translation: 'survival' },
{ word: 'første',           translation: 'first' },
{ word: 'laget',            translation: 'made' },
{ word: 'tre',              translation: 'wood' },
{ word: 'enkel',            translation: 'simple' },
{ word: 'form',             translation: 'shape' },
{ word: 'lange',            translation: 'long' },
{ word: 'smale',            translation: 'narrow' },
{ word: 'planker',          translation: 'planks' },
{ word: 'tupper',           translation: 'tips' },
{ word: 'skigåing',         translation: 'skiing' },
{ word: 'kulturarv',        translation: 'cultural heritage' },
{ word: 'moderne',          translation: 'modern' },
{ word: 'skianlegg',        translation: 'ski resorts' },
{ word: 'preppede løyper',  translation: 'groomed trails' },
{ word: '1800-tallet',      translation: 'the 1800s' },
{ word: 'sport',            translation: 'sport' },
{ word: 'utviklet',         translation: 'developed' },
{ word: 'nasjoner',         translation: 'nations' },
{ word: 'verdens ledende',  translation: 'world leading' },
{ word: 'skisporet',        translation: 'the ski track' },
{ word: 'medaljer',         translation: 'medals' },
{ word: 'konkurranser',     translation: 'competitions' },
{ word: 'VM',               translation: 'World Championships' },
{ word: 'OL',               translation: 'Olympics' },
{ word: 'populær',          translation: 'popular' },
{ word: 'landskap',         translation: 'landscape' },
{ word: 'fjellene',         translation: 'the mountains' },
{ word: 'helger',           translation: 'weekends' },
{ word: 'ferier',           translation: 'holidays' },
{ word: 'rekreasjon',       translation: 'recreation' },
{ word: 'vinterstid',       translation: 'in winter' },
{ word: 'barn',             translation: 'children' },
{ word: 'voksne',           translation: 'adults' },
{ word: 'mosjonister',      translation: 'athletes / exercisers' },
{ word: 'turgåere',         translation: 'hikers / walkers' },
{ word: 'familien',         translation: 'the family' },
{ word: 'pause',            translation: 'break' },
{ word: 'kakao',            translation: 'cocoa' },
{ word: 'skidager',         translation: 'ski days' },
{ word: 'skolen',           translation: 'the school' },
{ word: 'skisporet',        translation: 'ski trail' },
{ word: 'sinte',            translation: 'angry' },
{ word: 'klisjé',           translation: 'cliché' },
{ word: 'bokstavelig talt', translation: 'literally' },
{ word: 'strand',           translation: 'beach' },
{ word: 'syden',            translation: 'the south (warm countries)' },
{ word: 'identitet',        translation: 'identity' },
{ word: 'fellesskap',       translation: 'community' },
{ word: 'skiglede',         translation: 'joy of skiing' },
{ word: 'varer',            translation: 'lasts' },
{ word: 'livet',            translation: 'life' },



];

/**************  DOM  ****************/ 
const segments3 = Array.from(document.querySelectorAll('#storyText3 span'));
const toast3 = document.getElementById('toast3');
const audio3 = document.getElementById('storyAudio3');
const wordBtn3 = document.getElementById('wordModeBtn3');

/**************  STATE  ****************/ 
let readingIndex3=0;
let wordMode3=false;

/**************  AUDIO PLAYBACK (variable3)  ****************/ 
function clearHighlight3() {
  segments3.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate3() {
  if (wordMode3) return; // ignore in word mode
  const cur = audio3.currentTime;
  const idx = startTimes3.findIndex((s, i) => cur >= s && (i === startTimes3.length - 1 || cur < startTimes3[i + 1]));
  if (idx !== -1 && idx !== readingIndex3) {
    clearHighlight3();
    segments3[idx].classList.add('highlight');
    toast3.textContent = translations3[idx];
    toast3.style.display = 'block';
    readingIndex3 = idx;
  }
}
audio3.addEventListener('timeupdate', handleTimeUpdate3);
audio3.addEventListener('ended', () => {
  clearHighlight3();
  toast3.style.display = 'none';
  readingIndex3 = 0;
});

function playStory3() {
  exitWordMode3(); // exit word mode if active
  audio3.currentTime = startTimes3[readingIndex3];
  audio3.play();
  highlightCurrentSentence3(); // manually highlight on play
}
function highlightCurrentSentence3() {
  clearHighlight3();
  segments3[readingIndex3].classList.add('highlight');
  toast3.textContent = translations3[readingIndex3];
  toast3.style.display = 'block';
}

function pauseStory3() {
  audio3.pause();
  toast3.style.display = 'none';
  clearHighlight3();
}
/**************  SEGMENT CLICK – sentence playback (story3) ****************/
segments3.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex3 = idx;
    audio3.currentTime = startTimes3[idx];

    // Highlight immediately on click
    clearHighlight3();
    segments3[idx].classList.add('highlight');

    // Show translation immediately
    toast3.textContent = translations3[idx];
    toast3.style.display = 'block';

    playStory3();
  });
});
function toggleWordMode3() {
  wordMode3 ? exitWordMode3() : enterWordMode3();
}

function enterWordMode3() {
  wordMode3= true;
  wordBtn3.textContent = 'Exit Word Mode';
  pauseStory3();
  toast3.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments3.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler3);
    });
  });
}
function exitWordMode3() {
  if (!wordMode3) return;
  wordMode3 = false;
  wordBtn3.textContent = 'Word Translation Mode';
  toast3.style.display = 'none';

  // restore original text (remove inner spans)
  segments3.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight3();
}
function wordClickHandler3(e) {
  e.stopPropagation();
  clearHighlight3();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary3
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary3.find(v => v.word.toLowerCase() === clean);
  toast3.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast3.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments3.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex3 = idx;
    audio3.currentTime = startTimes3[idx];
    audio3.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 3 ****************/
const flashcard3 = document.getElementById('flashcard3');
const flashcardContent3 = document.getElementById('flashcardContent3');
let currentWordIdx3 = 0;

function startVocabMode3() {
  exitWordMode3(); // Make sure word mode is off
  flashcard3.style.display = 'flex';
  currentWordIdx3 = 0;
  updateFlashcard3();
}

function updateFlashcard3() {
  flashcardContent3.textContent = vocabulary3[currentWordIdx3].word;
  flashcardContent3.dataset.side = 'word';
}

function revealMeaning3() {
  if (flashcardContent3.dataset.side === 'word') {
    flashcardContent3.textContent = vocabulary3[currentWordIdx3].translation;
    flashcardContent3.dataset.side = 'translation';
  } else {
    updateFlashcard3();
  }
}

function nextWord3() {
  currentWordIdx3 = (currentWordIdx3 + 1) % vocabulary3.length;
  updateFlashcard3();
}

function prevWord3() {
  currentWordIdx3 = (currentWordIdx3 - 1 + vocabulary3.length) % vocabulary3.length;
  updateFlashcard3();
}

function closeFlashcard3() {
  flashcard3.style.display = 'none';
}

/**************  MODAL – STORY 3 ****************/
function showDialog3() {
  document.getElementById('overlay3').style.display = 'block';
  document.getElementById('storyDialog3').style.display = 'block';
}

function closeDialog3() {
  pauseStory3();             // stop audio & highlight
  exitWordMode3();           // reset word mode
  flashcard3.style.display = 'none';
  document.getElementById('overlay3').style.display = 'none';
  document.getElementById('storyDialog3').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay3').addEventListener('click', closeDialog3);
