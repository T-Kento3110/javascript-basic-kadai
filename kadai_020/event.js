// idをもつHTML要素を取得(btn,text)
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素がクリックされたときにテキストを変更
btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});