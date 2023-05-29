window.addEventListener('load', function() {
  var modal = document.createElement('div');
  modal.className = 'modal';

  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = '<p>Wheatley: Скажи "Яблоко"</p><button id="jumpButton">прыгнуть</button>';
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  var jumpButton = document.getElementById('jumpButton');
  jumpButton.addEventListener('click', function() {
    modal.style.display = 'none';
    alert('Wheatley: ты прыгнул... Не знаю зачем.');
  });
  modal.style.display = 'block';
});
