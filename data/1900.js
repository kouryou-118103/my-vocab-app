if (window.内部バージョン === "3") {
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
}    
    if (typeof バージョン === "undefined") {var バージョン = "2.07.2";}//過去バージョンで、アプリ本体でバージョン定義があるため、二重定義を避ける(アプリ本体はconstで定義されている)
    if (typeof アクセス元 === "undefined") {var アクセス元 = "1900";}
    if (typeof ABCnum === "undefined") {var ABCnum = [407,890,881,1057,1212,887,352,68,1674,1332,443,1176,1454,1551,1644,1727,328,476,965,1409,479,746,1013,165,51,435,150,1430,1390,607,301,1060,665,1046,245,469,1161,461,757,311,857,18,300,948,1456,236,1393,581,908,1569,626,1572,1053,1848,1831,1601,1741,984,1066,1291,171,1735,971,671,116,742,1661,1339,1370,1497,1729,1629,1051,647,1595,298,1723,421,100,1010,1286,898,1360,296,243,1564,1397,1033,1229,1224,1254,1833,149,1129,1275,564,185,81,391,483,1148,1411,99,1890,866,1404,1587,1172,109,264,679,558,1869,43,1618,1310,777,24,638,1682,1683,1238,1302,488,1778,1354,96,1068,297,364,362,1420,1466,1529,344,445,1318,1672,1695,1361,1183,1719,900,1064,577,1273,19,1762,1096,722,240,865,599,1649,439,1382,249,44,1253,431,872,1077,1465,1423,1062,486,712,771,13,972,888,141,1568,121,1656,819,1015,930,1284,1133,312,424,1067,1602,1563,637,1177,725,11,154,1894,1289,30,498,1093,1152,1264,255,1132,646,859,1449,894,1037,140,1032,1694,1448,1593,332,130,139,1342,572,1810,715,1534,1164,1478,641,1413,143,447,861,1050,454,33,377,658,524,1467,838,552,1442,1883,131,1431,1515,481,1669,327,705,489,250,376,282,1213,177,370,1531,145,1687,413,1757,1722,1632,1187,1486,1377,409,338,1657,372,436,769,1278,1781,157,1763,1647,164,350,59,80,784,1761,1485,1337,277,858,582,1811,1835,683,623,699,1169,1110,1190,629,1319,697,1384,1002,892,686,31,1882,1818,1878,1300,653,1790,1639,596,1834,1432,540,604,976,1437,612,1556,42,29,667,1418,1652,1447,361,341,1536,650,385,1396,485,1313,1192,1867,35,1181,1222,1693,738,197,309,848,288,680,98,1718,585,1326,1251,136,1194,1243,226,1335,261,1040,1743,1460,1870,933,147,1863,1561,223,772,1874,1707,79,1841,1245,410,511,1000,1359,783,428,401,477,1583,57,755,545,1859,943,347,225,21,773,117,727,1204,1509,1082,1153,180,356,1546,1856,615,379,547,1048,1795,1208,1140,465,169,580,1365,1405,40,785,676,73,1720,1545,53,329,47,606,1440,1023,58,181,460,1237,531,877,822,1293,94,926,306,1383,467,1429,945,678,709,928,1348,1607,205,1446,353,292,934,1435,1136,985,1312,335,825,935,233,227,1197,1149,1482,1766,538,1847,1170,689,1643,333,850,493,1347,1751,994,1659,289,1252,1036,1371,989,1783,1191,1782,1146,276,1666,1118,1155,1127,1880,1673,1346,1014,85,367,375,1651,263,1173,1812,1678,1540,1851,1852,1421,868,414,1588,954,1771,326,1453,412,1205,1168,909,618,83,802,762,1184,496,828,601,603,408,1769,359,110,166,1425,70,6,510,422,1775,1510,823,184,158,704,1407,239,1042,947,113,37,337,925,921,211,714,670,438,1022,568,61,597,463,1087,716,224,390,1637,1500,521,472,1871,870,162,508,1109,1113,1501,512,1123,856,1255,270,285,1631,801,912,1777,373,1877,1323,423,556,530,91,1857,380,7,1088,685,1620,733,208,56,1855,1806,644,64,917,651,1297,991,294,1641,613,1367,1389,509,1626,1,1375,228,1768,198,1246,1445,206,963,1459,1760,864,48,383,137,1650,1368,537,405,388,1240,880,1697,1817,765,878,677,964,1104,222,587,574,992,1543,1736,1710,885,1889,1676,217,1756,845,153,1327,1025,1086,656,274,195,1854,1689,938,761,1554,1731,200,820,536,351,827,1298,1776,1784,708,514,175,386,1228,494,316,1452,1838,952,1585,1441,1325,1590,631,1386,1433,5,763,1239,946,1058,648,682,1381,1387,1506,1071,1789,753,1285,548,815,1065,591,515,487,490,1819,1005,1470,970,16,662,84,609,26,39,645,444,1533,1600,144,1316,220,1481,1462,1518,867,129,1457,1474,1134,281,1414,1352,1211,1699,128,17,1886,1017,836,1090,1009,588,995,1115,1351,1333,579,55,793,830,1502,1512,1059,1544,996,371,816,1182,791,542,1752,1016,901,1305,978,817,1265,1532,247,790,1322,1821,754,392,118,1019,267,1007,330,1575,713,1324,1807,1668,1263,1045,93,1436,1725,818,1503,1366,891,571,36,1845,126,101,1438,1283,1899,663,535,290,1171,1279,1256,808,92,768,1434,474,478,1233,450,382,1875,459,196,610,393,879,1455,1463,1424,955,1489,1338,317,1091,1364,1507,452,595,1099,1369,1225,622,1250,1095,1596,806,1189,133,389,1594,1137,903,1035,813,853,932,694,400,884,1349,1167,106,1636,863,517,1550,562,730,1281,1400,1028,258,1493,1513,1301,397,38,425,1296,786,232,1186,1499,1813,108,1797,434,787,1041,1061,931,1597,871,826,283,902,1336,1633,1054,1011,253,1671,781,1576,1021,1210,1865,735,1290,1667,1345,1557,1468,1785,798,1473,1450,194,621,949,420,1802,89,979,1426,1516,268,1662,1230,998,216,743,837,1362,1116,654,1800,340,360,770,1328,751,503,1138,1538,252,788,1214,1537,1891,1083,10,1846,706,1764,1520,66,1896,88,1826,1076,744,703,1770,1055,778,1085,1570,398,1655,1232,1765,576,1559,1385,1092,251,75,1341,1379,1343,910,1122,1139,62,1029,1272,739,681,1226,155,1815,416,695,1864,1820,1611,1098,981,1144,1135,803,549,114,403,1717,1612,747,659,1207,219,834,745,929,504,262,1376,526,840,533,254,756,1160,170,473,797,1024,1772,215,999,134,1744,1143,201,187,313,1259,1242,448,630,1307,922,1073,1709,314,911,1388,534,975,668,41,1548,977,643,1234,690,1523,1158,1223,1102,1128,1276,272,462,707,500,1374,427,1126,726,723,1881,1249,1215,688,702,701,1853,804,1830,583,1097,570,202,209,1780,1188,920,1664,1549,895,905,156,1159,1303,958,1063,1511,1566,1842,1331,1193,1686,724,178,1464,1428,20,172,49,357,1804,812,520,691,324,257,1700,1528,1080,652,22,1832,1274,1884,1703,1089,1613,318,674,519,299,446,1287,238,321,584,684,915,1392,600,418,620,1202,343,1084,1039,1120,639,988,237,378,348,1472,720,1522,174,1681,491,1356,1410,1079,657,779,698,433,1801,1574,1320,1074,1399,1475,805,286,1521,1269,1527,1713,466,666,25,182,1539,1142,1828,1218,1728,1843,896,3,1530,9,854,967,1490,693,1541,259,1862,886,904,640,1714,1837,12,23,77,737,1745,1157,269,1610,273,554,231,1519,1726,1887,1897,189,569,1609,969,937,611,1496,555,1698,560,749,1483,1408,1794,417,1258,1798,675,875,941,889,1334,95,882,1526,82,1236,1724,395,1711,246,1822,235,835,740,1260,1321,28,1179,700,455,973,295,750,1401,561,883,1451,287,437,212,758,893,961,1114,349,839,1108,127,442,307,1645,396,458,950,1773,50,457,464,1304,919,1081,1759,120,851,1231,1634,1787,1030,1885,1180,132,1295,1484,304,191,1730,1850,1684,441,1038,1628,731,1879,1898,471,336,1706,1340,470,1200,1552,598,1444,1823,125,1646,1654,432,193,1627,1175,323,124,1892,734,1504,475,305,320,1317,1372,499,411,1217,1220,1003,54,1031,1788,628,1196,248,1141,846,275,1277,842,968,551,1675,710,419,1508,1355,1562,752,1791,940,1605,982,782,60,810,484,1573,1755,1105,1893,1203,1814,906,1895,897,322,1329,74,1163,1571,759,1630,800,1860,1858,874,849,1677,1517,814,914,1147,1816,1416,190,345,899,138,1617,1476,1282,1525,480,374,1560,528,468,1130,167,913,492,319,1162,404,736,1799,265,1598,1535,1581,796,518,532,1803,2,1653,525,566,1873,1412,616,387,833,953,1199,1439,1257,1398,1767,1121,430,302,1288,426,774,241,608,242,760,1227,1505,1056,1201,204,1786,69,1604,1608,399,168,956,260,183,1734,1827,284,160,987,1480,1779,1685,1740,1125,1567,1716,936,502,32,507,1078,1103,71,1221,541,557,721,1584,1614,1599,1131,1748,1027,188,1419,339,617,624,821,1357,962,1619,406,497,1824,1415,1280,15,1635,563,505,1580,1642,1774,1394,1471,1606,1690,97,959,440,365,1704,456,1753,627,1294,334,1461,529,1808,152,325,625,1623,1691,907,1702,266,1582,860,1044,1391,546,63,1292,766,214,1555,482,1378,1261,1156,1615,1034,1119,732,1012,1174,993,1747,1373,1145,1479,942,847,1008,1043,1165,855,1216,1004,146,602,869,8,1876,14,1805,974,717,1705,844,415,1591,1248,1829,1696,578,1553,673,1344,52,280,661,655,1350,1688,957,924,1209,1578,230,34,331,384,495,1311,916,1648,1494,605,660,279,986,271,632,811,983,923,173,997,1577,199,1616,381,1402,527,767,649,1267,122,366,799,614,293,553,161,1749,780,1742,221,218,148,1754,516,1679,792,111,795,107,1001,87,1380,1592,1358,1866,1624,728,1100,966,1868,135,1330,72,1792,451,1514,1026,1524,1542,1266,1849,1047,1491,46,278,1018,104,86,90,642,951,1663,794,1737,692,1124,103,115,687,355,939,594,862,354,1839,513,1621,1498,358,841,1888,1793,1579,636,192,1206,593,523,1443,1271,1692,1270,1670,1094,1721,1589,1622,1558,1660,741,873,1315,369,1495,829,539,151,719,1809,927,619,1715,711,1314,78,346,1732,453,1262,832,1075,1219,809,229,764,1395,1422,1106,1625,1069,1836,1680,1299,1244,1844,1020,567,244,789,1708,179,1049,1488,1308,203,402,1353,1603,1738,586,960,501,1861,159,1638,1658,1052,718,1492,1640,1166,1825,27,1306,102,876,1363,303,76,1247,1796,449,1565,1072,1235,234,123,1758,186,633,256,112,550,1117,559,1151,918,1701,176,394,1309,210,308,67,1178,1469,315,672,590,729,776,748,1746,522,1458,1406,65,1185,669,119,291,45,1427,506,592,664,1417,1268,1586,696,990,575,163,634,105,635,1070,1487,1840,342,1547,310,1665,1112,142,1198,213,1477,1712,1101,1739,807,207,368,1733,1195,824,831,544,843,1006,573,944,4,1403,775,589,980,1150,1750,852,363,429,565,1107,1241,543,1872,1154,1111,1900];}
    //バージョン4以上で動作
    var サポートバージョン=["3","4"]
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
    var usersettings = {
      showHistory: localStorage.getItem("showHistory") === null ? true : localStorage.getItem("showHistory") === "true",
      saveResults: localStorage.getItem("saveResults") === null ? true : localStorage.getItem("saveResults") === "true",
      leave_confirmation: localStorage.getItem("leave_confirmation") === null ? true : localStorage.getItem("leave_confirmation") === "false"
    };
    let mark_タイトル = ``;
    let mark = "";

var 利用者内部版 = (typeof 内部バージョン !== "undefined") ? 内部バージョン : null;
if (!(サポートバージョン.includes(利用者内部版))) {
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
  const dl = hintElement.querySelector("dl.shortcuts");
  if (dl && !Array.from(dl.querySelectorAll("dt")).some(dt => dt.textContent === "S")) {
    const dt = document.createElement("dt");
    dt.textContent = "S";
    const dd = document.createElement("dd");
    dd.textContent = "設定を表示";
    dl.appendChild(dt);
    dl.appendChild(dd);
  }
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
  if (event.key.toLowerCase() === "s" && document.activeElement !== document.getElementById("userInput")) {
    const dialog = document.querySelector('.update-dialog');
    if (dialog) {
      dialog.remove();
    } else {
    showSettingsDialog();
  }
}});
document.addEventListener('keyup', (event) => {
    var hintElement = document.getElementById('shortcut-hint');
    if (event.key === '/' || event.key.toLowerCase() === 'h') {
        hintElement.style.display = 'none';
    }
  if (event.key === "d" && document.activeElement !== document.getElementById("userInput")) {
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
if (アクセス元==="1000" && いやらしいモード){
  alert("想定していないエラーが発生しました。OKで再読込します。詳細:熟語モードでいやらしいモードがONになっている")
  location.reload()
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
      let wordStats = JSON.parse(localStorage.getItem("wordStats") || "{}");
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
      let 過去正解 = 0;
      let 過去出題 = 0;
      if (usersettings.saveResults){
      if (出題方向 == "en-ja") {
        mark = getWordMark(表示語句, wordStats);
        過去正解 = wordStats[表示語句] ? wordStats[表示語句].correct : 0;
        過去出題 = wordStats[表示語句] ? wordStats[表示語句].total : 0;
      } else {
        mark = getWordMark(正解, wordStats);
        過去正解 = wordStats[正解] ? wordStats[正解].correct : 0;
        過去出題 = wordStats[正解] ? wordStats[正解].total : 0;
      }
      mark_タイトル = `過去の正解割合です。${過去出題}問問中${過去正解}問正解(${Math.round(過去正解/過去出題*100)}%)`;
      }else{
      mark_タイトル = ``;
      }
      if (document.getElementById("flashcard-mode").checked) {
      var totalCount = 表示語句範囲.length;
      var solvedCount = totalCount - 残り問題番号.length;
var html = `
  <p style="display:flex; align-items:center;">
    <span>${escapeHTML(solvedCount)}/${escapeHTML(totalCount)}</span>
    <span style="margin-left:auto; font-size:1.5em;" title="${mark_タイトル}">${mark}</span>
  </p>
  <p style="font-size: 2em; font-weight: bold; margin-bottom: 1.5em;">${escapeHTML(表示語句)}</p>
  <p id="flashcard-meaning" style="font-size: 1.5em; display:none; margin-bottom: 1.5em;">${escapeHTML(正解)}</p>

  <div style="margin-top: 1em; display: flex; flex-direction: row; gap: 1em; flex-wrap: wrap;">
    <button style="padding: 0.5em 1.2em; font-size: 1em;" onclick="document.getElementById('flashcard-meaning').style.display='block'">表示</button>
    <button style="padding:0.5em 1.2em;font-size:1em;" onclick="markKnown(${問題番号})">✅覚えた</button>
    <button style="padding:0.5em 1.2em;font-size:1em;" onclick="markUnknown(${問題番号})">❌わからない</button>
  </div>
`;
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
  html += `<p style="display:flex; align-items:center;"><strong>${escapeHTML(表示語句)}</strong>を英語で？<span style="margin-left:auto; font-size:1.2em;" title="${mark_タイトル}">${mark}</span></p>`
  html += `<div class="hint">ヒント：${正解.length}文字、最初の文字は「${正解[0]}」</div>`;
  html += `<input type="text" id="userInput" autofocus oninput="updateCharCount()" autocomplete="off">`;
  html += `<p id="charCount">現在の文字数: 0文字</p>`;
  html += `<button onclick="submitAnswer('${escapeHTML(表示語句)}', '${escapeHTML(正解)}', ${問題番号})">送信</button>`;      } else {
  html += `<p style="display:flex; align-items:center;"><strong>${escapeHTML(表示語句)}</strong> は${出題方向 === "en-ja" ? "日本語" : "英語"}で？<span style="margin-left:auto; font-size:1.2em;" title="${mark_タイトル}">${mark}</span></p>`;
        options.forEach((item, i) => {
          html += `<div class="option"><button onclick="checkAnswer('${escapeHTML(item)}', '${escapeHTML(正解)}', ${問題番号})">${i + 1}. ${escapeHTML(item)}</button></div>`;
        });
      }
      document.getElementById("quiz").innerHTML = html;
    }

    function submitAnswer(表示語句, 正解, 問題番号) {
      let wordStats = JSON.parse(localStorage.getItem("wordStats") || "{}");
      var userInput = document.getElementById("userInput").value.trim();
      var selected = userInput;
      var isCorrect = normalizeForAnswer(selected) === normalizeForAnswer(正解);
      var 正誤 = isCorrect ? "○" : "×";
      if (記録モード || 入力モード) {
        全結果.push(`${範囲下 + 問題番号 + 1},${escapeHTML(表示語句)},${escapeHTML(正解)},${escapeHTML(selected)},${正誤}`);
      }

var result = `<div class="result-block">`;
  let word=""
  if (出題方向=="ja-en"){
    word = 正解
  }else{
    word = 英語[日本語.indexOf(正解)]
  }
  if(usersettings.saveResults){
  if (!wordStats[word]) {
    wordStats[word] = { correct: 0, total: 0 };
  }
  wordStats[word].total += 1;
  }
if (selected === 正解) {
  正解回数++;
  result += `<p class="correct">✅ 正解！</p>`;
  result += `<p class="question">${escapeHTML(表示語句)}<br>${escapeHTML(selected)}</p>`;
  if(usersettings.saveResults){
  wordStats[word].correct += 1;
  }
} else {
  var userLang = 日本語[英語.indexOf(selected)] ?? "不明";
  result += `<p class="incorrect">❌ 不正解</p>`;
  result += `<p class="question">${escapeHTML(表示語句)}<br>${escapeHTML(正解)}</p>`;
  result += `<p>${escapeHTML(userLang)}<br>${escapeHTML(selected).replace(/(.{100})/g, '$1<br>')}</p>`;  ミス記録.push({ 表示語句, 正解, あなたの答え: selected });
}
console.log("保存直前", wordStats);
if(usersettings.saveResults){
localStorage.setItem("wordStats", JSON.stringify(wordStats));
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
  let word = 出題方向 == "ja-en" ? answer : 英語[日本語.indexOf(answer)];
  if (usersettings.saveResults){
  let wordStats = JSON.parse(localStorage.getItem("wordStats") || "{}");
  if (!wordStats[word]) wordStats[word] = { correct: 0, total: 0 };
  wordStats[word].total += 1;
  if (isCorrect) wordStats[word].correct += 1;
  localStorage.setItem("wordStats", JSON.stringify(wordStats));
  }
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
  document.getElementById("rangeHigh").value = urlParams.rangeHigh || parseInt(アクセス元);

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
function normalizeForAnswer(s) {
  if (s == null) return "";
  return s.normalize("NFKC").trim().toLowerCase();
}
function getWordMark(word, stats) {
  stats = stats || {};        // stats が null の場合に備える
  if (!stats[word] || !stats[word].total || !usersettings.showHistory) return ""; // null 安全
  let rate = stats[word].correct / stats[word].total;
  if (rate >= 0.8) return "☀️";
  if (rate >= 0.5) return "⛅";
  if (rate >= 0.2) return "🌧️";
  return "⚡";
}
const versionInfo = document.getElementById("versionInfo");
if (versionInfo) {
  initializeVersionInfo(versionInfo);
  protectVersionInfo(versionInfo);
} else {
  console.warn("versionInfo が見つかりません。MutationObserver を設定します");
  observeForVersionInfo();
}

function initializeVersionInfo(versionInfo) {
  console.log("versionInfo を初期化します");

  const v = (typeof window.バージョン !== "undefined") ? window.バージョン : "不明";
  const iv = (typeof window.内部バージョン !== "undefined") ? window.内部バージョン : "不明";

  versionInfo.innerHTML = `
    v${v}(${iv})
    | <a href="javascript:void(0)" onclick="toggleUpdateLog(); return false;">更新情報を見る</a>
    | <a href="javascript:void(0)" id="openSettings">設定</a>
  `;
  const btn = document.getElementById("openSettings");
  if (btn) btn.addEventListener("click", () => {
    showSettingsDialog();
  });

  if (typeof showUpdateNoticeIfNeeded === "function") {
    showUpdateNoticeIfNeeded();
  }
  protectVersionInfo(versionInfo);
}

function observeForVersionInfo() {
  if (!document.body) {
    document.addEventListener("DOMContentLoaded", () => observeForVersionInfo(), { once: true });
    return;
  }

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        const versionInfo = document.getElementById("versionInfo");
        if (versionInfo) {
          initializeVersionInfo(versionInfo);
          observer.disconnect();
          break;
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function showSettingsDialog() {
  if (document.querySelector('.update-dialog')) return;
  const dialog = document.createElement('div');
  dialog.className = 'update-dialog';
  dialog.style.cssText = `
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex; align-items: center; justify-content: center;
    z-index: 1000;
  `;

  dialog.innerHTML = `
    <div style="
      background: var(--cbg);
      color: var(--t);
      padding: 20px;
      width: 600px;
      height: 400px;
      overflow-y: auto;
      border-radius: 10px;
      box-shadow: var(--csh);
      display: flex;
    ">
      <div style="flex: 0 0 150px; border-right: 1px solid var(--t); padding-right: 10px;">
        <h2>設定</h2>
        <ul id="settingsTabs" style="list-style: none; padding: 0; margin: 0;">
          <li data-target="sec-display" style="cursor: pointer; padding: 5px;">記録・表示</li>
          <li data-target="testing" style="cursor: pointer; padding: 5px;">クイズ中</li>
          <li data-target="style" style="cursor: pointer; padding: 5px;">スタイル</li>
          <li data-target="other" style="cursor: pointer; padding: 5px;">その他</li>
        </ul>
      </div>
      <div style="flex: 1; padding-left: 20px;">
        <section id="sec-display" class="settings-section">
          <h3>記録・表示</h3>
          <label><input type="checkbox" id="showHistory"> 過去の記録を表示</label>
          <p>すべてのモードにおいて、右上に過去の正解率が表示されます。<br>(80%以上:☀️ 50%以上:⛅ 20%以上:🌧️ それ未満:⚡)</p>
          <label><input type="checkbox" id="saveResults"> 結果を記録</label>
          <p>この設定をオフにしても上記のアイコンは表示されます。</p>
          <button id="clearAll" style="margin-top: 10px;">すべて記録を消去</button>
          <p>いままでのすべての記録を消去します。もとに戻すことはできません。</p>
        </section>
        <section id="testing" class="settings-section">
          <h3>クイズ中</h3>
          <label><input type="checkbox" id="leave_confirmation"> ページ離脱確認を有効にする</label>
          <p>クイズ中にタブを閉じようとすると警告を出します。</p>
        </section>
        <div style="text-align: right; margin-top: 1em;">
          <button style="
            background: var(--bbg);
            color: var(--bt);
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
          " onclick="this.closest('.update-dialog').remove()">閉じる</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(dialog);

  // タブ切り替え処理
  const tabs = dialog.querySelectorAll('#settingsTabs li');
  const sections = dialog.querySelectorAll('.settings-section');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      sections.forEach(sec => sec.style.display = 'none');
      tabs.forEach(t => t.style.fontWeight = 'normal');
      const target = dialog.querySelector('#' + tab.dataset.target);
      if (target) target.style.display = 'block';
      tab.style.fontWeight = 'bold';
    });
  });
  // 初期タブを強調
  tabs[0].style.fontWeight = 'bold';

  // 既存の設定保存処理はそのまま
  const defaults = { showHistory: true, saveResults: true, leave_confirmation:false};
  const showHistoryVal = localStorage.getItem("showHistory");
  const saveResultsVal = localStorage.getItem("saveResults");
  document.getElementById("showHistory").checked = showHistoryVal === null ? defaults.showHistory : showHistoryVal === "true";
  document.getElementById("saveResults").checked = saveResultsVal === null ? defaults.saveResults : saveResultsVal === "true";
  document.getElementById("leave_confirmation").checked = leave_confirmation === null ? defaults.leave_confirmation : showHistoryVal === "true";

  document.getElementById("showHistory").addEventListener("change", e => {
    usersettings.showHistory = e.target.checked;
    localStorage.setItem("showHistory", e.target.checked);
  });
  document.getElementById("saveResults").addEventListener("change", e => {
    usersettings.saveResults = e.target.checked;
    localStorage.setItem("saveResults", e.target.checked);
  });
  document.getElementById("clearAll").addEventListener("click", () => {
    if (confirm("本当にすべての記録を消去しますか？")) {
      localStorage.removeItem("wordStats");
      alert("記録を消去しました");
    }
  });
  document.getElementById("leave_confirmation").addEventListener("change", e => {
    usersettings.leave_confirmation = e.target.checked;
    localStorage.setItem("leave_confirmation", e.target.checked);
  });

}
let __viGuard = false;
function protectVersionInfo(el) {
  if (!el || el.__viObserved) return;
  el.__viObserved = true;

  // 変更監視して、「設定」リンクが消されたら復元
  const obs = new MutationObserver(() => {
    if (__viGuard) return;
    if (!el.querySelector('#openSettings')) {
      __viGuard = true;
      try {
        initializeVersionInfo(el);
      } finally {
        __viGuard = false;
      }
    }
  });
  obs.observe(el, { childList: true, subtree: true });

  // HTML側の setTimeout(…, 500) 対策として念のため遅延復元も
  setTimeout(() => {
    if (!el.querySelector('#openSettings')) {
      __viGuard = true;
      try {
        initializeVersionInfo(el);
      } finally {
        __viGuard = false;
      }
    }
  }, 700);
}
  window.addEventListener("beforeunload", function (event) {
    if (ゲーム中 && leave_confirmation) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
