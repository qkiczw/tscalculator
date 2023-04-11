const button: HTMLElement | null = document.querySelector("#count");

if (button !== null) {
  if (button instanceof HTMLButtonElement) {
    button.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
      console.log("Cliked!!!");
    });
  } else {
    throw new Error("Html Element is not a button");
  }
} else {
  throw new Error("Button for exchange not found!");
}
