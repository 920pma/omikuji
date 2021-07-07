//大吉・吉・中吉・小吉・末吉・凶・大凶
let kujis = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶'];
//console.log(kujis);

let kuji = Math.trunc(Math.random() * kujis.length);
//console.log(kuji);

// document.write('<p>あなたの今日の運勢は' + kujis[kuji] + 'です！<p>');

let buttonClick = () => {
  // target = document.getElementById('text').innerHTML = '<p>あなたの今日の運勢は' + kujis[kuji] + 'です！<p>';
  target = document.getElementById('text').textContent = 'あなたの今日の運勢は' + kujis[kuji] + 'です！';
};
