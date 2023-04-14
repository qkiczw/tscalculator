import { Exchanger } from "./Exchanger";

const button: HTMLElement | null = document.querySelector("#count");
const result: HTMLElement | null = document.querySelector(".result");

initEventListener();

function initEventListener() {
  if (button !== null) {
    if (button instanceof HTMLButtonElement) {
      button.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();

        getCoins("copper");

        const exchange: Exchanger = new Exchanger(
          getCoins("gold"),
          getCoins("silver"),
          getCoins("copper")
        );

        if (result !== null && result instanceof HTMLElement) {
          result.innerHTML = `${exchange.allCoinsToCopper()}`;
        }
      });
    } else {
      throw new Error("Html Element is not a button");
    }
  } else {
    throw new Error("Button for exchange not found!");
  }
}

function getCoins(material: string): number {
  const coins: HTMLInputElement | null = document.querySelector(
    `#${material}-coins`
  );
  if (coins !== null && coins instanceof HTMLInputElement) {
    return coins.valueAsNumber;
  } else {
    throw new Error(`Input Element is null or wrong`);
  }
}
