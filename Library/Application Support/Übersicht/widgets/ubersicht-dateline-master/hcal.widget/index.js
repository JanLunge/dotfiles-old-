command: "echo Hello World!",

refreshFrequency: 5000,

render: function () {
  return "<div class=\"cal-container\">\
  <div class=\"title\"></div>\
  <table>\
  <tr class=\"weekday\"></tr>\
  <tr class=\"midline\"></tr>\
  <tr class=\"date\"></tr>\
  </table>\
  </div>";
},

style: "                              \n\
  bottom: 2px                        \n\
  left: 2px                          \n\
  position: absolute                         \n\
  font-family: Helvetica Neue         \n\
  font-size: 9px                     \n\
  font-weight: 500                    \n\
  color: #fff                         \n\
  -webkit-font-smoothing: antialiased\n\
  //perspective: 1000px\n\
                                      \n\
  .cal-container                      \n\
    border-radius: 10px               \n\
    //background: rgba(#000, 0.3)       \n\
    padding: 4px                     \n\
                                      \n\
  .title                              \n\
    color: rgba(#fff, .3)             \n\
    text-align: center             \n\
    display:block             \n\
    width: 35px             \n\
    font-size: 14px                   \n\
    font-weight: 500                  \n\
    padding-bottom: 5px               \n\
    text-transform uppercase          \n\
    position: relative          \n\
    left: 4px          \n\
    top: 36px          \n\
                                      \n\
  table                               \n\
    border-collapse: collapse         \n\
    left: 50px         \n\
    top: -3px         \n\
    position:relative         \n\
    font-size: 11px\n\
                                      \n\
  td                                  \n\
    padding-left: 4px                 \n\
    padding-right: 4px                \n\
    text-align: center                \n\
                                      \n\
  .weekday td                         \n\
    padding-top: 3px                  \n\
                                      \n\
  .date td                            \n\
    padding-bottom: 3px               \n\
                                      \n\
  .today, .off-today                  \n\
    background: rgba(#fff, 0.4)       \n\
    color:black       \n\
    font-weight:bold       \n\
    @keyframes wobble {    \n\
      0% {\n\
        transform: rotateY(0deg)\n\
      } \n\
      25% {\n\
        transform: rotateY(40deg)\n\
      }\n\
      50% {\n\
        transform: rotateY(0deg)\n\
      }\n\
      75% {\n\
        transform: rotateY(-40deg)\n\
      }\n\
      100% {\n\
        transform: rotateY(0deg)\n\
      }\n\
    }          \n\
    //animation-name: wobble\n\
    animation-duration: 3s\n\
    animation-iteration-count: infinite\n\
    animation-direction: alternate\n\
    animation-timing-function: ease\n\
  .weekday .today,                    \n\
  .weekday .off-today                 \n\
    border-radius: 3px 3px 0 0        \n\
                                      \n\
  .date .today,                       \n\
  .date .off-today                    \n\
    border-radius: 0 0 3px 3px        \n\
                                      \n\
  .midline                            \n\
    height: 5px                       \n\
    //background: rgba(#fff, .5)        \n\
                                      \n\
  .midline .today, .today                     \n\
    background: rgba(#ff5555, .8)        \n\
                                      \n\
  .midline .offday                    \n\
    background: rgba(#fff, .1)        \n\
                                      \n\
  .midline .ordinary                 \n\
    background: rgba(#fff, .5)        \n\
                                      \n\
  .offday, .off-today                 \n\
    color: rgba(#ff5555, 1)              \n\
",

update: function (output, domEl) {

  var days = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  var monthsold = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var offdayIndices = [0, 6];

  var date = new Date(), y = date.getFullYear(), m = date.getMonth();
  var today = date.getDate();
  var firstWeekDay = new Date(y, m, 1).getDay();
  var lastDate = new Date(y, m + 1, 0).getDate();
  var weekdays = "", midlines = "", dates = "";

  for (var i = 1, w = firstWeekDay; i <= lastDate; i++, w++) {
    w %= 7;
    var isToday = i == today, isOffday = offdayIndices.indexOf(w) != -1;
    var className = "ordinary";
    if(isToday && isOffday) className = "off-today";
    else if(isToday) className = "today";
    else if(isOffday) className = "offday";

    weekdays += "<td class=\""+className+"\">" + days[w] + "</td>";
    midlines += "<td class=\""+className+"\"></td>";
    dates += "<td class=\""+className+"\">" + i + "</td>";
  };

  $(domEl).find(".title").html(months[date.getMonth()]+"<br> "+date.getFullYear());
  $(domEl).find(".weekday").html(weekdays);
  $(domEl).find(".midline").html(midlines);
  $(domEl).find(".date").html(dates);
}