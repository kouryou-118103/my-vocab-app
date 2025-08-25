(function suppressInitialTransitionAndDark(){
  try {
    var st = document.createElement('style');
    st.id = 'suppress-trans';
    st.textContent = '* { transition: none !important; }';
    document.head.appendChild(st);

    const saved = localStorage.getItem('darkMode');
    const wantDark = saved !== null
      ? (saved === 'true')
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    function ensureDarkBody() {
      if (!document.body) {
        requestAnimationFrame(ensureDarkBody);
        return;
      }
      if (wantDark) {
        document.body.classList.add('dark');
      }
      requestAnimationFrame(() => {
        var s = document.getElementById('suppress-trans');
        if (s) s.remove();
      });
    }
    ensureDarkBody();
  } catch (e) {}
})();
    if (typeof バージョン === "undefined") {var バージョン = "2.05.4";}//過去バージョンで、アプリ本体でバージョン定義があるため、二重定義を避ける(アプリ本体はconstで定義されている)
    var 最新内部バージョン="3"
    var 正解回数 = 0;
    var 問題数 = 0;
    var 正解;
    var 表示語句範囲 = [];
    var 選択肢範囲 = [];
    var 出題語句ABC = [];
    var 選択肢ABC用 = [];
    var 範囲下 = 1;
    var 範囲上 = 1900;
    var 出題方向 = "en-ja";
    var numChoices = 4;
    var 次の問題タイマー;
    var autoNextInterval = 0;
    var 残り問題番号 = [];
    var ミス記録 = [];
    var 全結果 = [];
    var 入力モード = false;
    var 記録モード = false;
    var いやらしいモード = false;
    var フラッシュカード = false;
    var ゲーム中 = false;
    var ラウンド = 1;
    var 問題番号 = 0;
    var csv = ""
    var ABCnum = []

var 利用者内部版 = (typeof 内部バージョン !== "undefined") ? 内部バージョン : null;
if (利用者内部版 !== 最新内部バージョン) {
    alert(
        "このバージョンではデータが古いため、正常に動作しません。\n" +
        "Gmailより最新のデータをダウンロードしてください。"
    );
    // 必要に応じて処理停止
} else {
    // バージョン一致時の処理
}
    document.addEventListener("keydown", function(event) {
  var hintElement = document.getElementById('shortcut-hint');
  var active = document.activeElement;
  var modeToggle = document.getElementById("mode-toggle");
  if (event.key === '/' || event.key.toLowerCase() === 'h') {
    hintElement.style.display = 'block';
  }
  if (フラッシュカード && ゲーム中) {
  if (event.key === "1") {
    var meaning = document.getElementById("flashcard-meaning");
    if (meaning) meaning.style.display = 'block';
  }
  if (event.key === "2") {
    markKnown(問題番号);
  }
  if (event.key === "3") {
    var 表示語句 = document.querySelector("#quiz strong, #quiz p").textContent.trim();
    var 正解 = document.getElementById("flashcard-meaning")?.textContent.trim();
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

  var quizDiv = document.getElementById("quiz");
  if (!quizDiv.innerHTML.trim()) return;

  if (event.key === "Enter" || event.key === " ") {
      if (フラッシュカード && !ゲーム中) {
    return;
    }
    if (active === modeToggle) {
      return;
    } else {
      var sendButton = document.querySelector("#quiz button");
      if (sendButton) if(ゲーム中){sendButton.click();}else{if (confirm("ホーム画面に戻ります。")){sendButton.click();}};
    }
  }

  var key = parseInt(event.key);
  if (!isNaN(key) && key >= 1 && key <= numChoices + 1) {
    var buttons = document.querySelectorAll("#quiz .option button");
    if (buttons[key - 1]) {
      buttons[key - 1].click();
    }
  }
});
document.addEventListener('keyup', (event) => {
    var hintElement = document.getElementById('shortcut-hint');
    if (event.key === '/' || event.key.toLowerCase() === 'h') {
        hintElement.style.display = 'none';
    }
  if (event.key === "d") {
    dark = !dark;
    document.body.classList.toggle("dark", dark);
    btn.textContent = dark ? "明るくする" : "暗くする";
    localStorage.setItem("darkMode", dark);
  }
});
document.addEventListener('click', () => {
    var hintElement = document.getElementById('shortcut-hint');
    hintElement.style.display = 'none';
});
  function onSettingsChanged() {
      var newUrl = generateShareableLink(false); // ← 関数の返り値を受け取る
      window.history.replaceState({}, '', newUrl); // ← URLだけを書き換える（リロードなし）
  }

  // イベントを登録する対象の要素たち
  var settingElements = [
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
    var eventType = (el.type === 'checkbox' || el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(eventType, onSettingsChanged);
  });
    
    function startQuiz() {
      ゲーム中 = true;
      var newUrl = generateShareableLink(); // ← 関数の返り値を受け取る
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
      var 表示語句 = 表示語句範囲[問題番号];
      正解 = 選択肢範囲[問題番号];
      if (document.getElementById("flashcard-mode").checked) {
      var totalCount = 表示語句範囲.length;
      var solvedCount = totalCount - 残り問題番号.length;
      var html = `<p>${escapeHTML(solvedCount)}/${escapeHTML(totalCount)}`;
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
      var options = [正解];
      if (いやらしいモード){
        var index1900 = 英語.indexOf(正解) !== -1 ? 英語.indexOf(正解) : 日本語.indexOf(正解);
        var index = 出題語句ABC.indexOf(ABCnum[index1900])
        選択肢ABC用 = 出題語句ABC.slice(Math.max(0, Math.min(出題語句ABC.length - numChoices*2, index - Math.floor(numChoices))), Math.max(0, Math.min(出題語句ABC.length - numChoices*2, index - Math.floor(numChoices))) + numChoices*2);
        var choice;
        while (options.length < numChoices) {
        var randIndex = Math.floor(Math.random() * 選択肢ABC用.length);
        var abcIndex = ABCnum.indexOf(選択肢ABC用[randIndex]);

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
          var randIndex = Math.floor(Math.random() * 選択肢範囲.length);
          var choice = 選択肢範囲[randIndex];
          if (!options.includes(choice)) {
            options.push(choice);
          }
      }}
      
      shuffle(options);
      options.push("わからない");
      var 選択肢リスト = [`\n${問題数}問目\n`,`正解: [${options.indexOf(正解) + 1}] ${escapeHTML(正解)}\n`,"選択肢:\n"];
      for (var i = 0; i < numChoices; i++) {
        var en, ja, index, abc;
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

      var html = "";

      if (入力モード && 出題方向 === "ja-en") {
  html += `<p><strong>${escapeHTML(表示語句)}</strong> を英語で？</p>`;
  html += `<div class="hint">ヒント：${正解.length}文字、最初の文字は「${正解[0]}」</div>`;
  html += `<input type="text" id="userInput" autofocus oninput="updateCharCount()" autocompvare="off">`;
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
      var userInput = document.getElementById("userInput").value.trim();
      var selected = userInput;
      var isCorrect = normalizeForAnswer(selected) === normalizeForAnswer(正解);
      var 正誤 = isCorrect ? "○" : "×";
      if (記録モード || 入力モード) {
        全結果.push(`${範囲下 + 問題番号 + 1},${escapeHTML(表示語句)},${escapeHTML(正解)},${escapeHTML(selected)},${正誤}`);
      }

var result = `<div class="result-block">`;

if (selected === 正解) {
  正解回数++;
  result += `<p class="correct">✅ 正解！</p>`;
  result += `<p class="question">${escapeHTML(表示語句)}<br>${escapeHTML(selected)}</p>`;
} else {
  var userLang = 日本語[英語.indexOf(selected)] ?? "不明";
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
  var 表示語句 = 表示語句範囲[問題番号];
  var isCorrect = selected === answer;
  var 正誤 = isCorrect ? "○" : "×";

  if (記録モード) {
    全結果.push(`${範囲下 + 問題番号 + 1},${escapeHTML(表示語句)},${answer},${escapeHTML(selected)},${正誤}`);
  }

  var result = `<div class="result-block">`;
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
    var en = 日本語[英語.indexOf(selected)];
    result += `<p>${escapeHTML(en)}<br>${escapeHTML(selected)}</p>`;
  } else {
    var ja = 英語[日本語.indexOf(selected)];
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
      var html= ``;
      if (フラッシュカード){
        html += `<h2>クイズ終了</h2><p>暗記完了！</p>`;  
      }else{
        html += `<h2>クイズ終了</h2><p>${問題数-1}問中${正解回数}問正解 (${Math.floor(正解回数 / (問題数-1) * 100)}%)</p>`;
      }
      if ((記録モード || 入力モード) && 全結果.length > 0) {
        html += `<h3>結果一覧:</h3>`;
        document.getElementById("resultCSV").classList.remove("hidden");
        var csv = "番号,出題語句,正解,あなたの答え,正誤\n" + 全結果.join("\n");
        document.getElementById("resultCSV").value = csv;
      } else {
        document.getElementById("resultCSV").value = "";
        document.getElementById("resultCSV").classList.add("hidden");
      }

      html += `<button onclick="location.reload()">再スタート</button>`;
      document.getElementById("quiz").innerHTML = html;
    }

    function shuffle(arr) {
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    function updateCharCount() {
  var input = document.getElementById("userInput").value;
  document.getElementById("charCount").innerText = `現在の文字数: ${input.length}文字`;
}
function toggleUpdateLog() {
  var log = document.getElementById("updateLog");
  log.classList.toggle("hidden");

  // JSONを初めて読み込むときだけfetch
  var changelog = document.getElementById("changelog");
  if (!changelog.dataset.loaded) {
    fetch('https://kouryou-118103.github.io/my-vocab-app/data/updatelog.json')
      .then(res => {
        if (!res.ok) throw new Error("取得失敗");
        return res.json();
      })
      .then(data => {
var html = `<h2>新機能</h2><ul>
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
}var observer = new MutationObserver(() => {
    var input = document.getElementById("userInput");
    if (input) input.focus();
  });

  observer.observe(document.body, { childList: true, subtree: true });
function getURLParams() {
  var params = new URLSearchParams(window.location.search);
  var encoded = params.get('data');
  if (encoded) {
    try {
      var base64 = decodeURIComponent(encoded); // 👈 これを入れる！
      var json = atob(base64);
      var obj = JSON.parse(json);
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
  var urlParams = getURLParams();
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
    var cleanUrl = window.location.origin + window.location.pathname;
    window.location.href = cleanUrl;  }
});
function generateShareableLink(showUI = true) {
  var settings = {
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

  var json = JSON.stringify(settings);
  var base64 = btoa(json);
  var safe = encodeURIComponent(base64);
  console.log("base64:", base64);

  var baseUrl = location.origin + location.pathname;
  var fullUrl = `${baseUrl}?data=${safe}`;
  console.log("生成されたURL:", fullUrl);
  if (showUI) {
  var linkInput = document.getElementById("shareableLink");
  linkInput.value = fullUrl;
  linkInput.select();

  var dialog = document.getElementById("linkDialog");
  dialog.classList.add("show");}

  return fullUrl;
}
function copyLink() {
  var linkInput = document.getElementById("shareableLink");
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
  var url = document.getElementById("shareableLink").value;
  toast.classList.remove("show");
  if (url) window.open(url, "_blank");
}
function closeDialog() {
  document.getElementById("linkDialog").classList.remove("show");
}

function showToast(message = "コピーしました！") {
  var toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500); // 1.5秒後に非表示
}
var rangeSelect = document.getElementById('rangeSelect');
var rangeLowInput = document.getElementById('rangeLow');
var rangeHighInput = document.getElementById('rangeHigh');

rangeSelect.addEventListener('change', () => {
  var selectedValue = rangeSelect.value; // 選択されたoptionのvalue属性の値を取得

  var ranges = selectedValue.split('-');
  var low = parseInt(ranges[0], 10);   // 範囲下を数値に変換
  var high = parseInt(ranges[1], 10);  // 範囲上を数値に変換

  rangeLowInput.value = low;
  rangeHighInput.value = high;
});

// 初期表示時に「全範囲」が選択されている状態にする場合
window.addEventListener('load', () => {
  var initialValue = rangeSelect.value;
  var initialRanges = initialValue.split('-');
  rangeLowInput.value = parseInt(initialRanges[0], 10);
  rangeHighInput.value = parseInt(initialRanges[1], 10);
});
  var btn = document.getElementById('mode-toggle');

  // 初期状態の取得
  var dark;

  var saved = localStorage.getItem('darkMode');
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
    var saved = localStorage.getItem('darkMode');
    var dark = saved !== null ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) {
      document.documentElement.classList.add('dark');
    }
  })();

function extractVersionFromHTML(html) {
  var match = html.match(/v(\d+(?:\.\d+)*)(?:（|\()/);
  return match ? match[1] : null;
}

function updateCSVStatus(loaded) {
  var label = document.getElementById("csvStatus");
  label.textContent = loaded ? "   CSV: 読み込み済み" : "   CSV: なし";
}

var 間違い英単語 = [];
var 間違い日本語 = [];

function loadMistakeCSV() {
  var csv = prompt("間違えた単語のCSV(記録モードで取得可能)を貼ってください：");
  if (!csv) {
    間違い英単語 = [];
    間違い日本語 = [];
    updateCSVStatus(false);
    return;
  }

  var lines = csv.trim().split('\n');
  間違い英単語 = [];
  間違い日本語 = [];

  for (var i = 1; i < lines.length; i++) {
    var cols = lines[i].split(',');
    var result = cols[4]?.trim();

    if (result === "×") {
      var english = cols[1]?.trim();  // 出題語句
      var japanese = cols[2]?.trim(); // 日本語訳（列インデックスは元仕様に合わせています）
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
    var out = [];
    var cur = '';
    var inQuotes = false;
    for (var i = 0; i < line.length; i++){
      var ch = line[i];
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

  var directionSelect = document.getElementById('direction');

  function updateTitle() {
    var titvarext = '問題にする言語を変更できます。';
    if (directionSelect.value === 'en-ja') {
      titvarext += '現在の設定では問題が英語、選択肢は日本語になります。';
    } else if (directionSelect.value === 'ja-en') {
      titvarext += '現在の設定では問題が日本語、選択肢は英語になります。';
    }
    directionSelect.title = titvarext;
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
