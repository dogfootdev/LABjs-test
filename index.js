var startTime = new Date().getTime();
console.log('index start : ' + (new Date().getTime() - startTime));
$LAB
  .script('emailBaseModule.js')
  .wait(function () {
    console.log('emailBaseModule : ' + (new Date().getTime() - startTime));
  })
  .script('emailListModule.js')
  .wait(function () {
    console.log('emailListModule : ' + (new Date().getTime() - startTime));
  })
  .script('https://code.jquery.com/ui/1.12.1/jquery-ui.js')
  .wait(function () {
    console.log('jquery : ' + (new Date().getTime() - startTime));
  })
  .script('emailComposerModule.js')
  .wait(function () {
    console.log('emailComposerModule: ' + (new Date().getTime() - startTime));
  });

console.log('index end : ' + (new Date().getTime() - startTime));
