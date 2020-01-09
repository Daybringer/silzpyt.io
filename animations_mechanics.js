// Main
window.onload = function() {
  // Mechanics

  // Canon ball
  let canon = new Snap("#canon");
  Snap.load("./svg/canon_ball.svg", function(f) {
    let canon_ball = f.select("#canon_move");
    let svg_group = f.select("#mySvg");
    canon_ball.attr({ transform: "translate(-67.061097,7.527266)" });
    svg_group.hover(
      function() {
        canon_ball.animate({ transform: "translate(100,-15)" }, 1000);
      },
      function() {
        canon_ball.animate({ transform: "translate(-67.061097,7.527266)" }, 1000);
      },
      mina.ease
    );
    canon.append(f);
  });

  // Rocket and Earth
  let rocket_earth = new Snap("#rocket_earth");
  Snap.load("./svg/rocket_and_earth.svg", function(f) {
    rocket_earth.append(f);
  });

  // Under construction
  let foo = new Snap("#foo");
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
    foo.append(f);
  });

  let bar = new Snap("#bar");
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
    bar.append(f);
  });

  let biz = new Snap("#biz");
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
    biz.append(f);
  });

  let bin = new Snap("#bin");
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
    bin.append(f);
  });
};
