window.addEventListener('DOMContentLoaded', () => {
  const popupTrigger = document.getElementById('popupTrigger');
  const popupOverlay = document.getElementById('popupOverlay');
  const popupContent = document.querySelector('.popup-content');

  popupTrigger.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
    renderInitialPopup();
  });

  function renderInitialPopup() {
    popupContent.innerHTML = `
      <p class="popup-text">ご確認いただいた注意事項に同意しますか？</p>
      <div class="popup-buttons">
        <button id="agreeButton" class="agree-button">同意する</button>
        <button id="disagreeButton" class="disagree-button">同意しない</button>
      </div>
    `;

    document.getElementById('agreeButton').addEventListener('click', () => {
      renderConfirmation();
    });

    document.getElementById('disagreeButton').addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
  }

  function renderConfirmation() {
    popupContent.innerHTML = `
      <p class="popup-text">✅ 同意ありがとうございます！以下にご連絡ください。<br>DiscordID myenro_vtuber</p>
      <button id="closeButton">閉じる</button>
    `;

    document.getElementById('closeButton').addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
  }
});

