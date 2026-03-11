import { useState, useEffect } from "react";

const episodes = [
  {
    id: 1, book: "創世記", title: "天地創造", emoji: "🌍", difficulty: "かんたん", verse: "創世記 1章",
    sticker: "✨NEW✨", stickerColor: "#ff6ec7",
    content: [
      { day: "はじまりのはじまり", icon: "🌑", original: "初めに、神は天と地を創造された。", gal: "ねえちょっと待って！？世界って最初マジで真っ暗で何もない状態だったんだけど、神様が急に「光よ、あれ！」って言ったら光できちゃったの🌟 え、声で光作れるの！？ボイスが神すぎる件について。" },
      { day: "1日目〜2日目", icon: "💧", original: "神は光を見て、良しとされた。", gal: "光を見た神様、「あ、いい感じじゃん✨」ってなって、光と闇を分けたの。で次の日は空作って、水を上と下に分けた。これって実質インテリアのゾーニング案件じゃない？センス神すぎる🌊" },
      { day: "3日目", icon: "🌿", original: "地は草を芽生えさせよ。", gal: "陸と海を分けて、植物もドーンって生やした。しかも1日で！まじリフォームの神じゃん🌱 草木が「え急すぎ」ってなってそうなんだけど笑" },
      { day: "4日目", icon: "🌙", original: "神は二つの大きな光る物と星を作られた。", gal: "太陽・月・星を全部配置したんだけど、これもう宇宙のレイアウト決めてる感じじゃん。神様って実は天才インスタグラマーだったのでは？🌙⭐ 配置のセンスが神（そのまんま）" },
      { day: "5日目", icon: "🐟", original: "生き物が水の中に群がれ、鳥は地の上を飛べ。", gal: "魚と鳥を作って「増えろ〜！」って言ったの。え、増殖コマンド使えるの？！チートすぎる🐟🦅 しかも「ちゃんと増えてね」って祝福まで与えてる。神様めちゃ親切じゃん。" },
      { day: "6日目", icon: "👑", original: "神は自分のかたちに人を創造された。", gal: "動物全部作った後、最後に人間作ったんだけど、なんと神様の「かたちに」作ったらしくて。え、私たちって神のセルフィーじゃん！？💅 これ知ったら自己肯定感爆上がりなんだけど。" },
      { day: "7日目", icon: "😴", original: "神は第七日目を祝福し、聖別された。", gal: "全部作り終わったら神様が休んだの。神様でも疲れるんかい！笑 でもこれが「日曜日は休もう」文化の起源なんだって🛌 休息を神聖なものにしたのマジで神（二重の意味で）" },
    ],
  },
  {
    id: 2, book: "創世記", title: "アダムとイブ", emoji: "🍎", difficulty: "ちょいムズ", verse: "創世記 2〜3章",
    sticker: "💔修羅場", stickerColor: "#ff3366",
    content: [
      { day: "楽園の話", icon: "🌺", original: "主なる神は東の方のエデンに園を設け、そこに人を置かれた。", gal: "神様が超豪華な庭園「エデン」を作って、アダムをそこに住まわせたの。食べ物は全部タダで、めちゃ平和で、まじパラダイス✨ ただ一個だけNGルールがあって..." },
      { day: "禁断の木", icon: "🌳", original: "善悪の知識の木からは、決して食べてはならない。", gal: "「この木の実だけは絶対食べちゃダメ！食べたら死ぬよ！」って神様に言われてたの。でもさ、「食べちゃダメ」って言われると食べたくなるよね？！人間の心理をついてくるこの構成、神様わかってたんかな🤔" },
      { day: "イブ登場", icon: "👸", original: "神はアダムを深く眠らせ、あばら骨の一つを取り、女を造られた。", gal: "アダムが「俺だけ寂しい〜」ってなったら、神様がアダムを眠らせてあばら骨1本取って女性（イブ）を作ったの。え、あばら骨から人間！？普通に怖いんだけど笑 でもアダムは「最高じゃん！！」ってなったらしい😂" },
      { day: "蛇の陰謀", icon: "🐍", original: "蛇は言った。「決して死にはしない。」", gal: "ここで蛇が登場して、イブに「その実食べても死なないよ〜むしろ神様みたいに賢くなれるよ〜」ってそそのかすの。完全に悪い先輩の誘い方じゃん🐍 でもイブ、信じちゃった..." },
      { day: "禁断の果実", icon: "🍎", original: "女が見ると、その木は食べるのに良く、目には美しく、賢くなるように唆した。", gal: "見たら美味しそうだし、なんか賢くなれるらしいし...って感じで食べちゃったの🍎 しかもアダムにも「食べてみて！」って渡して。これ現代でいうと彼氏を悪の道に引き込む案件じゃん。" },
      { day: "楽園追放", icon: "😭", original: "主なる神は、彼をエデンの園から追い出された。", gal: "バレた途端に神様がガチギレして、エデンから追い出されちゃったの😭 しかもその瞬間から「恥ずかしい」って感情が生まれて服着るようになったらしくて。人類の羞恥心の始まりがこれって、なんか笑えなくなってきた..." },
    ],
  },
  {
    id: 3, book: "創世記", title: "ノアの箱舟", emoji: "🚢", difficulty: "かんたん", verse: "創世記 6〜9章",
    sticker: "🌈感動", stickerColor: "#a855f7",
    content: [
      { day: "人間ヤバすぎ問題", icon: "😤", original: "主は、地上に人の悪が増大し、心に思うことが常に悪いことだけを見て、後悔された。", gal: "人間たちが悪いことしすぎて、神様が「あ〜もう作らなきゃよかった」ってマジで後悔したの😤 神様ですら後悔するんだ...ってなるよね。でもノアだけは「この人ええやん」って思われてたから助かる話。" },
      { day: "神様のオーダー", icon: "📐", original: "あなたはゴフェルの木で箱舟を造りなさい。", gal: "神様がノアに「大洪水起こすから箱舟作って！サイズはこれで！」って超具体的な設計図を渡したの。神様からのDIY依頼案件🔨 しかも「動物も2匹ずつ乗せてね」という謎の条件付き。" },
      { day: "乗船完了", icon: "🐘", original: "清い動物はすべて七つがい、清くない動物は一つがい、それぞれ乗り込んだ。", gal: "動物を全種類2匹ずつ集める作業、想像しただけで大変すぎない？🦁🐘🦒 ライオンも象もキリンも全部乗せた。カオスすぎて笑えない。船の中のにおいヤバそう笑" },
      { day: "大洪水", icon: "🌊", original: "四十日の間、大地に雨が降り続いた。", gal: "40日間ずーっと雨！！山が全部沈むくらいの水量で、ノアの家族と動物たち以外みんなアウトに。これ映画だったら絶対ヒットするやつじゃん🌊 実際映画になってるけど。" },
      { day: "水が引く", icon: "🕊️", original: "ノアは鳩を放った。鳩はオリーブの葉をくわえて戻ってきた。", gal: "水が引いてきたか確認するために鳩を飛ばしたら、オリーブの葉っぱをくわえて帰ってきたの🕊️ これが「平和の鳩」の起源！知らなかった〜。ノアもガッツポーズしたと思う。" },
      { day: "虹との約束", icon: "🌈", original: "わたしは雲の中にわたしの虹を置く。これはわたしと大地の間の契約のしるしとなる。", gal: "最後に神様が「もう二度と大洪水はしないよ！その証拠に虹を置くね🌈」って約束したの。虹ってそんな深い意味あったの！？これ知ってから虹見るたびに泣きそうになるんだけど。" },
    ],
  },
  {
    id: 4, book: "創世記", title: "バベルの塔", emoji: "🗼", difficulty: "ちょいムズ", verse: "創世記 11章",
    sticker: "😂ウケる", stickerColor: "#f59e0b",
    content: [
      { day: "みんな同じ言葉", icon: "🗣️", original: "世界中は同じ言葉を使い、同じように話していた。", gal: "昔は世界中の人間が全員同じ言語を話してたらしいの。え、翻訳ツールいらない時代！？🌍 コミュニケーションも余裕だし、チームワークが神がかってたみたい。" },
      { day: "天まで届く塔を作ろうぜ", icon: "🏗️", original: "さあ、天まで届く塔のある町を建て、有名になろう。", gal: "「天まで届く塔作って有名になろうぜ！」って人間たちがノリノリで建設開始したの🏗️ 現代でいうと「フォロワー増やしたい」的なバイブス。自己顕示欲は昔からあったんだね笑" },
      { day: "神様、ちょっと待って", icon: "😮", original: "主は降って来て、人の子らが建てた町と塔を見た。", gal: "それを見た神様が「え！？人間たちが本気出したらヤバいことになりそうじゃん」ってなったの😮 神様が人間のポテンシャルを恐れてる構図、なんかエモくない？" },
      { day: "言語バラバラ作戦", icon: "🌐", original: "主はそこで彼らの言葉を混乱させ、彼らをそこから全地に散らされた。", gal: "神様の解決策→みんなの言語をバラバラにする！！突然言葉が通じなくなったら建設どころじゃないよね笑 これが世界中に違う言語がある理由らしくて、まじで知らなかった🌐" },
    ],
  },
];

const GLITTER = ["✦","★","✿","♡","☆","✪","♥","✶","⊹","✸","❋","◈"];

function Glitter() {
  const [items] = useState(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      char: GLITTER[i % GLITTER.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 13 + 7,
      dur: Math.random() * 3 + 2,
      delay: Math.random() * 4,
      color: ["#ff6ec7","#ff9de2","#ffb3e6","#e040fb","#fff","#ffec80","#c084fc","#f9a8d4"][i % 8],
    }))
  );
  return (
    <>
      {items.map(g => (
        <div key={g.id} style={{
          position: "fixed", left: `${g.x}%`, top: `${g.y}%`,
          fontSize: g.size, color: g.color, pointerEvents: "none", zIndex: 1,
          animation: `glitterFloat ${g.dur}s ease-in-out ${g.delay}s infinite`,
          textShadow: `0 0 8px ${g.color}`,
          userSelect: "none",
        }}>{g.char}</div>
      ))}
    </>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [showOriginal, setShowOriginal] = useState(false);
  const [completedEpisodes, setCompletedEpisodes] = useState([]);
  const [animating, setAnimating] = useState(false);

  const selectEpisode = (ep) => { setSelectedEpisode(ep); setCurrentScene(0); setShowOriginal(false); setScreen("read"); };
  const nextScene = () => {
    if (currentScene < selectedEpisode.content.length - 1) {
      setAnimating(true);
      setTimeout(() => { setCurrentScene(c => c + 1); setShowOriginal(false); setAnimating(false); }, 220);
    } else {
      if (!completedEpisodes.includes(selectedEpisode.id)) setCompletedEpisodes(p => [...p, selectedEpisode.id]);
      setScreen("complete");
    }
  };
  const prevScene = () => {
    if (currentScene > 0) {
      setAnimating(true);
      setTimeout(() => { setCurrentScene(c => c - 1); setShowOriginal(false); setAnimating(false); }, 220);
    }
  };

  const scene = selectedEpisode?.content[currentScene];
  const progress = selectedEpisode ? ((currentScene + 1) / selectedEpisode.content.length) * 100 : 0;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg,#ffe0f5 0%,#ffc8ee 35%,#ffb0e8 65%,#ffd6f0 100%)", fontFamily: "sans-serif", color: "#1a0010", position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Noto+Sans+JP:wght@400;700;900&display=swap');
        * { box-sizing: border-box; }
        @keyframes glitterFloat { 0%,100%{transform:translateY(0) rotate(0deg) scale(1);opacity:.7} 33%{transform:translateY(-12px) rotate(15deg) scale(1.15);opacity:1} 66%{transform:translateY(-6px) rotate(-10deg) scale(.9);opacity:.8} }
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes popIn { from{transform:scale(.85);opacity:0} to{transform:scale(1);opacity:1} }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes heartbeat { 0%,100%{transform:scale(1)} 15%{transform:scale(1.18)} 30%{transform:scale(1)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .bounce { animation: bounce 2s ease-in-out infinite; }
        .pop { animation: popIn .35s cubic-bezier(.34,1.56,.64,1) forwards; }
        .heartbeat { animation: heartbeat 1.5s ease infinite; }
        .gal-card { background:white; border:3px solid #ff6ec7; border-radius:20px; box-shadow:4px 4px 0 #ff6ec7,0 8px 24px rgba(255,110,199,.2); position:relative; transition:transform .2s,box-shadow .2s; cursor:pointer; }
        .gal-card:hover { transform:translateY(-3px) rotate(.4deg); box-shadow:6px 6px 0 #ff6ec7,0 14px 32px rgba(255,110,199,.3); }
        .sticker { display:inline-block; padding:3px 11px; border-radius:20px; font-weight:900; font-size:.7rem; border:2px solid; letter-spacing:.02em; transform:rotate(-2deg); box-shadow:2px 2px 0 currentColor; }
        .btn-pink { background:linear-gradient(135deg,#ff6ec7,#ff3da0); border:3px solid #cc1177; border-radius:50px; padding:14px 28px; color:white; font-family:'Fredoka One',cursive; font-size:1.05rem; cursor:pointer; transition:all .15s; box-shadow:0 4px 0 #cc1177,0 6px 16px rgba(255,61,160,.3); letter-spacing:.05em; }
        .btn-pink:hover { transform:translateY(2px); box-shadow:0 2px 0 #cc1177; }
        .btn-pink:active { transform:translateY(4px); box-shadow:none; }
        .btn-white { background:white; border:3px solid #ff6ec7; border-radius:50px; padding:12px 24px; color:#ff3da0; font-family:'Fredoka One',cursive; font-size:1rem; cursor:pointer; transition:all .15s; box-shadow:0 4px 0 #ff6ec7; }
        .btn-white:hover { transform:translateY(2px); box-shadow:0 2px 0 #ff6ec7; }
        .progress-track { height:12px; background:rgba(255,255,255,.5); border-radius:20px; border:2px solid #ff6ec7; overflow:hidden; }
        .progress-fill { height:100%; background:linear-gradient(90deg,#ff6ec7,#ff3da0,#ff9de2,#ff6ec7); background-size:200% auto; animation:shimmer 2s linear infinite; border-radius:20px; transition:width .5s cubic-bezier(.34,1.2,.64,1); }
        .scene-wrap { transition:opacity .22s,transform .22s; }
        .scene-wrap.out { opacity:0; transform:translateX(16px); }
        .title-shimmer { font-family:'Fredoka One',cursive; background:linear-gradient(135deg,#ff3da0,#ff6ec7,#e040fb,#ff9de2,#ff3da0); background-size:300% auto; animation:shimmer 3s linear infinite; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .dot-bg { position:fixed; inset:0; z-index:0; pointer-events:none; background-image:radial-gradient(circle,rgba(255,110,199,.22) 1px,transparent 1px); background-size:24px 24px; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#ffd6f0; }
        ::-webkit-scrollbar-thumb { background:#ff6ec7; border-radius:10px; }
      `}</style>

      <div className="dot-bg" />
      <Glitter />

      {/* ══ HOME ══ */}
      {screen === "home" && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 18px 100px", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ fontFamily: "'Fredoka One'", fontSize: "0.7rem", color: "#ff9de2", letterSpacing: "0.2em", marginBottom: 6 }}>♡ ♡ ♡ THE HOLY SCRIPTURE ♡ ♡ ♡</div>
            <h1 className="title-shimmer bounce" style={{ fontSize: "3rem", margin: "0 0 2px", lineHeight: 1.1 }}>ギャル聖書</h1>
            <div style={{ fontFamily: "'Fredoka One'", fontSize: "1rem", color: "#e040fb", marginBottom: 8 }}>GAL ✦ BIBLE 📖💅</div>
            <p style={{ fontFamily: "'Noto Sans JP'", fontSize: "0.82rem", color: "#c026a0", margin: 0 }}>聖書をギャル語でたのしく学ぼ〜！ ✨</p>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              {[
                { val: `${episodes.length}本`, label: "エピソード", c: "#ff6ec7" },
                { val: `${completedEpisodes.length}本`, label: "よんだ✓", c: "#a855f7" },
                { val: "創世記", label: "Book I", c: "#f59e0b" },
              ].map((s, i) => (
                <div key={i} style={{ background: "white", border: `2px solid ${s.c}`, borderRadius: 12, padding: "8px 14px", textAlign: "center", boxShadow: `3px 3px 0 ${s.c}` }}>
                  <div style={{ fontFamily: "'Fredoka One'", fontSize: "1.1rem", color: s.c }}>{s.val}</div>
                  <div style={{ fontSize: "0.62rem", color: "#aaa", fontWeight: 700 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {episodes.map((ep, i) => (
              <div key={ep.id} className="gal-card" onClick={() => selectEpisode(ep)}
                style={{ padding: "18px 18px 16px", animation: `slideUp .4s ease ${i * 0.07}s both` }}>
                <div style={{ position: "absolute", top: -8, right: 14, fontSize: "1rem", color: ep.stickerColor, animation: "heartbeat 2s ease infinite" }}>♥</div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 62, height: 62, borderRadius: 16, flexShrink: 0, background: `linear-gradient(135deg,${ep.stickerColor}22,${ep.stickerColor}44)`, border: `2px solid ${ep.stickerColor}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.9rem", boxShadow: `3px 3px 0 ${ep.stickerColor}` }}>{ep.emoji}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5, flexWrap: "wrap" }}>
                      <span className="sticker" style={{ color: ep.stickerColor, borderColor: ep.stickerColor }}>{ep.sticker}</span>
                      {completedEpisodes.includes(ep.id) && <span className="sticker" style={{ color: "#22c55e", borderColor: "#22c55e" }}>✓ 読了！</span>}
                    </div>
                    <div style={{ fontFamily: "'Fredoka One'", fontSize: "1.15rem", color: "#1a0010", marginBottom: 3 }}>{ep.title}</div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "0.7rem", color: "#bbb" }}>{ep.verse}</span>
                      <span style={{ fontSize: "0.68rem", background: "#fff0f9", color: "#ff6ec7", border: "1px solid #ff6ec7", borderRadius: 8, padding: "1px 8px", fontWeight: 700 }}>{ep.difficulty}</span>
                      <span style={{ fontSize: "0.68rem", color: "#ccc" }}>{ep.content.length}シーン</span>
                    </div>
                  </div>
                  <div style={{ fontSize: "1.4rem", color: "#ff6ec7" }}>›</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 28, fontFamily: "'Fredoka One'", fontSize: "0.8rem", color: "#ffb3e6" }}>✦ ✦ ✦ 続々追加予定だよ！待っててね ✦ ✦ ✦</div>
        </div>
      )}

      {/* ══ READ ══ */}
      {screen === "read" && selectedEpisode && scene && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 0 120px", position: "relative", zIndex: 2 }}>
          <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 10, background: "rgba(255,224,245,0.96)", backdropFilter: "blur(8px)", borderBottom: "3px solid #ff6ec7", position: "sticky", top: 0, zIndex: 10 }}>
            <button onClick={() => setScreen("home")} style={{ background: "white", border: "2px solid #ff6ec7", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#ff6ec7", fontSize: "1.1rem", fontFamily: "'Fredoka One'", boxShadow: "2px 2px 0 #ff6ec7" }}>‹</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fredoka One'", fontSize: "1rem", color: "#c026a0" }}>{selectedEpisode.title}</div>
              <div style={{ fontSize: "0.63rem", color: "#ff9de2" }}>{selectedEpisode.verse}</div>
            </div>
            <div style={{ background: "#ff6ec7", color: "white", borderRadius: 20, padding: "4px 12px", fontFamily: "'Fredoka One'", fontSize: "0.8rem" }}>{currentScene + 1} / {selectedEpisode.content.length}</div>
          </div>

          <div style={{ padding: "10px 18px 0" }}>
            <div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>
          </div>

          <div className={`scene-wrap ${animating ? "out" : ""}`} style={{ padding: "20px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, flexShrink: 0, background: "white", border: "3px solid #ff6ec7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", boxShadow: "3px 3px 0 #ff6ec7" }}>{scene.icon}</div>
              <div>
                <div style={{ fontSize: "0.63rem", color: "#ff9de2", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 2 }}>✦ Scene {currentScene + 1} ✦</div>
                <div style={{ fontFamily: "'Fredoka One'", fontSize: "1.05rem", color: "#c026a0" }}>{scene.day}</div>
              </div>
            </div>

            <div style={{ background: "white", border: "3px solid #ff6ec7", borderRadius: 20, padding: "20px", marginBottom: 14, boxShadow: "4px 4px 0 #ff6ec7" }}>
              <div style={{ display: "inline-block", background: "linear-gradient(135deg,#ff6ec7,#e040fb)", color: "white", borderRadius: 20, padding: "3px 14px", fontFamily: "'Fredoka One'", fontSize: "0.78rem", marginBottom: 12, boxShadow: "2px 2px 0 #cc1177" }}>💅 ギャル語バージョン</div>
              <p style={{ fontFamily: "'Noto Sans JP'", fontSize: "0.95rem", lineHeight: 1.85, margin: 0, color: "#1a0010" }}>{scene.gal}</p>
            </div>

            <button onClick={() => setShowOriginal(!showOriginal)} style={{ background: "none", border: "2px dashed #ffb3e6", borderRadius: 12, padding: "8px 16px", color: "#ff9de2", fontSize: "0.78rem", cursor: "pointer", marginBottom: 12, fontFamily: "'Fredoka One'" }}>
              {showOriginal ? "▲ 原文を隠す" : "▼ 原文を見る（聖書より）📖"}
            </button>

            {showOriginal && (
              <div className="pop" style={{ background: "#fff8fd", border: "2px solid #ffb3e6", borderRadius: 16, padding: "16px 18px" }}>
                <div style={{ fontFamily: "'Fredoka One'", fontSize: "0.72rem", color: "#ffb3e6", marginBottom: 8 }}>📖 原文（口語訳）</div>
                <p style={{ fontFamily: "'Noto Sans JP'", fontSize: "0.85rem", color: "#c084c0", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>{scene.original}</p>
              </div>
            )}
          </div>

          <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, padding: "14px 18px 30px", background: "linear-gradient(to top,#ffc8ee 50%,transparent)", display: "flex", gap: 10, zIndex: 10 }}>
            {currentScene > 0 && <button className="btn-white" onClick={prevScene} style={{ flex: 1 }}>‹ もどる</button>}
            <button className="btn-pink" onClick={nextScene} style={{ flex: 2 }}>
              {currentScene < selectedEpisode.content.length - 1 ? "つぎへ ›" : "よみおわった！🎉"}
            </button>
          </div>
        </div>
      )}

      {/* ══ COMPLETE ══ */}
      {screen === "complete" && selectedEpisode && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "50px 20px 40px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <div className="heartbeat" style={{ fontSize: "4rem", marginBottom: 12 }}>🎉</div>
          <h2 style={{ fontFamily: "'Fredoka One'", fontSize: "2rem", color: "#ff3da0", margin: "0 0 4px" }}>よみおわった〜！</h2>
          <div style={{ fontFamily: "'Fredoka One'", fontSize: "1rem", color: "#e040fb", marginBottom: 20 }}>✦ 「{selectedEpisode.title}」コンプリート ✦</div>

          <div style={{ background: "white", border: "3px solid #ff6ec7", borderRadius: 24, padding: "22px 20px", margin: "0 0 20px", boxShadow: "5px 5px 0 #ff6ec7", position: "relative" }}>
            <div style={{ position: "absolute", top: -10, left: 16, fontSize: "1.2rem", color: "#ff6ec7", animation: "heartbeat 2s ease infinite" }}>♥</div>
            <div style={{ position: "absolute", top: -10, right: 16, fontSize: "1.2rem", color: "#e040fb", animation: "heartbeat 2s ease .3s infinite" }}>♥</div>
            <div style={{ display: "inline-block", background: "linear-gradient(135deg,#ff6ec7,#e040fb)", color: "white", borderRadius: 20, padding: "3px 16px", fontFamily: "'Fredoka One'", fontSize: "0.78rem", marginBottom: 12 }}>💅 今日のギャル的学び</div>
            <p style={{ fontFamily: "'Noto Sans JP'", fontSize: "0.92rem", lineHeight: 1.8, color: "#1a0010", margin: 0 }}>
              {selectedEpisode.id === 1 && "この世界って神様が7日で作ったの！？しかも私たちは神のかたちに作られてるって。自己肯定感爆上がりじゃん✨"}
              {selectedEpisode.id === 2 && "「やっちゃダメ」って言われるとやりたくなるの、アダムとイブの時代から変わってないじゃん笑 人間ってずっとこんな感じなんだね。"}
              {selectedEpisode.id === 3 && "虹を見るたびに神様との約束を思い出すって、なんかエモすぎない？🌈 今日から虹の見方変わりそう。"}
              {selectedEpisode.id === 4 && "言語がバラバラになったのって神様のせいだったの！？翻訳ツールを発明した人たち、実は神様の計画を逆行させてるんだけど笑"}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn-pink" onClick={() => { setCurrentScene(0); setShowOriginal(false); setScreen("read"); }}>もう一回よむ 🔁</button>
            <button className="btn-white" onClick={() => setScreen("home")}>ほかのエピソードへ 📖</button>
          </div>
          <div style={{ marginTop: 24, fontFamily: "'Fredoka One'", fontSize: "0.78rem", color: "#ffb3e6" }}>♡ ✦ 続きも待っててね！ ✦ ♡</div>
        </div>
      )}
    </div>
  );
}
