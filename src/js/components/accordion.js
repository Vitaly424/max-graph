import HandyCollapse from 'handy-collapse';

const offerAccrodion = new HandyCollapse({
   nameSpace: "offer",
   activeClass: "is-active",
   closeOthers: true
});

offerAccrodion.open('content-1');