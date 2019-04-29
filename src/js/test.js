var app = new Framework7();

var $$ = Dom7;

// DOM events for About popover
$$('.popover-about').on('popover:open', function (e, popover) {
  console.log('About popover open');
});
$$('.popover-about').on('popover:opened', function (e, popover) {
  console.log('About popover opened');
});