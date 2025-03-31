import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
  static targets = ["card"];
  static values = {
    theme: { type: String, default: "light" },
  };

  switch(event) {
    event.preventDefault();

    console.log("Switching theme...");
    console.log("Current theme: " + this.themeValue);

    if (this.themeValue === "light") {
      this.themeValue = "dark";
    } else {
      this.themeValue = "light";
    }
  }

  themeValueChanged() {
    console.log("Theme changed to: " + this.themeValue);
    if (this.themeValue === "dark") {
      this.cardTargets.forEach((card) => {
        card.classList.replace("bg-white", "bg-gray-900");
        card.classList.replace("text-gray-900", "text-gray-100");
      });
    } else {
      this.cardTargets.forEach((card) => {
        card.classList.replace("bg-gray-900", "bg-white");
        card.classList.replace("text-gray-100", "text-gray-900");
      });
    }
  }
}
