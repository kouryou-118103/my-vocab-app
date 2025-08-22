    let バージョン="2.05.2";
    let 正解回数 = 0;
    let 問題数 = 0;
    let 正解;
    let 表示語句範囲 = [];
    let 選択肢範囲 = [];
    let 出題語句ABC = [];
    let 選択肢ABC用 = [];
    let 範囲下 = 1;
    let 範囲上 = 1900;
    let 出題方向 = "en-ja";
    let numChoices = 4;
    let 次の問題タイマー;
    let autoNextInterval = 0;
    let 残り問題番号 = [];
    let ミス記録 = [];
    let 全結果 = [];
    let 入力モード = false;
    let 記録モード = false;
    let いやらしいモード = false;
    let フラッシュカード = false;
    let ゲーム中 = false;
    let ラウンド = 1;
    let 問題番号 = 0;
    let csv = ""

    let ABCnum = [];
    document.addEventListener("keydown", function(event) {
  let hintElement = document.getElementById('shortcut-hint');
  let active = document.activeElement;
  let modeToggle = document.getElementById("mode-toggle");
  if (event.key === 'd'){
    dark = !dark;
    document.body.classList.toggle('dark', dark);
    btn.textContent = dark ? '明るくする' : '暗くする';
    localStorage.setItem('darkMode', dark);    
  }
  if (event.key === '/' || event.key.toLowerCase() === 'h') {
    hintElement.style.display = 'block';
  }
  if (フラッシュカード && ゲーム中) {
  if (event.key === "1") {
    let meaning = document.getElementById("flashcard-meaning");
    if (meaning) meaning.style.display = 'block';
  }
  if (event.key === "2") {
    markKnown(問題番号);
  }
  if (event.key === "3") {
    let 表示語句 = document.querySelector("#quiz strong, #quiz p").textContent.trim();
    let 正解 = document.getElementById("flashcard-meaning")?.textContent.trim();
    markUnknown(問題番号);
  }
}

  if (event.key === "Escape") {
    if (linkDialog.classList.contains("show")) {
      closeDialog();
      return;
    }
    location.reload();
  }

  if (document.getElementById("settings").classList.contains("hidden") && event.key.toLowerCase() === "q"&& document.activeElement !== document.getElementById("userInput")) {
    if (confirm("終了しますか？")) {
      endQuiz();
    }
    return;
  }

  let quizDiv = document.getElementById("quiz");
  if (!quizDiv.innerHTML.trim()) return;

  if (event.key === "Enter" || event.key === " ") {
      if (フラッシュカード && !ゲーム中) {
    return;
    }
    if (active === modeToggle) {
      return;
    } else {
      let sendButton = document.querySelector("#quiz button");
      if (sendButton) if(ゲーム中){sendButton.click();}else{if (confirm("ホーム画面に戻ります。")){sendButton.click();}};
    }
  }

  let key = parseInt(event.key);
  if (!isNaN(key) && key >= 1 && key <= numChoices + 1) {
    let buttons = document.querySelectorAll("#quiz .option button");
    if (buttons[key - 1]) {
      buttons[key - 1].click();
    }
  }
});
document.addEventListener('keyup', (event) => {
    let hintElement = document.getElementById('shortcut-hint');
    if (event.key === '/' || event.key.toLowerCase() === 'h') {
        hintElement.style.display = 'none';
    }
});
document.addEventListener('click', () => {
    let hintElement = document.getElementById('shortcut-hint');
    hintElement.style.display = 'none';
});
  function onSettingsChanged() {
      let newUrl = generateShareableLink(false); // ← 関数の返り値を受け取る
      window.history.replaceState({}, '', newUrl); // ← URLだけを書き換える（リロードなし）
  }

  // イベントを登録する対象の要素たち
  let settingElements = [
    document.getElementById('direction'),
    document.getElementById('numChoices'),
    document.getElementById('rangeSelect'),
    document.getElementById('rangeLow'),
    document.getElementById('rangeHigh'),
    document.getElementById('recordMode'),
    document.getElementById('inputMode'),
    document.getElementById('evilMode'),
    document.getElementById('flashcard-mode'),
    document.getElementById('autoNextInterval')
  ];

  // それぞれにイベントリスナーを追加
  settingElements.forEach(el => {
    let eventType = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(eventType, onSettingsChanged);
  });
    
    function startQuiz() {
      ゲーム中 = true;
      let newUrl = generateShareableLink(); // ← 関数の返り値を受け取る
      window.history.replaceState({}, '', newUrl); // ← URLだけを書き換える（リロードなし）
      numChoices = parseInt(document.getElementById("numChoices").value);
      範囲下 = parseInt(document.getElementById("rangeLow").value)-1;
      範囲上 = parseInt(document.getElementById("rangeHigh").value);
      出題方向 = document.getElementById("direction").value;
      入力モード = document.getElementById("inputMode").checked;
      記録モード = document.getElementById("recordMode").checked;
      いやらしいモード = document.getElementById('evilMode').checked;
      フラッシュカード = document.getElementById("flashcard-mode").checked
      autoNextInterval = parseInt(document.getElementById("autoNextInterval").value);
      if (間違い日本語.length > 0 && 間違い日本語.length < numChoices){
        alert(`間違いの数が選択肢の数より少ないです(間違い${間違い日本語.length}件、選択肢${numChoices}件)。選択肢が生成できません。設定画面に戻ります。`)
        loadSettings();
        return;
      }
      if (入力モード) {
        出題方向 = "ja-en";
        document.getElementById("direction").value = "ja-en";
      }
if (間違い日本語.length === 0 && いやらしいモード) {
  出題語句ABC = ABCnum.slice(範囲下, 範囲上).sort((a, b) => a - b);
}

if (間違い日本語.length > 0 && いやらしいモード) {
  いやらしいモード = false;
  alert("CSVのデータを使用する場合は、いやらしいモードは使えません。いやらしいモードはオフになりました。");
}

if (間違い日本語.length > 0) {
  if (出題方向 === "en-ja") {
    表示語句範囲 = 間違い英単語;
    選択肢範囲 = 間違い日本語;
  } else {
    表示語句範囲 = 間違い日本語;
    選択肢範囲 = 間違い英単語;
  }
} else {
  if (出題方向 === "en-ja") {
    表示語句範囲 = 英語.slice(範囲下, 範囲上);
    選択肢範囲 = 日本語.slice(範囲下, 範囲上);
  } else {
    表示語句範囲 = 日本語.slice(範囲下, 範囲上);
    選択肢範囲 = 英語.slice(範囲下, 範囲上);
  }
}

// ← ここは if の外に出して OK！
残り問題番号 = [...Array(表示語句範囲.length).keys()];
shuffle(残り問題番号);

      正解回数 = 0;
      問題数 = 0;
      ミス記録 = [];
      全結果 = [];

      document.getElementById("settings").classList.add("hidden");
      document.getElementById("quiz").style.display = "block";

      showNextQuestion();
    }

    function showNextQuestion() {
      問題数++;
if (残り問題番号.length === 0) {
  if (フラッシュカード) {
    if (ミス記録.length > 0) {
      ラウンド++;
      ゲーム中 = false;
      document.getElementById("quiz").innerHTML =
        `<p style="font-size:1.5em; font-weight:bold;">
          ${ラウンド}周目、前回覚えていない単語: ${ミス記録.length}個
        </p>
        <button onclick="startNextRound()">開始</button>`;
      return;
    }
  }
  endQuiz();
  return;
}
     if (!フラッシュカード) {
        問題番号 = 残り問題番号.shift();
      } else {
        問題番号 = 残り問題番号[0];
      }
      let 表示語句 = 表示語句範囲[問題番号];
      正解 = 選択肢範囲[問題番号];
      if (document.getElementById("flashcard-mode").checked) {
      let totalCount = 表示語句範囲.length;
      let solvedCount = totalCount - 残り問題番号.length;
      let html = `<p>${escapeHTML(solvedCount)}/${escapeHTML(totalCount)}`;
html += `<p style="font-size: 2em; font-weight: bold; margin-bottom: 1.5em;">${escapeHTML(表示語句)}</p>`;
html += `<p id="flashcard-meaning" style="font-size: 1.5em; display:none; margin-bottom: 1.5em;">${escapeHTML(正解)}</p>`;

html += `<div style="margin-top: 1em; display: flex; flex-direction: row; gap: 1em; flex-wrap: wrap;">`;
html += `<button style="padding: 0.5em 1.2em; font-size: 1em;" onclick="document.getElementById('flashcard-meaning').style.display='block'">表示</button>`;
html += `<button style="padding:0.5em 1.2em;font-size:1em;" onclick="markKnown(${問題番号})">✅覚えた</button>`;
html += `<button style="padding:0.5em 1.2em;font-size:1em;" onclick="markUnknown(${問題番号})">❌わからない</button>`;
html += `</div>`;
  全結果.push("A")
  document.getElementById("quiz").innerHTML = html;
  return;
      }      
      let options = [正解];
      if (いやらしいモード){
        let index1900 = 英語.indexOf(正解) !== -1 ? 英語.indexOf(正解) : 日本語.indexOf(正解);
        let index = 出題語句ABC.indexOf(ABCnum[index1900])
        選択肢ABC用 = 出題語句ABC.slice(Math.max(0, Math.min(出題語句ABC.length - numChoices*2, index - Math.floor(numChoices))), Math.max(0, Math.min(出題語句ABC.length - numChoices*2, index - Math.floor(numChoices))) + numChoices*2);
        let choice;
        while (options.length < numChoices) {
        let randIndex = Math.floor(Math.random() * 選択肢ABC用.length);
        let abcIndex = ABCnum.indexOf(選択肢ABC用[randIndex]);

        if (出題方向 === "ja-en") {
          choice = 英語[abcIndex];
        } else {
          choice = 日本語[abcIndex];
        }
        if (!options.includes(choice)) {
          options.push(choice);
        }
      }      
      }else{
        while (options.length < numChoices) {
          let randIndex = Math.floor(Math.random() * 選択肢範囲.length);
          let choice = 選択肢範囲[randIndex];
          if (!options.includes(choice)) {
            options.push(choice);
          }
      }}
      
      shuffle(options);
      options.push("わからない");
      let 選択肢リスト = [`\n${問題数}問目\n`,`正解: [${options.indexOf(正解) + 1}] ${escapeHTML(正解)}\n`,"選択肢:\n"];
      for (let i = 0; i < numChoices; i++) {
        let en, ja, index, abc;
        if (出題方向 === "ja-en") {
          en = options[i];
          index = 英語.indexOf(en);
          ja = 日本語[index];
        } else {
          ja = options[i];
          index = 日本語.indexOf(ja);
          en = 英語[index];
        }
        abc = ABCnum[index];
        選択肢リスト.push(`${i + 1}: ${escapeHTML(en)} / ${escapeHTML(ja)}（問題番号: ${index + 1}, ABC順: ${abc}）\n`);
      }

      console.log(選択肢リスト.join(""))

      let html = "";

      if (入力モード && 出題方向 === "ja-en") {
  html += `<p><strong>${escapeHTML(表示語句)}</strong> を英語で？</p>`;
  html += `<div class="hint">ヒント：${正解.length}文字、最初の文字は「${正解[0]}」</div>`;
  html += `<input type="text" id="userInput" autofocus oninput="updateCharCount()" autocomplete="off">`;
  html += `<p id="charCount">現在の文字数: 0文字</p>`;
  html += `<button onclick="submitAnswer('${escapeHTML(表示語句)}', '${escapeHTML(正解)}', ${問題番号})">送信</button>`;      } else {
        html += `<p><strong>${escapeHTML(表示語句)}</strong> は${出題方向 === "en-ja" ? "日本語" : "英語"}で？</p>`;
        options.forEach((item, i) => {
          html += `<div class="option"><button onclick="checkAnswer('${escapeHTML(item)}', '${escapeHTML(正解)}', ${問題番号})">${i + 1}. ${escapeHTML(item)}</button></div>`;
        });
      }
      document.getElementById("quiz").innerHTML = html;
    }

    function submitAnswer(表示語句, 正解, 問題番号) {
      let userInput = document.getElementById("userInput").value.trim();
      let selected = userInput;
      let 正誤 = selected === 正解 ? "○" : "×";

      if (記録モード || 入力モード) {
        全結果.push(`${範囲下 + 問題番号 + 1},${escapeHTML(表示語句)},${escapeHTML(正解)},${escapeHTML(selected)},${正誤}`);
      }

let result = `<div class="result-block">`;

if (selected === 正解) {
  正解回数++;
  result += `<p class="correct">✅ 正解！</p>`;
  result += `<p class="question">${escapeHTML(表示語句)}<br>${escapeHTML(selected)}</p>`;
} else {
  let userLang = 日本語[英語.indexOf(selected)] ?? "不明";
  result += `<p class="incorrect">❌ 不正解</p>`;
  result += `<p class="question">${escapeHTML(表示語句)}<br>${escapeHTML(正解)}</p>`;
  result += `<p>${escapeHTML(userLang)}<br>${escapeHTML(selected)}</p>`;
  ミス記録.push({ 表示語句, 正解, あなたの答え: selected });
}

result += `<p>${問題数}問中${正解回数}問正解 (${Math.floor(正解回数 / 問題数 * 100)}%)</p>`;

if (autoNextInterval > 0) {
  setTimeout(showNextQuestion, autoNextInterval);
} else {
  result += `<button onclick="showNextQuestion()">次の問題へ</button>`;
}

result += `</div>`;
document.getElementById("quiz").innerHTML = result;
}

function checkAnswer(selected, answer, 問題番号) {
  let 表示語句 = 表示語句範囲[問題番号];
  let isCorrect = selected === answer;
  let 正誤 = isCorrect ? "○" : "×";

  if (記録モード) {
    全結果.push(`${範囲下 + 問題番号 + 1},${escapeHTML(表示語句)},${answer},${escapeHTML(selected)},${正誤}`);
  }

  let result = `<div class="result-block">`;
if (isCorrect) {
  正解回数++;
  result += `<p class="correct">✅ 正解！</p>`;
  result += `
    <p class="question">${escapeHTML(表示語句)}<br>${escapeHTML(selected)}</p>
  `;
} else {
  ミス記録.push({ 表示語句, 正解: answer, あなたの答え: selected });
  result += `<p class="incorrect">❌ 不正解</p>`;
  result += `<p class="question">${escapeHTML(表示語句)}<br>${answer}</p>`;

  if (出題方向 == "ja-en") {
    let en = 日本語[英語.indexOf(selected)];
    result += `<p>${escapeHTML(en)}<br>${escapeHTML(selected)}</p>`;
  } else {
    let ja = 英語[日本語.indexOf(selected)];
    result += `<p>${escapeHTML(ja)}<br>${escapeHTML(selected)}</p>`;
  }
}
  result += `<p class="progress">${問題数}問中${正解回数}問正解（${Math.floor(正解回数 / 問題数 * 100)}%）</p>`;

  if (autoNextInterval > 0) {
    setTimeout(showNextQuestion, autoNextInterval);
  } else {
    result += `<button class="next-btn" onclick="showNextQuestion()">次の問題へ</button>`;
  }

  result += `</div>`;
  document.getElementById("quiz").innerHTML = result;
}


    function endQuiz() {
      clearTimeout(次の問題タイマー);
      ゲーム中 = false;
      showResults();
    }

    function showResults(){
      let html= ``;
      if (フラッシュカード){
        html += `<h2>クイズ終了</h2><p>暗記完了！</p>`;  
      }else{
        html += `<h2>クイズ終了</h2><p>${問題数-1}問中${正解回数}問正解 (${Math.floor(正解回数 / (問題数-1) * 100)}%)</p>`;
      }
      if ((記録モード || 入力モード) && 全結果.length > 0) {
        html += `<h3>結果一覧:</h3>`;
        document.getElementById("resultCSV").classList.remove("hidden");
        let csv = "番号,出題語句,正解,あなたの答え,正誤\n" + 全結果.join("\n");
        document.getElementById("resultCSV").value = csv;
      } else {
        document.getElementById("resultCSV").value = "";
        document.getElementById("resultCSV").classList.add("hidden");
      }

      html += `<button onclick="location.reload()">再スタート</button>`;
      document.getElementById("quiz").innerHTML = html;
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    function updateCharCount() {
  let input = document.getElementById("userInput").value;
  document.getElementById("charCount").innerText = `現在の文字数: ${input.length}文字`;
}
function toggleUpdateLog() {
  let log = document.getElementById("updateLog");
  log.classList.toggle("hidden");

  // JSONを初めて読み込むときだけfetch
  let changelog = document.getElementById("changelog");
  if (!changelog.dataset.loaded) {
    fetch('https://kouryou-118103.github.io/my-vocab-app/data/updatelog.json')
      .then(res => {
        if (!res.ok) throw new Error("取得失敗");
        return res.json();
      })
      .then(data => {
let html = `<h2>新機能</h2><ul>
  <li><strong>${data.newFeature.version}（${data.newFeature.date}）</strong><br>・${data.newFeature.changes.join("<br>・")}</li>
</ul>
<details><summary>過去の更新を見る</summary><ul>`;
data.updates.forEach(u => {
  html += `<li><strong>${u.version}（${u.date}）</strong><br>・${u.changes.join("<br>・")}</li>`;
});
html += '</ul></details>';
changelog.innerHTML = html;
        changelog.dataset.loaded = "true";
      })
      .catch(err => {
        changelog.innerHTML = `<p>読み込みに失敗しました: ${err}</p>`;
      });
  }
}let observer = new MutationObserver(() => {
    let input = document.getElementById("userInput");
    if (input) input.focus();
  });

  observer.observe(document.body, { childList: true, subtree: true });
function getURLParams() {
  let params = new URLSearchParams(window.location.search);
  let encoded = params.get('data');
  if (encoded) {
    try {
      let base64 = decodeURIComponent(encoded); // 👈 これを入れる！
      let json = atob(base64);
      let obj = JSON.parse(json);
      if (obj.v && parseInt(obj.v) > 0) {
        return {
          direction: obj.d,
          numChoices: obj.n,
          rangeLow: obj.l,
          rangeHigh: obj.h,
          recordMode: obj.r == 1,
          inputMode: obj.i == 1,
          evilMode: obj.e == 1,
          flashcardMode: obj.f == 1,
          autoNextInterval: obj.a,
          バージョン: obj.v
        };
      }
    } catch (e) {
      console.error("デコードエラー:", e);
    }
  }
  return {};
}
function loadSettings() {
  setTimeout(() => {
  let urlParams = getURLParams();
  console.log("読み込まれたURLパラメータ:", urlParams);

  // 各項目：URLパラメータが優先
  document.getElementById("direction").value = urlParams.direction || "en-ja";
  document.getElementById("numChoices").value = urlParams.numChoices || 4;
  
  document.getElementById("rangeLow").value = urlParams.rangeLow || 1;
  document.getElementById("rangeHigh").value = urlParams.rangeHigh || 1900;

  document.getElementById("autoNextInterval").value = urlParams.autoNextInterval || 0;

  document.getElementById("recordMode").checked = urlParams.recordMode || false;
  document.getElementById("inputMode").checked = urlParams.inputMode || false;
  document.getElementById("evilMode").checked = urlParams.evilMode || false;
  document.getElementById("flashcard-mode").checked = urlParams.flashcardMode || false;
  document.getElementById("startButton").addEventListener("click", function() {
  startQuiz();     // クイズを開始
  },0);
});
}
window.addEventListener("load", function() {
  loadSettings();
});
document.getElementById('resetSettings').addEventListener('click', function() {
  if (confirm('設定を初期状態に戻しますか？OKを押したら自動で再読み込みします。')) {
    let cleanUrl = window.location.origin + window.location.pathname;
    window.location.href = cleanUrl;  }
});
function generateShareableLink(showUI = true) {
  let settings = {
    v: バージョン,
    d: document.getElementById("direction").value,
    n: document.getElementById("numChoices").value,
    l: document.getElementById("rangeLow").value,
    h: document.getElementById("rangeHigh").value,
    r: document.getElementById("recordMode").checked ? 1 : 0,
    i: document.getElementById("inputMode").checked ? 1 : 0,
    e: document.getElementById("evilMode").checked ? 1 : 0,
    f: document.getElementById("flashcard-mode").checked ? 1 : 0,
    a: document.getElementById("autoNextInterval").value
  };

  let json = JSON.stringify(settings);
  let base64 = btoa(json);
  let safe = encodeURIComponent(base64);
  console.log("base64:", base64);

  let baseUrl = location.origin + location.pathname;
  let fullUrl = `${baseUrl}?data=${safe}`;
  console.log("生成されたURL:", fullUrl);
  if (showUI) {
  let linkInput = document.getElementById("shareableLink");
  linkInput.value = fullUrl;
  linkInput.select();

  let dialog = document.getElementById("linkDialog");
  dialog.classList.add("show");}

  return fullUrl;
}
function copyLink() {
  let linkInput = document.getElementById("shareableLink");
  linkInput.select();
  linkInput.setSelectionRange(0, 99999); // モバイル対応

  try {
    setTimeout(function() {
    document.execCommand("copy");
    showToast(); 
    }, 500);
        setTimeout(function() {
    closeDialog();   
    }, 500);
  } catch (err) {
    alert("コピーできませんでした");
  }
}

function openLinkInNewTab() {
  let url = document.getElementById("shareableLink").value;
  toast.classList.remove("show");
  if (url) window.open(url, "_blank");
}
function closeDialog() {
  document.getElementById("linkDialog").classList.remove("show");
}

function showToast(message = "コピーしました！") {
  let toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500); // 1.5秒後に非表示
}
let rangeSelect = document.getElementById('rangeSelect');
let rangeLowInput = document.getElementById('rangeLow');
let rangeHighInput = document.getElementById('rangeHigh');

rangeSelect.addEventListener('change', () => {
  let selectedValue = rangeSelect.value; // 選択されたoptionのvalue属性の値を取得

  let ranges = selectedValue.split('-');
  let low = parseInt(ranges[0], 10);   // 範囲下を数値に変換
  let high = parseInt(ranges[1], 10);  // 範囲上を数値に変換

  rangeLowInput.value = low;
  rangeHighInput.value = high;
});

// 初期表示時に「全範囲」が選択されている状態にする場合
window.addEventListener('load', () => {
  let initialValue = rangeSelect.value;
  let initialRanges = initialValue.split('-');
  rangeLowInput.value = parseInt(initialRanges[0], 10);
  rangeHighInput.value = parseInt(initialRanges[1], 10);
});
  let btn = document.getElementById('mode-toggle');

  // 初期状態の取得
  let dark;

  let saved = localStorage.getItem('darkMode');
  if (saved !== null) {
    dark = saved === 'true'; // 文字列なので変換
  } else {
    // デバイスの設定に従う
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // 初期状態の適用
  document.body.classList.toggle('dark', dark);
  btn.textContent = dark ? '明るくする' : '暗くする';

  btn.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('dark', dark);
    btn.textContent = dark ? '明るくする' : '暗くする';
    localStorage.setItem('darkMode', dark); // 保存
  });
  (function() {
    let saved = localStorage.getItem('darkMode');
    let dark = saved !== null ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) {
      document.documentElement.classList.add('dark');
    }
  })();

function extractVersionFromHTML(html) {
  let match = html.match(/v(\d+(?:\.\d+)*)(?:（|\()/);
  return match ? match[1] : null;
}

function updateCSVStatus(loaded) {
  let label = document.getElementById("csvStatus");
  label.textContent = loaded ? "   CSV: 読み込み済み" : "   CSV: なし";
}

let 間違い英単語 = [];
let 間違い日本語 = [];

function loadMistakeCSV() {
  let csv = prompt("間違えた単語のCSV(記録モードで取得可能)を貼ってください：");
  if (!csv) {
    間違い英単語 = [];
    間違い日本語 = [];
    updateCSVStatus(false);
    return;
  }

  let lines = csv.trim().split('\n');
  間違い英単語 = [];
  間違い日本語 = [];

  for (let i = 1; i < lines.length; i++) {
    let cols = lines[i].split(',');
    let result = cols[4]?.trim();

    if (result === "×") {
      let english = cols[1]?.trim();  // 出題語句
      let japanese = cols[2]?.trim(); // 日本語訳（列インデックスは元仕様に合わせています）
      if (english && japanese) {
        間違い英単語.push(english);
        間違い日本語.push(japanese);
      }
    }
  }
  残り問題番号 = [...Array(間違い英単語.length).keys()];
  shuffle(残り問題番号);
  updateCSVStatus(true);
}
  function escapeHTML(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  function parseCSVLine(line){
    let out = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++){
      let ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i+1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }
      if (ch === ',' && !inQuotes) {
        out.push(cur);
        cur = '';
        continue;
      }
      cur += ch;
    }
    out.push(cur);
    return out.map(s => s.trim().replace(/^"|"$/g, ''));
  }

  let directionSelect = document.getElementById('direction');

  function updateTitle() {
    let titleText = '問題にする言語を変更できます。';
    if (directionSelect.value === 'en-ja') {
      titleText += '現在の設定では問題が英語、選択肢は日本語になります。';
    } else if (directionSelect.value === 'ja-en') {
      titleText += '現在の設定では問題が日本語、選択肢は英語になります。';
    }
    directionSelect.title = titleText;
  }

  directionSelect.addEventListener('change', updateTitle);
  updateTitle(); // 初期表示用
function markKnown(index) {
  if (フラッシュカード) {
    残り問題番号 = 残り問題番号.filter(n => n !== index);
  }
  showNextQuestion();
}

function markUnknown(index) {
  if (フラッシュカード) {
    ミス記録.push({
      番号: index,
      表示語句: 表示語句範囲[index],
      正解: 選択肢範囲[index]
    });
    残り問題番号 = 残り問題番号.filter(n => n !== index);
  }
  showNextQuestion();
}

function startNextRound() {
  ゲーム中 = true;
  残り問題番号 = ミス記録.map(m => m.番号); // ← 番号を直接使う
  ミス記録 = [];
  問題数 = 0;
  正解回数 = 0;
  showNextQuestion();
}
