# 変更履歴 / Changelog

## 新機能 / New Features

### v2.12 (2026/06/18)
* **日本語:** * アプリを公開 → https://kouryou-118103.github.io/my-vocab-app/
  * ヘルプページ（使い方）を追加
* **English:**
  * Publicly released the app -> https://kouryou-118103.github.io/my-vocab-app/
  * Added a Help page (Usage guide)

---

## 過去の更新 / Past Updates

### v2.11.6 (2026/05/19)
* **日本語:** * 設定画面の安定性を改善
  * バグがバグを呼ぶ‥
  * コメントアウトしすぎて、`}` が閉じれていなかったのを修正
* **English:**
  * Improved the stability of the settings screen.
  * One bug leads to another...
  * Fixed an issue where a closing `}` was missing due to excessive commenting out.

### v2.11.5 (2026/05/18)
* **日本語:** 設定画面の参照先を整理
* **English:** Cleaned up the references in the settings screen.

### v2.11.4 (2026/05/18)
* **日本語:** 2.11.3で消しきれなかった部分の修正
* **English:** Fixed leftover issues that weren't fully resolved in v2.11.3.

### v2.11.3 (2026/05/18)
* **日本語:** 2.11.2の修正で消した要素を参照している場所がエラーを吐いていたため修正
* **English:** Fixed errors caused by remaining references to elements that were deleted in the v2.11.2 update.

### v2.11.2 (2026/05/18)
* **日本語:** * カラーピッカーが再読み込み時に初期設定になる問題を修正
  * 推奨環境にEdgeを追加
  * 推奨環境からローカルを削除
* **English:**
  * Fixed an issue where the color picker would reset to default upon reloading.
  * Added Microsoft Edge to the recommended environment.
  * Removed "Local" from the recommended environment.

### v2.11.1 (2026/05/17)
* **日本語:** * 過去の正解率をアイコンで表示できる機能が正常に動作していなかったので修正
  * HTMLファイルを公開するために依存関係を調整中
* **English:**
  * Fixed an issue where the feature to display past accuracy rates via icons was not working properly.
  * Adjusting dependencies to publish the HTML file.

### v2.11 (2026/05/17)
* **日本語:** * ポートフォリオに使えるように改造
  * 1. 単語データをCC BY-SA 4.0のデータに変更
  * 2. 1に伴ういくつかのデータ変更
  * 3. 単語数が変わったことにより動作しなくなった機能の書き換え
* **English:**
  * Revamped the app to make it suitable for a portfolio.
  * 1. Changed word data to CC BY-SA 4.0 licensed data.
  * 2. Made several data modifications along with change #1.
  * 3. Rewrote features that broke due to the change in total word count.

### v2.10.6 (2025/12/30)
* **日本語:** * 設定画面でエンターキーでクイズが始められる機能について、Ctrl+Enterに変更
  * `h` で表示できるショートカットキー一覧にCtrl+Enterを追加
  * (今年最後の更新です。このアプリを使っていただきありがとうございました。良いお年を)
* **English:**
  * Changed the shortcut to start the quiz from the settings screen from "Enter" to "Ctrl+Enter".
  * Added "Ctrl+Enter" to the shortcut list displayed by pressing `h`.
  * (Last update of the year. Thank you for using this app. Have a great new year!)

### v2.10.5 (2025/12/28)
* **日本語:** 設定画面でエンターキーを押すとクイズが始まるように改善
* **English:** Improved the settings screen so that pressing the Enter key starts the quiz.

### v2.10.4 (2025/12/22)
* **日本語:** いやらしいモードがうまく動いてない不具合を修正
* **English:** Fixed a bug where "Tricky Mode" (ABC-proximity distractor mode) was not working properly.

### v2.10.3 (2025/12/21)
* **日本語:** 範囲選択中に `s` キーを押すとリスト内の頭文字検索と設定画面が干渉する問題を解決
* **English:** Resolved an issue where pressing the `s` key during range selection caused a conflict between the list's initial-letter search and the settings screen.

### v2.10.2 (2025/12/08)
* **日本語:** 設定画面のショートカットキーがホーム画面で動かない問題を修正
* **English:** Fixed a bug where the settings screen shortcuts did not work on the home screen.

### v2.10.1 (2025/12/06)
* **日本語:** * 選択肢に正解が含まれない不具合を修正
  * 入力モードとフラッシュカードを同時にオンにしたときに、表示がおかしくなる問題を修正
* **English:**
  * Fixed a bug where the correct answer was sometimes missing from the choices.
  * Fixed a display glitch when both Input Mode and Flashcard Mode were turned on simultaneously.

### v2.10 (2025/12/05)
* **日本語:** ダミー選択肢がおなじになるバグを修正
* **English:** Fixed a bug where dummy options (distractors) would duplicate.

### v2.09.7 (2025/12/03)
* **日本語:** 問題と回答がずれるバグを修正
* **English:** Fixed a bug where questions and answers became mismatched.

### v2.09.6 (2025/12/02)
* **日本語:** 出題プログラムを軽量化 ($O(n^2) \rightarrow O(n)$)
* **English:** Optimized the quiz generation algorithm for better performance ($O(n^2) \rightarrow O(n)$).

### v2.09.5 (2025/12/02)
* **日本語:** 選択肢の数が多すぎるときにフリーズする不具合に関する調整
* **English:** Adjusted performance to prevent freezing when there are too many options.

### v2.09.4 (2025/11/29)
* **日本語:** * アップデート後にでる感謝メッセージをデフォルトで表示しないように変更
  * 設定→アプリの更新・修復から元に戻すこともできる
* **English:**
  * Changed the post-update thank-you message to be hidden by default.
  * It can be re-enabled via "Settings -> App Update/Repair".

### v2.09.3 (2025/11/28)
* **日本語:** ショートカットキーがブラウザに吸われないように修正
* **English:** Fixed an issue to prevent shortcut keys from being intercepted by the browser defaults.

### v2.09.2 (2025/11/25)
* **日本語:** * フラッシュカードモードに戻る機能を追加
  * フラッシュカードのショートカットキーをわかりやすく
* **English:**
  * Added a feature to return to Flashcard Mode.
  * Made the shortcut keys for Flashcard Mode more intuitive.

### v2.09.1 (2025/11/21)
* **日本語:** 音声読み上げの無効化
* **English:** Disabled the text-to-speech (audio reading) feature.

### v2.09 (2025/11/10)
* **日本語:** アップデート直後に開始ボタンが押せないバグを修正
* **English:** Fixed a bug where the start button could not be clicked immediately after an update.

### v2.08.7 (2025/11/09)
* **日本語:** 設定にアプリの更新・修復タブを追加
* **English:** Added an "App Update/Repair" tab to the settings screen.

### v2.08.6 (2025/11/06)
* **日本語:** 設定画面が表示されないバグ(v2.08.3から発生)を修正
* **English:** Fixed a bug introduced in v2.08.3 where the settings screen would not display.

### v2.08.5 (2025/11/05)
* **日本語:** 設定画面が表示されないバグの原因調査2
* **English:** Investigated the cause of the settings screen display bug (Part 2).

### v2.08.4 (2025/11/02)
* **日本語:** 設定画面が表示されないバグの原因調査
* **English:** Investigated the cause of the settings screen display bug.

### v2.08.3 (2025/10/30)
* **日本語:** アップデート後の画面調整
* **English:** Adjusted screen layouts after updates.

### v2.08.2 (2025/10/09)
* **日本語:** CSVアップロードモードにおいて、TSVを許容するように変更
* **English:** Updated CSV upload mode to also accept TSV files.

### v2.08.1 (2025/10/08)
* **日本語:** UI微調整
* **English:** Minor UI tweaks.

### v2.08 (2025/10/06)
* **日本語:** * ローカルストレージへの履歴保存を調整
  * v2.7.10は見づらいのでv2.8へ
* **English:**
  * Adjusted history saving in LocalStorage.
  * Bumped version to v2.8 because v2.7.10 looked too messy.

### v2.07.9 (2025/10/06)
* **日本語:** いやらしいモードをONにしているときにフリーズする不具合を修正
* **English:** Fixed a bug where the app froze when "Tricky Mode" was enabled.

### v2.07.8 (2025/10/05)
* **日本語:** * 変数の初期値変更
  * スタイル設定を追加
* **English:**
  * Changed default values for variables.
  * Added style settings.

### v2.07.7 (2025/10/04)
* **日本語:** バージョン情報などを見れる機能を追加
* **English:** Added a feature to view version information and other details.

### v2.07.6 (2025/10/02)
* **日本語:** いままでのデータをダウンロードできる機能を追加
* **English:** Added a feature to download accumulated user data.

### v2.07.5 (2025/09/30)
* **日本語:** * 推奨環境を更新
  * アップデートログが複数出る問題を修正(バージョン5以降)
* **English:**
  * Updated the recommended environment specifications.
  * Fixed an issue where multiple update logs were displayed (occurring since version 5).

### v2.07.4 (2025/09/25)
* **日本語:** 設定項目に推奨環境を追加
* **English:** Added "Recommended Environment" to the settings items.

### v2.07.3 (2025/09/24)
* **日本語:** * 一部の単語が復習できないバグを修正
  * 結果を記録をオフにするとアイコンが表示されなくなる不具合を修正
* **English:**
  * Fixed a bug preventing certain words from being reviewed.
  * Fixed an issue where icons disappeared when "Record Results" was turned off.

### v2.07.2 (2025/09/14)
* **日本語:** * 設定をSキーで出せるように変更
  * テスト中にタブを消そうとしたときに確認する機能を設定に追加
* **English:**
  * Changed the shortcut key to open settings to the `s` key.
  * Added a settings option to prompt a confirmation dialog when attempting to close the tab during a test.

### v2.07.1 (2025/09/12)
* **日本語:** 設定が上書きされて消える不具合を修正
* **English:** Fixed a bug where settings were overwritten and wiped out.

### v2.07 (2025/09/11)
* **日本語:** 過去の記録を表示するかしないかなどの設定が可能に
* **English:** Added options to toggle the display of past records.

### v2.06 (2025/08/31)
* **日本語:** 過去の正解度が右上に表示されるように(フラッシュカードは表示のみで計算外)
* **English:** Displayed past accuracy rates in the top right (Flashcards show this for display only; excluded from score calculation).

### v2.05.8 (2025/08/30)
* **日本語:** ABCnumがオフライン時に読み込めない時がある不具合を修正(アプリバージョン4以降で動作)
* **English:** Fixed an issue where ABCnum failed to load offline (functional from app version 4 onwards).

### v2.05.7 (2025/08/27)
* **日本語:** 入力モードで入力中にDキーを押すとダークモードが切り替わるバグを修正
* **English:** Fixed a bug where pressing the `D` key while typing in Input Mode accidentally toggled Dark Mode.

### v2.05.6 (2025/08/26)
* **日本語:** 使っている単語リストによって、いやらしいモードが無効になるように(データがなくてエラーになるから)
* **English:** Configured "Tricky Mode" to automatically disable depending on the selected word list (preventing errors due to missing data).

### v2.05.5 (2025/08/26)
* **日本語:** ばかみたいなタイポを修正。autocompvare→autocomplete
* **English:** Fixed a silly typo: changed `autocompvare` to `autocomplete`.

### v2.05.4 (2025/08/25)
* **日本語:** 入力モードで大文字で入力すると不正解扱いになるバグを修正
* **English:** Fixed a bug where uppercase input in Input Mode was incorrectly marked as wrong.

### v2.05.3 (2025/08/24)
* **日本語:** * Dキーを長押しすると重くなる不具合を修正
  * ダークモード設定時に最初にぴかってなる現象の低減
* **English:**
  * Fixed lag caused by holding down the `D` key.
  * Reduced the white flash effect that occurs when loading into Dark Mode.

### v2.05.2 (2025/08/22)
* **日本語:** JavaScriptの大半をネットにおいて、読み込む形式に変更。1日1回しかロードしない仕組み。コンソールで強制読み込み()を実行すれば強制的に最新版を読み込める。また、オフライン環境においてもローカルストレージにJSを保存しているため実行が可能。
* **English:** Moved most JavaScript files to a remote server. They are now fetched once a day. Running `強制読み込み()` (Force Load) in the console forces an immediate update to the latest version. The app remains functional offline as JS is cached in LocalStorage.

### v2.05.1 (2025/08/21)
* **日本語:** * データをネットから持ってくるときの実行順序によって起こるバグを修正
  * 過去のバージョンを使っているユーザーに対し警告を表示する機能を追加
* **English:**
  * Fixed a bug caused by the execution order when fetching data from the web.
  * Added a feature to display warnings for users on legacy versions.

### v2.05 (2025/08/20)
* **日本語:** いやらしいモードのデータなどをネットに置くことで容量を11%削減
* **English:** Reduced file size by 11% by hosting "Tricky Mode" data and other resources online.

### v2.04.1 (2025/08/15)
* **日本語:** * フラッシュカードモードのバグ修正
  * ショートカットキーの追加(Dキーでダークモード切り替え,Hか/でショートカット一覧表示)
* **English:**
  * Fixed bugs in Flashcard Mode.
  * Added new shortcuts (`D` to toggle Dark Mode, `H` or `/` to display the shortcuts list).

### v2.04 (2025/08/12)
* **日本語:** * フラッシュカードモードを追加
  * フラッシュカードモードのキーボード対応、URL追加
* **English:**
  * Added Flashcard Mode.
  * Implemented keyboard support and dedicated URL parameters for Flashcard Mode.

### v2.03.3 (2025/08/11)
* **日本語:** 単語データを工夫することによりファイル容量を11%軽量化
* **English:** Reduced file capacity by 11% through optimizing word data structures.

### v2.03.2 (2025/08/11)
* **日本語:** * コントラスト比の調整
  * ダークモード時のbox-shadow調整
* **English:**
  * Adjusted color contrast ratios.
  * Adjusted `box-shadow` properties during Dark Mode.

### v2.03.1 (2025/08/10)
* **日本語:** * css変数化によるファイルサイズの軽量化
  * 色数の削減
  * ショートカットの追加。Qキーで終了できるように。
* **English:**
  * Reduced file size by refactoring styles into CSS variables.
  * Reduced the overall color palette.
  * Added a shortcut: press the `Q` key to quit.

### v2.03 (2025/08/08)
* **日本語:** * csvを出力する場所を変更不可能に
  * csvをアップロードするときの脆弱な場所を修正
  * その他軽微な内部変更
* **English:**
  * Fixed the CSV output destination path.
  * Patched a vulnerability found in the CSV upload process.
  * Other minor internal changes.

### v2.02.1 (2025/08/07)
* **日本語:** !バグ(条件を逆にしてた)を修正(1文字違うだけなのに2時間もデバッグかかった)
* **English:** Fixed a logical `!` bug where a conditional statement was inverted. (Spent 2 hours debugging over a single character mismatch!)

### v2.02 (2025/08/06)
* **日本語:** CSV読み込みモードを追加(β版)。前回間違えた場所を復習できるように。(応用すれば単語じゃないのにも使える)
* **English:** Added CSV Import Mode (Beta), allowing users to review questions they got wrong last time. (This versatile feature can be adapted for non-vocabulary usage too).

### v2.01 (2025/07/20)
* **日本語:** * バージョンアップ後の初回起動時に更新情報がでるように
  * 過去バージョンで使用されていたデータをPCから削除するように変更
  * 設定画面で再読込しても設定が保持されるように
* **English:**
  * Configured the app to show patch notes on the first launch after an update.
  * Updated the system to purge deprecated legacy data from the user's PC.
  * Ensured settings persist even after reloading the settings screen.

### v2.00.1 (2025/07/20)
* **日本語:** UIの改善
* **English:** UI improvements.

### v2.00 (2025/07/19)
* **日本語:** * URLパラメータの生成方法を変更(破壊的変更のためメジャーアップデート)
  * リンク生成ダイヤログがEscキーで閉じるように
  * 記録モード、単語入力モード、いやらしいモードのURLパラメーターが反応しないことがある問題を修正
  * localStorageに設定を保存する機能の削除
  * ゲーム開始時の負荷を軽減
  * ダークモードの改善
* **English:**
  * Changed the URL parameter generation method (Major update due to breaking changes).
  * Allowed the link generation dialog to be closed using the `Esc` key.
  * Fixed an issue where URL parameters for Record Mode, Input Mode, and Tricky Mode would occasionally fail to trigger.
  * Removed the feature that saves configuration settings directly to LocalStorage.
  * Reduced processing load when starting a game.
  * Improved Dark Mode.

### v1.10.3 (2025/07/06)
* **日本語:** * UI改善
  * CSS整理
* **English:**
  * UI improvements.
  * Cleaned up CSS files.

### v1.10.2 (2025/07/03)
* **日本語:** 内部変更:`<label>`タグにfor属性を追加
* **English:** Internal changes: Added `for` attributes to `<label>` tags.

### v1.10.1 (2025/06/28)
* **日本語:** * 特定の状況でキーが反応しないバグを修正
  * ダークモード切り替え時の不具合を修正
* **English:**
  * Fixed a bug where keys stopped responding under specific conditions.
  * Fixed glitches during Dark Mode toggling.

### v1.10 (2025/06/28)
* **日本語:** いやらしいモード(ABC順で近いものを選択肢に出す)を実装
* **English:** Implemented "Tricky Mode" (which pulls distractors that are alphabetically close to the correct answer).

### v1.09.4 (2025/05/23)
* **日本語:** * 再読み込み時の設定の競合を改善
  * UIの微修正
  * URLの仕様変更(競合を防ぐため)
* **English:**
  * Resolved configuration conflicts during page reloads.
  * Minor UI adjustments.
  * Updated URL specifications to prevent structural conflicts.

### v1.09.3 (2025/05/23)
* **日本語:** * ダークモードを改善
  * 範囲選択のインデックスがずれていたのを修正
* **English:**
  * Improved Dark Mode.
  * Fixed an indexing mismatch in the range selection feature.

### v1.09.2 (2025/05/22)
* **日本語:** 「fault(671)」と「folk(962)」で何も操作できなくなるバグを修正
* **English:** Fixed a game-breaking freeze bug that occurred specifically on words "fault (671)" and "folk (962)".

### v1.09.1 (2025/05/10)
* **日本語:** パンダバグ(ダークモードの切り替えを繰り返すとダークモードが適用されている場所とされていない場所ができるバグ)を修正
* **English:** Fixed the "Panda Bug" (a layout glitch where repeatedly toggling Dark Mode caused mixed light/dark areas on the screen).

### v1.09 (2025/05/10)
* **日本語:** ダークモードを実装
* **English:** Implemented Dark Mode.

### v1.08 (2025/05/08)
* **日本語:** 回答表示画面の大幅な改善(n択問題のみ。入力モードは後で)
* **English:** Major overhaul of the answer display screen (Currently for multiple-choice only; Input Mode to follow later).

### v1.07.6 (2025/05/08)
* **日本語:** 設定画面でホバーをすると説明が出る機能を追加
* **English:** Added tooltips/descriptions when hovering over items on the settings screen.

### v1.07.5 (2025/05/08)
* **日本語:** 伝説のFALSEバグを修正
* **English:** Patched the legendary "FALSE" bug.

### v1.07.4 (2025/05/05)
* **日本語:** * 単語の範囲方法の変更
  * 範囲下限が含まれるように
* **English:**
  * Changed how word ranges are selected.
  * Included the lower-bound value within the selected range.

### v1.07.3 (2025/05/05)
* **日本語:** 単語範囲指定の表示方法を変更
* **English:** Changed the visual display layout for the word range specification.

### v1.07.2 (2025/05/05)
* **日本語:** * 選択肢「分からない」がキー入力で反応しないバグを修正
  * オート次へ間隔(ms)がクリエに対応
  * 範囲をクリエで設定できない問題を解決
  * 「コピーしました！」が出ないバグを修正(MOD制作者F氏より逆輸入)
* **English:**
  * Fixed a bug where the "I don't know" choice didn't respond to key inputs.
  * Added URL query parameter support for the "Auto-Next Interval (ms)".
  * Resolved an issue where ranges could not be set via URL queries.
  * Fixed a bug where the "Copied!" notification failed to appear (backport from Modder F).

### v1.07.1 (2025/05/04)
* **日本語:** 範囲を選択すると自動で下の範囲も変わるように改善
* **English:** Improved the range selector so that choosing a range dynamically adjusts the subsequent lower bounds.

### v1.07 (2025/05/04)
* **日本語:** * 設定画面の大幅改善(MOD制作者F氏より逆輸入)
  * 既知のバグ「範囲指定」がリンクで変更できない
* **English:**
  * Major overhaul of the settings screen (backport from Modder F).
  * Known Issue: Word range specifications cannot be modified via links.

### v1.06 (2025/05/04)
* **日本語:** * urlで設定を指定できる機能を追加
  * 「現在の設定でリンクを生成」ボタンを追加
* **English:**
  * Added a feature to configure settings via URL parameters.
  * Added a "Generate link with current configurations" button.

### v1.05.4 (2025/05/02)
* **日本語:** * ゲーム終了時や再読み込み時に以前の設定を復元するように変更
  * 「初期設定に戻す」ボタンを追加
* **English:**
  * Configured the app to restore previous settings upon game completion or page reloads.
  * Added a "Reset to Defaults" button.

### v1.05.3 (2025/05/02)
* **日本語:** 単語入力モードで自動でフォーカスが合うように(MOD制作者F氏より逆輸入)
* **English:** Implemented auto-focus on text areas during Word Input Mode (backport from Modder F).

### v1.05.2 (2025/05/01)
* **日本語:** バージョン情報を表示する機能を追加
* **English:** Added a feature to display the app's version information.

### v1.05.1 (2025/04/30)
* **日本語:** 「わからない」が最後に来ないバグを修正
* **English:** Fixed a bug where the "I don't know" option failed to sit at the bottom of the choices list.

### v1.05 (2025/04/28)
* **日本語:** * 文字数カウント機能追加
  * 回答表示の改善
  * キータイプのみでの操作が可能に
* **English:**
  * Added a character counter feature.
  * Improved the answer display layout.
  * Enabled full keyboard-only navigation.

### v1.04 (2025/04/28)
* **日本語:** 単語入力モード（日本語→英語）を追加
* **English:** Added Word Input Mode (Japanese to English).

### v1.03 (4月中旬頃 / Mid-April)
* **日本語:** * 記録モードがOFFでもCSVが出るバグを修正
  * 回答後に自動で次に進む機能を追加
* **English:**
  * Fixed a bug where CSV files were generated even when Record Mode was turned off.
  * Added an auto-advance feature after submitting an answer.

### v1.02 (4月中旬頃 / Mid-April)
* **日本語:** 記録モードとCSV出力を実装
* **English:** Implemented Record Mode and CSV export capabilities.

### v0.91 (2025/04/20)
* **日本語:** (2025/12/21追記) Python版が4択以外の形式に対応。これ以降Python版はアップデートがない
* **English:** (Note added 2025/12/21): The Python edition added support for quiz formats other than 4-choice. This marks the final update for the Python standalone version.

### v1.01 (2025/04/19)
* **日本語:** * 4択以外の形式に対応
  * 単語範囲の指定が可能に
  * 英語→日本語モードを追加 (2025/12/21追記)多分日本語→英語の誤記。
* **English:**
  * Added support for formats other than 4-choice quizzes.
  * Enabled word range customization.
  * Added English -> Japanese mode. (Note added 2025/12/21: This was likely a typo in the original text for Japanese -> English).

### v1.00 (2025/04/19)
* **日本語:** * 4択クイズ（英語→日本語）を初実装
  * (2025/12/21追記) Python版をhtmlに移行した。初実装という書き方は、間違っていたと思う
* **English:**
  * First release of the 4-choice quiz mode (English to Japanese).
  * (Note added 2025/12/21): Ported the Python version to HTML. Describing this version as the "first release" was probably a misnomer in hindsight.

### v0.90 (2025/04/19)
* **日本語:** (2025/12/21追記) Pythonで4択クイズを作成
* **English:** (Note added 2025/12/21): Built the baseline 4-choice quiz framework using Python.
