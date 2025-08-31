# 更新履歴 / Changelog

### v2.06 (2025/08/31)
- 過去の正解度が右上に表示されるように  
  - フラッシュカードモードでは表示のみで計算には含まれません  
  - Past correctness is now displayed at the top right  
  - Flashcards are only displayed and not counted in calculations

### v2.05.8 (2025/08/30)
- ABCnumがオフライン時に読み込めない時がある不具合を修正  
  - アプリバージョン4以降で動作  
  - Fixed an issue where ABCnum might not load offline  
  - Works on app version 4 or later

### v2.05.7 (2025/08/27)
- 入力モードで入力中にDキーを押すとダークモードが切り替わるバグを修正  
  - Fixed a bug where pressing the D key in input mode toggled dark mode

### v2.05.6 (2025/08/26)
- 使っている単語リストによって、いやらしいモードが無効になるように  
  - データがなくてエラーになるため  
  - Certain word lists now disable the “naughty mode”  
  - This prevents errors when the data is missing

### v2.05.5 (2025/08/26)
- ばかみたいなタイポを修正  
  - `autocompvare` → `autocomplete`  
  - Fixed a silly typo  
  - `autocompvare` → `autocomplete`

### v2.05.4 (2025/08/25)
- 入力モードで大文字で入力すると不正解扱いになるバグを修正  
  - Fixed a bug where uppercase input in input mode was marked incorrect

### v2.05.3 (2025/08/24)
- Dキーを長押しすると重くなる不具合を修正  
- ダークモード設定時に最初にぴかってなる現象の低減  
  - Fixed performance issue when holding down the D key  
  - Reduced the initial flash when dark mode is enabled
### v2.05 (2025/08/20)
- いやらしいモードのデータをネットに置くことで容量を11%削減  
  - Reduced file size by 11% by moving "tricky mode" data online.

### v2.04.1 (2025/08/15)
- フラッシュカードモードのバグ修正  
  - Fixed bugs in Flashcard mode.
- ショートカットキーの追加(Dキーでダークモード切替, Hか/で一覧表示)  
  - Added shortcuts: D toggles Dark Mode, H or / shows shortcut list.

### v2.04 (2025/08/12)
- フラッシュカードモードを追加  
  - Added Flashcard mode.
- フラッシュカードモードのキーボード対応、URL追加  
  - Improved keyboard support and added URL support for Flashcard mode.

### v2.03.3 (2025/08/11)
- 単語データを工夫することによりファイル容量を11%軽量化  
  - Optimized word data, reducing file size by 11%.

### v2.03.2 (2025/08/11)
- コントラスト比の調整  
  - Adjusted contrast ratio.
- ダークモード時の box-shadow 調整  
  - Adjusted box-shadow in Dark Mode.

### v2.03.1 (2025/08/10)
- CSS 変数化によるファイルサイズの軽量化  
  - Reduced file size using CSS variables.
- 色数の削減  
  - Reduced number of colors.
- ショートカットの追加（Qキーで終了可能）  
  - Added shortcuts (Q key to quit).

### v2.03 (2025/08/08)
- CSV 出力場所を固定化  
  - Fixed the CSV export location.
- CSV アップロード時の脆弱性を修正  
  - Fixed vulnerability in CSV upload.
- その他軽微な内部変更  
  - Other minor internal changes.

### v2.02.1 (2025/08/07)
- バグ修正（条件を逆にしていた問題を修正）  
  - Bug fix (corrected a reversed condition issue).

### v2.02 (2025/08/06)
- CSV 読み込みモードを追加（β版）  
  - Added CSV loading mode (beta).
- 前回間違えた場所を復習可能  
  - Allows reviewing previously incorrect answers.

### v2.01 (2025/07/20)
- バージョンアップ後初回起動時に更新情報を表示  
  - Shows update info on first launch after upgrade.
- 過去バージョンデータをPCから削除  
  - Removes old version data from PC.
- 設定画面で再読込しても設定を保持  
  - Settings persist even after reloading the settings page.

### v2.00.1 (2025/07/20)
- UIの改善  
  - Improved UI.

### v2.00 (2025/07/19)
- URL パラメータ生成方法を変更（破壊的変更）  
  - Changed URL parameter generation method (breaking change).
- リンク生成ダイアログが Esc キーで閉じるように  
  - Link generation dialog can now be closed with Esc key.
- 記録モード・単語入力モード・いやらしいモードの URL パラメーター不具合修正  
  - Fixed issues with URL parameters for Record mode, Input mode, and Tricky mode.
- localStorage に設定保存する機能を削除  
  - Removed saving settings in localStorage.
- ゲーム開始時の負荷を軽減  
  - Reduced load at game start.
- ダークモード改善  
  - Improved Dark Mode.

### v1.10.3 (2025/07/06)
- UI改善、CSS整理  
  - Improved UI and cleaned up CSS.

### v1.10.2 (2025/07/03)
- 内部変更: <code>&lt;label&gt;</code> タグに <code>for</code> 属性追加  
  - Internal change: Added <code>for</code> attribute to <code>&lt;label&gt;</code> tags.

### v1.10.1 (2025/06/28)
- 特定状況でキーが反応しないバグ修正  
  - Fixed bug where keys wouldn't respond in certain situations.
- ダークモード切替時の不具合修正  
  - Fixed issues when toggling Dark Mode.

### v1.10 (2025/06/28)
- いやらしいモード(ABC順で近いものを選択肢に出す)実装  
  - Implemented "Tricky mode" (choices appear near alphabetically).

### v1.09.4 (2025/05/23)
- 再読み込み時の設定競合を改善  
  - Improved settings conflicts on reload.
- UI微修正  
  - Minor UI adjustments.
- URL仕様変更（競合防止）  
  - Changed URL specification to prevent conflicts.

### v1.09.3 (2025/05/23)
- ダークモード改善  
  - Improved Dark Mode.
- 範囲選択インデックスずれ修正  
  - Fixed index offset in range selection.

### v1.09.1 (2025/05/10)
- パンダバグ修正（ダークモード適用の不整合）  
  - Fixed "Panda Bug" (inconsistencies in Dark Mode application).

### v1.09 (2025/05/10)
- ダークモード実装  
  - Implemented Dark Mode.

### v1.08 (2025/05/08)
- 回答表示画面の改善（n択問題のみ）  
  - Improved answer display screen (multiple-choice only).

### v1.07.6 (2025/05/08)
- 設定画面でホバー時に説明表示追加  
  - Added explanations on hover in the settings screen.

### v1.07.5 (2025/05/08)
- 伝説のFALSEバグ修正  
  - Fixed legendary FALSE bug.

### v1.07.4 (2025/05/05)
- 単語範囲方法変更  
  - Changed method for specifying word ranges.
- 範囲下限を含むよう改善  
  - Adjusted to include lower bounds of range.

### v1.07.3 (2025/05/05)
- 単語範囲指定表示方法変更  
  - Changed display method for range selection.

### v1.07.2 (2025/05/05)
- 「分からない」がキー入力で反応しないバグ修正  
  - Fixed bug where "I don't know" didn't respond to key input.
- オート次へ間隔(ms)がクリエ対応  
  - Auto-next interval (ms) now compatible with Creator mode.
- 範囲設定不具合修正  
  - Fixed range setting issue.
- 「コピーしました！」が出ないバグ修正  
  - Fixed bug where "Copied!" message did not appear.

### v1.07.1 (2025/05/04)
- 範囲選択時に自動で下の範囲も変わるよう改善  
  - Adjusted so that lower range changes automatically when selecting a range.

### v1.07 (2025/05/04)
- 設定画面大幅改善  
  - Major improvements to the settings screen.
- 範囲指定バグ修正（リンク変更不可）  
  - Fixed bug in range selection (link couldn't be changed).

### v1.06 (2025/05/04)
- URL で設定指定可能に  
  - Settings can now be specified via URL.
- 「現在の設定でリンク生成」ボタン追加  
  - Added "Generate link with current settings" button.

### v1.05.4 (2025/05/02)
- ゲーム終了/再読み込み時に以前の設定を復元  
  - Restores previous settings on game end/reload.
- 「初期設定に戻す」ボタン追加  
  - Added "Reset to default settings" button.

### v1.05.3 (2025/05/02)
- 単語入力モードで自動フォーカス  
  - Auto-focus in word input mode.

### v1.05.2 (2025/05/01)
- バージョン情報表示機能追加  
  - Added version info display.

### v1.05.1 (2025/04/30)
- 「わからない」が最後に来ないバグ修正  
  - Fixed bug where "I don't know" was not last.

### v1.05 (2025/04/28)
- 文字数カウント機能追加  
  - Added character count.
- 回答表示改善  
  - Improved answer display.
- キータイプ操作のみで可能に  
  - Can operate using only key input.

### v1.04 (2025/04/28)
- 単語入力モード（日本語→英語）追加  
  - Added word input mode (Japanese → English).

### v1.03 (2025/04 中旬)
- 記録モードOFFでも CSV が出るバグ修正  
  - Fixed CSV export even when record mode was off.
- 回答後自動で次に進む機能追加  
  - Added auto-next feature after answering.

### v1.02 (2025/04 中旬)
- 記録モード & CSV 出力実装  
  - Implemented record mode & CSV export.

### v1.01 (2025/04/19)
- 4択以外形式対応  
  - Added support for non-4-choice formats.
- 単語範囲指定可能に  
  - Can specify word ranges.
- 英語→日本語モード追加  
  - Added English → Japanese mode.
