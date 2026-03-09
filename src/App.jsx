import { useState } from "react";

const episodes = [
  {
    id: 1,
    book: "創世記",
    title: "天地創造",
    emoji: "🌍",
    difficulty: "かんたん",
    verse: "創世記 1章",
    content: [
      {
        day: "はじまりのはじまり",
        icon: "🌑",
        original: "初めに、神は天と地を創造された。",
        gal: "ねえちょっと待って！？世界って最初マジで真っ暗で何もない状態だったんだけど、神様が急に「光よ、あれ！」って言ったら光できちゃったの🌟 え、声で光作れるの！？ボイスが神すぎる件について。",
      },
      {
        day: "1日目〜2日目",
        icon: "💧",
        original: "神は光を見て、良しとされた。",
        gal: "光を見た神様、「あ、いい感じじゃん✨」ってなって、光と闇を分けたの。で次の日は空作って、水を上と下に分けた。これって実質インテリアのゾーニング案件じゃない？センス神すぎる🌊",
      },
      {
        day: "3日目",
        icon: "🌿",
        original: "地は草を芽生えさせよ。",
        gal: "陸と海を分けて、植物もドーンって生やした。しかも1日で！まじリフォームの神じゃん🌱 草木が「え急すぎ」ってなってそうなんだけど笑",
      },
      {
        day: "4日目",
        icon: "🌙",
        original: "神は二つの大きな光る物と星を作られた。",
        gal: "太陽・月・星を全部配置したんだけど、これもう宇宙のレイアウト決めてる感じじゃん。神様って実は天才インスタグラマーだったのでは？🌙⭐ 配置のセンスが神（そのまんま）",
      },
      {
        day: "5日目",
        icon: "🐟",
        original: "生き物が水の中に群がれ、鳥は地の上を飛べ。",
        gal: "魚と鳥を作って「増えろ〜！」って言ったの。え、増殖コマンド使えるの？！チートすぎる🐟🦅 しかも「ちゃんと増えてね」って祝福まで与えてる。神様めちゃ親切じゃん。",
      },
      {
        day: "6日目",
        icon: "👑",
        original: "神は自分のかたちに人を創造された。",
        gal: "動物全部作った後、最後に人間作ったんだけど、なんと神様の「かたちに」作ったらしくて。え、私たちって神のセルフィーじゃん！？💅 これ知ったら自己肯定感爆上がりなんだけど。",
      },
      {
        day: "7日目",
        icon: "😴",
        original: "神は第七日目を祝福し、聖別された。",
        gal: "全部作り終わったら神様が休んだの。神様でも疲れるんかい！笑 でもこれが「日曜日は休もう」文化の起源なんだって🛌 休息を神聖なものにしたのマジで神（二重の意味で）",
      },
    ],
  },
  {
    id: 2,
    book: "創世記",
    title: "アダムとイブ",
    emoji: "🍎",
    difficulty: "ちょいムズ",
    verse: "創世記 2〜3章",
    content: [
      {
        day: "楽園の話",
        icon: "🌺",
        original: "主なる神は東の方のエデンに園を設け、そこに人を置かれた。",
        gal: "神様が超豪華な庭園「エデン」を作って、アダムをそこに住まわせたの。食べ物は全部タダで、めちゃ平和で、まじパラダイス✨ ただ一個だけNGルールがあって...",
      },
      {
        day: "禁断の木",
        icon: "🌳",
        original: "善悪の知識の木からは、決して食べてはならない。",
        gal: "「この木の実だけは絶対食べちゃダメ！食べたら死ぬよ！」って神様に言われてたの。でもさ、「食べちゃダメ」って言われると食べたくなるよね？！人間の心理をついてくるこの構成、神様わかってたんかな🤔",
      },
      {
        day: "イブ登場",
        icon: "👸",
        original: "神はアダムを深く眠らせ、あばら骨の一つを取り、女を造られた。",
        gal: "アダムが「俺だけ寂しい〜」ってなったら、神様がアダムを眠らせてあばら骨1本取って女性（イブ）を作ったの。え、あばら骨から人間！？普通に怖いんだけど笑 でもアダムは「最高じゃん！！」ってなったらしい😂",
      },
      {
        day: "蛇の陰謀",
        icon: "🐍",
        original: "蛇は言った。「決して死にはしない。」",
        gal: "ここで蛇が登場して、イブに「その実食べても死なないよ〜むしろ神様みたいに賢くなれるよ〜」ってそそのかすの。完全に悪い先輩の誘い方じゃん🐍 でもイブ、信じちゃった...",
      },
      {
        day: "禁断の果実",
        icon: "🍎",
        original: "女が見ると、その木は食べるのに良く、目には美しく、賢くなるように唆した。",
        gal: "見たら美味しそうだし、なんか賢くなれるらしいし...って感じで食べちゃったの🍎 しかもアダムにも「食べてみて！」って渡して。これ現代でいうと彼氏を悪の道に引き込む案件じゃん。",
      },
      {
        day: "楽園追放",
        icon: "😭",
        original: "主なる神は、彼をエデンの園から追い出された。",
        gal: "バレた途端に神様がガチギレして、エデンから追い出されちゃったの😭 しかもその瞬間から「恥ずかしい」って感情が生まれて服着るようになったらしくて。人類の羞恥心の始まりがこれって、なんか笑えなくなってきた...",
      },
    ],
  },
  {
    id: 3,
    book: "創世記",
    title: "ノアの箱舟",
    emoji: "🚢",
    difficulty: "かんたん",
    verse: "創世記 6〜9章",
    content: [
      {
        day: "人間ヤバすぎ問題",
        icon: "😤",
        original: "主は、地上に人の悪が増大し、心に思うことが常に悪いことだけを見て、後悔された。",
        gal: "人間たちが悪いことしすぎて、神様が「あ〜もう作らなきゃよかった」ってマジで後悔したの😤 神様ですら後悔するんだ...ってなるよね。でもノアだけは「この人ええやん」って思われてたから助かる話。",
      },
      {
        day: "神様のオーダー",
        icon: "📐",
        original: "あなたはゴフェルの木で箱舟を造りなさい。",
        gal: "神様がノアに「大洪水起こすから箱舟作って！サイズはこれで！」って超具体的な設計図を渡したの。神様からのDIY依頼案件🔨 しかも「動物も2匹ずつ乗せてね」という謎の条件付き。",
      },
      {
        day: "乗船完了",
        icon: "🐘",
        original: "清い動物はすべて七つがい、清くない動物は一つがい、それぞれ乗り込んだ。",
        gal: "動物を全種類2匹ずつ集める作業、想像しただけで大変すぎない？🦁🐘🦒 ライオンも象もキリンも全部乗せた。カオスすぎて笑えない。船の中のにおいヤバそう笑",
      },
      {
        day: "大洪水",
        icon: "🌊",
        original: "四十日の間、大地に雨が降り続いた。",
        gal: "40日間ずーっと雨！！山が全部沈むくらいの水量で、ノアの家族と動物たち以外みんなアウトに。これ映画だったら絶対ヒットするやつじゃん🌊 実際映画になってるけど。",
      },
      {
        day: "水が引く",
        icon: "🕊️",
        original: "ノアは鳩を放った。鳩はオリーブの葉をくわえて戻ってきた。",
        gal: "水が引いてきたか確認するために鳩を飛ばしたら、オリーブの葉っぱをくわえて帰ってきたの🕊️ これが「平和の鳩」の起源！知らなかった〜。ノアもガッツポーズしたと思う。",
      },
      {
        day: "虹との約束",
        icon: "🌈",
        original: "わたしは雲の中にわたしの虹を置く。これはわたしと大地の間の契約のしるしとなる。",
        gal: "最後に神様が「もう二度と大洪水はしないよ！その証拠に虹を置くね🌈」って約束したの。虹ってそんな深い意味あったの！？これ知ってから虹見るたびに泣きそうになるんだけど。",
      },
    ],
  },
  {
    id: 4,
    book: "創世記",
    title: "バベルの塔",
    emoji: "🗼",
    difficulty: "ちょいムズ",
    verse: "創世記 11章",
    content: [
      {
        day: "みんな同じ言葉",
        icon: "🗣️",
        original: "世界中は同じ言葉を使い、同じように話していた。",
        gal: "昔は世界中の人間が全員同じ言語を話してたらしいの。え、翻訳ツールいらない時代！？🌍 コミュニケーションも余裕だし、チームワークが神がかってたみたい。",
      },
      {
        day: "天まで届く塔を作ろうぜ",
        icon: "🏗️",
        original: "さあ、天まで届く塔のある町を建て、有名になろう。",
        gal: "「天まで届く塔作って有名になろうぜ！」って人間たちがノリノリで建設開始したの🏗️ 現代でいうと「フォロワー増やしたい」的なバイブス。自己顕示欲は昔からあったんだね笑",
      },
      {
        day: "神様、ちょっと待って",
        icon: "😮",
        original: "主は降って来て、人の子らが建てた町と塔を見た。",
        gal: "それを見た神様が「え！？人間たちが本気出したらヤバいことになりそうじゃん」ってなったの😮 神様が人間のポテンシャルを恐れてる構図、なんかエモくない？",
      },
      {
        day: "言語バラバラ作戦",
        icon: "🌐",
        original: "主はそこで彼らの言葉を混乱させ、彼らをそこから全地に散らされた。",
        gal: "神様の解決策→みんなの言語をバラバラにする！！突然言葉が通じなくなったら建設どころじゃないよね笑 これが世界中に違う言語がある理由らしくて、まじで知らなかった🌐",
      },
    ],
  },
];

const difficultyColor = {
  かんたん: "#00e5a0",
  ちょいムズ: "#ff6eb4",
  むずかしい: "#ff4444",
};

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [showOriginal, setShowOriginal] = useState(false);
  const [completedEpisodes, setCompletedEpisodes] = useState([]);
  const [animating, setAnimating] = useState(false);

  const selectEpisode = (ep) => {
    setSelectedEpisode(ep);
    setCurrentScene(0);
    setShowOriginal(false);
    setScreen("read");
  };

  const nextScene = () => {
    if (currentScene < selectedEpisode.content.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentScene(currentScene + 1);
        setShowOriginal(false);
        setAnimating(false);
      }, 200);
    } else {
      if (!completedEpisodes.includes(selectedEpisode.id)) {
        setCompletedEpisodes([...completedEpisodes, selectedEpisode.id]);
      }
      setScreen("complete");
    }
  };

  const prevScene = () => {
    if (currentScene > 0) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentScene(currentScene - 1);
        setShowOriginal(false);
        setAnimating(false);
      }, 200);
    }
  };

  const scene = selectedEpisode?.content[currentScene];
  const progress = selectedEpisode
    ? ((currentScene + 1) / selectedEpisode.content.length) * 100
    : 0;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a2e 40%, #0d1a2e 100%)",
      fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(255,110,180,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(0,229,160,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 30%, rgba(120,80,255,0.08) 0%, transparent 40%)
        `
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Noto+Sans+JP:wght@400;700;900&display=swap');
        .card-hover { transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
        .card-hover:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 12px 40px rgba(255,110,180,0.25); }
        .btn-primary {
          background: linear-gradient(135deg, #ff6eb4, #ff4fa0);
          border: none; border-radius: 50px; padding: 14px 32px;
          color: #fff; font-size: 1rem; font-weight: 900; cursor: pointer;
          transition: all 0.2s; letter-spacing: 0.05em;
          box-shadow: 0 4px 20px rgba(255,110,180,0.4);
        }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 8px 30px rgba(255,110,180,0.6); }
        .btn-secondary {
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.2); border-radius: 50px;
          padding: 12px 28px; color: #fff; font-size: 0.95rem;
          font-weight: 700; cursor: pointer; transition: all 0.2s;
        }
        .btn-secondary:hover { background: rgba(255,255,255,0.15); }
        .scene-card { transition: opacity 0.2s, transform 0.2s; }
        .scene-card.animating { opacity: 0; transform: translateX(20px); }
        .gal-bubble {
          background: rgba(255,110,180,0.08);
          border: 1.5px solid rgba(255,110,180,0.25);
          border-radius: 20px; padding: 20px 22px;
          line-height: 1.8; font-size: 0.97rem;
        }
        .original-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px; padding: 14px 18px;
          font-size: 0.85rem; color: rgba(255,255,255,0.6);
          line-height: 1.7; font-style: italic;
        }
        .progress-bar { height: 4px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; }
        .progress-fill {
          height: 100%; border-radius: 4px;
          background: linear-gradient(90deg, #ff6eb4, #00e5a0);
          transition: width 0.4s ease;
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .float { animation: float 3s ease-in-out infinite; }
        @keyframes pop { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
        .pop { animation: pop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .tag {
          display: inline-block; padding: 3px 12px; border-radius: 20px;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.05em;
        }
      `}</style>

      {/* HOME */}
      {screen === "home" && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "32px 20px 80px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="float" style={{ fontSize: "3.5rem", marginBottom: 8 }}>📖✨</div>
            <h1 style={{
              fontFamily: "'Dela Gothic One', cursive",
              fontSize: "2.2rem", margin: "0 0 6px",
              background: "linear-gradient(135deg, #ff6eb4, #ff9de2, #00e5a0)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>ギャル聖書</h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", margin: 0 }}>
              聖書をギャル語で楽しく学ぼ💅
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 16 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Dela Gothic One'", fontSize: "1.4rem", color: "#ff6eb4" }}>{episodes.length}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>エピソード</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Dela Gothic One'", fontSize: "1.4rem", color: "#00e5a0" }}>{completedEpisodes.length}</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>よんだ</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Dela Gothic One'", fontSize: "1.4rem", color: "#a78bff" }}>創世記</div>
                <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>Book</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {episodes.map((ep) => (
              <div
                key={ep.id}
                className="card-hover"
                onClick={() => selectEpisode(ep)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1.5px solid rgba(255,255,255,0.1)",
                  borderRadius: 20, padding: "18px 20px",
                  display: "flex", alignItems: "center", gap: 16,
                  position: "relative", overflow: "hidden",
                }}
              >
                {completedEpisodes.includes(ep.id) && (
                  <div style={{ position: "absolute", top: 10, right: 12, fontSize: "0.7rem", color: "#00e5a0", fontWeight: 800 }}>✓ 読了</div>
                )}
                <div style={{
                  width: 60, height: 60, borderRadius: 16,
                  background: "linear-gradient(135deg, rgba(255,110,180,0.2), rgba(120,80,255,0.2))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", flexShrink: 0,
                  border: "1px solid rgba(255,110,180,0.2)",
                }}>{ep.emoji}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>{ep.verse}</span>
                    <span className="tag" style={{
                      background: difficultyColor[ep.difficulty] + "22",
                      color: difficultyColor[ep.difficulty],
                      border: `1px solid ${difficultyColor[ep.difficulty]}44`,
                    }}>{ep.difficulty}</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 2 }}>{ep.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>{ep.content.length}シーン</div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "1.2rem" }}>›</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 30, color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
            続々追加予定📖✨
          </div>
        </div>
      )}

      {/* READ */}
      {screen === "read" && selectedEpisode && scene && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 0 100px", position: "relative", zIndex: 1 }}>
          <div style={{
            padding: "16px 20px 12px",
            display: "flex", alignItems: "center", gap: 12,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <button onClick={() => setScreen("home")} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: "1.3rem", cursor: "pointer", padding: "4px 8px" }}>‹</button>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: "1rem" }}>{selectedEpisode.title}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{selectedEpisode.verse}</div>
            </div>
            <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>
              {currentScene + 1} / {selectedEpisode.content.length}
            </div>
          </div>

          <div style={{ padding: "0 20px" }}>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className={`scene-card ${animating ? "animating" : ""}`} style={{ padding: "24px 20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "linear-gradient(135deg, rgba(255,110,180,0.25), rgba(120,80,255,0.25))",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem", border: "1px solid rgba(255,110,180,0.2)",
              }}>{scene.icon}</div>
              <div style={{ fontFamily: "'Dela Gothic One', cursive", fontSize: "1.05rem" }}>{scene.day}</div>
            </div>

            <div className="gal-bubble" style={{ marginBottom: 16 }}>
              <div style={{ fontSize: "0.72rem", color: "#ff6eb4", fontWeight: 800, marginBottom: 8, letterSpacing: "0.08em" }}>
                💅 ギャル語バージョン
              </div>
              {scene.gal}
            </div>

            <button
              onClick={() => setShowOriginal(!showOriginal)}
              style={{
                background: "none", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, padding: "8px 14px", color: "rgba(255,255,255,0.5)",
                fontSize: "0.78rem", cursor: "pointer", marginBottom: 12, transition: "all 0.2s",
              }}
            >
              {showOriginal ? "▲ 原文を隠す" : "▼ 原文を見る（聖書より）"}
            </button>

            {showOriginal && (
              <div className="original-box pop">
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", marginBottom: 6, fontWeight: 700 }}>📖 原文（口語訳）</div>
                {scene.original}
              </div>
            )}
          </div>

          <div style={{
            position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)",
            width: "100%", maxWidth: 480,
            padding: "16px 20px 28px",
            background: "linear-gradient(to top, #0d0d1a 70%, transparent)",
            display: "flex", gap: 12,
          }}>
            {currentScene > 0 && (
              <button className="btn-secondary" onClick={prevScene} style={{ flex: 1 }}>‹ もどる</button>
            )}
            <button className="btn-primary" onClick={nextScene} style={{ flex: 2 }}>
              {currentScene < selectedEpisode.content.length - 1 ? "つぎへ ›" : "よみおわった！🎉"}
            </button>
          </div>
        </div>
      )}

      {/* COMPLETE */}
      {screen === "complete" && selectedEpisode && (
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "60px 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="float" style={{ fontSize: "5rem", marginBottom: 16 }}>🎉</div>
          <h2 style={{
            fontFamily: "'Dela Gothic One', cursive",
            fontSize: "1.8rem", margin: "0 0 10px",
            background: "linear-gradient(135deg, #ff6eb4, #00e5a0)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>よみおわった！</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>「{selectedEpisode.title}」コンプリート✨</p>
          <div style={{
            background: "rgba(255,110,180,0.08)",
            border: "1.5px solid rgba(255,110,180,0.2)",
            borderRadius: 20, padding: "20px", margin: "24px 0",
          }}>
            <div style={{ fontSize: "0.8rem", color: "#ff6eb4", fontWeight: 800, marginBottom: 8 }}>💅 今日のギャル的学び</div>
            <div style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
              {selectedEpisode.id === 1 && "この世界って神様が7日で作ったの！？しかも私たちは神のかたちに作られてるって。自己肯定感爆上がりじゃん✨"}
              {selectedEpisode.id === 2 && "「やっちゃダメ」って言われるとやりたくなるの、アダムとイブの時代から変わってないじゃん笑 人間ってずっとこんな感じなんだね。"}
              {selectedEpisode.id === 3 && "虹を見るたびに神様との約束を思い出すって、なんかエモすぎない？🌈 今日から虹の見方変わりそう。"}
              {selectedEpisode.id === 4 && "言語がバラバラになったのって神様のせいだったの！？翻訳ツールを発明した人たち、実は神様の計画を逆行させてるんだけど笑"}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button className="btn-primary" onClick={() => { setCurrentScene(0); setShowOriginal(false); setScreen("read"); }}>
              もう一回よむ 🔁
            </button>
            <button className="btn-secondary" onClick={() => setScreen("home")}>
              ほかのエピソードへ 📖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
