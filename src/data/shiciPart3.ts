import { VocabularyEntry } from '../types';

export const SHICI_PART3: VocabularyEntry[] = [
  {
    id: 'qiang_strong',
    word: '强',
    pinyin: ['qiáng', 'qiǎng', 'jiàng'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '弓',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词 [qiáng]',
        meaning: '强大，强盛 / 强壮，有力 / 强国',
        examples: [
          { text: '挽弓当挽强，用箭当用长。', source: '《前出塞》', translation: '拉弓应当拉强硬的硬弓，用箭应当用长箭。' },
          { text: '秦贪，负其强，以空言求璧。', source: '《廉颇蔺相如列传》', translation: '秦国贪婪，倚仗它的强大，用空话求取和氏璧。' }
        ]
      },
      {
        pos: '动词/副词 [qiǎng]',
        meaning: '勉强，强迫，硬要',
        examples: [
          { text: '强国请服，弱国入朝。', source: '《过秦论》', translation: '强国请求臣服。' },
          { text: '公子强留之。', source: '《信陵君窃符救赵》', translation: '信陵君勉强留下他。' },
          { text: '木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。', source: '《劝学》', translation: '勉强进行教化。' }
        ]
      },
      {
        pos: '形容词 [jiàng]',
        meaning: '固执，倔强（强项）',
        examples: [
          { text: '董宣强项，不肯低头。', source: '《后汉书》', translation: '董宣脖子硬倔强，不肯低头。' }
        ]
      }
    ],
    examTips: '“强”区分[qiáng]（强大）、[qiǎng]（勉强/强迫）、[jiàng]（倔强）。'
  },
  {
    id: 'qie_steal',
    word: '窃',
    pinyin: 'qiè',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '穴',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '偷窃，盗窃 / 偷看，偷听',
        examples: [
          { text: '信陵君窃符救赵。', source: '《史记》', translation: '信陵君偷窃兵符救赵国。' },
          { text: '窃爱其人，私自慕之。', source: '《汉书》', translation: '私下偷看喜爱这个人。' }
        ]
      },
      {
        pos: '副词/谦词',
        meaning: '私下，私自 / 谦词（我私下里以为，窃以为）',
        examples: [
          { text: '窃以为与君实游，处相好之分。', source: '《答司马谏议书》', translation: '我私下里以为与您交游，处于相互交好的情份。' },
          { text: '臣窃以为其人勇士。', source: '《廉颇蔺相如列传》', translation: '我私下里以为那个人是个勇士。' }
        ]
      }
    ],
    examTips: '“窃”作自谦副词表“私下/私自”（窃以为、臣窃以为）。'
  },
  {
    id: 'qiong_poor',
    word: '穷',
    pinyin: 'qióng',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '穴',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词',
        meaning: '困窘，走投无路，处于困境 / 贫穷 / 边远，荒僻',
        examples: [
          { text: '穷则独善其身，达则兼济天下。', source: '《孟子》', translation: '不得志困窘时就独善其身，显达得志时就兼济天下。' },
          { text: '人穷则反本，故劳苦倦极，未尝不呼天也。', source: '《屈原列传》', translation: '人陷入绝境困窘就会追念本源……' },
          { text: '穷发之北，有冥海者。', source: '《庄子·逍遥游》', translation: '荒僻不生草木的极北地方，有大池。' }
        ]
      },
      {
        pos: '动词',
        meaning: '寻究到尽头，穷尽，走到尽头',
        examples: [
          { text: '复前行，欲穷其林。', source: '《桃花源记》', translation: '又向前走，想要走到那片桃花林的尽头。' },
          { text: '穷回溪，幽泉怪石，无远不到。', source: '《始得西山宴游记》', translation: '走透寻尽迂回的山溪，幽深的泉水怪异的石头，没有远方不到的。' }
        ]
      }
    ],
    examTips: '古文“穷”多指“不得志/走投无路/困窘”（穷则独善其身），非单指缺乏钱财。'
  },
  {
    id: 'qiu_seek',
    word: '求',
    pinyin: 'qiú',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '水',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '寻找，搜求 / 请求，求取 / 追求，探求',
        examples: [
          { text: '寻向所志，遂迷，不复得路。后郡下诣太守，说如此。太守即遣人随其往，寻向所志，遂迷不复得路。南阳刘子骥，高尚士也，闻之，欣然规往。未果，寻病终。后遂无问津者。', source: '《桃花源记》', translation: '寻找索求。' },
          { text: '予尝求古仁人之心，或异二者之为。', source: '《岳阳楼记》', translation: '我曾经探求古代品德高尚之人的思想，或许不同于上面两种表现。' },
          { text: '求剑若此，不亦惑乎？', source: '《察今》', translation: '像这样刻舟求剑，不也是太糊涂了吗？' }
        ]
      }
    ],
    examTips: '“求”作动词“探求/追求”（求古仁人之心）与“寻找/搜求”（刻舟求剑）。'
  },
  {
    id: 'qu_go',
    word: '去',
    pinyin: 'qù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '厶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '离开，离去 / 距离 / 除去，去掉 / 死亡',
        examples: [
          { text: '登斯楼也，则有去国怀乡，忧谗畏讥。', source: '《岳阳楼记》', translation: '登上这座楼啊，就有离开国都怀念家乡的心情。' },
          { text: '西蜀之去南海，不知几千里也。', source: '《为学》', translation: '四川距离南海，不知道有几千里。' },
          { text: '兼花之长而各去其短。', source: '《芙蕖》', translation: '兼有各种花的长处而各自去掉它们的短处。' }
        ]
      }
    ],
    examTips: '“去”古义指“离开”（去国怀乡）或“距离”（去南海几千里），非现代“到某地去”。'
  },
  {
    id: 'quan_encourage',
    word: '劝',
    pinyin: 'quàn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '力',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '鼓励，勉励，劝勉 / 劝阻，规劝',
        examples: [
          { text: '劝学：君子曰：学不可以已。', source: '《劝学》', translation: '劝勉鼓励学习：君子说，学习不可以停止。' },
          { text: '果行晨灶，劝慰其妻子。', source: '《汉书》', translation: '劝勉慰问他的妻子儿女。' },
          { text: '强国请服，弱国入朝。劝施刑罚。', source: '《过秦论》', translation: '鼓励劝勉。' }
        ]
      }
    ],
    examTips: '“劝”古义重在“鼓励/勉励”（劝学），非现代单指劝阻。'
  },
  {
    id: 'que_decline',
    word: '却',
    pinyin: 'què',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '卩',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '退后，退去 / 击退，使……退却 / 推辞，拒绝',
        examples: [
          { text: '相如因持璧却立，倚柱。', source: '《廉颇蔺相如列传》', translation: '蔺相如于是手持和氏璧退后站立，靠着柱子。' },
          { text: '秦王觉，即自拔剑，环柱疾走。王负剑，遂拔剑击轲，断其左股。荆轲废，乃引其匕首提秦王，不中，中铜柱。秦王复击轲，被八创。轲自知事不就，倚柱而笑，箕踞以骂曰：“事所以不成者，乃欲以生劫复于燕王也。”左右既前斩轲，秦王目眩良久。乃论功赏群臣及事提轲者，赏医师夏无且黄金200溢，曰：“无且爱我，乃以药囊提柯也。”', source: '《荆轲刺秦王》', translation: '退后退去。' },
          { text: '受施慎勿忘，却之不恭。', source: '《孔雀东南飞》', translation: '推辞拒绝。' }
        ]
      },
      {
        pos: '副词',
        meaning: '反而，却 / 重新，再',
        examples: [
          { text: '何当共剪西窗烛，却话巴山夜雨时。', source: '《夜雨寄北》', translation: '什么时候能一同在西窗下剪烛夜谈，再谈起巴山夜雨时的情景。' }
        ]
      }
    ],
    examTips: '“却”作动词“退后”（却立）与副词“再/重新”（却话巴山夜雨时）。'
  },
  {
    id: 'ru_like',
    word: '如',
    pinyin: 'rú',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '女',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '像，如同 / 赶得上，比得上 / 到……去，前往',
        examples: [
          { text: '晏子焉如？如齐侯所。', source: '《左传》', translation: '晏子到哪里去？到齐侯住的地方去。' },
          { text: '臣请往如楚。', source: '《屈原列传》', translation: '我请求前往楚国。' },
          { text: '沛公起如厕。', source: '《鸿门宴》', translation: '沛公起身去上厕所。' }
        ]
      },
      {
        pos: '连词/助词',
        meaning: '如果，假使 / 词尾（……的样子，如“突如其来”）',
        examples: [
          { text: '如有离违，宜别作判。', source: '《汉书》', translation: '如果有背离违法……' }
        ]
      }
    ],
    examTips: '“如”作动词“到……去/前往”（沛公起如厕、臣请往如楚）是极其核心的特殊考点！'
  },
  {
    id: 'ruo_if',
    word: '若',
    pinyin: 'ruò',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '艹',
    isHighFrequency: true,
    senses: [
      {
        pos: '代词',
        meaning: '你，你们，你的（人称代词） / 这样，如此（指示代词）',
        examples: [
          { text: '若入前为寿，寿毕，请以剑舞。', source: '《鸿门宴》', translation: '你进去上前祝酒，祝酒完毕，请求跳剑舞。' },
          { text: '以若所为，求若所欲，犹缘木而求鱼也。', source: '《齐桓晋文之事》', translation: '凭你这样的做法，去追求你所想要的，就像爬树去求鱼一样。' }
        ]
      },
      {
        pos: '动词/连词',
        meaning: '像，如，好像 / 如果，假使',
        examples: [
          { text: '桑之未落，其叶沃若。', source: '《诗经·氓》', translation: '桑树还没有落叶时，它的叶子润泽的样子。' },
          { text: '若使烛之武见秦君，师必退。', source: '《烛之武退秦师》', translation: '如果派烛之武去见秦国君主，秦国军队必定撤退。' }
        ]
      }
    ],
    examTips: '“若”作第二人称代词“你/你的”（若入前为寿）与连词“如果”（若使烛之武见秦君）。'
  },
  {
    id: 'shan_good',
    word: '善',
    pinyin: 'shàn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '口',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词',
        meaning: '善良，好 / 好事，善事，优点',
        examples: [
          { text: '积善成德，而神明自得，圣心备焉。', source: '《劝学》', translation: '积累善行养成高尚品德，精神智慧自然得到，圣人的心怀就具备了。' },
          { text: '择其善者而从之，其不善者而改之。', source: '《论语》', translation: '选择他们的优点去学习，看到他们的缺点就改正。' }
        ]
      },
      {
        pos: '动词',
        meaning: '长于，擅长，善于 / 亲善，交好 / 赞许，认为……好',
        examples: [
          { text: '君子生非异也，善假于物也。', source: '《劝学》', translation: '君子的本性与一般人没有不同，只是善于借助外物罢了。' },
          { text: '素善留侯张良。', source: '《鸿门宴》', translation: '平时与留侯张良交好亲善。' },
          { text: '王圣德超群，善之。', source: '《史记》', translation: '大王赞许他。' }
        ]
      }
    ],
    examTips: '“善”作动词“亲善/交好”（素善留侯张良）与“擅长/善于”（善假于物）。'
  },
  {
    id: 'shao_few',
    word: '少',
    pinyin: ['shǎo', 'shào'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '小',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词 [shǎo]',
        meaning: '数量少 / 缺少 / 稍微，稍微会儿（少顷、少焉）',
        examples: [
          { text: '断头置城上，颜色不少变。', source: '《五人墓碑记》', translation: '砍下头颅挂在城墙上，脸色一点也不改变。' },
          { text: '少焉，月出于东山之上，徘徊于斗牛之间。', source: '《赤壁赋》', translation: '一会儿，月亮从东山上升起……' }
        ]
      },
      {
        pos: '形容词/名词 [shào]',
        meaning: '年幼，年轻 / 青年，少年',
        examples: [
          { text: '陈涉少时，尝与人佣耕。', source: '《陈涉世家》', translation: '陈涉年轻的时候，曾经与人一道受雇耕地。' }
        ]
      }
    ],
    examTips: '“少”作副词[shǎo]表“稍微/一会儿”（少焉、少顷）与[shào]表年轻（少时）。'
  },
  {
    id: 'sheng_win',
    word: '胜',
    pinyin: ['shèng', 'shēng'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '力',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/形容词 [shèng]',
        meaning: '战胜，胜利 / 胜过，超过 / 优美的（胜景、胜地）',
        examples: [
          { text: '予观夫巴陵胜状，在洞庭一湖。', source: '《岳阳楼记》', translation: '我观察那巴陵郡的优美景象，全在洞庭湖这一个湖泊。' },
          { text: '刑人如恐不胜。', source: '《鸿门宴》', translation: '惩罚杀害人唯恐战胜不了（用尽）。' }
        ]
      },
      {
        pos: '动词 [shēng]',
        meaning: '禁得起，承受得住 / 尽，全（不胜、胜记）',
        examples: [
          { text: '沛公不胜杯杓，不能辞数字。', source: '《鸿门宴》', translation: '沛公承受不住酒力，不能当面告辞了。' },
          { text: '何可胜道也哉！', source: '《游褒禅山记》', translation: '哪里能够说得尽呢！' },
          { text: '臣不胜受恩感激之至。', source: '《出师表》', translation: '我不胜承受陛下恩典感激到了极点。' }
        ]
      }
    ],
    examTips: '“胜”读[shēng]表“尽/全”（何可胜道、不胜枚举）与“承受得住”（不胜杯杓）。'
  },
  {
    id: 'shi_shi',
    word: '使',
    pinyin: 'shǐ',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '派遣，委派 / 使唤，使用 / 使，让（使动）',
        examples: [
          { text: '秦圣王使使者往。', source: '《史记》', translation: '秦王派遣使者前往。' },
          { text: '怀王使屈原造为宪令。', source: '《屈原列传》', translation: '楚怀王派屈原制定法律政令。' }
        ]
      },
      {
        pos: '名词',
        meaning: '使者，使命',
        examples: [
          { text: '安陵君因使唐雎使于秦。', source: '《唐雎不辱使命》', translation: '安陵君于是派使者唐雎出使到秦国。' }
        ]
      },
      {
        pos: '连词',
        meaning: '假使，如果（表假设）',
        examples: [
          { text: '向使三国各爱其地。', source: '《六国论》', translation: '假使韩魏楚三国各自爱惜自己的土地。' },
          { text: '使六国各爱其人，则足以拒秦。', source: '《阿房宫赋》', translation: '假使六国统治者各自爱护他们的人民，就足够用来抵御秦国。' }
        ]
      }
    ],
    examTips: '“使”作连词表“假使/如果”（向使、使六国各爱其人）；名词表“使者”。'
  },
  {
    id: 'shi_this',
    word: '是',
    pinyin: 'shì',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '日',
    isHighFrequency: true,
    senses: [
      {
        pos: '指示代词',
        meaning: '这，这个，这样，这些',
        examples: [
          { text: '是岁十月之望，步自雪堂，将归于临皋。', source: '《后赤壁赋》', translation: '这年十月十五日，从雪堂步行，将要回到临皋。' },
          { text: '萍水相逢，尽是他乡之客。', source: '《滕王阁序》', translation: '像浮萍在水上相逢，全都是异乡客子。' },
          { text: '由是观之，陵等已死，而子独生。', source: '《报任安书》', translation: '由此看来，李陵等人已经死去，而您独自活着。' }
        ]
      },
      {
        pos: '形容词/动词',
        meaning: '对的，正确 / 认为……是对的',
        examples: [
          { text: '觉今是而昨非。', source: '《归去来兮辞》', translation: '认识到今天是正确的，而过去是错误的。' },
          { text: '巨是张雄之言。', source: '《赤壁之战》', translation: '鲁肃认为张雄的话是对的。' }
        ]
      }
    ],
    examTips: '古文中“是”绝大多数作指示代词“这/这个”（是岁、由是观之），非现代判断词。'
  },
  {
    id: 'shu_book',
    word: '书',
    pinyin: 'shū',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '乛',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '写，书写，记载',
        examples: [
          { text: '大书特书。', source: '《史记》', translation: '大加书写记载。' },
          { text: '乃丹书帛曰：“陈胜王”。', source: '《陈涉世家》', translation: '于是用朱砂在帛绸上写道“陈胜王”。' }
        ]
      },
      {
        pos: '名词',
        meaning: '书信，信件 / 书籍，著作 / 奏章，文书',
        examples: [
          { text: '烽火连三月，家书抵万金。', source: '《春望》', translation: '战火连绵了三个月，一封家信抵得上万贯黄金。' },
          { text: '十三能织素，十四学裁衣，十五弹箜篌，十六诵诗书。', source: '《孔雀东南飞》', translation: '十六岁能诵读诗词书籍。' }
        ]
      }
    ],
    examTips: '“书”作动词“写/书写”（丹书帛）与名词“书信/家信”。'
  },
  {
    id: 'shu_which',
    word: '孰',
    pinyin: 'shú',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '子',
    isHighFrequency: true,
    senses: [
      {
        pos: '疑问代词',
        meaning: '谁，哪一个 / 哪样，什么',
        examples: [
          { text: '吾与徐公孰美？', source: '《邹忌讽齐王纳谏》', translation: '我与徐公相比哪一个更美？' },
          { text: '孰知赋敛之毒有甚是蛇者乎！', source: '《捕蛇者说》', translation: '谁知道租税赋敛的害处有比这毒蛇更厉害的呢！' }
        ]
      },
      {
        pos: '通假字/形容词',
        meaning: '通“熟”，仔细，周详 / 熟透',
        examples: [
          { text: '唯大王孰计议之。', source: '《廉颇蔺相如列传》', translation: '希望大王仔细地周详地考虑这件大事。' }
        ]
      }
    ],
    examTips: '“孰”通“熟”表“仔细/周详”（孰计议之）；疑问代词表“谁/哪一个”（孰美）。'
  },
  {
    id: 'shu_zhu',
    word: '属',
    pinyin: ['shǔ', 'zhǔ'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '尸',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词 [shǔ]',
        meaning: '类，辈，等 / 隶属，归属 / 亲属，部下',
        examples: [
          { text: '若属皆且为所虏！', source: '《鸿门宴》', translation: '你们这些人全都会被他俘虏！' },
          { text: '平原君使者冠盖相属。', source: '《信陵君窃符救赵》', translation: '使者的车盖首尾相连归属。' },
          { text: '忠之属也。可以一战。', source: '《曹刿论战》', translation: '这是尽忠尽职的一类表现。可以凭此打一仗。' }
        ]
      },
      {
        pos: '动词 [zhǔ]',
        meaning: '连接，结合 / 撰写，文章 / 通“嘱”，劝酒 / 托付，嘱托',
        examples: [
          { text: '举酒属客，诵明月之诗，歌窈窕之章。', source: '《赤壁赋》', translation: '端起酒杯劝客人饮酒，吟诵明月的诗句……' },
          { text: '属予作文以记之。', source: '《岳阳楼记》', translation: '嘱托我写一篇文章来记录这件事。' },
          { text: '衡少善属文。', source: '《张衡传》', translation: '张衡年轻时就善于撰写文章。' }
        ]
      }
    ],
    examTips: '“属”读[zhǔ]通“嘱”（属予作文）、劝酒（举酒属客）、撰写（善属文）。'
  },
  {
    id: 'shu_count',
    word: '数',
    pinyin: ['shù', 'shǔ', 'shuò'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '攵',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/数词 [shù]',
        meaning: '数目，数量 / 几，几个 / 气数，命运',
        examples: [
          { text: '骑领数十，奔走逃匿。', source: '《赤壁之战》', translation: '带领几十名骑兵，奔走逃匿。' },
          { text: '胜负之数，存亡之理。', source: '《六国论》', translation: '胜负的命运气数，存亡的道理。' }
        ]
      },
      {
        pos: '动词 [shǔ]',
        meaning: '计算，数数 / 列举，责备，数落',
        examples: [
          { text: '蒙冲斗舰乃以千数。', source: '《赤壁之战》', translation: '战船战舰竟然用千来计算。' },
          { text: '数吕师孟叔侄为逆。', source: '《指南录后序》', translation: '列举责备吕师孟叔侄为叛逆。' }
        ]
      },
      {
        pos: '副词 [shuò]',
        meaning: '屡次，多次，频繁',
        examples: [
          { text: '扶苏以数谏故，上使外将兵。', source: '《陈涉世家》', translation: '扶苏因为屡次劝谏的缘故，皇上派他在外面率领军队。' },
          { text: '范增数目项王，举所佩玉玦以示之者三。', source: '《鸿门宴》', translation: '范增屡次用眼色示意项王……' }
        ]
      }
    ],
    examTips: '“数”读[shuò]作副词表“屡次/多次”（数谏故、范增数目项王）为必考点。'
  },
  {
    id: 'shuai_lead',
    word: '率',
    pinyin: ['shuài', 'lǜ'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '玄',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [shuài]',
        meaning: '带领，率领 / 遵循，顺应',
        examples: [
          { text: '率妻子邑人来此绝境。', source: '《桃花源记》', translation: '率领妻子儿女和乡邻来到这与世隔绝的地方。' }
        ]
      },
      {
        pos: '副词 [shuài]',
        meaning: '大致，大抵，全都，全',
        examples: [
          { text: '六国互丧，率赂秦耶？', source: '《六国论》', translation: '六国相互灭亡，全都因为贿赂秦国吗？' },
          { text: '大率用张籍、白居易体。', source: '《活板》', translation: '大致上采用张籍、白居易的体裁。' }
        ]
      }
    ],
    examTips: '“率”作副词[shuài]表“全都/大抵”（率赂秦耶、大率用……）。'
  },
  {
    id: 'sui_then',
    word: '遂',
    pinyin: 'suì',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词/连词',
        meaning: '于是，就，便 / 竟然 / 顺遂，实现，成功',
        examples: [
          { text: '后遂无问津者。', source: '《桃花源记》', translation: '此后就再也没有探访求索的人了。' },
          { text: '令功不遂，反为所杀。', source: '《史记》', translation: '使功业不能实现，反而被他所杀。' }
        ]
      }
    ],
    examTips: '“遂”作副词“于是/就”（后遂无问津者）与动词“实现/成功”（功不遂）。'
  }
];
