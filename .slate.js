// Configs
S.cfga({
  "defaultToCurrentScreen": true,
  "secondsBetweenRepeat": 0.1,
  "checkDefaultsOnLoad": true,
  "focusCheckWidthMax": 3000,
  "orderScreensLeftToRight": true
});

// Monitors
var monBook = "1680x1050";
var monVert = "1080x1920";
var monWide = "1920x1080";
var metakey = "ctrl;shift;alt";
var hyperkey = "cmd;ctrl;shift;alt";


// Operations

var rightHalf = S.op("move", {
  "x": "screenOriginX+(screenSizeX/2)",
  "y": "screenOriginY",
  "width": "screenSizeX/2",
  "height": "screenSizeY-65"
});
var leftHalf = S.op("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX/2",
  "height": "screenSizeY-65"
});
var bookFull = S.op("move", {
  "screen": monBook,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY-65"
});
var monFull = S.op("move", {
  "screen": 0,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY-65"
});
var monLFull = monFull.dup(
  {
    "screen": 0
  }
);
var monMFull = monFull.dup(
  {
    "screen": 1
  }
);
var monRFull = monFull.dup(
  {
    "screen": 2
  }
);
var bookRightHalf = bookFull.dup(
  {
    "x": "screenOriginX+(screenSizeX/2)",
    "width": "screenSizeX/2"
  }
);
var bookRightThird = bookFull.dup(
  {
    "x": "screenOriginX+(screenSizeX*2/3)",
    "width": "screenSizeX/3"
  }
);
var bookLeftTwoThirds = bookFull.dup(
  {
    "width": "screenSizeX/3*2"
  }
);
var vertFull = S.op("move", {
  "screen": monVert,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY-65"
});
var wideFull = S.op("move", {
  "screen": monWide,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY-65"
});
var wideCenter = S.op("move", {
  "screen": monWide,
  "x": "screenOriginX+screenSizeX/6",
  "y": "screenOriginY+screenSizeY/6",
  "width": "screenSizeX/6*4",
  "height": "screenSizeY/6*4"
});
var wideLeftHalf = S.op("move", {
  "screen": monWide,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX/2",
  "height": "screenSizeY-65"
});
var mid = S.op("move", {
  "screen": monBook,
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX/2",
  "height": "(screenSizeY/2)-65"
});
var maximize = S.op("move", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY-65"
});
var genBrowserHash = function (regex) {
  return {
    "operations": [function (windowObject) {
      var title = windowObject.title();
      if (title !== undefined && title.match(/^Developer\sTools\s-\s.+$/)) {
        //chrome dev window
        windowObject.doOperation(bookRightHalf);
      } else if (title !== undefined && title.match(/^Firebug\s-\s.+$/)) {
        //firefox dev window
        windowObject.doOperation(bookRightHalf);
      } else if (title !== undefined && title.match(/.+Google\sPlay\sMusic/)) {
        //google play music
        windowObject.doOperation(bookFull);
      } else {
        //normal windows
        windowObject.doOperation(wideFull);

      }
    }],
    "ignore-fail": true,
    "repeat": true
  };
}
//focus
var focusChrome = slate.operation("focus", {
  "app": "Google Chrome"
});
var focusTelegram = slate.operation("focus", {
  "app": "Telegram"
});
var twoMonitorLayout = S.lay("twoMonitor", {
  "iTerm": wideFull,
  "Google Chrome": genBrowserHash(),
  "Firefox": genBrowserHash(),
  "Safari": wideFull,
  "PhpStorm": {
    "operations": [vertFull],
    "repeat": true
  },
  "Telegram": {
    "operations": [bookRightThird],
    "repeat": true
  },
  "Slack": {
    "operations": [bookLeftTwoThirds],
    "repeat": true
  },
  "Calendar": {
    "operations": [bookFull],
    "repeat": true
  },
  "Mail": {
    "operations": [bookFull],
    "repeat": true
  },
  "Sourcetree": {
    "operations": [bookFull],
    "repeat": true
  },
});
var twoMonitor = S.op("layout", { "name": twoMonitorLayout });
// Batch bind everything. Less typing.
S.bnda({
  //external hotkeypad
  "pad1": bookFull,
  "pad2": wideFull,
  "pad3": vertFull,
  "pad4": leftHalf,
  "pad5": wideCenter,
  "pad6": rightHalf,
  "pad0": twoMonitor,
  "pad8": twoMonitor,
  "pad7": maximize,
  "pad9": S.op("focus", { "direction": "behind" }),
  "pad.": S.op("focus", { "direction": "behind" }),

  //moving windows 
  //left half keyboard
  "v:alt;shift;ctrl": monLFull,
  "l:alt;shift;ctrl": monMFull,
  "c:alt;shift;ctrl": monRFull,

  "u:alt;shift;ctrl": S.op("focus", { "direction": "behind" }),
  "i:alt;shift;ctrl": leftHalf,
  "a:alt;shift;ctrl": maximize,
  "e:alt;shift;ctrl": rightHalf,

  "p:alt;shift;ctrl": twoMonitor,



  //focus apps
  //right half
  "r:alt;shift;ctrl": S.op("focus", { "app": "PhpStorm" }),
  "n:alt;shift;ctrl": S.op("focus", { "app": "Google Chrome" }),
  "t:alt;shift;ctrl": S.op("focus", { "app": "Telegram" }),
  "d:alt;shift;ctrl": S.op("focus", { "app": "Sourcetree" }),
  "m:alt;shift;ctrl": S.op("focus", { "app": "Firefox" }),
  "f:alt;shift;ctrl": S.op("focus", { "app": "Slack" }),
  "q:alt;shift;ctrl": S.op("focus", { "app": "Fantastical 2" }),
  "b:alt;shift;ctrl": S.op("focus", { "app": "Mail" }),

  // "h:alt;shift;ctrl": S.op("hide", {"app": "current"}),

});
