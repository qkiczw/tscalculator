const button: HTMLElement | null = document.querySelector("#count");

initEventListener();

function initEventListener() {
  if (button !== null) {
    if (button instanceof HTMLButtonElement) {
      button.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        // getTempGoldCoins();
        // getTempSilverCoins();
        // getTempCooperCoins();

        console.log(
          `values: ${getTempGoldCoins()}, ${getTempSilverCoins()}, ${getTempCooperCoins()}`
        );
      });
    } else {
      throw new Error("Html Element is not a button");
    }
  } else {
    throw new Error("Button for exchange not found!");
  }
}

function getTempGoldCoins(): number {
  const goldCoins: HTMLElement | null = document.querySelector("#gold-coins");
  if (goldCoins !== null && goldCoins instanceof HTMLInputElement) {
    return goldCoins.valueAsNumber;
  } else {
    throw new Error("Html Element is null or wrong");
  }
}

function getTempSilverCoins(): number {
  const silverCoins: HTMLElement | null =
    document.querySelector("#silver-coins");
  if (silverCoins !== null && silverCoins instanceof HTMLInputElement) {
    return silverCoins.valueAsNumber;
  } else {
    throw new Error("Html Element is null or wrong");
  }
}

function getTempCooperCoins(): number {
  const copperCoins: HTMLElement | null =
    document.querySelector("#copper-coins");
  if (copperCoins !== null && copperCoins instanceof HTMLInputElement) {
    return copperCoins.valueAsNumber;
  } else {
    throw new Error("Html Element is null or wrong");
  }
}
