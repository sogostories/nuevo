

const translations4 = [
  "Kong Olav V ble født 2. juli 1903 i Storbritannia som prins Alexander Edward Christian Frederik.",
"Han flyttet til Norge med familien i 1905 da faren hans, Haakon VII, ble konge av Norge.",
"Alexander fikk navnet Olav V da han ble kronprins, og vokste opp i Norge.",

"Under andre verdenskrig måtte kongefamilien flykte fra Norge da Tyskland invaderte landet i 1940.",
"Kongefamilien og regjeringen var i eksil i Storbritannia.",
"Mens han var i England, fortsatte Olav V å kjempe for å frigjøre Norge sammen med sin far.",
"Han ble en viktig leder og inspirerte mange nordmenn under krigen.",

"Olav V ble konge i 1957 etter farens død.",
"Han var en populær konge som ble kjent som \"Folkekongen\".",
"Hans ydmykhet og nærhet til folket gjorde ham elsket av mange.",
"Han var enkel og folkelig, og deltok ofte i vanlige folks liv.",
"Han elsket ski og friluftsliv, akkurat som mange nordmenn.",

"Han er kanskje mest kjent for sin tur med trikken under oljekrisen i 1973.",
"Under krisen var det bilfrie dager for å kunne spare bensin, og kongen tok trikken i Oslo som alle andre.",
"Han kjøpte billett og satt sammen med vanlige folk.",
"Denne hendelsen gjorde ham enda mer populær og viste hans jordnære holdning.",

"Kong Olav V var en elsket konge som satte stor pris på det norske folket.",
"Han døde 17. januar 1991, men er fortsatt husket som “folkekongen”.",
"Hans liv og handlinger er en viktig del av norsk historie og kulturarv."

];



const startTimes4=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
const vocabulary4 = [
  


  /* Kong Olav V */
{ word: 'Kong',               translation: 'King' },
{ word: 'Olav',               translation: 'Olav' },
{ word: 'V',                  translation: 'V' },
{ word: 'ble',                translation: 'was' },
{ word: 'født',               translation: 'born' },
{ word: '2.',                 translation: '2nd' },
{ word: 'juli',               translation: 'July' },
{ word: '1903',               translation: '1903' },
{ word: 'i',                  translation: 'in' },
{ word: 'Storbritannia',      translation: 'Great Britain' },
{ word: 'som',                translation: 'as' },
{ word: 'prins',              translation: 'prince' },
{ word: 'Alexander',          translation: 'Alexander' },
{ word: 'Edward',             translation: 'Edward' },
{ word: 'Christian',          translation: 'Christian' },
{ word: 'Frederik',           translation: 'Frederik' },

{ word: 'Han',                translation: 'He' },
{ word: 'flyttet',            translation: 'moved' },
{ word: 'til',                translation: 'to' },
{ word: 'Norge',              translation: 'Norway' },
{ word: 'med',                translation: 'with' },
{ word: 'familien',           translation: 'the family' },
{ word: 'i',                  translation: 'in' },
{ word: '1905',               translation: '1905' },
{ word: 'da',                 translation: 'when' },
{ word: 'faren',              translation: 'the father' },
{ word: 'hans',               translation: 'his' },
{ word: 'Haakon',             translation: 'Haakon' },
{ word: 'VII',                translation: 'VII' },
{ word: 'ble',                translation: 'became' },
{ word: 'konge',              translation: 'king' },
{ word: 'av',                 translation: 'of' },

{ word: 'Alexander',          translation: 'Alexander' },
{ word: 'fikk',               translation: 'got/received' },
{ word: 'navnet',             translation: 'the name' },
{ word: 'Olav',               translation: 'Olav' },
{ word: 'V',                  translation: 'V' },
{ word: 'da',                 translation: 'when' },
{ word: 'han',                translation: 'he' },
{ word: 'ble',                translation: 'became' },
{ word: 'kronprins',          translation: 'crown prince' },
{ word: 'og',                 translation: 'and' },
{ word: 'vokste',             translation: 'grew' },
{ word: 'opp',                translation: 'up' },
{ word: 'i',                  translation: 'in' },
{ word: 'Norge',              translation: 'Norway' },

{ word: 'Under',              translation: 'During' },
{ word: 'andre',              translation: 'second' },
{ word: 'verdenskrig',        translation: 'world war' },
{ word: 'måtte',              translation: 'had to' },
{ word: 'kongefamilien',      translation: 'the royal family' },
{ word: 'flykte',             translation: 'flee' },
{ word: 'fra',                translation: 'from' },
{ word: 'Norge',              translation: 'Norway' },
{ word: 'da',                 translation: 'when' },
{ word: 'Tyskland',           translation: 'Germany' },
{ word: 'invaderte',          translation: 'invaded' },
{ word: 'landet',             translation: 'the country' },
{ word: 'i',                  translation: 'in' },
{ word: '1940',               translation: '1940' },

{ word: 'Kongefamilien',      translation: 'The royal family' },
{ word: 'og',                 translation: 'and' },
{ word: 'regjeringen',        translation: 'the government' },
{ word: 'var',                translation: 'were' },
{ word: 'i',                  translation: 'in' },
{ word: 'eksil',              translation: 'exile' },
{ word: 'i',                  translation: 'in' },
{ word: 'Storbritannia',      translation: 'Great Britain' },

{ word: 'Mens',               translation: 'While' },
{ word: 'han',                translation: 'he' },
{ word: 'var',                translation: 'was' },
{ word: 'i',                  translation: 'in' },
{ word: 'England',            translation: 'England' },
{ word: 'fortsatte',          translation: 'continued' },
{ word: 'Olav',               translation: 'Olav' },
{ word: 'V',                  translation: 'V' },
{ word: 'å',                  translation: 'to' },
{ word: 'kjempe',             translation: 'fight' },
{ word: 'for',                translation: 'for' },
{ word: 'å',                  translation: 'to' },
{ word: 'frigjøre',           translation: 'liberate' },
{ word: 'Norge',              translation: 'Norway' },
{ word: 'sammen',             translation: 'together' },
{ word: 'med',                translation: 'with' },
{ word: 'sin',                translation: 'his' },
{ word: 'far',                translation: 'father' },

// ... (continues with the rest of the text about war, becoming king, oil crisis, trikken, "folkekongen", and death in 1991)



];

/**************  DOM  ****************/ 
const segments4 = Array.from(document.querySelectorAll('#storyText4 span'));
const toast4 = document.getElementById('toast4');
const audio4 = document.getElementById('storyAudio4');
const wordBtn4 = document.getElementById('wordModeBtn4');

/**************  STATE  ****************/ 
let readingIndex4=0;
let wordMode4=false;

/**************  AUDIO PLAYBACK (variable2)  ****************/ 
function clearHighlight4() {
  segments4.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate4() {
  if (wordMode4) return; // ignore in word mode
  const cur = audio4.currentTime;
  const idx = startTimes4.findIndex((s, i) => cur >= s && (i === startTimes4.length - 1 || cur < startTimes2[i + 1]));
  if (idx !== -1 && idx !== readingIndex4) {
    clearHighlight4();
    segments4[idx].classList.add('highlight');
    toast4.textContent = translations4[idx];
    toast4.style.display = 'block';
    readingIndex4 = idx;
  }
}
audio4.addEventListener('timeupdate', handleTimeUpdate4);
audio4.addEventListener('ended', () => {
  clearHighlight4();
  toast4.style.display = 'none';
  readingIndex4 = 0;
});

function playStory4() {
  exitWordMode4(); // exit word mode if active
  audio4.currentTime = startTimes4[readingIndex4];
  audio4.play();
  highlightCurrentSentence4(); // manually highlight on play
}
function highlightCurrentSentence4() {
  clearHighlight4();
  segments4[readingIndex4].classList.add('highlight');
  toast4.textContent = translations4[readingIndex4];
  toast4.style.display = 'block';
}

function pauseStory4() {
  audio4.pause();
  toast4.style.display = 'none';
  clearHighlight4();
}
/**************  SEGMENT CLICK – sentence playback (story2) ****************/
segments4.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex4 = idx;
    audio4.currentTime = startTimes4[idx];

    // Highlight immediately on click
    clearHighlight4();
    segments4[idx].classList.add('highlight');

    // Show translation immediately
    toast4.textContent = translations4[idx];
    toast4.style.display = 'block';

    playStory4();
  });
});
function toggleWordMode4() {
  wordMode4 ? exitWordMode4() : enterWordMode4();
}

function enterWordMode4() {
  wordMode4 = true;
  wordBtn4.textContent = 'Exit Word Mode';
  pauseStory4();
  toast4.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments4.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler4);
    });
  });
}
function exitWordMode4() {
  if (!wordMode4) return;
  wordMode4 = false;
  wordBtn4.textContent = 'Word Translation Mode';
  toast4.style.display = 'none';

  // restore original text (remove inner spans)
  segments4.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight4();
}
function wordClickHandler4(e) {
  e.stopPropagation();
  clearHighlight4();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary4
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary4.find(v => v.word.toLowerCase() === clean);
  toast4.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast4.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments4.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex4 = idx;
    audio4.currentTime = startTimes4[idx];
    audio4.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 4 ****************/
const flashcard4 = document.getElementById('flashcard4');
const flashcardContent4 = document.getElementById('flashcardContent4');
let currentWordIdx4 = 0;

function startVocabMode4() {
  exitWordMode4(); // Make sure word mode is off
  flashcard4.style.display = 'flex';
  currentWordIdx4 = 0;
  updateFlashcard4();
}

function updateFlashcard4() {
  flashcardContent4.textContent = vocabulary4[currentWordIdx4].word;
  flashcardContent4.dataset.side = 'word';
}

function revealMeaning4() {
  if (flashcardContent4.dataset.side === 'word') {
    flashcardContent4.textContent = vocabulary4[currentWordIdx4].translation;
    flashcardContent4.dataset.side = 'translation';
  } else {
    updateFlashcard4();
  }
}

function nextWord4() {
  currentWordIdx4 = (currentWordIdx4 + 1) % vocabulary4.length;
  updateFlashcard4();
}

function prevWord4() {
  currentWordIdx4 = (currentWordIdx4 - 1 + vocabulary4.length) % vocabulary4.length;
  updateFlashcard4();
}

function closeFlashcard4() {
  flashcard4.style.display = 'none';
}

/**************  MODAL – STORY2 ****************/
function showDialog4() {
  document.getElementById('overlay4').style.display = 'block';
  document.getElementById('storyDialog4').style.display = 'block';
}

function closeDialog4() {
  pauseStory4();             // stop audio & highlight
  exitWordMode4();           // reset word mode
  flashcard4.style.display = 'none';
  document.getElementById('overlay4').style.display = 'none';
  document.getElementById('storyDialog4').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay4').addEventListener('click', closeDialog4);
