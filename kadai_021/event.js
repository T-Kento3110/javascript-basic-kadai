// HTML要素を取得する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンをクリックし2秒後に表示する文字を変更
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});