

const translations6 = [
  "Edvard Munch ble født 12. desember 1863 i Løten, Norge.",
"Han vokste opp i en stor familie med fire søsken (Johanne, Peter, Laura og Inger Marie), men livet hans var preget av tragedier.",
"Moren hans døde av tuberkulose da han var fem år gammel, og senere døde også hans eldste søster (Johanne) av samme sykdom.",
"Selv var Munch ofte syk under oppveksten, og var plaget av kronisk astmatisk bronkitt.",
"Dette gjorde at han var mye hjemme, og gikk glipp av skolen.",
"Disse triste erfaringene og opplevelsene påvirket Munchs kunst.",

"Munch begynte å male i ung alder og studerte ved Statens kunstakademi i Kristiania (nå Oslo).",
"Han ble en viktig del av kunstnermiljøet der og eksperimenterte med ulike stiler og teknikker.",
"Hans kunst var kjent for å uttrykke sterke følelser som angst, kjærlighet og død.",
"Munch sa selv at han ønsket å male sjelebilder, bilder som uttrykte menneskets indre liv.",
"Dette ser man tydelig i hans verk, og kunsten hans kan sies å være virkelighetsnær.",

"Et av Munchs mest berømte malerier er 'Skrik'.",
"Det ble laget i 1893 og viser en person som skriker med hendene mot ansiktet, omgitt av en dramatisk rød og oransje himmel.",
"Munch beskrev selv hvordan han følte en plutselig angst mens han gikk tur med venner og så en rød solnedgang som føltes som 'et uendelig skrik gjennom naturen'.",
"Maleriet har blitt et symbol på menneskelig angst og eksistensiell uro.",
"'Skrik' er et av verdens mest kjente malerier, og finnes i flere versjoner, både i maling, pastell og litografi.",

"Munchs unike stil og evne til å formidle dype følelser har gjort ham til en av de mest anerkjente kunstnerne i verden.",
"Hans kunstverk finnes i museer over hele verden, spesielt på Munch-museet i Oslo.",

"Edvard Munch døde 23. januar 1944, men hans kunst lever videre.",
"Han har hatt stor innflytelse på moderne kunst og er en viktig del av norsk kulturarv."

];



const startTimes6=[5,9,15,19,29,36,42,52,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
const vocabulary6 = [
  


  /* Cabin Culture */
{ word: 'Edvard', translation: 'Edvard' },
{ word: 'Munch', translation: 'Munch' },
{ word: 'ble', translation: 'was' },
{ word: 'født', translation: 'born' },
{ word: '12.', translation: '12th' },
{ word: 'desember', translation: 'December' },
{ word: '1863', translation: '1863' },
{ word: 'i', translation: 'in' },
{ word: 'Løten,', translation: 'Løten,' },
{ word: 'Norge.', translation: 'Norway.' },

{ word: 'Han', translation: 'He' },
{ word: 'vokste', translation: 'grew' },
{ word: 'opp', translation: 'up' },
{ word: 'i', translation: 'in' },
{ word: 'en', translation: 'a' },
{ word: 'stor', translation: 'big' },
{ word: 'familie', translation: 'family' },
{ word: 'med', translation: 'with' },
{ word: 'fire', translation: 'four' },
{ word: 'søsken', translation: 'siblings' },
{ word: '(Johanne,', translation: '(Johanne,' },
{ word: 'Peter,', translation: 'Peter,' },
{ word: 'Laura', translation: 'Laura' },
{ word: 'og', translation: 'and' },
{ word: 'Inger', translation: 'Inger' },
{ word: 'Marie),', translation: 'Marie),' },
{ word: 'men', translation: 'but' },
{ word: 'livet', translation: 'life' },
{ word: 'hans', translation: 'his' },
{ word: 'var', translation: 'was' },
{ word: 'preget', translation: 'marked' },
{ word: 'av', translation: 'by' },
{ word: 'tragedier.', translation: 'tragedies.' },


];

/**************  DOM  ****************/ 
const segments6 = Array.from(document.querySelectorAll('#storyText6 span'));
const toast6 = document.getElementById('toast6');
const audio6 = document.getElementById('storyAudio6');
const wordBtn6 = document.getElementById('wordModeBtn6');

/**************  STATE  ****************/ 
let readingIndex6=0;
let wordMode6=false;
/**************  AUDIO PLAYBACK (variable6)  ****************/ 
function clearHighlight6() {
  segments6.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate6() {
  if (wordMode6) return; // ignore in word mode
  const cur = audio6.currentTime;
  const idx = startTimes6.findIndex((s, i) => cur >= s && (i === startTimes6.length - 1 || cur < startTimes6[i + 1]));
  if (idx !== -1 && idx !== readingIndex6) {
    clearHighlight6();
    segments6[idx].classList.add('highlight');
    toast6.textContent = translations6[idx];
    toast6.style.display = 'block';
    readingIndex6 = idx;
  }
}
audio6.addEventListener('timeupdate', handleTimeUpdate6);
audio6.addEventListener('ended', () => {
  clearHighlight6();
  toast6.style.display = 'none';
  readingIndex6 = 0;
});

function playStory6() {
  exitWordMode6(); // exit word mode if active
  audio6.currentTime = startTimes6[readingIndex6];
  audio6.play();
  highlightCurrentSentence6(); // manually highlight on play
}
function highlightCurrentSentence6() {
  clearHighlight6();
  segments6[readingIndex6].classList.add('highlight');
  toast6.textContent = translations6[readingIndex6];
  toast6.style.display = 'block';
}

function pauseStory6() {
  audio6.pause();
  toast6.style.display = 'none';
  clearHighlight6();
}
/**************  SEGMENT CLICK – sentence playback (story6) ****************/
segments6.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex6 = idx;
    audio6.currentTime = startTimes6[idx];

    // Highlight immediately on click
    clearHighlight6();
    segments6[idx].classList.add('highlight');

    // Show translation immediately
    toast6.textContent = translations6[idx];
    toast6.style.display = 'block';

    playStory6();
  });
});
function toggleWordMode6() {
  wordMode6 ? exitWordMode6() : enterWordMode6();
}

function enterWordMode6() {
  wordMode6 = true;
  wordBtn6.textContent = 'Exit Word Mode';
  pauseStory6();
  toast6.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments6.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler6);
    });
  });
}
function exitWordMode6() {
  if (!wordMode6) return;
  wordMode6 = false;
  wordBtn6.textContent = 'Word Translation Mode';
  toast6.style.display = 'none';

  // restore original text (remove inner spans)
  segments6.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight6();
}
function wordClickHandler6(e) {
  e.stopPropagation();
  clearHighlight6();

  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary6
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary6.find(v => v.word.toLowerCase() === clean);
  toast6.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast6.style.display = 'block';

  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments6.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex6 = idx;
    audio6.currentTime = startTimes6[idx];
    audio6.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 6 ****************/
const flashcard6 = document.getElementById('flashcard6');
const flashcardContent6 = document.getElementById('flashcardContent6');
let currentWordIdx6 = 0;

function startVocabMode6() {
  exitWordMode6(); // Make sure word mode is off
  flashcard6.style.display = 'flex';
  currentWordIdx6 = 0;
  updateFlashcard6();
}

function updateFlashcard6() {
  flashcardContent6.textContent = vocabulary6[currentWordIdx6].word;
  flashcardContent6.dataset.side = 'word';
}

function revealMeaning6() {
  if (flashcardContent6.dataset.side === 'word') {
    flashcardContent6.textContent = vocabulary6[currentWordIdx6].translation;
    flashcardContent6.dataset.side = 'translation';
  } else {
    updateFlashcard6();
  }
}

function nextWord6() {
  currentWordIdx6 = (currentWordIdx6 + 1) % vocabulary6.length;
  updateFlashcard6();
}

function prevWord6() {
  currentWordIdx6 = (currentWordIdx6 - 1 + vocabulary6.length) % vocabulary6.length;
  updateFlashcard6();
}

function closeFlashcard6() {
  flashcard6.style.display = 'none';
}

/**************  MODAL – STORY 6 ****************/
function showDialog6() {
  document.getElementById('overlay6').style.display = 'block';
  document.getElementById('storyDialog6').style.display = 'block';
}

function closeDialog6() {
  pauseStory6();             // stop audio & highlight
  exitWordMode6();           // reset word mode
  flashcard6.style.display = 'none';
  document.getElementById('overlay6').style.display = 'none';
  document.getElementById('storyDialog6').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay6').addEventListener('click', closeDialog6);
