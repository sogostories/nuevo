const translations7 = [
"Lina had recently moved to Norway and wanted to understand why Norwegians love going on hikes.", 
"A friend recommended that she join the Norwegian Trekking Association (DNT), and she signed up immediately.", 
"Now it was Sunday, and Lina was going to participate in her first DNT hike.", 
"At the meeting place, Lina was met by a large group of members of all ages.", 
"The tour leaders, Kari and Per, welcomed everyone and handed out maps of the route.",
"\"Today we are going on an easy hike to one of DNT's cabins,\" said Kari.",
"\"It will be a great day in nature.\"", 
"Lina noticed how organized everything was.",
"DNT members get access to a large network of marked trails and over 500 cabins all over Norway.", 
"In addition, DNT offers many activities and tours for members, from short day trips to longer expeditions.",
"On the hike, Lina started talking to the other participants.", 
"They told her about the many benefits of being a DNT member.",
"Not only do you get access to fantastic hiking opportunities, but also to community and friendship.", 
"DNT organizes many social activities, such as guided tours, courses, and family events.",
"When the group arrived at the cabin, Lina was impressed by how cozy it was.", 
"Kari and Per started preparing lunch, and the others helped.", 
"Everyone was happy and grateful to share this experience.",
"Kari told Lina that DNT has over 300,000 members and is one of Norway's largest and oldest outdoor organizations.", 
"Lina felt included and welcome.", 
"She realized that DNT was not just about going on hikes, but also about creating memories and community.", 
"Being a member of DNT gave her the opportunity to experience Norway's beautiful nature in a safe and pleasant way, while also making new friends.", 
"When the hike was over, Lina thanked Kari and Per.", 
"\"Thank you so much for a fantastic day,\" she said.", 
"\"I really look forward to the next hike with DNT.\""
];


const startTimes7=[6.5,15,25,32,39,48,54.5,
                   58,62,73,84,88,93,101,
                   109,116,122,128,140,143,152,
                   164,167,171];
const vocabulary7 = [
  { word: 'Lina', translation: 'Lina' },
  { word: 'hadde', translation: 'had' },
  { word: 'nylig', translation: 'recently' },
  { word: 'flyttet', translation: 'moved' },
  { word: 'til', translation: 'to' },
  { word: 'Norge', translation: 'Norway' },
  { word: 'og', translation: 'and' },
  { word: 'ønsket', translation: 'wanted' },
  { word: 'å', translation: 'to' },
  { word: 'forstå', translation: 'understand' },
  { word: 'hvorfor', translation: 'why' },
  { word: 'nordmenn', translation: 'Norwegians' },
  { word: 'elsker', translation: 'love' },
  { word: 'å', translation: 'to' },
  { word: 'gå', translation: 'go' },
  { word: 'på', translation: 'on' },
  { word: 'tur.', translation: 'hikes.' },
  { word: 'En', translation: 'A' },
  { word: 'venn', translation: 'friend' },
  { word: 'anbefalte', translation: 'recommended' },
  { word: 'henne', translation: 'her' },
  { word: 'å', translation: 'to' },
  { word: 'bli', translation: 'become' },
  { word: 'med', translation: 'with' },
  { word: 'i', translation: 'in' },
  { word: 'Den', translation: 'The' },
  { word: 'Norske', translation: 'Norwegian' },
  { word: 'Turistforening', translation: 'Trekking Association' },
  { word: '(DNT),', translation: '(DNT),' },
  { word: 'og', translation: 'and' },
  { word: 'hun', translation: 'she' },
  { word: 'meldte', translation: 'signed' },
  { word: 'seg', translation: 'up' },
  { word: 'straks', translation: 'immediately' },
  { word: 'inn.', translation: 'in.' },
  { word: 'Nå', translation: 'Now' },
  { word: 'var', translation: 'was' },
  { word: 'det', translation: 'it' },
  { word: 'søndag,', translation: 'Sunday,' },
  { word: 'og', translation: 'and' },
  { word: 'Lina', translation: 'Lina' },
  { word: 'skulle', translation: 'was going to' },
  { word: 'delta', translation: 'participate' },
  { word: 'på', translation: 'in' },
  { word: 'sin', translation: 'her' },
  { word: 'første', translation: 'first' },
  { word: 'DNT-tur.', translation: 'DNT hike.' },
  { word: 'På', translation: 'At' },
  { word: 'møteplassen', translation: 'the meeting place' },
  { word: 'ble', translation: 'was' },
  { word: 'Lina', translation: 'Lina' },
  { word: 'møtt', translation: 'met' },
  { word: 'av', translation: 'by' },
  { word: 'en', translation: 'a' },
  { word: 'stor', translation: 'large' },
  { word: 'gruppe', translation: 'group' },
  { word: 'medlemmer', translation: 'members' },
  { word: 'i', translation: 'of' },
  { word: 'alle', translation: 'all' },
  { word: 'aldre.', translation: 'ages.' },
  { word: 'Turlederne,', translation: 'The tour leaders,' },
  { word: 'Kari', translation: 'Kari' },
  { word: 'og', translation: 'and' },
  { word: 'Per,', translation: 'Per,' },
  { word: 'ønsket', translation: 'welcomed' },
  { word: 'alle', translation: 'everyone' },
  { word: 'velkommen', translation: 'welcome' },
  { word: 'og', translation: 'and' },
  { word: 'delte', translation: 'handed' },
  { word: 'ut', translation: 'out' },
  { word: 'kart', translation: 'maps' },
  { word: 'over', translation: 'of' },
  { word: 'ruten.', translation: 'the route.' },
  { word: '\"I', translation: '\"Today' },
  { word: 'dag', translation: 'we' },
  { word: 'skal', translation: 'are' },
  { word: 'vi', translation: 'going' },
  { word: 'gå', translation: 'on' },
  { word: 'en', translation: 'an' },
  { word: 'lett', translation: 'easy' },
  { word: 'tur', translation: 'hike' },
  { word: 'til', translation: 'to' },
  { word: 'en', translation: 'one' },
  { word: 'av', translation: 'of' },
  { word: 'DNTs', translation: 'DNT\'s' },
  { word: 'hytter,\"', translation: 'cabins,\"' },
  { word: 'sa', translation: 'said' },
  { word: 'Kari.', translation: 'Kari.' },
  { word: '\"Det', translation: '\"It' },
  { word: 'blir', translation: 'will' },
  { word: 'en', translation: 'be' },
  { word: 'flott', translation: 'a' },
  { word: 'dag', translation: 'great' },
  { word: 'i', translation: 'day' },
  { word: 'naturen.\"', translation: 'in' },
  { word: 'Lina', translation: 'nature.\"' },
  { word: 'la', translation: 'Lina' },
  { word: 'merke', translation: 'noticed' },
  { word: 'til', translation: 'how' },
  { word: 'hvor', translation: 'organized' },
  { word: 'organisert', translation: 'everything' },
  { word: 'alt', translation: 'was.' },
  { word: 'var.', translation: 'DNT' },
  { word: 'DNT-medlemmer', translation: 'members' },
  { word: 'får', translation: 'get' },
  { word: 'tilgang', translation: 'access' },
  { word: 'til', translation: 'to' },
  { word: 'et', translation: 'a' },
  { word: 'stort', translation: 'large' },
  { word: 'nettverk', translation: 'network' },
  { word: 'av', translation: 'of' },
  { word: 'merkede', translation: 'marked' },
  { word: 'stier', translation: 'trails' },
  { word: 'og', translation: 'and' },
  { word: 'over', translation: 'over' },
  { word: '500', translation: '500' },
  { word: 'hytter', translation: 'cabins' },
  { word: 'over', translation: 'all' },
  { word: 'hele', translation: 'over' },
  { word: 'Norge.', translation: 'Norway.' },
  { word: 'I', translation: 'In' },
  { word: 'tillegg', translation: 'addition,' },
  { word: 'tilbyr', translation: 'DNT' },
  { word: 'DNT', translation: 'offers' },
  { word: 'mange', translation: 'many' },
  { word: 'aktiviteter', translation: 'activities' },
  { word: 'og', translation: 'and' },
  { word: 'turer', translation: 'tours' },
  { word: 'for', translation: 'for' },
  { word: 'medlemmene,', translation: 'members,' },
  { word: 'fra', translation: 'from' },
  { word: 'korte', translation: 'short' },
  { word: 'dagsturer', translation: 'day' },
  { word: 'til', translation: 'trips' },
  { word: 'lengre', translation: 'to' },
  { word: 'ekspedisjoner.', translation: 'longer' },
  { word: 'På', translation: 'expeditions.' },
  { word: 'turen', translation: 'On' },
  { word: 'begynte', translation: 'the' },
  { word: 'Lina', translation: 'hike,' },
  { word: 'å', translation: 'Lina' },
  { word: 'snakke', translation: 'started' },
  { word: 'med', translation: 'talking' },
  { word: 'de', translation: 'to' },
  { word: 'andre', translation: 'the' },
  { word: 'deltakerne.', translation: 'other' },
  { word: 'De', translation: 'participants.' },
  { word: 'fortalte', translation: 'They' },
  { word: 'henne', translation: 'told' },
  { word: 'om', translation: 'her' },
  { word: 'de', translation: 'about' },
  { word: 'mange', translation: 'the' },
  { word: 'fordelene', translation: 'many' },
  { word: 'ved', translation: 'benefits' },
  { word: 'å', translation: 'of' },
  { word: 'være', translation: 'being' },
  { word: 'DNT-medlem.', translation: 'a' },
  { word: 'Ikke', translation: 'DNT' },
  { word: 'bare', translation: 'member.' },
  { word: 'får', translation: 'Not' },
  { word: 'man', translation: 'only' },
  { word: 'tilgang', translation: 'do' },
  { word: 'til', translation: 'you' },
  { word: 'fantastiske', translation: 'get' },
  { word: 'turmuligheter,', translation: 'access' },
  { word: 'men', translation: 'to' },
  { word: 'også', translation: 'fantastic' },
  { word: 'til', translation: 'hiking' },
  { word: 'fellesskap', translation: 'opportunities,' },
  { word: 'og', translation: 'but' },
  { word: 'vennskap.', translation: 'also' },
  { word: 'DNT', translation: 'to' },
  { word: 'organiserer', translation: 'community' },
  { word: 'mange', translation: 'and' },
  { word: 'sosiale', translation: 'friendship.' },
  { word: 'aktiviteter,', translation: 'DNT' },
  { word: 'som', translation: 'organizes' },
  { word: 'turer', translation: 'many' },
  { word: 'med', translation: 'social' },
  { word: 'guide,', translation: 'activities,' },
  { word: 'kurs', translation: 'such' },
  { word: 'og', translation: 'as' },
  { word: 'familiearrangementer.', translation: 'guided' },
  { word: 'Da', translation: 'tours,' },
  { word: 'gruppen', translation: 'courses,' },
  { word: 'kom', translation: 'and' },
  { word: 'frem', translation: 'family' },
  { word: 'til', translation: 'events.' },
  { word: 'hytta,', translation: 'When' },
  { word: 'ble', translation: 'the' },
  { word: 'Lina', translation: 'group' },
  { word: 'imponert', translation: 'arrived' },
  { word: 'over', translation: 'at' },
  { word: 'hvor', translation: 'the' },
  { word: 'koselig', translation: 'cabin,' },
  { word: 'den', translation: 'Lina' },
  { word: 'var.', translation: 'was' },
  { word: 'Kari', translation: 'impressed' },
  { word: 'og', translation: 'by' },
  { word: 'Per', translation: 'how' },
  { word: 'begynte', translation: 'cozy' },
  { word: 'å', translation: 'it' },
  { word: 'forberede', translation: 'was.' },
  { word: 'lunsj,', translation: 'Kari' },
  { word: 'og', translation: 'and' },
  { word: 'de', translation: 'Per' },
  { word: 'andre', translation: 'started' },
  { word: 'hjalp', translation: 'preparing' },
  { word: 'til.', translation: 'lunch,' },
  { word: 'Alle', translation: 'and' },
  { word: 'var', translation: 'the' },
  { word: 'glade', translation: 'others' },
  { word: 'og', translation: 'helped.' },
  { word: 'takknemlige', translation: 'Everyone' },
  { word: 'for', translation: 'was' },
  { word: 'å', translation: 'happy' },
  { word: 'dele', translation: 'and' },
  { word: 'denne', translation: 'grateful' },
  { word: 'opplevelsen.', translation: 'to' },
  { word: 'Kari', translation: 'share' },
  { word: 'fortalte', translation: 'this' },
  { word: 'Lina', translation: 'experience.' },
  { word: 'at', translation: 'Kari' },
  { word: 'DNT', translation: 'told' },
  { word: 'har', translation: 'Lina' },
  { word: 'over', translation: 'that' },
  { word: '300', translation: 'DNT' },
  { word: '000', translation: 'has' },
  { word: 'medlemmer', translation: 'over' },
  { word: 'og', translation: '300,000' },
  { word: 'er', translation: 'members' },
  { word: 'en', translation: 'and' },
  { word: 'av', translation: 'is' },
  { word: 'Norges', translation: 'one' },
  { word: 'største', translation: 'of' },
  { word: 'og', translation: 'Norway\'s' },
  { word: 'eldste', translation: 'largest' },
  { word: 'friluftsorganisasjoner.', translation: 'and' },
  { word: 'Lina', translation: 'oldest' },
  { word: 'følte', translation: 'outdoor' },
  { word: 'seg', translation: 'organizations.' },
  { word: 'inkludert', translation: 'Lina' },
  { word: 'og', translation: 'felt' },
  { word: 'velkommen.', translation: 'included' },
  { word: 'Hun', translation: 'and' },
  { word: 'innså', translation: 'welcome.' },
  { word: 'at', translation: 'She' },
  { word: 'DNT', translation: 'realized' },
  { word: 'ikke', translation: 'that' },
  { word: 'bare', translation: 'DNT' },
  { word: 'handlet', translation: 'was' },
  { word: 'om', translation: 'not' },
  { word: 'å', translation: 'just' },
  { word: 'gå', translation: 'about' },
  { word: 'på', translation: 'going' },
  { word: 'tur,', translation: 'on' },
  { word: 'men', translation: 'hikes,' },
  { word: 'også', translation: 'but' },
  { word: 'om', translation: 'also' },
  { word: 'å', translation: 'about' },
  { word: 'skape', translation: 'creating' },
  { word: 'minner', translation: 'memories' },
  { word: 'og', translation: 'and' },
  { word: 'fellesskap.', translation: 'community.' },
  { word: 'Å', translation: 'Being' },
  { word: 'være', translation: 'a' },
  { word: 'medlem', translation: 'member' },
  { word: 'av', translation: 'of' },
  { word: 'DNT', translation: 'DNT' },
  { word: 'ga', translation: 'gave' },
  { word: 'henne', translation: 'her' },
  { word: 'muligheten', translation: 'the' },
  { word: 'til', translation: 'opportunity' },
  { word: 'å', translation: 'to' },
  { word: 'oppleve', translation: 'experience' },
  { word: 'Norges', translation: 'Norway\'s' },
  { word: 'vakre', translation: 'beautiful' },
  { word: 'natur', translation: 'nature' },
  { word: 'på', translation: 'in' },
  { word: 'en', translation: 'a' },
  { word: 'trygg', translation: 'safe' },
  { word: 'og', translation: 'and' },
  { word: 'hyggelig', translation: 'pleasant' },
  { word: 'måte,', translation: 'way,' },
  { word: 'samtidig', translation: 'while' },
  { word: 'som', translation: 'also' },
  { word: 'hun', translation: 'making' },
  { word: 'fikk', translation: 'new' },
  { word: 'nye', translation: 'friends.' },
  { word: 'venner.', translation: 'When' },
  { word: 'Da', translation: 'the' },
  { word: 'turen', translation: 'hike' },
  { word: 'var', translation: 'was' },
  { word: 'over,', translation: 'over,' },
  { word: 'takket', translation: 'Lina' },
  { word: 'Lina', translation: 'thanked' },
  { word: 'Kari', translation: 'Kari' },
  { word: 'og', translation: 'and' },
  { word: 'Per.', translation: 'Per.' },
  { word: '\"Tusen', translation: '\"Thank' },
  { word: 'takk', translation: 'you' },
  { word: 'for', translation: 'so' },
  { word: 'en', translation: 'much' },
  { word: 'fantastisk', translation: 'for' },
  { word: 'dag,\"', translation: 'a' },
  { word: 'sa', translation: 'fantastic' },
  { word: 'hun.', translation: 'day,\"' },
  { word: '\"Jeg', translation: 'she' },
  { word: 'ser', translation: 'said.' },
  { word: 'virkelig', translation: '\"I' },
  { word: 'frem', translation: 'really' },
  { word: 'til', translation: 'look' },
  { word: 'neste', translation: 'forward' },
  { word: 'tur', translation: 'to' },
  { word: 'med', translation: 'the' },
  { word: 'DNT.\"', translation: 'next' }
  ];

/**************  DOM  ****************/ 
const segments7 = Array.from(document.querySelectorAll('#storyText7 span'));
const toast7 = document.getElementById('toast7');
const audio7 = document.getElementById('storyAudio7');
const wordBtn7 = document.getElementById('wordModeBtn7');

/**************  STATE  ****************/ 
let readingIndex7=0;
let wordMode7=false;

/**************  AUDIO PLAYBACK (variable7)  ****************/ 
function clearHighlight7() {
  segments7.forEach(s => s.classList.remove('highlight'));
}

function handleTimeUpdate7() {
  if (wordMode7) return; // ignore in word mode
  const cur = audio7.currentTime;
  const idx = startTimes7.findIndex((s, i) => cur >= s && (i === startTimes7.length - 1 || cur < startTimes7[i + 1]));
  if (idx !== -1 && idx !== readingIndex7) {
    clearHighlight7();
    segments7[idx].classList.add('highlight');
    toast7.textContent = translations7[idx];
    toast7.style.display = 'block';
    readingIndex7 = idx;
  }
}
audio7.addEventListener('timeupdate', handleTimeUpdate7);
audio7.addEventListener('ended', () => {
  clearHighlight7();
  toast7.style.display = 'none';
  readingIndex7 = 0;
});

function playStory7() {
  exitWordMode7(); // exit word mode if active
  audio7.currentTime = startTimes7[readingIndex7];
  audio7.play();
  highlightCurrentSentence7(); // manually highlight on play
}
function highlightCurrentSentence7() {
  clearHighlight7();
  segments7[readingIndex7].classList.add('highlight');
  toast7.textContent = translations7[readingIndex7];
  toast7.style.display = 'block';
}

function pauseStory7() {
  audio7.pause();
  toast7.style.display = 'none';
  clearHighlight7();
}
/**************  SEGMENT CLICK – sentence playback (story7) ****************/
segments7.forEach((segment, idx) => {
  segment.style.cursor = 'pointer';
  segment.addEventListener('click', () => {
    readingIndex7 = idx;
    audio7.currentTime = startTimes7[idx];

    // Highlight immediately on click
    clearHighlight7();
    segments7[idx].classList.add('highlight');

    // Show translation immediately
    toast7.textContent = translations7[idx];
    toast7.style.display = 'block';

    playStory7();
  });
});

/**************  WORD MODE  ****************/
function toggleWordMode7() {
  wordMode7 ? exitWordMode7() : enterWordMode7();
}

function enterWordMode7() {
  wordMode7 = true;
  wordBtn7.textContent = 'Exit Word Mode';
  pauseStory7();
  toast7.style.display = 'none';

  // wrap every word in each sentence with span.word
  segments7.forEach(seg => {
    const words = seg.textContent.split(/(\s+)/); // keep spaces
    seg.innerHTML = words.map(w => /\s+/.test(w) ? w : `<span class='word'>${w}</span>`).join('');
    seg.querySelectorAll('span.word').forEach(wspan => {
      wspan.style.cursor = 'pointer';
      wspan.addEventListener('click', wordClickHandler7);
    });
  });
}


function exitWordMode7() {
  if (!wordMode7) return;
  wordMode7 = false;
  wordBtn7.textContent = 'Word Translation Mode';
  toast7.style.display = 'none';

  // restore original text (remove inner spans)
  segments7.forEach((seg, i) => {
    seg.textContent = seg.innerText;
  });

  clearHighlight7();
}




function wordClickHandler7(e) {
  e.stopPropagation();
  clearHighlight7();
  const span = e.target;
  span.classList.add('highlight');

  // Clean the word and look up in vocabulary7
  const clean = span.textContent.toLowerCase().replace(/[^a-zæøåA-ZÆØÅ]/g, '');
  const entry = vocabulary7.find(v => v.word.toLowerCase() === clean);
  toast7.textContent = entry ? `${entry.word} = ${entry.translation}` : 'Translation not available';
  toast7.style.display = 'block';
  // ▶️ Play the sentence that contains the clicked word
  const parentSegment = span.closest('span');
  const idx = segments7.indexOf(parentSegment);
  if (idx !== -1) {
    readingIndex7 = idx;
    audio7.currentTime = startTimes7[idx];
    audio7.play();
  }
}
/**************  FLASH‑CARD MODE – STORY 7 ****************/
const flashcard7 = document.getElementById('flashcard7');
const flashcardContent7 = document.getElementById('flashcardContent7');
let currentWordIdx7 = 0;

function startVocabMode7() {
  exitWordMode7(); // Make sure word mode is off
  flashcard7.style.display = 'flex';
  currentWordIdx7 = 0;
  updateFlashcard7();
}


function updateFlashcard7() {
  flashcardContent7.textContent = vocabulary7[currentWordIdx7].word;
  flashcardContent7.dataset.side = 'word';
}

function revealMeaning7() {
  if (flashcardContent7.dataset.side === 'word') {
    flashcardContent7.textContent = vocabulary7[currentWordIdx7].translation;
    flashcardContent7.dataset.side = 'translation';
  } else {
    updateFlashcard7();
  }
}

function nextWord7() {
  currentWordIdx7 = (currentWordIdx7 + 1) % vocabulary7.length;
  updateFlashcard7();
}

function prevWord7() {
  currentWordIdx7 = (currentWordIdx7 - 1 + vocabulary7.length) % vocabulary7.length;
  updateFlashcard7();
}

function closeFlashcard7() {
  flashcard7.style.display = 'none';
}

/**************  MODAL – STORY 7 ****************/
function showDialog7() {
  document.getElementById('overlay7').style.display = 'block';
  document.getElementById('storyDialog7').style.display = 'block';
}

function closeDialog7() {
  pauseStory7();             // stop audio & highlight
  exitWordMode7();           // reset word mode
  flashcard7.style.display = 'none';
  document.getElementById('flashcard7').style.display = 'none';
  document.getElementById('overlay7').style.display = 'none';
  document.getElementById('storyDialog7').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('overlay7').addEventListener('click', closeDialog7);
