"use strict";

/*
Step checkpoint (initial):
alert("Hello, world!");

But the assignment then says to wrap it in a function and only run it
when clicking Bigger. So we do that below.
*/

function makeBigger() {
  // Step: alert only when Bigger is clicked
  alert("Hello, world!");

  // Step: make text bigger (24pt)
  document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyle() {
  // Step: onchange should call a function that pops an alert
  alert("Font Changed!");

  const textArea = document.getElementById("textInput");

  if (document.getElementById("fancy").checked) {
    // Step: bold
    textArea.style.fontWeight = "bold";
    // Step: blue
    textArea.style.color = "blue";
    // Step: underline
    textArea.style.textDecoration = "underline";
  } else {
    // BoringBetty: styles go away
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function mooText() {
  const textArea = document.getElementById("textInput");
  const original = textArea.value;

  // Split on '.' but keep track of whether the original ended with a period
  const endsWithPeriod = original.trim().endsWith(".");

  // Split into sentence fragments (may contain newlines)
  const fragments = original.split(".");

  for (let i = 0; i < fragments.length; i++) {
    let s = fragments[i].trim();
    if (s.length === 0) {
      fragments[i] = ""; // keep empty spots (will be ignored when reassembling)
      continue;
    }

    // Uppercase the sentence (you can change this if you want suffix uppercase too)
    s = s.toUpperCase();

    // Split into words and add suffix to last word
    const words = s.split(/\s+/);
    words[words.length - 1] = words[words.length - 1] + "-Moo"; // literal suffix

    // Rebuild the fragment
    fragments[i] = words.join(" ");
  }

  // Rejoin fragments with ". " and restore final period if original had it
  // Remove any empty trailing fragment added by split if original ended with dot
  const nonEmpty = fragments.filter((f) => f !== "");
  let result = nonEmpty.join(". ");
  if (endsWithPeriod) result += ".";

  textArea.value = result;
}

