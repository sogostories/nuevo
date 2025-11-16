const translations5 = [
"The Oil that Changed Norway", 
"Pavlo lives in Stavanger.", 
"He came to Norway a year ago and now works at a shipyard.", 
"There they build parts for oil platforms.", 
"He likes his job, but he's wondering about something.", 
"One day during lunch, he asks his colleague, Lars:", 
"“Why is oil so important in Norway?”", 
"Lars smiles.", 
"“It's a long story,” he says.",
"“It started on Little Christmas Eve in 1969.”", 
"Little Christmas Eve 1969: ", 
"It is December 23, 1969.", 
"People in Norway are getting ready for Christmas.",
"They decorate the Christmas tree and make food, but in Stavanger something big is happening.", 
"An American company, Phillips Petroleum, has been searching for oil in the North Sea.", 
"And now they found it!", 
"The new oil field is called Ekofisk.", 
"It is one of the largest in the world.", 
"Now Norway understands that the country has a lot of oil.",
"This changes everything.", 
"From Fish to Oil: ", 
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
"The Oil Fund – Money for the Future: ", 
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


const startTimes5=[8,11,14,20,23,28,32.8,36,37.3, 40,45, 49,53, 57, 63, 69, 72, 76,78, 82, 85,88.5 , 92, 95, 100, 103, 108, 111,113,116, 120, 122,126, 130, 134, 137, 141.5, 146, 148,151 ,155,157,161,166,167, 171, 177, 178];
const vocabulary5 = [
  { word: 'Oljen', translation: 'The oil' },
  { word: 'som', translation: 'that' },
  { word: 'forandret', translation: 'changed' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'Pavlo', translation: 'Pavlo' },
  { word: 'bor', translation: 'lives' },
  { word: 'i', translation: 'in' },
  { word: 'Stavanger', translation: 'Stavanger' },
  { word: 'Han', translation: 'He' },
  { word: 'kom', translation: 'came' },
  { word: 'til', translation: 'to' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'for', translation: 'for' },
  { word: 'ett', translation: 'one' },
  { word: 'år', translation: 'year' },
  { word: 'siden', translation: 'ago' },
  { word: 'og', translation: 'and' },
  { word: 'jobber', translation: 'works' },
  { word: 'nå', translation: 'now' },
  { word: 'på', translation: 'at' },
  { word: 'et', translation: 'a' },
  { word: 'verft', translation: 'shipyard' },
  { word: 'Der', translation: 'There' },
  { word: 'bygger', translation: 'build' },
  { word: 'de', translation: 'they' },
  { word: 'deler', translation: 'parts' },
  { word: 'for', translation: 'for' },
  { word: 'oljeplattformer', translation: 'oil platforms' },
  { word: 'Han', translation: 'He' },
  { word: 'liker', translation: 'likes' },
  { word: 'jobben', translation: 'the job' },
  { word: 'sin', translation: 'his' },
  { word: 'men', translation: 'but' },
  { word: 'han', translation: 'he' },
  { word: 'lurer', translation: 'is wondering' },
  { word: 'på', translation: 'about' },
  { word: 'noe', translation: 'something' },
  { word: 'En', translation: 'One' },
  { word: 'dag', translation: 'day' },
  { word: 'i', translation: 'during' },
  { word: 'lunsjen', translation: 'lunch' },
  { word: 'spør', translation: 'asks' },
  { word: 'han', translation: 'he' },
  { word: 'kollegaen', translation: 'colleague' },
  { word: 'sin', translation: 'his' },
  { word: 'Lars', translation: 'Lars' },
  { word: 'Hvorfor', translation: 'Why' },
  { word: 'er', translation: 'is' },
  { word: 'olje', translation: 'oil' },
  { word: 'så', translation: 'so' },
  { word: 'viktig', translation: 'important' },
  { word: 'i', translation: 'in' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'Lars', translation: 'Lars' },
  { word: 'smiler', translation: 'smiles' },
  { word: 'Det', translation: 'It' },
  { word: 'er', translation: 'is' },
  { word: 'en', translation: 'a' },
  { word: 'lang', translation: 'long' },
  { word: 'historie', translation: 'story' },
  { word: 'sier', translation: 'says' },
  { word: 'han', translation: 'he' },
  { word: 'Det', translation: 'It' },
  { word: 'startet', translation: 'started' },
  { word: 'på', translation: 'on' },
  { word: 'lille', translation: 'little' },
  { word: 'julaften', translation: 'Christmas Eve' },
  { word: 'i', translation: 'in' },
  { word: '1969', translation: '1969' },
  { word: 'Lille', translation: 'Little' },
  { word: 'julaften', translation: 'Christmas Eve' },
  { word: '1969', translation: '1969' },
  { word: 'Det', translation: 'It' },
  { word: 'er', translation: 'is' },
  { word: '23.', translation: '23rd' },
  { word: 'desember', translation: 'December' },
  { word: '1969', translation: '1969' },
  { word: 'Folk', translation: 'People' },
  { word: 'i', translation: 'in' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'gjør', translation: 'make' },
  { word: 'seg', translation: 'themselves' },
  { word: 'klare', translation: 'ready' },
  { word: 'til', translation: 'for' },
  { word: 'jul', translation: 'Christmas' },
  { word: 'De', translation: 'They' },
  { word: 'pynter', translation: 'decorate' },
  { word: 'juletreet', translation: 'the Christmas tree' },
  { word: 'og', translation: 'and' },
  { word: 'lager', translation: 'make' },
  { word: 'mat', translation: 'food' },
  { word: 'men', translation: 'but' },
  { word: 'i', translation: 'in' },
  { word: 'Stavanger', translation: 'Stavanger' },
  { word: 'skjer', translation: 'happens' },
  { word: 'det', translation: 'it' },
  { word: 'noe', translation: 'something' },
  { word: 'stort', translation: 'big' },
  { word: 'Et', translation: 'An' },
  { word: 'amerikansk', translation: 'American' },
  { word: 'selskap', translation: 'company' },
  { word: 'Phillips', translation: 'Phillips' },
  { word: 'Petroleum', translation: 'Petroleum' },
  { word: 'har', translation: 'has' },
  { word: 'lett', translation: 'searched' },
  { word: 'etter', translation: 'for' },
  { word: 'olje', translation: 'oil' },
  { word: 'i', translation: 'in' },
  { word: 'Nordsjøen', translation: 'the North Sea' },
  { word: 'Og', translation: 'And' },
  { word: 'nå', translation: 'now' },
  { word: 'fant', translation: 'found' },
  { word: 'de', translation: 'they' },
  { word: 'den', translation: 'it' },
  { word: 'Det', translation: 'The' },
  { word: 'nye', translation: 'new' },
  { word: 'oljefeltet', translation: 'oil field' },
  { word: 'heter', translation: 'is called' },
  { word: 'Ekofisk', translation: 'Ekofisk' },
  { word: 'Det', translation: 'It' },
  { word: 'er', translation: 'is' },
  { word: 'et', translation: 'one' },
  { word: 'av', translation: 'of' },
  { word: 'de', translation: 'the' },
  { word: 'største', translation: 'largest' },
  { word: 'i', translation: 'in' },
  { word: 'verden', translation: 'the world' },
  { word: 'Nå', translation: 'Now' },
  { word: 'forstår', translation: 'understands' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'at', translation: 'that' },
  { word: 'landet', translation: 'the country' },
  { word: 'har', translation: 'has' },
  { word: 'mye', translation: 'much' },
  { word: 'olje', translation: 'oil' },
  { word: 'Dette', translation: 'This' },
  { word: 'forandrer', translation: 'changes' },
  { word: 'alt', translation: 'everything' },
  { word: 'Fra', translation: 'From' },
  { word: 'fisk', translation: 'fish' },
  { word: 'til', translation: 'to' },
  { word: 'olje', translation: 'oil' },
  { word: 'Før', translation: 'Before' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'fant', translation: 'found' },
  { word: 'olje', translation: 'oil' },
  { word: 'var', translation: 'was' },
  { word: 'det', translation: 'it' },
  { word: 'et', translation: 'a' },
  { word: 'fattig', translation: 'poor' },
  { word: 'land', translation: 'country' },
  { word: 'Mange', translation: 'Many' },
  { word: 'jobb', translation: 'worked' },
  { word: 'med', translation: 'with' },
  { word: 'fiske', translation: 'fishing' },
  { word: 'og', translation: 'and' },
  { word: 'skipsfart', translation: 'shipping' },
  { word: 'Noen', translation: 'Some' },
  { word: 'flyttet', translation: 'moved' },
  { word: 'til', translation: 'to' },
  { word: 'USA', translation: 'USA' },
  { word: 'for', translation: 'to' },
  { word: 'å', translation: 'to' },
  { word: 'finne', translation: 'find' },
  { word: 'arbeid', translation: 'work' },
  { word: 'Men', translation: 'But' },
  { word: 'etter', translation: 'after' },
  { word: '1969', translation: '1969' },
  { word: 'begynte', translation: 'began' },
  { word: 'oljearbeidet', translation: 'the oil work' },
  { word: 'Staten', translation: 'The state' },
  { word: 'lagde', translation: 'made' },
  { word: 'et', translation: 'a' },
  { word: 'norsk', translation: 'Norwegian' },
  { word: 'oljeselskap', translation: 'oil company' },
  { word: 'Statoil', translation: 'Statoil' },
  { word: 'Mange', translation: 'Many' },
  { word: 'nye', translation: 'new' },
  { word: 'jobber', translation: 'jobs' },
  { word: 'ble', translation: 'were' },
  { word: 'skapt', translation: 'created' },
  { word: 'Spesielt', translation: 'Especially' },
  { word: 'i', translation: 'in' },
  { word: 'Stavanger', translation: 'Stavanger' },
  { word: 'Byen', translation: 'The city' },
  { word: 'blir', translation: 'is' },
  { word: 'kalt', translation: 'called' },
  { word: 'oljebyen', translation: 'the oil city' },
  { word: 'Så', translation: 'So' },
  { word: 'oljen', translation: 'the oil' },
  { word: 'gjorde', translation: 'made' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'rikt', translation: 'rich' },
  { word: 'spør', translation: 'asks' },
  { word: 'Pavlo', translation: 'Pavlo' },
  { word: 'Ja', translation: 'Yes' },
  { word: 'sier', translation: 'says' },
  { word: 'Lars', translation: 'Lars' },
  { word: 'Men', translation: 'But' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'ville', translation: 'wanted' },
  { word: 'bruke', translation: 'use' },
  { word: 'pengene', translation: 'the money' },
  { word: 'på', translation: 'in' },
  { word: 'en', translation: 'a' },
  { word: 'smart', translation: 'smart' },
  { word: 'måte', translation: 'way' },
  { word: 'Oljefondet', translation: 'The Oil Fund' },
  { word: 'penger', translation: 'money' },
  { word: 'for', translation: 'for' },
  { word: 'framtiden', translation: 'the future' },
  { word: 'I', translation: 'In' },
  { word: '1990', translation: '1990' },
  { word: 'lagde', translation: 'made' },
  { word: 'staten', translation: 'the state' },
  { word: 'Oljefondet', translation: 'the Oil Fund' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'sparer', translation: 'saves' },
  { word: 'oljepenger', translation: 'oil money' },
  { word: 'for', translation: 'for' },
  { word: 'framtiden', translation: 'the future' },
  { word: 'I', translation: 'Today' },
  { word: 'dag', translation: 'day' },
  { word: 'er', translation: 'is' },
  { word: 'fondet', translation: 'the fund' },
  { word: 'et', translation: 'one' },
  { word: 'av', translation: 'of' },
  { word: 'de', translation: 'the' },
  { word: 'største', translation: 'largest' },
  { word: 'i', translation: 'in' },
  { word: 'verden', translation: 'the world' },
  { word: 'Pengene', translation: 'The money' },
  { word: 'brukes', translation: 'is used' },
  { word: 'på', translation: 'for' },
  { word: 'skoler', translation: 'schools' },
  { word: 'sykehus', translation: 'hospitals' },
  { word: 'og', translation: 'and' },
  { word: 'pensjoner', translation: 'pensions' },
  { word: 'Men', translation: 'But' },
  { word: 'oljen', translation: 'the oil' },
  { word: 'varer', translation: 'lasts' },
  { word: 'ikke', translation: 'not' },
  { word: 'evig', translation: 'forever' },
  { word: 'En', translation: 'One' },
  { word: 'dag', translation: 'day' },
  { word: 'vil', translation: 'will' },
  { word: 'den', translation: 'it' },
  { word: 'ta', translation: 'take' },
  { word: 'slutt', translation: 'end' },
  { word: 'Hva', translation: 'What' },
  { word: 'skjer', translation: 'happens' },
  { word: 'i', translation: 'in' },
  { word: 'framtiden', translation: 'the future' },
  { word: 'Pavlo', translation: 'Pavlo' },
  { word: 'ser', translation: 'looks' },
  { word: 'ut', translation: 'out' },
  { word: 'av', translation: 'of' },
  { word: 'vinduet', translation: 'the window' },
  { word: 'Ute', translation: 'Outside' },
  { word: 'ligger', translation: 'lies' },
  { word: 'havet', translation: 'the sea' },
  { word: 'der', translation: 'where' },
  { word: 'oljen', translation: 'the oil' },
  { word: 'kommer', translation: 'comes' },
  { word: 'fra', translation: 'from' },
  { word: 'Hva', translation: 'What' },
  { word: 'skjer', translation: 'happens' },
  { word: 'når', translation: 'when' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'ikke', translation: 'not' },
  { word: 'har', translation: 'has' },
  { word: 'mer', translation: 'more' },
  { word: 'olje', translation: 'oil' },
  { word: 'spør', translation: 'asks' },
  { word: 'han', translation: 'he' },
  { word: 'Lars', translation: 'Lars' },
  { word: 'tenker', translation: 'thinks' },
  { word: 'litt', translation: 'a bit' },
  { word: 'Vi', translation: 'We' },
  { word: 'må', translation: 'must' },
  { word: 'finne', translation: 'find' },
  { word: 'andre', translation: 'other' },
  { word: 'løsninger', translation: 'solutions' },
  { word: 'sier', translation: 'says' },
  { word: 'han', translation: 'he' },
  { word: 'Vindkraft', translation: 'Wind power' },
  { word: 'solenergi', translation: 'solar energy' },
  { word: 'Kanskje', translation: 'Maybe' },
  { word: 'du', translation: 'you' },
  { word: 'og', translation: 'and' },
  { word: 'jeg', translation: 'I' },
  { word: 'skal', translation: 'will' },
  { word: 'jobbe', translation: 'work' },
  { word: 'med', translation: 'with' },
  { word: 'det', translation: 'that' },
  { word: 'i', translation: 'in' },
  { word: 'framtiden', translation: 'the future' },
  { word: 'Pavlo', translation: 'Pavlo' },
  { word: 'smiler', translation: 'smiles' },
  { word: 'Kanskje', translation: 'Maybe' },
  { word: 'det', translation: 'that' }
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
