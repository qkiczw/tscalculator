const button: HTMLElement | null = document.querySelector("#count");
const goldCoins : HTMLElement | null = document.querySelector('#gold-coins');
const silverCoins : HTMLElement | null = document.querySelector('#silver-coins');
const copperCoins : HTMLElement | null = document.querySelector('#copper-coins');

// Temporary variables
let inputGoldValue : number;
let inputSilverValue : number;
let inputCopperValue : number;

if (button !== null) {
  if (button instanceof HTMLButtonElement) {
    button.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if(goldCoins !== null && goldCoins instanceof HTMLInputElement) {
            inputGoldValue = goldCoins.valueAsNumber;
        }
        if (silverCoins !== null && silverCoins instanceof HTMLInputElement) {
          inputSilverValue = silverCoins.valueAsNumber;
        }
        if (copperCoins !== null && copperCoins instanceof HTMLInputElement) {
          inputCopperValue = copperCoins.valueAsNumber;
        }

        console.log(`Input Values: gold - ${inputGoldValue}, silver - ${inputSilverValue}, copper - ${inputCopperValue}`);
    });
  } else {
    throw new Error("Html Element is not a button");
  }
} else {
  throw new Error("Button for exchange not found!");
}
