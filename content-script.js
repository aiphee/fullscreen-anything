(() => {
  let lastTarget;

  let mouseMoveEvent = (e) => {
    if (lastTarget) {
      lastTarget.style.outline = 'none';
    }

    lastTarget = e.originalTarget;

    lastTarget.style.outline = '2px dashed pink';

  };

  document.body.addEventListener('mousemove', mouseMoveEvent);

  let onClickEvent = e => {
    if (!lastTarget) {
      return;
    }
    e.preventDefault();
    lastTarget.requestFullscreen();
    document.body.removeEventListener('click', onClickEvent);
    document.body.removeEventListener('mousemove', mouseMoveEvent);
    lastTarget.style.outline = 'none';
  };

  document.body.addEventListener('click', onClickEvent);
})();
