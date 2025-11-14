const translations5 = [
"The Oil that Changed Norway:", 
"Pavlo lives in Stavanger.", 
"He came to Norway a year ago and now works at a shipyard.", 
"There they build parts for oil platforms.", 
"He likes his job, but he's wondering about something.", 
"One day during lunch, he asks his colleague, Lars:", 
"“Why is oil so important in Norway?”", 
"Lars smiles.", 
"“It's a long story,” he says.",
"“It started on Little Christmas Eve in 1969.”", 
"Little Christmas Eve 1969", 
"It is December 23, 1969.", 
"People in Norway are getting ready for Christmas.",
"They decorate the Christmas tree and make food, but in Stavanger something big is happening.", 
"An American company, Phillips Petroleum, has been searching for oil in the North Sea.", 
"And now they found it!", 
"The new oil field is called Ekofisk.", 
"It is one of the largest in the world.", 
"Now Norway understands that the country has a lot of oil.",
"This changes everything.", 
"From Fish to Oil", 
"Before Norway found oil, it was a poor country.", 
"Many worked with fishing and shipping.", 
"Some moved to the USA to find work.", 
"But after 1969, the oil work began.", 
"The state created a Norwegian oil company – Statoil.", 
"Many new jobs were created.", 
"Especially in Stavanger.", 
"The city is called the oil city.", 
"“So the oil made Norway rich?” asks Pavlo.", 
"“Yes,” says Lars.", 
"“But Norway wanted to use the money in a smart way.”", 
"The Oil Fund – Money for the Future", 
"In 1990, the state created the Oil Fund.", 
"Norway saves oil money for the future.", 
"Today, the fund is one of the largest in the world!", 
"The money is used for schools, hospitals, and pensions.", 
"But the oil won't last forever.", 
"One day it will run out.", 
"What happens in the future?", 
"Pavlo looks out the window.", 
"Outside lies the sea, where the oil comes from.", 
"“What happens when Norway has no more oil?” he asks.", 
"Lars thinks a bit.", "“We have to find other solutions,” he says.",
"“Wind power, solar energy … Maybe you and I will work with that in the future?”", 
"Pavlo smiles.", 
"“Maybe!”"
];


const startTimes5=[5,9,14,19,23,28,32,35,37,40,44,48,53,57,63,70,72,76,78,82,85,88,92, 95, 100, 103, 108,111,113,116,120,122,126,130,133,137,141,146,148,151,154,157,161,165,168,170,177,179,181];
const vocabulary5 = [
  { word: 'Oljen', translation: 'The oil' },
  { word: 'som', translation: 'that' },
  { word: 'forandret', translation: 'changed' },
  { word: 'Norge:', translation: 'Norway:' },
  { word: 'Pavlo', translation: 'Pavlo' },
  { word: 'bor', translation: 'lives' },
  { word: 'i', translation: 'in' },
  { word: 'Stavanger.', translation: 'Stavanger.' },
  { word: 'Han', translation: 'He' },
  { word: 'kom', translation: 'came' },
  { word: 'til', translation: 'to' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'for', translation: 'for' },
  { word: 'ett', translation: 'a' },
  { word: 'år', translation: 'year' },
  { word: 'siden', translation: 'ago' },
  { word: 'og', translation: 'and' },
  { word: 'jobber', translation: 'works' },
  { word: 'nå', translation: 'now' },
  { word: 'på', translation: 'at' },
  { word: 'et', translation: 'a' },
  { word: 'verft.', translation: 'shipyard.' },
  { word: 'Der', translation: 'There' },
  { word: 'bygger', translation: 'build' },
  { word: 'de', translation: 'they' },
  { word: 'deler', translation: 'parts' },
  { word: 'til', translation: 'for' },
  { word: 'oljeplattformer.', translation: 'oil platforms.' },
  { word: 'Han', translation: 'He' },
  { word: 'liker', translation: 'likes' },
  { word: 'jobben', translation: 'the job' },
  { word: 'sin,', translation: 'his,' },
  { word: 'men', translation: 'but' },
  { word: 'han', translation: 'he' },
  { word: 'lurer', translation: 'wonders' },
  { word: 'på', translation: 'about' },
  { word: 'noe.', translation: 'something.' },
  { word: 'En', translation: 'One' },
  { word: 'dag', translation: 'day' },
  { word: 'i', translation: 'during' },
  { word: 'lunsjen', translation: 'lunch' },
  { word: 'spør', translation: 'asks' },
  { word: 'han', translation: 'he' },
  { word: 'kollegaen', translation: 'the colleague' },
  { word: 'sin,', translation: 'his,' },
  { word: 'Lars:', translation: 'Lars:' },
  { word: '«Hvorfor', translation: '“Why' },
  { word: 'er', translation: 'is' },
  { word: 'olje', translation: 'oil' },
  { word: 'så', translation: 'so' },
  { word: 'viktig', translation: 'important' },
  { word: 'i', translation: 'in' },
  { word: 'Norge?»', translation: 'Norway?”' },
  { word: 'Lars', translation: 'Lars' },
  { word: 'smiler.', translation: 'smiles.' },
  { word: '«Det', translation: '“It' },
  { word: 'er', translation: 'is' },
  { word: 'en', translation: 'a' },
  { word: 'lang', translation: 'long' },
  { word: 'historie,»', translation: 'story,”' },
  { word: 'sier', translation: 'says' },
  { word: 'han.', translation: 'he.' },
  { word: '«Det', translation: '“It' },
  { word: 'startet', translation: 'started' },
  { word: 'på', translation: 'on' },
  { word: 'lille', translation: 'Little' },
  { word: 'julaften', translation: 'Christmas Eve' },
  { word: 'i', translation: 'in' },
  { word: '1969.»', translation: '1969.”' },
  { word: 'Lille', translation: 'Little' },
  { word: 'julaften', translation: 'Christmas Eve' },
  { word: '1969', translation: '1969' },
  { word: 'Det', translation: 'It' },
  { word: 'er', translation: 'is' },
  { word: '23.', translation: '23rd' },
  { word: 'desember', translation: 'December' },
  { word: '1969.', translation: '1969.' },
  { word: 'Folk', translation: 'People' },
  { word: 'i', translation: 'in' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'gjør', translation: 'are getting' },
  { word: 'seg', translation: 'ready' },
  { word: 'klare', translation: 'for' },
  { word: 'til', translation: 'Christmas.' },
  { word: 'jul.', translation: 'They' },
  { word: 'De', translation: 'decorate' },
  { word: 'pynter', translation: 'the' },
  { word: 'juletreet', translation: 'Christmas tree' },
  { word: 'og', translation: 'and' },
  { word: 'lager', translation: 'make' },
  { word: 'mat,', translation: 'food,' },
  { word: 'men', translation: 'but' },
  { word: 'i', translation: 'in' },
  { word: 'Stavanger', translation: 'Stavanger' },
  { word: 'skjer', translation: 'something' },
  { word: 'det', translation: 'big' },
  { word: 'noe', translation: 'is' },
  { word: 'stort.', translation: 'happening.' },
  { word: 'Et', translation: 'An' },
  { word: 'amerikansk', translation: 'American' },
  { word: 'selskap,', translation: 'company,' },
  { word: 'Phillips', translation: 'Phillips' },
  { word: 'Petroleum,', translation: 'Petroleum,' },
  { word: 'har', translation: 'has' },
  { word: 'lett', translation: 'been searching' },
  { word: 'etter', translation: 'for' },
  { word: 'olje', translation: 'oil' },
  { word: 'i', translation: 'in' },
  { word: 'Nordsjøen.', translation: 'the North Sea.' },
  { word: 'Og', translation: 'And' },
  { word: 'nå', translation: 'now' },
  { word: 'fant', translation: 'they found' },
  { word: 'de', translation: 'it!' },
  { word: 'den!', translation: 'The' },
  { word: 'Det', translation: 'new' },
  { word: 'nye', translation: 'oil field' },
  { word: 'oljefeltet', translation: 'is called' },
  { word: 'heter', translation: 'Ekofisk.' },
  { word: 'Ekofisk.', translation: 'It' },
  { word: 'Det', translation: 'is' },
  { word: 'er', translation: 'one' },
  { word: 'et', translation: 'of' },
  { word: 'av', translation: 'the' },
  { word: 'de', translation: 'largest' },
  { word: 'største', translation: 'in' },
  { word: 'i', translation: 'the' },
  { word: 'verden.', translation: 'world.' },
  { word: 'Nå', translation: 'Now' },
  { word: 'forstår', translation: 'Norway' },
  { word: 'Norge', translation: 'understands' },
  { word: 'at', translation: 'that' },
  { word: 'landet', translation: 'the' },
  { word: 'har', translation: 'country' },
  { word: 'mye', translation: 'has' },
  { word: 'olje.', translation: 'a lot' },
  { word: 'Dette', translation: 'of' },
  { word: 'forandrer', translation: 'oil.' },
  { word: 'alt.', translation: 'This' },
  { word: 'Fra', translation: 'changes' },
  { word: 'fisk', translation: 'everything.' },
  { word: 'til', translation: 'From' },
  { word: 'olje', translation: 'Fish' },
  { word: 'Før', translation: 'to' },
  { word: 'Norge', translation: 'Oil' },
  { word: 'fant', translation: 'Before' },
  { word: 'olje,', translation: 'Norway' },
  { word: 'var', translation: 'found' },
  { word: 'det', translation: 'oil,' },
  { word: 'et', translation: 'it' },
  { word: 'fattig', translation: 'was' },
  { word: 'land.', translation: 'a' },
  { word: 'Mange', translation: 'poor' },
  { word: 'jobb', translation: 'country.' },
  { word: 'med', translation: 'Many' },
  { word: 'fiske', translation: 'worked' },
  { word: 'og', translation: 'with' },
  { word: 'skipsfart.', translation: 'fishing' },
  { word: 'Noen', translation: 'and' },
  { word: 'flyttet', translation: 'shipping.' },
  { word: 'til', translation: 'Some' },
  { word: 'USA', translation: 'moved' },
  { word: 'for', translation: 'to' },
  { word: 'å', translation: 'the' },
  { word: 'finne', translation: 'USA' },
  { word: 'arbeid.', translation: 'to' },
  { word: 'Men', translation: 'find' },
  { word: 'etter', translation: 'work.' },
  { word: '1969', translation: 'But' },
  { word: 'begynte', translation: 'after' },
  { word: 'oljearbeidet.', translation: '1969,' },
  { word: 'Staten', translation: 'the' },
  { word: 'lagde', translation: 'oil' },
  { word: 'et', translation: 'work' },
  { word: 'norsk', translation: 'began.' },
  { word: 'oljeselskap', translation: 'The' },
  { word: '–', translation: 'state' },
  { word: 'Statoil.', translation: 'created' },
  { word: 'Mange', translation: 'a' },
  { word: 'nye', translation: 'Norwegian' },
  { word: 'jobber', translation: 'oil' },
  { word: 'ble', translation: 'company' },
  { word: 'skapt.', translation: '–' },
  { word: 'Spesielt', translation: 'Statoil.' },
  { word: 'i', translation: 'Many' },
  { word: 'Stavanger.', translation: 'new' },
  { word: 'Byen', translation: 'jobs' },
  { word: 'blir', translation: 'were' },
  { word: 'kalt', translation: 'created.' },
  { word: '«oljebyen».', translation: 'Especially' },
  { word: '«Så', translation: 'in' },
  { word: 'oljen', translation: 'Stavanger.' },
  { word: 'gjorde', translation: 'The' },
  { word: 'Norge', translation: 'city' },
  { word: 'rikt?»', translation: 'is' },
  { word: 'spør', translation: 'called' },
  { word: 'Pavlo.', translation: 'the' },
  { word: '«Ja,»', translation: '“oil' },
  { word: 'sier', translation: 'city”.' },
  { word: 'Lars.', translation: '“So' },
  { word: '«Men', translation: 'the' },
  { word: 'Norge', translation: 'oil' },
  { word: 'ville', translation: 'made' },
  { word: 'bruke', translation: 'Norway' },
  { word: 'pengene', translation: 'rich?”' },
  { word: 'på', translation: 'asks' },
  { word: 'en', translation: 'Pavlo.' },
  { word: 'smart', translation: '“Yes,”' },
  { word: 'måte.»', translation: 'says' },
  { word: 'Oljefondet', translation: 'Lars.' },
  { word: '–', translation: '“But' },
  { word: 'penger', translation: 'Norway' },
  { word: 'for', translation: 'wanted' },
  { word: 'framtiden', translation: 'to' },
  { word: 'I', translation: 'use' },
  { word: '1990', translation: 'the' },
  { word: 'lagde', translation: 'money' },
  { word: 'staten', translation: 'in' },
  { word: 'Oljefondet.', translation: 'a' },
  { word: 'Norge', translation: 'smart' },
  { word: 'sparer', translation: 'way.”' },
  { word: 'oljepenger', translation: 'The' },
  { word: 'for', translation: 'Oil' },
  { word: 'framtiden.', translation: 'Fund' },
  { word: 'I', translation: '–' },
  { word: 'dag', translation: 'Money' },
  { word: 'er', translation: 'for' },
  { word: 'fondet', translation: 'the' },
  { word: 'et', translation: 'Future' },
  { word: 'av', translation: 'In' },
  { word: 'de', translation: '1990,' },
  { word: 'største', translation: 'the' },
  { word: 'i', translation: 'state' },
  { word: 'verden!', translation: 'created' },
  { word: 'Pengene', translation: 'the' },
  { word: 'brukes', translation: 'Oil' },
  { word: 'på', translation: 'Fund.' },
  { word: 'skoler,', translation: 'Norway' },
  { word: 'sykehus', translation: 'saves' },
  { word: 'og', translation: 'oil' },
  { word: 'pensjoner.', translation: 'money' },
  { word: 'Men', translation: 'for' },
  { word: 'oljen', translation: 'the' },
  { word: 'varer', translation: 'future.' },
  { word: 'ikke', translation: 'Today,' },
  { word: 'evig.', translation: 'the' },
  { word: 'En', translation: 'fund' },
  { word: 'dag', translation: 'is' },
  { word: 'vil', translation: 'one' },
  { word: 'den', translation: 'of' },
  { word: 'ta', translation: 'the' },
  { word: 'slutt.', translation: 'largest' },
  { word: 'Hva', translation: 'in' },
  { word: 'skjer', translation: 'the' },
  { word: 'i', translation: 'world!' },
  { word: 'framtiden?', translation: 'The' },
  { word: 'Pavlo', translation: 'money' },
  { word: 'ser', translation: 'is' },
  { word: 'ut', translation: 'used' },
  { word: 'av', translation: 'for' },
  { word: 'vinduet.', translation: 'schools,' },
  { word: 'Ute', translation: 'hospitals' },
  { word: 'ligger', translation: 'and' },
  { word: 'havet,', translation: 'pensions.' },
  { word: 'der', translation: 'But' },
  { word: 'oljen', translation: 'the' },
  { word: 'kommer', translation: 'oil' },
  { word: 'fra.', translation: 'won\'t' },
  { word: '«Hva', translation: 'last' },
  { word: 'skjer', translation: 'forever.' },
  { word: 'når', translation: 'One' },
  { word: 'Norge', translation: 'day' },
  { word: 'ikke', translation: 'it' },
  { word: 'har', translation: 'will' },
  { word: 'mer', translation: 'run' },
  { word: 'olje?»', translation: 'out.' },
  { word: 'spør', translation: 'What' },
  { word: 'han.', translation: 'happens' },
  { word: 'Lars', translation: 'in' },
  { word: 'tenker', translation: 'the' },
  { word: 'litt.', translation: 'future?' },
  { word: '«Vi', translation: 'Pavlo' },
  { word: 'må', translation: 'looks' },
  { word: 'finne', translation: 'out' },
  { word: 'andre', translation: 'the' },
  { word: 'løsninger,»', translation: 'window.' },
  { word: 'sier', translation: 'Outside' },
  { word: 'han.', translation: 'lies' },
  { word: '«Vindkraft,', translation: 'the' },
  { word: 'solenergi', translation: 'sea,' },
  { word: '…', translation: 'where' },
  { word: 'Kanskje', translation: 'the' },
  { word: 'du', translation: 'oil' },
  { word: 'og', translation: 'comes' },
  { word: 'jeg', translation: 'from.' },
  { word: 'skal', translation: '“What' },
  { word: 'jobbe', translation: 'happens' },
  { word: 'med', translation: 'when' },
  { word: 'det', translation: 'Norway' },
  { word: 'i', translation: 'has' },
  { word: 'framtiden?»', translation: 'no' },
  { word: 'Pavlo', translation: 'more' },
  { word: 'smiler.', translation: 'oil?”' },
  { word: '«Kanskje', translation: 'he' },
  { word: 'det!»', translation: 'asks.' }
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


/**************  WORD MODE  ****************/
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
  toast5.classList.remove('show'); 

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
  document.getElementById('flashcard5').style.display = 'none';
  document.getElementById('overlay5').style.display = 'none';
  document.getElementById('storyDialog5').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay5').addEventListener('click', closeDialog5);
