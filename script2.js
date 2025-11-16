const translations4 = [
"King Olav V was born on July 2, 1903, in Great Britain as Prince Alexander Edward Christian Frederik.", 
"He moved to Norway with his family in 1905 when his father, Haakon VII, became king of Norway.", 
"Alexander was given the name Olav V when he became crown prince, and he grew up in Norway.", 

"During World War II, the royal family had to flee from Norway when Germany invaded the country in 1940.", 
"The royal family and the government were in exile in Great Britain.", 
"While in England, Olav V continued to fight for the liberation of Norway together with his father.", 
"He became an important leader and inspired many Norwegians during the war.", 

"Olav V became king in 1957 after his father's death.", 
"He was a popular king who became known as the People's King.", 
"His humility and closeness to the people made him beloved by many.", 
"He was simple and down-to-earth, and often participated in the lives of ordinary people.", 
"He loved skiing and outdoor life, just like many Norwegians.",

"He is perhaps best known for his tram ride during the oil crisis in 1973.", 
"During the crisis, there were car-free days to save gasoline, and the king took the tram in Oslo like everyone else.", 
"He bought a ticket and sat among ordinary people.", 
"This incident made him even more popular and showed his grounded attitude.", 

"King Olav V was a beloved king who greatly appreciated the Norwegian people.", 
"He died on January 17, 1991, but is still remembered as the “People's King.”", 
"His life and actions are an important part of Norwegian history and cultural heritage."
];

const startTimes4=[1,19,29.5,38,48,54,63,70,76,82,88,95,100,108,118,122, 129, 135, 142,149,160];
const vocabulary4 = [
  { word: 'Kong', translation: 'King' },
  { word: 'Olav', translation: 'Olav' },
  { word: 'V', translation: 'V' },
  { word: 'ble', translation: 'was' },
  { word: 'født', translation: 'born' },
  { word: '2.', translation: '2nd' },
  { word: 'juli', translation: 'July' },
  { word: '1903', translation: '1903' },
  { word: 'i', translation: 'in' },
  { word: 'Storbritannia', translation: 'Great Britain' },
  { word: 'som', translation: 'as' },
  { word: 'prins', translation: 'prince' },
  { word: 'Alexander', translation: 'Alexander' },
  { word: 'Edward', translation: 'Edward' },
  { word: 'Christian', translation: 'Christian' },
  { word: 'Frederik', translation: 'Frederik' },
  { word: 'Han', translation: 'He' },
  { word: 'flyttet', translation: 'moved' },
  { word: 'til', translation: 'to' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'med', translation: 'with' },
  { word: 'familien', translation: 'the family' },
  { word: 'i', translation: 'in' },
  { word: '1905', translation: '1905' },
  { word: 'da', translation: 'when' },
  { word: 'faren', translation: 'the father' },
  { word: 'hans', translation: 'his' },
  { word: 'Haakon', translation: 'Haakon' },
  { word: 'VII', translation: 'VII' },
  { word: 'ble', translation: 'became' },
  { word: 'konge', translation: 'king' },
  { word: 'av', translation: 'of' },
  { word: 'Alexander', translation: 'Alexander' },
  { word: 'fikk', translation: 'got/received' },
  { word: 'navnet', translation: 'the name' },
  { word: 'Olav', translation: 'Olav' },
  { word: 'V', translation: 'V' },
  { word: 'da', translation: 'when' },
  { word: 'han', translation: 'he' },
  { word: 'ble', translation: 'became' },
  { word: 'kronprins', translation: 'crown prince' },
  { word: 'og', translation: 'and' },
  { word: 'vokste', translation: 'grew' },
  { word: 'opp', translation: 'up' },
  { word: 'i', translation: 'in' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'Under', translation: 'During' },
  { word: 'andre', translation: 'second' },
  { word: 'verdenskrig', translation: 'world war' },
  { word: 'måtte', translation: 'had to' },
  { word: 'kongefamilien', translation: 'the royal family' },
  { word: 'flykte', translation: 'flee' },
  { word: 'fra', translation: 'from' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'da', translation: 'when' },
  { word: 'Tyskland', translation: 'Germany' },
  { word: 'invaderte', translation: 'invaded' },
  { word: 'landet', translation: 'the country' },
  { word: 'i', translation: 'in' },
  { word: '1940', translation: '1940' },
  { word: 'Kongefamilien', translation: 'The royal family' },
  { word: 'og', translation: 'and' },
  { word: 'regjeringen', translation: 'the government' },
  { word: 'var', translation: 'were' },
  { word: 'i', translation: 'in' },
  { word: 'eksil', translation: 'exile' },
  { word: 'i', translation: 'in' },
  { word: 'Storbritannia', translation: 'Great Britain' },
  { word: 'Mens', translation: 'While' },
  { word: 'han', translation: 'he' },
  { word: 'var', translation: 'was' },
  { word: 'i', translation: 'in' },
  { word: 'England', translation: 'England' },
  { word: 'fortsatte', translation: 'continued' },
  { word: 'Olav', translation: 'Olav' },
  { word: 'V', translation: 'V' },
  { word: 'å', translation: 'to' },
  { word: 'kjempe', translation: 'fight' },
  { word: 'for', translation: 'for' },
  { word: 'å', translation: 'to' },
  { word: 'frigjøre', translation: 'liberate' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'sammen', translation: 'together' },
  { word: 'med', translation: 'with' },
  { word: 'sin', translation: 'his' },
  { word: 'far', translation: 'father' },
  { word: 'Han', translation: 'He' },
  { word: 'ble', translation: 'became' },
  { word: 'en', translation: 'an' },
  { word: 'viktig', translation: 'important' },
  { word: 'leder', translation: 'leader' },
  { word: 'og', translation: 'and' },
  { word: 'inspirerte', translation: 'inspired' },
  { word: 'mange', translation: 'many' },
  { word: 'nordmenn', translation: 'Norwegians' },
  { word: 'under', translation: 'during' },
  { word: 'krigen', translation: 'the war' },
  { word: 'Olav', translation: 'Olav' },
  { word: 'V', translation: 'V' },
  { word: 'ble', translation: 'became' },
  { word: 'konge', translation: 'king' },
  { word: 'i', translation: 'in' },
  { word: '1957', translation: '1957' },
  { word: 'etter', translation: 'after' },
  { word: 'farens', translation: 'the father\'s' },
  { word: 'død', translation: 'death' },
  { word: 'Han', translation: 'He' },
  { word: 'var', translation: 'was' },
  { word: 'en', translation: 'a' },
  { word: 'populær', translation: 'popular' },
  { word: 'konge', translation: 'king' },
  { word: 'som', translation: 'who' },
  { word: 'ble', translation: 'became' },
  { word: 'kjent', translation: 'known' },
  { word: 'som', translation: 'as' },
  { word: 'Folkekongen', translation: 'the People\'s King' },
  { word: 'Hans', translation: 'His' },
  { word: 'ydmykhet', translation: 'humility' },
  { word: 'og', translation: 'and' },
  { word: 'nærhet', translation: 'closeness' },
  { word: 'til', translation: 'to' },
  { word: 'folket', translation: 'the people' },
  { word: 'gjorde', translation: 'made' },
  { word: 'ham', translation: 'him' },
  { word: 'elsket', translation: 'beloved' },
  { word: 'av', translation: 'by' },
  { word: 'mange', translation: 'many' },
  { word: 'Han', translation: 'He' },
  { word: 'var', translation: 'was' },
  { word: 'enkel', translation: 'simple' },
  { word: 'og', translation: 'and' },
  { word: 'folkelig', translation: 'down-to-earth' },
  { word: 'og', translation: 'and' },
  { word: 'deltok', translation: 'participated' },
  { word: 'ofte', translation: 'often' },
  { word: 'i', translation: 'in' },
  { word: 'vanlige', translation: 'ordinary' },
  { word: 'folks', translation: 'people\'s' },
  { word: 'liv', translation: 'life' },
  { word: 'Han', translation: 'He' },
  { word: 'elsket', translation: 'loved' },
  { word: 'ski', translation: 'skiing' },
  { word: 'og', translation: 'and' },
  { word: 'friluftsliv', translation: 'outdoor life' },
  { word: 'akkurat', translation: 'just' },
  { word: 'som', translation: 'like' },
  { word: 'mange', translation: 'many' },
  { word: 'nordmenn', translation: 'Norwegians' },
  { word: 'Han', translation: 'He' },
  { word: 'er', translation: 'is' },
  { word: 'kanskje', translation: 'perhaps' },
  { word: 'mest', translation: 'most' },
  { word: 'kjent', translation: 'known' },
  { word: 'for', translation: 'for' },
  { word: 'sin', translation: 'his' },
  { word: 'tur', translation: 'trip' },
  { word: 'med', translation: 'with' },
  { word: 'trikken', translation: 'the tram' },
  { word: 'under', translation: 'during' },
  { word: 'oljekrisen', translation: 'the oil crisis' },
  { word: 'i', translation: 'in' },
  { word: '1973', translation: '1973' },
  { word: 'Under', translation: 'During' },
  { word: 'krisen', translation: 'the crisis' },
  { word: 'var', translation: 'was' },
  { word: 'det', translation: 'there' },
  { word: 'bilfrie', translation: 'car-free' },
  { word: 'dager', translation: 'days' },
  { word: 'for', translation: 'to' },
  { word: 'å', translation: 'to' },
  { word: 'kunne', translation: 'be able to' },
  { word: 'spare', translation: 'save' },
  { word: 'bensin', translation: 'gasoline' },
  { word: 'og', translation: 'and' },
  { word: 'kongen', translation: 'the king' },
  { word: 'tok', translation: 'took' },
  { word: 'trikken', translation: 'the tram' },
  { word: 'i', translation: 'in' },
  { word: 'Oslo', translation: 'Oslo' },
  { word: 'som', translation: 'like' },
  { word: 'alle', translation: 'all' },
  { word: 'andre', translation: 'others' },
  { word: 'Han', translation: 'He' },
  { word: 'kjøpte', translation: 'bought' },
  { word: 'billett', translation: 'ticket' },
  { word: 'og', translation: 'and' },
  { word: 'satt', translation: 'sat' },
  { word: 'sammen', translation: 'together' },
  { word: 'med', translation: 'with' },
  { word: 'vanlige', translation: 'ordinary' },
  { word: 'folk', translation: 'people' },
  { word: 'Denne', translation: 'This' },
  { word: 'hendelsen', translation: 'incident' },
  { word: 'gjorde', translation: 'made' },
  { word: 'ham', translation: 'him' },
  { word: 'enda', translation: 'even' },
  { word: 'mer', translation: 'more' },
  { word: 'populær', translation: 'popular' },
  { word: 'og', translation: 'and' },
  { word: 'viste', translation: 'showed' },
  { word: 'hans', translation: 'his' },
  { word: 'jordnære', translation: 'grounded' },
  { word: 'holdning', translation: 'attitude' },
  { word: 'Kong', translation: 'King' },
  { word: 'Olav', translation: 'Olav' },
  { word: 'V', translation: 'V' },
  { word: 'var', translation: 'was' },
  { word: 'en', translation: 'a' },
  { word: 'elsket', translation: 'beloved' },
  { word: 'konge', translation: 'king' },
  { word: 'som', translation: 'who' },
  { word: 'satte', translation: 'set' },
  { word: 'stor', translation: 'great' },
  { word: 'pris', translation: 'value' },
  { word: 'på', translation: 'on' },
  { word: 'det', translation: 'the' },
  { word: 'norske', translation: 'Norwegian' },
  { word: 'folket', translation: 'people' },
  { word: 'Han', translation: 'He' },
  { word: 'døde', translation: 'died' },
  { word: '17.', translation: '17th' },
  { word: 'januar', translation: 'January' },
  { word: '1991', translation: '1991' },
  { word: 'men', translation: 'but' },
  { word: 'er', translation: 'is' },
  { word: 'fortsatt', translation: 'still' },
  { word: 'husket', translation: 'remembered' },
  { word: 'som', translation: 'as' },
  { word: 'folkekongen', translation: 'the people\'s king' },
  { word: 'Hans', translation: 'His' },
  { word: 'liv', translation: 'life' },
  { word: 'og', translation: 'and' },
  { word: 'handlinger', translation: 'actions' },
  { word: 'er', translation: 'are' },
  { word: 'en', translation: 'an' },
  { word: 'viktig', translation: 'important' },
  { word: 'del', translation: 'part' },
  { word: 'av', translation: 'of' },
  { word: 'norsk', translation: 'Norwegian' },
  { word: 'historie', translation: 'history' },
  { word: 'og', translation: 'and' },
  { word: 'kulturarv', translation: 'cultural heritage' }
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
  const idx = startTimes4.findIndex((s, i) => cur >= s && (i === startTimes4.length - 1 || cur < startTimes4[i + 1]));
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



/**************  WORD MODE  ****************/
function toggleWordMode4() {
  wordMode4 ? exitWordMode4() : enterWordMode4();
}

function enterWordMode4() {
  wordMode4 = true;
  wordBtn4.textContent = 'Exit Word Mode';
  pauseStory4();
  toast4.classList.remove('show');


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
  toast4.classList.remove('show');

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
  document.getElementById('flashcard4').style.display = 'none';
  document.getElementById('overlay4').style.display = 'none';
  document.getElementById('storyDialog4').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay4').addEventListener('click', closeDialog4);