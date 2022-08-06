export let cheatCode;
export let startingHealth;
export let mHealth;
export let pHealth;
export let pBonesLife = 1;

export function startGame() {
  startingHealth = promtUser();
  if (startingHealth === 'wolfMan') {
    cheatCode = 1000;
    startingHealth = 45;
    mHealth = startingHealth;
    pHealth = startingHealth + cheatCode;
  } else if (!isNaN(startingHealth)) {
    cheatCode = 0;
    mHealth = startingHealth;
    pHealth = startingHealth + cheatCode;
  }
}
