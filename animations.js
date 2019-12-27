// Main
window.onload = function () {
  // Mechanics
  let mecha = Snap("#mechanics");

  Snap.load("./svg/mechanics.svg", function (f) {
    rocket = f.select("#rocket");
    svg_group = f.select("#mysvg");
    mecha.append(f);
  });
















  // Work in progress
  let optics = Snap("#optics");
  let thermics = Snap("#thermics");
  let electromagnetism = Snap("#electromagnetism");

  Snap.load("./svg/work_progress.svg", function (f) {
    optics.append(f);
  });
  Snap.load("./svg/work_progress.svg", function (f) {
    thermics.append(f);
  });
  Snap.load("./svg/work_progress.svg", function (f) {
    electromagnetism.append(f);
  });
};
