/************** MODAL – STORY 2 HYTTA ****************/
const translations2 = [
  "A cabin is an important part of the culture and life in Norway.",
  "A cabin is a small holiday home in nature, and many Norwegians own, rent, or have access to one.",
  "Cabins can be in the mountains, by the sea, in the forest, or on islands.",
  "Cabins can be old or new, large or small, simple or luxurious.",
  "For many, it is often a status symbol to have a primitive cabin.",
  "Without electricity or running water, you get closer to nature and “the simple life”—something Norwegians often view positively.",
  "The word “hytte” comes from the Old Norse word “hýtti”, which means “small house”.",
  "The first evidence that Norwegians had cabins dates from the 12th century.",
  "Back then, the cabins were used by farmers, hunters, and fishermen.",
  "Later, the cabins were used by artists, writers, and royalty.",
  "Today, almost 400,000 Norwegians have a cabin.",
  "Norwegians like to go on cabin trips to relax, enjoy themselves, and be outdoors.",
  "They often head out on cabin trips on Fridays and stay until Sunday.",
  "Many Norwegians call it the “Friday trip”.",
  "At the office, fewer people therefore show up on Fridays,and many leave work early so they can avoid queues on the way to the cabin.",
  "Many Norwegians also go on cabin trips during holidays such as Easter, Christmas, and 17 May.",
  "They go  on cabin trips both in summer and winter.",
  "When Norwegians are on a cabin trip, they often engage in various activities.",
  "They go hiking in nature, fish, swim, cycle, play games, read books, and cook food.",
  "A cabin also requires a lot of maintenance, so much time is spent painting, chopping firewood, and repairing whatever needs fixing.",
  "At the cabin, Norwegians often eat simple but good food such as sausages, stews, fish, and soup.",
  "Cabin culture in Norway is central because it shows how Norwegians love nature and their families.",
  "The cabin is a place where Norwegians can be themselves and have fun together.",
  "The cabin is a symbol of the Norwegian people and their values.",
  "In Norway there are many mountains and beautiful nature, so the cabins provide an opportunity to enjoy this."
];
const startTimes2=[12,21.4,28,37.6,42.3,52.8,60,65,70,75,81,87,92.3,96,108,115.4,119, 125,134,144,152.8,161,167,172 ];
const vocabulary2 = [
  { word: 'En', translation: 'A' },
  { word: 'hytte', translation: 'cabin' },
  { word: 'er', translation: 'is' },
  { word: 'en', translation: 'an' },
  { word: 'viktig', translation: 'important' },
  { word: 'del', translation: 'part' },
  { word: 'av', translation: 'of' },
  { word: 'kulturen', translation: 'the culture' },
  { word: 'og', translation: 'and' },
  { word: 'livet', translation: 'life' },
  { word: 'i', translation: 'in' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'En', translation: 'A' },
  { word: 'hytte', translation: 'cabin' },
  { word: 'er', translation: 'is' },
  { word: 'et', translation: 'a' },
  { word: 'lite', translation: 'small' },
  { word: 'feriehus', translation: 'holiday home' },
  { word: 'i', translation: 'in' },
  { word: 'naturen,', translation: 'nature,' },
  { word: 'og', translation: 'and' },
  { word: 'mange', translation: 'many' },
  { word: 'nordmenn', translation: 'Norwegians' },
  { word: 'eier,', translation: 'own,' },
  { word: 'leier', translation: 'rent' },
  { word: 'eller', translation: 'or' },
  { word: 'disponerer', translation: 'have at disposal' },
  { word: 'en', translation: 'a' },
  { word: 'hytte.', translation: 'cabin.' },
  { word: 'Hyttet', translation: 'Cabins' },
  { word: 'kan', translation: 'can' },
  { word: 'være', translation: 'be' },
  { word: 'i', translation: 'in' },
  { word: 'fjellene,', translation: 'the mountains,' },
  { word: 'ved', translation: 'by' },
  { word: 'sjøen,', translation: 'the sea,' },
  { word: 'i', translation: 'in' },
  { word: 'skogen', translation: 'the forest' },
  { word: 'eller', translation: 'or' },
  { word: 'på', translation: 'on' },
  { word: 'øyer.', translation: 'islands.' },
  { word: 'Hyttet', translation: 'Cabins' },
  { word: 'kan', translation: 'can' },
  { word: 'være', translation: 'be' },
  { word: 'gamle', translation: 'old' },
  { word: 'eller', translation: 'or' },
  { word: 'nye,', translation: 'new,' },
  { word: 'store', translation: 'large' },
  { word: 'eller', translation: 'or' },
  { word: 'små,', translation: 'small,' },
  { word: 'enkle', translation: 'simple' },
  { word: 'eller', translation: 'or' },
  { word: 'luksuriøse.', translation: 'luxurious.' },
  { word: 'Ordet', translation: 'The word' },
  { word: '\'hytte\'', translation: '\'cabin\'' },
  { word: 'kommer', translation: 'comes' },
  { word: 'fra', translation: 'from' },
  { word: 'det', translation: 'the' },
  { word: 'gamle', translation: 'old' },
  { word: 'norrøne', translation: 'Norse' },
  { word: 'ordet', translation: 'word' },
  { word: '\'hýtti\',', translation: '\'hýtti\',' },
  { word: 'som', translation: 'which' },
  { word: 'betyr', translation: 'means' },
  { word: '\'lite', translation: '\'small' },
  { word: 'hus\'.', translation: 'house\'.' },
  { word: 'Det', translation: 'The' },
  { word: 'første', translation: 'first' },
  { word: 'beviset', translation: 'evidence' },
  { word: 'på', translation: 'that' },
  { word: 'at', translation: 'that' },
  { word: 'nordmenn', translation: 'Norwegians' },
  { word: 'hadde', translation: 'had' },
  { word: 'hyttet', translation: 'cabins' },
  { word: 'er', translation: 'is' },
  { word: 'fra', translation: 'from' },
  { word: '1100-tallet.', translation: 'the 1100s.' },
  { word: 'Den', translation: 'Back' },
  { word: 'gangen', translation: 'then,' },
  { word: 'ble', translation: 'were' },
  { word: 'hyttet', translation: 'cabins' },
  { word: 'brukt', translation: 'used' },
  { word: 'av', translation: 'by' },
  { word: 'bønder,', translation: 'farmers,' },
  { word: 'jegere,', translation: 'hunters,' },
  { word: 'og', translation: 'and' },
  { word: 'fiskere.', translation: 'fishermen.' },
  { word: 'Senere', translation: 'Later,' },
  { word: 'ble', translation: 'were' },
  { word: 'hyttet', translation: 'the cabins' },
  { word: 'brukt', translation: 'used' },
  { word: 'av', translation: 'by' },
  { word: 'kunstnere,', translation: 'artists,' },
  { word: 'forfattere,', translation: 'writers,' },
  { word: 'og', translation: 'and' },
  { word: 'kongelige.', translation: 'royalty.' },
  { word: 'I', translation: 'Today,' },
  { word: 'dag', translation: 'nearly' },
  { word: 'har', translation: '400,000' },
  { word: 'nesten', translation: 'Norwegians' },
  { word: '400', translation: 'have' },
  { word: '000', translation: 'a' },
  { word: 'nordmenn', translation: 'cabin.' },
  { word: 'en', translation: 'Norwegians' },
  { word: 'hytte.', translation: 'like' },
  { word: 'Nordmenn', translation: 'to' },
  { word: 'liker', translation: 'go' },
  { word: 'å', translation: 'on' },
  { word: 'dra', translation: 'cabin' },
  { word: 'på', translation: 'trips' },
  { word: 'hyttetur', translation: 'to' },
  { word: 'for', translation: 'relax,' },
  { word: 'å', translation: 'enjoy' },
  { word: 'slappe', translation: 'themselves,' },
  { word: 'av,', translation: 'and' },
  { word: 'kose', translation: 'be' },
  { word: 'seg,', translation: 'outdoors.' },
  { word: 'og', translation: 'They' },
  { word: 'være', translation: 'often' },
  { word: 'ute', translation: 'go' },
  { word: 'i', translation: 'on' },
  { word: 'naturen.', translation: 'cabin' },
  { word: 'De', translation: 'trips' },
  { word: 'drar', translation: 'on' },
  { word: 'ofte', translation: 'Fridays' },
  { word: 'på', translation: 'and' },
  { word: 'hyttetur', translation: 'stay' },
  { word: 'på', translation: 'until' },
  { word: 'fredager', translation: 'Sunday.' },
  { word: 'og', translation: 'Many' },
  { word: 'blir', translation: 'Norwegians' },
  { word: 'til', translation: 'call' },
  { word: 'søndag.', translation: 'it' },
  { word: 'Mange', translation: 'the' },
  { word: 'nordmenn', translation: '\'Friday' },
  { word: 'kaller', translation: 'trip\'.' },
  { word: 'det', translation: 'At' },
  { word: '\'fredagsturen\'.', translation: 'the' },
  { word: 'På', translation: 'office,' },
  { word: 'kontoret', translation: 'very' },
  { word: 'kommer', translation: 'few' },
  { word: 'svært', translation: 'people' },
  { word: 'få', translation: 'come' },
  { word: 'på', translation: 'to' },
  { word: 'jobb', translation: 'work' },
  { word: 'på', translation: 'on' },
  { word: 'fredager,', translation: 'Fridays,' },
  { word: 'eller', translation: 'or' },
  { word: 'de', translation: 'most' },
  { word: 'fleste', translation: 'Norwegians' },
  { word: 'nordmenn', translation: 'leave' },
  { word: 'drar', translation: 'early' },
  { word: 'tidlig', translation: 'so' },
  { word: 'slik', translation: 'they' },
  { word: 'at', translation: 'can' },
  { word: 'de', translation: 'avoid' },
  { word: 'kan', translation: 'traffic' },
  { word: 'unngå', translation: 'on' },
  { word: 'trafikk', translation: 'the' },
  { word: 'på', translation: 'way' },
  { word: 'veien', translation: 'to' },
  { word: 'til', translation: 'the' },
  { word: 'hytta.', translation: 'cabin.' },
  { word: 'De', translation: 'They' },
  { word: 'drar', translation: 'also' },
  { word: 'også', translation: 'go' },
  { word: 'på', translation: 'on' },
  { word: 'hyttetur', translation: 'cabin' },
  { word: 'i', translation: 'trips' },
  { word: 'ferier', translation: 'during' },
  { word: 'som', translation: 'holidays' },
  { word: 'påske,', translation: 'such' },
  { word: 'jul,', translation: 'as' },
  { word: 'og', translation: 'Easter,' },
  { word: '17.', translation: 'Christmas,' },
  { word: 'mai.', translation: 'and' },
  { word: 'De', translation: 'May' },
  { word: 'drar', translation: '17th.' },
  { word: 'på', translation: 'They' },
  { word: 'hyttetur', translation: 'go' },
  { word: 'både', translation: 'on' },
  { word: 'sommer', translation: 'cabin' },
  { word: 'og', translation: 'trips' },
  { word: 'vinter.', translation: 'in' },
  { word: 'Når', translation: 'both' },
  { word: 'nordmenn', translation: 'summer' },
  { word: 'er', translation: 'and' },
  { word: 'på', translation: 'winter.' },
  { word: 'hyttetur,', translation: 'When' },
  { word: 'gjør', translation: 'Norwegians' },
  { word: 'de', translation: 'are' },
  { word: 'mange', translation: 'on' },
  { word: 'forskjellige', translation: 'a' },
  { word: 'aktiviteter.', translation: 'cabin' },
  { word: 'De', translation: 'trip,' },
  { word: 'går', translation: 'they' },
  { word: 'tur', translation: 'do' },
  { word: 'i', translation: 'many' },
  { word: 'naturen,', translation: 'different' },
  { word: 'fisker,', translation: 'activities.' },
  { word: 'svømmer,', translation: 'They' },
  { word: 'sykler,', translation: 'go' },
  { word: 'spiller', translation: 'hiking' },
  { word: 'spill,', translation: 'in' },
  { word: 'leser', translation: 'nature,' },
  { word: 'bøker,', translation: 'fish,' },
  { word: 'og', translation: 'swim,' },
  { word: 'lager', translation: 'bike,' },
  { word: 'mat.', translation: 'play' },
  { word: 'Typisk', translation: 'games,' },
  { word: 'turmat', translation: 'read' },
  { word: 'på', translation: 'books,' },
  { word: 'hytta', translation: 'and' },
  { word: 'inkluderer', translation: 'cook' },
  { word: 'for', translation: 'food.' },
  { word: 'eksempel', translation: 'Typical' },
  { word: 'Kvikk', translation: 'hiking' },
  { word: 'Lunsj,', translation: 'food' },
  { word: 'klementiner,', translation: 'at' },
  { word: 'smørbrød', translation: 'the' },
  { word: 'med', translation: 'cabin' },
  { word: 'ost', translation: 'includes' },
  { word: 'og', translation: 'for' },
  { word: 'skinke,', translation: 'example' },
  { word: 'pølser,', translation: 'Kvikk' },
  { word: 'osv.', translation: 'Lunsj,' },
  { word: 'Hyttkulturen', translation: 'clementines,' },
  { word: 'i', translation: 'sandwiches' },
  { word: 'Norge', translation: 'with' },
  { word: 'er', translation: 'cheese' },
  { word: 'sentral', translation: 'and' },
  { word: 'fordi', translation: 'ham,' },
  { word: 'den', translation: 'sausages,' },
  { word: 'viser', translation: 'etc.' },
  { word: 'hvordan', translation: 'The' },
  { word: 'nordmenn', translation: 'cabin' },
  { word: 'elsker', translation: 'culture' },
  { word: 'naturen', translation: 'in' },
  { word: 'og', translation: 'Norway' },
  { word: 'familiene', translation: 'is' },
  { word: 'sine.', translation: 'central' },
  { word: 'Hytta', translation: 'because' },
  { word: 'er', translation: 'it' },
  { word: 'et', translation: 'shows' },
  { word: 'sted', translation: 'how' },
  { word: 'hvor', translation: 'Norwegians' },
  { word: 'nordmenn', translation: 'love' },
  { word: 'kan', translation: 'nature' },
  { word: 'være', translation: 'and' },
  { word: 'seg', translation: 'their' },
  { word: 'selv', translation: 'families.' },
  { word: 'og', translation: 'The' },
  { word: 'ha', translation: 'cabin' },
  { word: 'det', translation: 'is' },
  { word: 'gøy', translation: 'a' },
  { word: 'sammen.', translation: 'place' },
  { word: 'Hytta', translation: 'where' },
  { word: 'er', translation: 'Norwegians' },
  { word: 'et', translation: 'can' },
  { word: 'symbol', translation: 'be' },
  { word: 'på', translation: 'themselves' },
  { word: 'det', translation: 'and' },
  { word: 'norske', translation: 'have' },
  { word: 'folket', translation: 'fun' },
  { word: 'og', translation: 'together.' },
  { word: 'deres', translation: 'The' },
  { word: 'verdier.', translation: 'cabin' },
  { word: 'I', translation: 'is' },
  { word: 'Norge', translation: 'a' },
  { word: 'er', translation: 'symbol' },
  { word: 'det', translation: 'of' },
  { word: 'mange', translation: 'the' },
  { word: 'fjell', translation: 'Norwegian' },
  { word: 'og', translation: 'people' },
  { word: 'vakker', translation: 'and' },
  { word: 'natur,', translation: 'their' },
  { word: 'så', translation: 'values.' },
  { word: 'hyttene', translation: 'In' },
  { word: 'gir', translation: 'Norway,' },
  { word: 'en', translation: 'there' },
  { word: 'mulighet', translation: 'are' },
  { word: 'til', translation: 'many' },
  { word: 'å', translation: 'mountains' },
  { word: 'nyte', translation: 'and' },
  { word: 'dette.', translation: 'beautiful' }
  ];


/************** DOM ****************/
const segments2 = Array.from(document.querySelectorAll('#storyText2 span'));
const toast2 = document.getElementById('toast2');
const audio2 = document.getElementById('storyAudio2');
const wordBtn2 = document.getElementById('wordModeBtn2');
/************** STATE ****************/
let readingIndex2=0;
let wordMode2=false;
/************** AUDIO PLAYBACK (variable2) ****************/
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
    toast2.classList.add('show');
    readingIndex2 = idx;
    }
  }
audio2.addEventListener('timeupdate', handleTimeUpdate2);
audio.addEventListener('ended',()=>{clearHighlight2();toast2.style.display='none';readingIndex=0});


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

function pauseStory2(){audio2.pause();toast2.style.display='none';clearHighlight2()}


/************** SEGMENT CLICK – sentence playback (story2) ****************/
/* ----------  CLICK-TO-READ SUPPORT ---------- */
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

/**************  WORD MODE  ****************/
function toggleWordMode2() {
  wordMode2 ? exitWordMode2() : enterWordMode2();
}
function enterWordMode2() {
  wordMode2 = true;
  wordBtn2.textContent = 'Exit Word Mode';
  pauseStory2();
  toast2.classList.remove('show');
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
  toast2.classList.remove('show');
  // restore original text (remove inner spans)
  segments2.forEach((seg,i)=>{seg.textContent=seg.innerText});
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

function closeFlashcard2() {flashcard2.style.display = 'none';}


/************** MODAL – STORY 2 ****************/
function showDialog2() {document.getElementById('overlay2').style.display = 'block';
document.getElementById('storyDialog2').style.display = 'block';
}


function closeDialog2() {
  pauseStory2(); // stop audio & highlight
  exitWordMode2(); // reset word mode
  flashcard2.style.display = 'none';
  document.getElementById('flashcard2').style.display = 'none';
  document.getElementById('overlay2').style.display = 'none';
  document.getElementById('storyDialog2').style.display = 'none';
}
// Close modal on backdrop click
document.getElementById('overlay2').addEventListener('click', closeDialog2);