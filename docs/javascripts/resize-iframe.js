window.addEventListener(
  'message',
  (e) => {
    if (!e.data || !e.data.id || isNaN(e.data.height)) return;

    document.querySelector(`iframe[id="${e.data.id}"]`).style.height =
      e.data.height + 2 + 'px';
  },
  false
);