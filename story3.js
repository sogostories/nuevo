const translations3 = [
  "Norway is known for its strong skiing tradition, and you often hear the expression 'Norwegians are born with skis on their feet'.",
  "Historically, skis have been an important means of transportation in Norway.",
  "The rock carving 'Bølamannen' in the Trondheim Fjord is about 6000 years old and shows a man on skis.",
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
  "The joy of skiing lasts a lifetime....."
  ];



const startTimes3=[0.5,13,18,26, 38, 47, 56,61, 71,78,82,88,94, 99,103, 115,121.8,129, 134,140,145,152 ,160,176,           ,62,75,79,87,93,98,102,105,110,117,122,127,133,139,142,146,151,156,160,164,172,177,182];
const vocabulary3 = [
  /* Ski Culture */
  { word: '1800', translation: '1800' },
  { word: '6000', translation: '6000' },
  { word: 'alder', translation: 'age' },
  { word: 'alle', translation: 'all' },
  { word: 'andre', translation: 'others' },
  { word: 'at', translation: 'that' },
  { word: 'av', translation: 'of' },
  { word: 'bare', translation: 'just / only' },
  { word: 'barn', translation: 'children' },
  { word: 'begynte', translation: 'began' },
  { word: 'beina', translation: 'the feet' },
  { word: 'ble', translation: 'became' },
  { word: 'bli', translation: 'become' },
  { word: 'blitt', translation: 'become' },
  { word: 'bokstavelig', translation: 'literal' },
  { word: 'bokstavelig talt', translation: 'literally' },
  { word: 'bruke', translation: 'use' },
  { word: 'brukt', translation: 'used' },
  { word: 'både', translation: 'both' },
  { word: 'bølamannen', translation: 'the Bøla man' },
  { word: 'ca', translation: 'approx.' },
  { word: 'da', translation: 'then' },
  { word: 'dag', translation: 'day' },
  { word: 'de', translation: 'they / the' },
  { word: 'definitivt', translation: 'definitely' },
  { word: 'del', translation: 'part' },
  { word: 'den', translation: 'the / it' },
  { word: 'deretter', translation: 'thereafter' },
  { word: 'dermed', translation: 'thus' },
  { word: 'det', translation: 'it / that' },
  { word: 'dette', translation: 'this' },
  { word: 'dyp', translation: 'deep' },
  { word: 'elsker', translation: 'loves' },
  { word: 'en', translation: 'a / one' },
  { word: 'enkel', translation: 'simple' },
  { word: 'er', translation: 'is / are' },
  { word: 'et', translation: 'a / one' },
  { word: 'familien', translation: 'the family' },
  { word: 'fellesskap', translation: 'community' },
  { word: 'ferier', translation: 'holidays' },
  { word: 'fjellene', translation: 'the mountains' },
  { word: 'fjellet', translation: 'the mountain' },
  { word: 'for', translation: 'for' },
  { word: 'form', translation: 'shape' },
  { word: 'frem', translation: 'forward' },
  { word: 'fremkomstmiddel', translation: 'means of transport' },
  { word: 'før', translation: 'before' },
  { word: 'første', translation: 'first' },
  { word: 'gammel', translation: 'old' },
  { word: 'gang', translation: 'time' },
  { word: 'gjennom', translation: 'through' },
  { word: 'gjort', translation: 'done' },
  { word: 'gjøre', translation: 'do' },
  { word: 'grunn', translation: 'reason' },
  { word: 'gullmedaljene', translation: 'the gold medals' },
  { word: 'gå', translation: 'go / walk' },
  { word: 'hadde', translation: 'had' },
  { word: 'har', translation: 'has / have' },
  { word: 'hele', translation: 'whole' },
  { word: 'helger', translation: 'weekends' },
  { word: 'helleristningen', translation: 'rock carving' },
  { word: 'helst', translation: 'preferably' },
  { word: 'helt', translation: 'completely' },
  { word: 'historisk', translation: 'historical' },
  { word: 'hjelpemidler', translation: 'tools / aids' },
  { word: 'husk', translation: 'remember' },
  { word: 'hører', translation: 'hears' },
  { word: 'i', translation: 'in' },
  { word: 'identitet', translation: 'identity' },
  { word: 'ikke', translation: 'not' },
  { word: 'innsjøer', translation: 'lakes' },
  { word: 'internasjonale', translation: 'international' },
  { word: 'jakt', translation: 'hunting' },
  { word: 'kakao', translation: 'cocoa' },
  { word: 'kan', translation: 'can' },
  { word: 'kjent', translation: 'known' },
  { word: 'kjærlighet', translation: 'love' },
  { word: 'klisjé', translation: 'cliché' },
  { word: 'komme', translation: 'come' },
  { word: 'kommer', translation: 'comes' },
  { word: 'konkurranser', translation: 'competitions' },
  { word: 'kopp', translation: 'cup' },
  { word: 'kultur', translation: 'culture' },
  { word: 'kulturarven', translation: 'cultural heritage' },
  { word: 'laget', translation: 'made' },
  { word: 'lange', translation: 'long' },
  { word: 'ledende', translation: 'leading' },
  { word: 'lenge', translation: 'long' },
  { word: 'livet', translation: 'life' },
  { word: 'lærer', translation: 'learns / teaches' },
  { word: 'løyper', translation: 'trails' },
  { word: 'man', translation: 'one / you' },
  { word: 'mange', translation: 'many' },
  { word: 'mann', translation: 'man' },
  { word: 'med', translation: 'with' },
  { word: 'medaljer', translation: 'medals' },
  { word: 'men', translation: 'but' },
  { word: 'mens', translation: 'while' },
  { word: 'moderne', translation: 'modern' },
  { word: 'morsom', translation: 'funny' },
  { word: 'mosjonister', translation: 'athletes / exercisers' },
  { word: 'mye', translation: 'much' },
  { word: 'måte', translation: 'way' },
  { word: 'nasjoner', translation: 'nations' },
  { word: 'natur', translation: 'nature' },
  { word: 'naturen', translation: 'nature' },
  { word: 'noen', translation: 'some' },
  { word: 'nordmenn', translation: 'Norwegians' },
  { word: 'norge', translation: 'Norway' },
  { word: 'norsk', translation: 'Norwegian' },
  { word: 'norske', translation: 'Norwegian' },
  { word: 'nyte', translation: 'enjoy' },
  { word: 'når', translation: 'when' },
  { word: 'ofte', translation: 'often' },
  { word: 'og', translation: 'and' },
  { word: 'også', translation: 'also' },
  { word: 'ol', translation: 'Olympics' },
  { word: 'om', translation: 'about' },
  { word: 'opphøyde', translation: 'raised' },
  { word: 'overlevelse', translation: 'survival' },
  { word: 'pause', translation: 'break' },
  { word: 'perfekt', translation: 'perfect' },
  { word: 'planker', translation: 'planks' },
  { word: 'populær', translation: 'popular' },
  { word: 'populært', translation: 'popular' },
  { word: 'praktiske', translation: 'practical' },
  { word: 'preppede', translation: 'groomed' },
  { word: 'på', translation: 'on / at' },
  { word: 'rekreasjon', translation: 'recreation' },
  { word: 'sammen', translation: 'together' },
  { word: 'se', translation: 'see' },
  { word: 'seg', translation: 'themselves' },
  { word: 'selv', translation: 'even / self' },
  { word: 'sett', translation: 'seen / considered' },
  { word: 'siden', translation: 'since' },
  { word: 'sies', translation: 'said' },
  { word: 'sikkert', translation: 'sure' },
  { word: 'sin', translation: 'its / his / her' },
  { word: 'sinte', translation: 'angry' },
  { word: 'ski', translation: 'ski(s)' },
  { word: 'skianlegg', translation: 'ski resorts' },
  { word: 'skidager', translation: 'ski days' },
  { word: 'skiene', translation: 'the skis' },
  { word: 'skigåing', translation: 'skiing' },
  { word: 'skigleden', translation: 'joy of skiing' },
  { word: 'skigåere', translation: 'skiers' },
  { word: 'skinasjon', translation: 'ski nation' },
  { word: 'skisporet', translation: 'the ski track / ski trail' },
  { word: 'skisport', translation: 'ski sport' },
  { word: 'skisporten', translation: 'the ski sport' },
  { word: 'skitradisjon', translation: 'ski tradition' },
  { word: 'skog', translation: 'forest' },
  { word: 'skolen', translation: 'the school' },
  { word: 'skyldes', translation: 'due to' },
  { word: 'smale', translation: 'narrow' },
  { word: 'snø', translation: 'snow' },
  { word: 'som', translation: 'as / which' },
  { word: 'sport', translation: 'sport' },
  { word: 'sterk', translation: 'strong' },
  { word: 'sterke', translation: 'strong' },
  { word: 'strand', translation: 'beach' },
  { word: 'stå', translation: 'stand' },
  { word: 'syden', translation: 'the south (warm countries)' },
  { word: 'så', translation: 'so' },
  { word: 'tallet', translation: 'the century / number' },
  { word: 'talt', translation: 'spoken' },
  { word: 'tidlig', translation: 'early' },
  { word: 'til', translation: 'to' },
  { word: 'tilbringer', translation: 'spends' },
  { word: 'tillegg', translation: 'addition' },
  { word: 'tradisjon', translation: 'tradition' },
  { word: 'transport', translation: 'transport' },
  { word: 'tre', translation: 'wood' },
  { word: 'trondheimsfjorden', translation: 'Trondheim Fjord' },
  { word: 'tupper', translation: 'tips' },
  { word: 'turgåere', translation: 'hikers / walkers' },
  { word: 'typisk', translation: 'typical' },
  { word: 'tøffe', translation: 'tough' },
  { word: 'uttrykket', translation: 'the expression' },
  { word: 'utviklet', translation: 'developed' },
  { word: 'vakkert', translation: 'beautiful' },
  { word: 'vanlig', translation: 'common' },
  { word: 'vanlige', translation: 'ordinary' },
  { word: 'var', translation: 'was' },
  { word: 'varer', translation: 'lasts' },
  { word: 'variert', translation: 'varied' },
  { word: 'varm', translation: 'warm' },
  { word: 'verdens', translation: 'world\'s' },
  { word: 'verdens ledende', translation: 'world leading' },
  { word: 'viktig', translation: 'important' },
  { word: 'villmarka', translation: 'wilderness' },
  { word: 'vinteren', translation: 'the winter' },
  { word: 'vinterlandskap', translation: 'winter landscape' },
  { word: 'vinterstid', translation: 'in winter' },
  { word: 'virkelig', translation: 'really' },
  { word: 'viser', translation: 'shows' },
  { word: 'vm', translation: 'World Championships' },
  { word: 'voksne', translation: 'adults' },
  { word: 'vunnet', translation: 'won' },
  { word: 'være', translation: 'be' },
  { word: 'vært', translation: 'been' },
  { word: 'å', translation: 'to' },
  { word: 'år', translation: 'year' },
  { word: 'ønsker', translation: 'wishes' },
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


/**************  WORD MODE  ****************/
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
  document.getElementById('flashcard3').style.display = 'none';
  document.getElementById('overlay3').style.display = 'none';
  document.getElementById('storyDialog3').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay3').addEventListener('click', closeDialog3);
