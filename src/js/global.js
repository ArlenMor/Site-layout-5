console.log('global');

const bodySryles = window.getComputedStyle(document.body);
const gap = parseInt(bodySryles.getPropertyValue('--grid-gap'));
