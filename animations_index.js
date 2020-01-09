// Main
window.onload = function() {
  // Mechanics

  let mecha = new Snap("#mechanics");

  Snap.load("./svg/mechanics.svg", function(f) {
    let rocket = f.select("#rocket");
    let svg_group = f.select("#mysvg");
    let left_rope = f.select("#left_rope");
    let right_rope = f.select("#right_rope");
    let left_arrow = f.select("#left_arrow");

    rocket.attr({ transform: "translate(24.262324,-31.643695)" });
    left_rope.attr({ transform: "translate(0,0)" });
    left_arrow.attr({ transform: "translate(-27.096774,-7.8419356)" });
    right_rope.attr({ transform: "translate(0,0)" });

    svg_group.hover(
      function() {
        rocket.animate({ transform: "translate(24.262324,-300)" }, 1000);
        left_rope.animate({ transform: "translate(0,50)" }, 1000);
        right_rope.animate({ transform: "translate(0,-50)" }, 1000);
        left_arrow.animate({ transform: "translate(-27.096774,50)" }, 1000);
      },
      function() {
        rocket.animate({ transform: "translate(24.262324,-31.643695)" }, 1000);
        left_rope.animate({ transform: "translate(0,0)" }, 1000);
        right_rope.animate({ transform: "translate(0,0)" }, 1000);
        left_arrow.animate({ transform: "translate(-27.096774,-7.8419356)" }, 1000);
      }
    );
    // animateAlongPath(mypath, rocket, mypath.getPointAtLength(0), 100000);
    mecha.append(f);
  });

  function animateAlongPath(path, element, start, dur) {
    let len = Snap.path.getTotalLength(path);
    Snap.animate(
      start,
      len,
      function(value) {
        let movePoint = Snap.path.getPointAtLength(path, value);
        element.transform("t" + movePoint.x + "," + movePoint.y);
      },
      dur
    );
  }

  // Work in progress
  let optics = Snap("#optics");
  let thermics = Snap("#thermics");
  let electromagnetism = Snap("#electromagnetism");

  Snap.load("./svg/work_progress.svg", function(f) {
    let svg_group = f.select("#mySvg");
    let right_signal = f.select("#right_signal");
    let left_signal = f.select("#left_signal");
    let crane_platform = f.select("#crane_platform");

    crane_platform.attr({ transform: "translate(-84.077034,-12.166505)" });
    right_signal.attr({ opacity: "0" });
    left_signal.attr({ opacity: "0" });

    svg_group.hover(
      function() {
        crane_platform.animate({ transform: "translate(-84.077034,40)" }, 1000);
        let rand = Math.random();
        if (rand > 0.5) {
          loopAnimationFunctionLeft();
        } else {
          loopAnimationFunctionRight();
        }
      },
      function() {
        right_signal.stop();
        left_signal.stop();
        right_signal.attr({ opacity: "0" });
        left_signal.attr({ opacity: "0" });
        crane_platform.animate({ transform: "translate(-84.077034,-12.166505)" }, 1000);
      }
    );

    function loopAnimationFunctionRight() {
      right_signal.animate({ opacity: "1" }, 400, mina.elastic, function() {
        right_signal.attr({ opacity: "0" });
        loopAnimationFunctionLeft();
      });
    }

    function loopAnimationFunctionLeft() {
      left_signal.animate({ opacity: "1" }, 400, mina.elastic, function() {
        left_signal.attr({ opacity: "0" });
        loopAnimationFunctionRight();
      });
    }

    optics.append(f);
  });
  Snap.load("./svg/work_progress.svg", function(f) {
    let svg_group = f.select("#mySvg");
    let right_signal = f.select("#right_signal");
    let left_signal = f.select("#left_signal");
    let crane_platform = f.select("#crane_platform");

    crane_platform.attr({ transform: "translate(-84.077034,-12.166505)" });
    right_signal.attr({ opacity: "0" });
    left_signal.attr({ opacity: "0" });

    svg_group.hover(
      function() {
        crane_platform.animate({ transform: "translate(-84.077034,40)" }, 1000);
        let rand = Math.random();
        if (rand > 0.5) {
          loopAnimationFunctionLeft();
        } else {
          loopAnimationFunctionRight();
        }
      },
      function() {
        right_signal.stop();
        left_signal.stop();
        right_signal.attr({ opacity: "0" });
        left_signal.attr({ opacity: "0" });
        crane_platform.animate({ transform: "translate(-84.077034,-12.166505)" }, 1000);
      }
    );

    function loopAnimationFunctionRight() {
      right_signal.animate({ opacity: "1" }, 400, mina.elastic, function() {
        right_signal.attr({ opacity: "0" });
        loopAnimationFunctionLeft();
      });
    }

    function loopAnimationFunctionLeft() {
      left_signal.animate({ opacity: "1" }, 400, mina.elastic, function() {
        left_signal.attr({ opacity: "0" });
        loopAnimationFunctionRight();
      });
    }

    thermics.append(f);
  });
  Snap.load("./svg/work_progress.svg", function(f) {
    let svg_group = f.select("#mySvg");
    let right_signal = f.select("#right_signal");
    let left_signal = f.select("#left_signal");
    let crane_platform = f.select("#crane_platform");

    crane_platform.attr({ transform: "translate(-84.077034,-12.166505)" });
    right_signal.attr({ opacity: "0" });
    left_signal.attr({ opacity: "0" });

    svg_group.hover(
      function() {
        crane_platform.animate({ transform: "translate(-84.077034,40)" }, 1000);
        let rand = Math.random();
        if (rand > 0.5) {
          loopAnimationFunctionLeft();
        } else {
          loopAnimationFunctionRight();
        }
      },
      function() {
        right_signal.stop();
        left_signal.stop();
        right_signal.attr({ opacity: "0" });
        left_signal.attr({ opacity: "0" });
        crane_platform.animate({ transform: "translate(-84.077034,-12.166505)" }, 1000);
      }
    );

    function loopAnimationFunctionRight() {
      right_signal.animate({ opacity: "1" }, 400, mina.elastic, function() {
        right_signal.attr({ opacity: "0" });
        loopAnimationFunctionLeft();
      });
    }

    function loopAnimationFunctionLeft() {
      left_signal.animate({ opacity: "1" }, 400, mina.elastic, function() {
        left_signal.attr({ opacity: "0" });
        loopAnimationFunctionRight();
      });
    }

    electromagnetism.append(f);
  });
};
