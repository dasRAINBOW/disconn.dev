const codes = [
  "im59t8WDQ4g",
  "QX43QTYyV-8",
  "rRPQs_kM_nw",
  "oPY20FjhGMo",
  "FpouoDphV-I",
  "tfnZa7C0Hzo",
  "CbozHK38jDc",
  "t6isux5XWH0",
  "YPP4uUtofdc",
  "8SIiGo3TVKE",
  "G1IbRujko-A",
  "V7HdWeYbV3Q",
  "jIQ6UV2onyI",
  "CRkzItBabzs",
  "VZTnBXAwuUA",
  "tvkxupwbFLk",
  "BTodGJB1ckA",
  "WIRK_pGdIdA",
  "-cLpZKVH07w",
  "hUkJ8X09xGs",
  "4t7BgyA7IOI",
  "GzIVP78XY9k",
  "RmZzde_78U8",
  "XU_P65xT1q8",
  "cuIKTk_DO4A",
  "466L9ERSMgk",
  "TJ-CmAwaIkU",
];
const defaulTitle = [
  "dasRAINBOWs Website!",
  "d@sRAINBOWs Website!",
  "d@sRAINB0Ws Website!",
  "d@sRA|NB0Ws Website!",
  "dẞRA|NB0Ws Website!",
  "dẞRA|µBWs Website!",
  "dẞRΔµBWs Website!",
  "dRΔµBWs W€bsite!",
  "dRΔBWs W€bsite!",
  "dRBWs W€bsite!",
  "dRBWs Wbsite!",
];
const titleAnims = [
  [
    "ᗧ···ᗣ··········ᗣ·",
    "ᗧ··ᗣ········ᗣ····",
    "ᗧᗣ········ᗣ······",
    "ᗧ······ᗣ·······ᗣ·",
    "ᗧ···ᗣ·········ᗣ··",
    "ᗧ··ᗣ········ᗣ···",
    "ᗧ·ᗣ·······ᗣ······",
    "ᗧᗣ·····ᗣ·········",
    "ᗧ···ᗣ···········ᗣ",
    "ᗧᗣ·············ᗣ·",
    "ᗧ·············ᗣ·ᗣ",
    "ᗧ··········ᗣ·ᗣ···",
    "ᗧ······ᗣ··ᗣ······",
    "ᗧ··ᗣ····ᗣ········",
    "ᗧ·····ᗣ·········ᗣ",
  ],
  [
    "~\\o/~~~~~~",
    "~\\o/~~~~~/",
    "~\\o/~~~~/\\",
    "~\\o/~~~/\\~",
    "~\\o/~~/\\~~",
    "~\\o/~/\\~~~",
    "~\\o/~~/\\~~",
    "~\\o/~~~/\\~",
    "~\\o/~~~~/\\",
    "~\\o/~~~~~/",
    "~\\o/~~~~~~",
  ],
  [
    "­><(((`>",
    "­ ><(((`>",
    "­  ><(((`>",
    "­   ><(((`>",
    "­    ><(((`>",
    "­    <´)))><",
    "­   <´)))><",
    "­  <´)))><",
    "­ <´)))><",
    "­<´)))><",
  ],
  [
    "­~~(__^>",
    "­  ~~(__^>",
    "­    ~~(__^>",
    "­     ~~(__^>",
    "­      ~~(__^>",
    "­      <^__)~~",
    "­     <^__)~~",
    "­    <^__)~~",
    "­  <^__)~~",
    "­<^__)~~",
  ],
  [
    "\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,-'",
    "-._,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`",
    "_,-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-.",
    "-'\"`-._,-'\"`-._,-'\"`-._,-'\"`-._,",
  ],
  [
    "­~~~(Ɛ:>",
    "­  ~~~(Ɛ:>",
    "­    ~~~(Ɛ:>",
    "­      ~~~(Ɛ:>",
    "­        ~~~(Ɛ:>",
    "­        <:3)~~~",
    "­      <:3)~~~",
    "­    <:3)~~~",
    "­  <:3)~~~",
    "­<:3)~~~",
  ],
  [
    ".＿＿(ツ)＿＿.",
    "·⎯＿(ツ)＿⎯·",
    "­ ˙\\＿(ツ)＿/˙",
    "·⎯＿(ツ)＿⎯·",
    ".＿＿(ツ)＿＿.",
  ],
];
const audioIntro = [
  "./media/audio/based.mp3",
  "./media/audio/youreTellingMe.mp3",
  "./media/audio/radioactive.mp3",
  "./media/audio/apartmentComplex.mp3",
  "./media/audio/theBirdFlu.mp3",
  "./media/audio/whatsUpStairs.mp3",
  "./media/audio/chefsKiss.mp3",
];
const audioOutro = [
  "./media/audio/basedOnWhat.mp3",
  "./media/audio/gingerBreadThisMan.mp3",
  "./media/audio/radioIsOn.mp3",
  "./media/audio/simpleForMe.mp3",
  "./media/audio/theyTendTo.mp3",
  "./media/audio/theyCantTalk.mp3",
  "./media/audio/doTheyReally.mp3",
];
let animState = false;
let activeSpin = false;
let spinSteps = [750, 1000, 1500, 2000];
let spinCounter = 0;
let excitedInterval;
let animInterval;
let currentCode;
let currentAudio;
let spinAudioNum;
let spinIntro;
let spinOutro;
let allow = true;

document
  .getElementById("titleAnimToggleBtn")
  .addEventListener("click", animToggle);
window.addEventListener("load", () => {
  animTitle(defaulTitle, true);
});
document.getElementById("videoSlotsBtn").addEventListener("mouseenter", () => {
  excitedAnimToggle(true);
});
document.getElementById("videoSlotsBtn").addEventListener("mouseleave", () => {
  excitedAnimToggle(false);
});
document.getElementById("videoSlotsBtn").addEventListener("click", () => {
  excitedAnimToggle(false);
  toggleSpin();
});
document
  .getElementById("videoSlotsText")
  .addEventListener("animationend", decreaseSpin);

document.getElementById("based").addEventListener("mouseenter", () => {
  playBased(true);
});
document.getElementById("based").addEventListener("mouseleave", () => {
  playBased(false);
});

function animTitle(currentAnim, single) {
  let i = 0;
  let animInterval = setInterval(() => {
    if (i < currentAnim.length - 1) {
      document.title = currentAnim[i];
      i++;
    } else {
      document.title = currentAnim[i];
      i = 0;
      if (single) {
        clearInterval(animInterval);
      }
    }
  }, 250);
  return animInterval;
}

function animToggle() {
  if (animState) {
    clearInterval(animInterval);
    animState = false;
    animTitle(defaulTitle, true);
  } else {
    animState = true;
    animInterval = animTitle(
      titleAnims[Math.floor(Math.random() * titleAnims.length)],
      false,
    );
  }
}

function excitedAnimToggle(run) {
  if (run) {
    excitedInterval = setInterval(() => {
      document.getElementById("videoSlotsBtn").style.transform =
        `translateX(-50%) translate(${Math.round(Math.random() * 4 - 2).toString() + "%"}, ${Math.round(Math.random() * 6 - 3).toString() + "%"})`;
    }, 50);
  } else {
    try {
      clearInterval(excitedInterval);
    } catch {
      console.log("excited anim already stopped.");
    }
    document.getElementById("videoSlotsBtn").style.transform =
      `translateX(-50%)`;
  }
}

function toggleSpin() {
  if (!activeSpin) {
    activeSpin = true;
    spinAudioNum = Math.floor(Math.random() * audioIntro.length);
    spinIntro = new Audio(audioIntro[spinAudioNum]);
    spinIntro.play();
    document.getElementById("videoSlotsText").style.animation = ``;
    void document.getElementById("videoSlotsText").offsetWidth;
    document.getElementById("videoSlotsText").innerHTML =
      `${codes[Math.floor(Math.random() * codes.length)]}`;
    document.getElementById("videoSlotsText").style.animationName = `spinAnim`;
    document.getElementById("videoSlotsText").style.animationDuration = `500ms`;
    document.getElementById("videoSlotsText").style.animationTimingFunction =
      `linear`;
    setTimeout(() => {
      document.getElementById("videoSlotsText").innerHTML =
        `${codes[Math.floor(Math.random() * codes.length)]}`;
    }, 250);
  }
}

function decreaseSpin() {
  document.getElementById("videoSlotsText").style.animation = ``;
  void document.getElementById("videoSlotsText").offsetWidth;
  if (spinCounter < spinSteps.length) {
    document.getElementById("videoSlotsText").style.animationName = `spinAnim`;
    document.getElementById("videoSlotsText").style.animationDuration =
      `${spinSteps[spinCounter].toString()}ms`;
    document.getElementById("videoSlotsText").style.animationTimingFunction =
      `linear`;
    setTimeout(() => {
      currentCode = codes[Math.floor(Math.random() * codes.length)];
      document.getElementById("videoSlotsText").innerHTML = currentCode;
    }, spinSteps[spinCounter] / 2);
    spinCounter++;
  } else {
    spinCounter = 0;
    activeSpin = false;
    spinOutro = new Audio(audioOutro[spinAudioNum]);
    addSpinAudioEventListener();
    spinOutro.play();
  }
}

function playBased(run) {
  if (run) {
    currentAudio = new Audio("./media/audio/based.mp3");
    currentAudio.play();
  } else {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

function addSpinAudioEventListener() {
  if (allow) {
    spinOutro.addEventListener("ended", () => {
      window.location.replace("https://youtu.be/" + currentCode);
    });
    allow = false;
  }
}
