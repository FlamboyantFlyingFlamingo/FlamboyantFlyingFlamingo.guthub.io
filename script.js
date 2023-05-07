// modalBox for UWIDS
const vpTag = document.getElementById('vp');
vpTag.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.addEventListener('click', () => {
    modal.remove();
  });

  const img = document.createElement('img');
  img.src = 'uwids.jpg';
  img.style.maxWidth = '80%';
  img.style.maxHeight = '80%';

  modal.appendChild(img);
  document.body.appendChild(modal);
});
