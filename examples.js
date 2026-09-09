// 長文タイピング練習用データ
// ローマ字ルール
// ず → zu
// づ → du
// じ → ji
// ぢ → di
//
// 例:
// 片付けて → katadukete
// 気づいた → kiduita
// 忘れずに → wasurezuni

const commonSentence = {
  text: '自分のペースを大切にして、無理をしないように取り組みます。',
  romaji: 'jibunnope-suwotaisetsunishitemuriwoshinaiyounitorikumimasu'
};

const sentences = [
  {
    text: '今日は商品の袋詰めを担当するので、数と向きを確かめながら丁寧に進めます。',
    romaji: 'kyouhashouhinnofukurozumewotantousurunodekazutomukiwotashikamenagarateineinisusumemasu'
  },
  {
    text: '作業を始める前に必要な道具を確認して、使い終わったら元の場所へ片付けます。',
    romaji: 'sagyouwohajimerumaenihitsuyounadouguwokakuninshitsetsukaiowattaramotonobashoe katadukemasu'.replace(/\s/g, '')
  },
  {
    text: '分からないことがあったときは、一人で悩まずに職員へ確認してから作業を続けます。',
    romaji: 'wakaranai koto ga attatokiwahitoridenayamazunishokuinhekakun inshitekarasagyouwotsudukemasu'.replace(/\s/g, '')
  },
  {
    text: '作業台の上をきれいにして、必要なものだけを並べてから作業を始めます。',
    romaji: 'sagyoudainouewokireinishitehitsuyounomonodakewonarabete karasagyouw o hajimemasu'.replace(/\s/g, '')
  },
  {
    text: '同じ作業を繰り返すときも、確認を忘れずに一つずつ落ち着いて進めます。',
    romaji: 'onajisagyouw okurikaesutokimokakuninwowasurezuni hitotsuzutsuochitsuitesusumemasu'.replace(/\s/g, '')
  },
  {
    text: '作業中に疲れたときは無理をせず、職員に伝えて休憩を取ります。',
    romaji: 'sagyouchuunitsukaretatokiwamur i wosezushokuinnitsutaetekyuukei wotorimasu'.replace(/\s/g, '')
  },
  {
    text: '商品の数を確認するときは、数え間違いがないようにゆっくり確認します。',
    romaji: 'shouhinnnokazuwokakunin surutokiha kazoemachigainagainaiyouniyukkurikakun inshimasu'.replace(/\s/g, '')
  },
  {
    text: '周りの人と声を掛け合いながら、安全に気をつけて作業を行います。',
    romaji: 'mawarinohitotokoewokakeainagar ananzen nikiwotsuketesagyouwookonaimasu'.replace(/\s/g, '')
  },
  {
    text: '今日できたことを振り返り、明日の作業でも同じようにできるように確認します。',
    romaji: 'kyoudekita kotowofurikaer iashitanosagyoudemo onajiyounidekiruyounikakun inshimasu'.replace(/\s/g, '')
  },
  {
    text: '作業場所を整理整頓して、次に使う人が気持ちよく使えるようにします。',
    romaji: 'sagyoubashowoseiriseitonshite tsuginitsukauhitogakimochiyokutsukaeruyounishimasu'
  },
  {
    text: '急いで作業するよりも、間違いがないように一つずつ確認することを大切にします。',
    romaji: 'isoidesagyousuruyorimachigai ganaiyounihitotsuzutsukakunin surukotowotaisetsunishimasu'.replace(/\s/g, '')
  },
  {
    text: '今日の目標を確認して、自分のできることから少しずつ取り組みます。',
    romaji: 'kyounomokuhyouwokakun inshitejibun nodekirukotokar asukoshizutsutorikumimasu'.replace(/\s/g, '')
  }
];

const themes = [
  {
    text: '朝は準備をしてから作業場所へ行き、必要なものを確認して落ち着いて作業を始めます。',
    romaji: 'asawajunbiwoshitekarasagyoubashoeiki hitsuyounamonowokakuninshiteochitsuitesagyouwohajimemasu'
  },
  {
    text: '仕事では安全を第一に考えて、周りを確認しながら一つずつ作業を進めます。',
    romaji: 'shigotodewaanzenwodaiichinikaete mawariwokakuninshitehitotsuzutsusagyouwosusumemasu'
  },
  {
    text: '分からないことをそのままにせず、職員に質問して正しい方法を確認します。',
    romaji: 'wakaranai kotowosonomamani sezu shokuin nishitsumonshite tadashii houhouwo kakuninshimasu'.replace(/\s/g, '')
  },
  {
    text: '休憩時間には水分を取ってゆっくり休み、次の作業に備えます。',
    romaji: 'kyuukeijikannniwasuibunwototteyukkuriyasumi tsuginosagyounisonaemasu'
  },
  {
    text: '作業が終わったら使った道具を元の場所へ戻し、周りをきれいにしてから帰ります。',
    romaji: 'sagyougaowattara tsukatta douguwomotonobashoe modoshi mawariwokireinishitekarakaerimasu'.replace(/\s/g, '')
  },
  {
    text: '毎日の作業を少しずつ続けることで、自分のできることを増やしていきます。',
    romaji: 'mainichinosagyouwo sukoshizutsutsudukerukotode jibun nodekirukotowofuyashiteikimasu'.replace(/\s/g, '')
  },
  {
    text: '作業中に気づいたことがあれば、忘れずに職員へ伝えるようにします。',
    romaji: 'sagyouchuunikiduitakotogareba wasurezunishokuinhetsutaeruyounishimasu'
  },
  {
    text: '体調や気分に合わせて無理のないペースで作業し、困ったときは相談します。',
    romaji: 'taichouyakibunnniawasetemurinonaipesude sagyoushi komattatokiw asoudanshimasu'.replace(/\s/g, '')
  },
  {
    text: '新しい作業をするときは説明をよく聞いて、手順を確認してから始めます。',
    romaji: 'atarashii sagyouwosurutokiwa setsumeiwoyokukiite tejunwokakuninshitekarahajimemasu'.replace(/\s/g, '')
  },
  {
    text: '作業の途中で間違いに気づいた場合は、そのまま進めずに確認します。',
    romaji: 'sagyounotochuu de machigainikiduita baaiwa sonomamasusumezunikakun inshimasu'.replace(/\s/g, '')
  },
  {
    text: '周りの人と協力しながら、それぞれの役割を意識して作業します。',
    romaji: 'mawarinohitotokyouryokushinagara sorezore no yakuwariwoishikishitesagyoushimasu'
  },
  {
    text: 'できるようになった作業でも確認を続けて、丁寧に取り組むことを心がけます。',
    romaji: 'dekiruyouninatta sagyoudemo kakuninwotsudukete teineini torikumukotowokokorogakemasu'
  },
  {
    text: '作業の前後には手洗いをして、清潔な状態で作業できるようにします。',
    romaji: 'sagyou no zengoni tearaiwoshite seiketsunajoutaide sagyouderukuyounishimasu'.replace(/\s/g, '')
  },
  {
    text: '商品を扱うときは傷や汚れがないか確認し、丁寧に扱います。',
    romaji: 'shouhinwoatsukautokiwa kizu ya yogoreganai kakakuninshi teinei ni atsukaimasu'.replace(/\s/g, '')
  },
  {
    text: '作業の順番を確認して、一つの作業が終わってから次の作業へ進みます。',
    romaji: 'sagyou no junbanwokakuninshite hitotsunosagyougaowattarakatsuginosagyoue susumimasu'.replace(/\s/g, '')
  },
  {
    text: 'できなかったことだけではなく、できるようになったことも振り返ります。',
    romaji: 'dekinakatta kotodakedenakudekiruyouninattakotomo furikaerimasu'.replace(/\s/g, '')
  },
  {
    text: '自分のペースを守りながら、毎日少しずつ新しいことに挑戦します。',
    romaji: 'jibunnope-suomamorinagara mainichisukoshizutsu atarashiikotonichousenshimasu'
  },
  {
    text: '作業場では周りの人の動きにも気をつけて、安全に行動します。',
    romaji: 'sagyouba dewa mawarinohitonougokinimo kiwotsukete anzennikoudoushimasu'
  },
  {
    text: '一日の作業が終わったら今日できたことを確認して、明日の準備をします。',
    romaji: 'ichinichinosagyougaowattara kyoudekita kotowokakun inshite ashitanojunbiwoshimasu'.replace(/\s/g, '')
  },
  {
    text: '少しずつできることを増やして、自信を持って作業できるように取り組みます。',
    romaji: 'sukoshizutsu dekirukotowofuyashite jishinwomotte sagyouderuyounitorikumimasu'
  }
];

const additionalSentenceCount = 4;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createLongExample() {
  const theme = themes[Math.floor(Math.random() * themes.length)];

  const selectedSentences = shuffle(sentences)
    .slice(0, additionalSentenceCount);

  const parts = [
    theme,
    ...selectedSentences,
    commonSentence
  ];

  return {
    text: parts.map(part => part.text).join(''),
    romaji: parts.map(part => part.romaji).join(''),
    parts
  };
}

const generatedExamples = [];

for (let i = 0; i < 20; i++) {
  const example = createLongExample();

  generatedExamples.push({
    name: `例題 ${String(i + 1).padStart(3, '0')}`,
    text: example.text,
    romaji: example.romaji,
    parts: example.parts
  });
}

window.TYPING_EXAMPLES = generatedExamples;
