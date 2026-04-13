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
let animState = false;
let animInterval;

document.getElementById("titleDance").addEventListener("click", animToggle);
window.addEventListener("load", () => {
  animTitle(defaulTitle, true);
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

async function animToggle() {
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
