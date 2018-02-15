// Configs
S.cfga({
  "defaultToCurrentScreen": true,
  "secondsBetweenRepeat": 0.1,
  "checkDefaultsOnLoad": true,
  "focusCheckWidthMax": 3000,
  "orderScreensLeftToRight": true
});

// Monitors
var monBook = "1440x900";
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
var twoMonitor = S.op("layout", {"name": twoMonitorLayout});
// Batch bind everything. Less typing.
S.bnda({
  "1:ctrl;shift;alt": bookFull,
  "2:ctrl;shift;alt": wideFull,
  "3:ctrl;shift;alt": vertFull,

  "4:ctrl;shift;alt": twoMonitor,

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
  "pad9": S.op("focus", {"direction": "behind"}),
  "pad.": S.op("focus", {"direction": "behind"}),

  //moving windows
  "c:alt;shift;ctrl": S.op("focus", {"direction": "behind"}),
  "v:alt;shift;ctrl": maximize,
  "l:alt;shift;ctrl": twoMonitor,
  "i:alt;shift;ctrl": leftHalf,
  "e:alt;shift;ctrl": rightHalf,
  "a:alt;shift;ctrl": wideCenter,
  ";:alt;shift;ctrl": bookFull,
  "':alt;shift;ctrl": wideFull,
  "p:alt;shift;ctrl": vertFull,


  //focus apps
  //s - meta = iterm
  "c:alt;shift;ctrl": S.op("focus", {"direction": "behind"}),
  "r:alt;shift;ctrl": S.op("focus", {"app": "PhpStorm"}),
  "n:alt;shift;ctrl": S.op("focus", {"app": "Google Chrome"}),
  "t:alt;shift;ctrl": S.op("focus", {"app": "Telegram"}),
  "d:alt;shift;ctrl": S.op("focus", {"app": "Sourcetree"}),
  "m:alt;shift;ctrl": S.op("focus", {"app": "Safari"}),
  "f:alt;shift;ctrl": S.op("focus", {"app": "Slack"}),
  "q:alt;shift;ctrl": S.op("focus", {"app": "Calendar"}),
  "b:alt;shift;ctrl": S.op("focus", {"app": "Mail"}),

  // "h:alt;shift;ctrl": S.op("hide", {"app": "current"}),

});
