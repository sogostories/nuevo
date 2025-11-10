const translations2 = [
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

const startTimes2=[20,30,38,50,55,64,71,78,84,89,95,101,109,118, 122, 130, 135];
const vocabulary2 = [
  
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

/************** DOM ****************/
const segments2 = Array.from(document.querySelectorAll('#storyText2 span'));
const toast2 = document.getElementById('toast2');
const audio2 = document.getElementById('storyAudio2');
const wordBtn2 = document.getElementById('wordModeBtn2');
/************** STATE ****************/
let readingIndex2 = 0;
let wordMode2 = false;
/************** AUDIO PLAYBACK ****************/
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
/************** SEGMENT CLICK – sentence playback ****************/
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
/************** FLASH‑CARD MODE – STORY 2 ****************/
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
/************** MODAL – STORY 2 ****************/
function showDialog2() {
  document.getElementById('overlay2').style.display = 'block';
  document.getElementById('storyDialog2').style.display = 'block';
}
function closeDialog2() {
  pauseStory2(); // stop audio & highlight
  exitWordMode2(); // reset word mode
  flashcard2.style.display = 'none';
  document.getElementById('overlay2').style.display = 'none';
  document.getElementById('storyDialog2').style.display = 'none';
}
// Close modal on backdrop click
document.getElementById('overlay2').addEventListener('click', closeDialog2);