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
// Kovalev script
function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            function myFunction() {
                (async () => {
                    let response = await fetch('https://kav-api.kovalev.team/servodrive/lastActualData?servoDriveId=1');
                    let el = document.getElementById('demo')
                    el.innerHTML = ""
                    let text = await response.text(); // прочитать тело ответа как текст
                    for (const [key, value] of Object.entries(JSON.parse(text)[0])) {
                        const newEl = document.createElement("li")
                        newEl.appendChild(document.createTextNode(`${key}: ${value}`))
                        el.appendChild(newEl)
                        await sleep(100)
                    }
                })()
            }
