/*
  長文タイピング練習用の例題データです。

  ルール
  ・ず → zu
  ・づ → du
  ・じ → ji
  ・ぢ → di

  例：
  片付けて → katadukete
  気づいた → kiduita
  忘れずに → wasurezu ni

  プルダウンは使用せず、
  テーマ＋複数の文章＋共通文章を自動で組み合わせて
  長い文章を作ります。
*/


// ============================================================
// 共通文章
// ============================================================

const commonSentence = {
  text: '自分のペースを大切にして、無理をしないように取り組みます。',
  romaji: 'jibunnope-suwotaisetsunishitemuriwoshinaiyounitorikumimasu'
};


// ============================================================
// 組み合わせ用の文章
// ============================================================

const sentences = [

  {
    text: '作業を始める前に、今日の予定と必要な道具を確認します。',
    romaji: 'sagyouwohajimerumaenikyouyoteitohitsuyounadouguwokakuninshimasu'
  },

  {
    text: '机の上を整えて、使う物を取り出しやすい場所に置きます。',
    romaji: 'tsukuenouewototonoetetsukaumonowotoridashiyasuibashoniokimasu'
  },

  {
    text: '分からないことがあれば、あわてずに職員さんへ相談します。',
    romaji: 'wakaranaikotogaarebaawatezushokuinsanhesoudanshimasu'
  },

  {
    text: '一つの作業が終わったら、内容を見直して次の仕事へ進みます。',
    romaji: 'hitotsunosagyougaowattaranaiyouwominaoshitetsuginoshigotoesusumimasu'
  },

  {
    text: '休憩の時間には、水分をとってゆっくり気持ちを整えます。',
    romaji: 'kyuukeinojikannihasuibunwototteyukkurikimochiwototonoemasu'
  },

  {
    text: '小さな間違いに気づいたら、落ち着いて正しい方法に直します。',
    romaji: 'chiisanamachigainikizuitaraochitsuitedadashiihouhouninaoshimasu'
  },

  {
    text: '大切な書類や道具は、決められた場所へ丁寧に戻します。',
    romaji: 'taisetsunashoruiyadouguwakimeraretabashoheteineinimodorimasu'
  },

  {
    text: '周りの人への挨拶と感謝の言葉を、忘れずに伝えます。',
    romaji: 'mawarinohitohenoaisatsutokanshanokotobawowasurezunitsutaemasu'
  },

  {
    text: '作業の記録を書いた後に、明日の準備を少しずつ進めます。',
    romaji: 'sagyounokirokuwokaitaatoniashitanojunbiwosukoshizutsusumemasu'
  },

  {
    text: 'パソコンの画面を見ながら、入力した文字を一文字ずつ確認します。',
    romaji: 'pasokonnogamenwominagaranyuuryokushitamojiwohitomojizutsukakuninshimasu'
  },

  {
    text: '今日できたことを振り返り、明日も安心して作業を始めます。',
    romaji: 'kyoudekitakotowofurikaeriashitomoanshinshitesagyouwohajimemasu'
  },

  {
    text: '終わりの時間には、机の周りを片付けてから報告をします。',
    romaji: 'owarinojikannihatsukuenomawariwokatazuketekarahoukokuoshimasu'
  }

];


// ============================================================
// テーマ文章
// ============================================================

const themes = [

  {
    text: '今日は商品の袋詰めを担当するので、数と向きを確かめながら丁寧に進めます。',
    romaji: 'kyouhashouhinnofukurozumewotantousurunodekazutotashikamenagarateineinisusumemasu'
  },

  {
    text: '今日はパソコンへの文字入力を担当するので、見本と画面を比べながら入力します。',
    romaji: 'kyouhapasokonhenomojinyuuryokuwotantousurunodemihontogamenwokurabenagaranyuuryokushimasu'
  },

  {
    text: '今日は書類の仕分けを担当するので、名前と日付を一つずつ確認して分けます。',
    romaji: 'kyouhashoruinowakewotantousurunonamaetohizukewohitotsuzutsukakuninshitewakemasu'
  },

  {
    text: '今日は部屋の清掃を担当するので、使う場所と順番を確認してから始めます。',
    romaji: 'kyouhaheyanoseisouwotantousurunodetsukaubashotojunbanwokakuninshitekarahajimemasu'
  },

  {
    text: '今日は品物の検品を担当するので、傷や数の違いがないかを落ち着いて見ます。',
    romaji: 'kyouhashinamonokenpinwotantousurunodekizuyakazunochigainagaikaochitsuitemimasu'
  },

  {
    text: '今日はラベル貼りを担当するので、位置と文字の向きをそろえて貼ります。',
    romaji: 'kyouharaberuhariwotantousurunodeichitomojinomukiwosoroeteharimasu'
  },

  {
    text: '今日は箱を組み立てる作業を担当するので、折り目を合わせてゆっくり作ります。',
    romaji: 'kyouhahakowokumitaterusagyouwotantousurunodeorimewoawaseteyukkuritsukurimasu'
  },

  {
    text: '今日は在庫の数を調べるので、棚の番号を見ながら正しく記録します。',
    romaji: 'kyouhazaikonokazuwoshiraberunodetanobangouwominagaratadashikukirokushimasu'
  },

  {
    text: '今日は郵便物の準備を担当するので、宛先と必要な物を確かめます。',
    romaji: 'kyouhayuubinbutsunojunbiwotantousurunodeatesakitohitsuyounamonowotashikamemasu'
  },

  {
    text: '今日は花や植物の手入れを担当するので、水の量と置く場所に気をつけます。',
    romaji: 'kyouhahanayashokubutsunoteirewotantousurunodemizunoryoutookubashonikiwotsukemasu'
  },

  {
    text: '今日は写真の整理を担当するので、写っている内容を見て名前を付けます。',
    romaji: 'kyouhashashinnoseiriwotantousurunodeutsutteirunaiyouwomitenamaewotsukemasu'
  },

  {
    text: '今日は古紙を分ける作業を担当するので、種類ごとの箱へ間違えずに入れます。',
    romaji: 'kyouhakoshiwowakerusagyouwotantousurunodeshuruigotonohakohemachigaezuniiremasu'
  },

  {
    text: '今日は予定表を確認するので、時間と場所を書き間違えないようにします。',
    romaji: 'kyouhayoteihyouwokakuninsurunodejikantobashowokakimachigaenaiyounishimasu'
  },

  {
    text: '今日は作業日誌を書くので、できたことと気づいたことを順番に記録します。',
    romaji: 'kyouhasagyounisshiwokakunodedekitakototokiduitakotowojunbannikirokushimasu'
  },

  {
    text: '今日は会議の準備を担当するので、椅子と資料の数をそろえます。',
    romaji: 'kyouhakaiginojunbiwotantousurunodeisutoshiryounokazuwosoroemasu'
  },

  {
    text: '今日はお知らせを掲示するので、見やすい高さと位置を選んで貼ります。',
    romaji: 'kyouhaoshirasewokeijisurunodemiyasuitakasatoichiwoerandeharimasu'
  },

  {
    text: '今日は道具の点検を担当するので、使える物と交換が必要な物を分けます。',
    romaji: 'kyouhadougunotenkenwotantousurunodetsukaerumonotokoukangahitsuyounamonowowakemasu'
  },

  {
    text: '今日は作品づくりを担当するので、見本を見ながら一つずつ形にします。',
    romaji: 'kyouhasakuhinzukuriwotantousurunodemihonwominagarahitotsuzutsukatachinishimasu'
  },

  {
    text: '今日は伝票の確認を担当するので、番号と品物の名前を読み合わせます。',
    romaji: 'kyouhadenpyounokakuninwotantousurunodebangoutoshinamononamaewoyomiawasemasu'
  },

  {
    text: '今日は一日の振り返りをするので、良かったことを見つけて記録します。',
    romaji: 'kyouhaichinichinofurikaeriwosurunodeyokattakotowomitsuketekirokushimasu'
  }

];


// ============================================================
// 1問に追加する文章の数
// ============================================================

// 4なら
// テーマ1文
// ＋追加文章4文
// ＋共通文章1文
//
// 合計6文の長文になります。

const additionalSentenceCount = 4;


// ============================================================
// 配列をシャッフル
// ============================================================

function shuffle(array) {

  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] =
      [result[j], result[i]];

  }

  return result;
}


// ============================================================
// 長文を1問作成
// ============================================================

function createLongExample() {

  // テーマをランダムに選択
  const randomTheme =
    themes[Math.floor(Math.random() * themes.length)];


  // 追加文章をランダムに選択
  const randomSentences =
    shuffle(sentences).slice(
      0,
      additionalSentenceCount
    );


  // 文章を組み合わせる
  const parts = [
    randomTheme,
    ...randomSentences,
    commonSentence
  ];


  // 日本語をつなげる
  const text = parts
    .map(part => part.text)
    .join('');


  // ローマ字をつなげる
  const romaji = parts
    .map(part => part.romaji)
    .join('');


  return {
    text: text,
    romaji: romaji,
    parts: parts
  };

}


// ============================================================
// 20問を作成
// ============================================================

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


// ============================================================
// タイピングアプリへ渡す
// ============================================================

window.TYPING_EXAMPLES = generatedExamples;