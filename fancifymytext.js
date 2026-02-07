"use strict";

function makeBigger() {
  // alert when button pressed
  alert("Hello, world!");

  // make bigger text button
  document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
  // call alert for font
  alert("Font Changed!");

  const textArea = document.getElementById("textInput");

  if (document.getElementById("fancy").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  const textArea = document.getElementById("textInput");
  const original = textArea.value;

  const endsWithPeriod = original.trim().endsWith(".");
  const fragments = original.split(".");

  for (let i = 0; i < fragments.length; i++) {
    let s = fragments[i].trim();
    if (s.length === 0) {
      fragments[i] = ""; 
      continue;
    }

    s = s.toUpperCase();

    const words = s.split(/\s+/);
    words[words.length - 1] = words[words.length - 1] + "-Moo"; // literal suffix

    fragments[i] = words.join(" ");
  }

  const nonEmpty = fragments.filter((f) => f !== "");
  let result = nonEmpty.join(". ");
  if (endsWithPeriod) result += ".";

  textArea.value = result;
}


