import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'src', 'data');

console.log('Building full 5-part dataset...');

// Part 1: A - F
const part1Data = [
  {
    id: 'ai',
    word: '爱',
    pinyin: 'ài',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '爪',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '喜爱，爱护，疼爱',
        examples: [
          { text: '秦爱纷奢，人亦念其家。', source: '《阿房宫赋》', translation: '秦统治者喜爱繁华奢侈，百姓也顾念自己的家。' },
          { text: '父母之爱子，则为之计深远。', source: '《触龙说赵太后》', translation: '父母疼爱子女，就为他们考虑长远。' }
        ]
      },
      {
        pos: '动词',
        meaning: '加惠于人，爱护百姓',
        examples: [
          { text: '吴广素爱人。', source: '《陈涉世家》', translation: '吴广平时爱护士兵。' },
          { text: '此四君者，皆明智而忠信，宽厚而爱人。', source: '《过秦论》', translation: '这四位君主，都明智且忠诚守信，宽厚爱护民众。' }
        ]
      },
      {
        pos: '动词',
        meaning: '爱惜，怜惜，爱护',
        examples: [
          { text: '向使三国各爱其地，齐人勿附于秦，刺客不行。', source: '《六国论》', translation: '假使韩、魏、楚三国各自爱惜自己的国土……' }
        ]
      },
      {
        pos: '动词',
        meaning: '吝惜，舍不得，吝啬',
        examples: [
          { text: '齐国虽褊小，吾何爱一牛？', source: '《齐桓晋文之事》', translation: '齐国虽然狭小，我怎么会吝惜一头牛呢？' },
          { text: '不爱珍器重宝肥饶之地。', source: '《过秦论》', translation: '不吝惜珍贵的宝物和肥沃的土地。' }
        ]
      },
      {
        pos: '动词',
        meaning: '通“薆”，隐蔽，躲藏',
        examples: [
          { text: '爱而不见，搔首踟蹰。', source: '《诗经·静女》', translation: '隐藏起来不出现，使人着急得揉头踟蹰。' }
        ]
      },
      {
        pos: '名词/形容词',
        meaning: '恩惠 / 吝啬的',
        examples: [
          { text: '古之遗爱也。', source: '《左传》', translation: '这是古代流传下来的恩惠。' },
          { text: '百姓皆以王为爱也。', source: '《齐桓晋文之事》', translation: '百姓都以为大王是吝啬。' }
        ]
      }
    ],
    examTips: '“爱”在高考文言文中常考查“吝惜、舍不得”义项（如《过秦论》《齐桓晋文之事》）。'
  },
  {
    id: 'an',
    word: '安',
    pinyin: 'ān',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '宀',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/动词',
        meaning: '舒适，安适 / 抚慰，安抚',
        examples: [
          { text: '倚南窗以寄傲，审容膝之易安。', source: '《归去来兮辞》', translation: '倚着南窗寄托傲世情怀，明白狭小之处容易使人心安。' },
          { text: '时时为安慰，久久莫相忘。', source: '《孔雀东南飞》', translation: '时常以此宽慰，长久不要互相遗忘。' }
        ]
      },
      {
        pos: '动词',
        meaning: '安置，安放 / 养生',
        examples: [
          { text: '离山十里有王平安营。', source: '《失街亭》', translation: '离山十里有王平安设营寨。' },
          { text: '衣食所安，弗敢专也，必以分人。', source: '《曹刿论战》', translation: '衣食等养生安身的东西，不敢独自享有，一定分给别人。' }
        ]
      },
      {
        pos: '形容词/使动',
        meaning: '安定 / 使……安定',
        examples: [
          { text: '思国之安者，必积其德义。', source: '《谏太宗十思疏》', translation: '想要国家安定的人，一定要积聚道德仁义。' },
          { text: '既来之，则安之。', source: '《季氏将伐颛臾》', translation: '既然使他们招抚来了，就要使他们安定下来。' }
        ]
      },
      {
        pos: '形容词',
        meaning: '安稳，安全',
        examples: [
          { text: '风雨不动安如山。', source: '《茅屋为秋风所破歌》', translation: '风雨中不动摇，安稳得像山一样。' }
        ]
      },
      {
        pos: '疑问代词/副词',
        meaning: '哪里，怎么，哪儿',
        examples: [
          { text: '沛公安在？', source: '《鸿门宴》', translation: '沛公在哪里？' },
          { text: '安能摧眉折腰事权贵，使我不得开心颜！', source: '《梦游天姥吟留别》', translation: '怎么能低头弯腰侍奉权贵，使我不能心情舒畅呢！' }
        ]
      }
    ],
    examTips: '“安”作为疑问代词表反问或疑问“哪里、怎么”是高考极高频考点。'
  },
  {
    id: 'bei',
    word: '被',
    pinyin: ['bèi', 'pī'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '衤',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '被子',
        examples: [
          { text: '一日昼寝帐中，落被于地。', source: '《杨修之死》', translation: '一天白天在帐中睡觉，被子掉落到地上。' }
        ]
      },
      {
        pos: '动词',
        meaning: '覆盖 / 施加，施及',
        examples: [
          { text: '未几，成归，闻妻言，如被冰雪。', source: '《促织》', translation: '没多久成名回来，听到妻子的话，全身如同覆盖了冰雪。' },
          { text: '幸被齿发，何敢负德？', source: '《柳毅传》', translation: '幸蒙施加人类的体貌，怎么敢辜负恩德？' }
        ]
      },
      {
        pos: '动词/介词',
        meaning: '遭受，受 / 表示被动',
        examples: [
          { text: '其次关木索，被箠楚受辱。', source: '《报任安书》', translation: '其次是被关押带上木枷铁锁，遭受笞打受辱。' },
          { text: '信而见疑，忠而被谤，能无怨乎？', source: '《屈原列传》', translation: '诚信却被怀疑，忠贞却被诽谤，能没有怨恨吗？' }
        ]
      },
      {
        pos: '动词（读pī）',
        meaning: '通“披”，穿在身上 / 披散，散开',
        examples: [
          { text: '将军身被坚执锐。', source: '《陈涉世家》', translation: '将军亲自穿上坚固的铠甲，拿着锐利的武器。' },
          { text: '屈原至于江滨，被发行吟泽畔。', source: '《屈原列传》', translation: '屈原到达江边，披散着头发在泽畔边走边吟唱。' }
        ]
      }
    ],
    examTips: '“被”读 pī 时通“披”（如《陈涉世家》《屈原列传》），读 bèi 时常作被动介词或“遭受”。'
  },
  {
    id: 'bei_2',
    word: '倍',
    pinyin: 'bèi',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/数词',
        meaning: '加倍，增加 / 倍数',
        examples: [
          { text: '虽倍赏累罚而不免于乱。', source: '《五蠹》', translation: '即使加倍赏赐、加重惩罚，也不能避免祸乱。' },
          { text: '尝以十倍之地，百万之众，叩关而攻秦。', source: '《过秦论》', translation: '曾经凭借着十倍于秦国的土地、上百万的大军攻打秦国。' }
        ]
      },
      {
        pos: '动词',
        meaning: '通“背”，违背，背叛，背对着',
        examples: [
          { text: '愿伯具言臣之不敢倍德也。', source: '《鸿门宴》', translation: '希望伯父向项王详细说明我绝不敢违背恩德。' },
          { text: '倍道而妄行，则天不能使之吉。', source: '《荀子·天论》', translation: '违背正道而妄乱行动，那么上天也不能使他吉祥。' },
          { text: '管仲反，入，倍屏而立。', source: '《管子》', translation: '管仲返回，走进来，背对着屏风站立。' }
        ]
      },
      {
        pos: '副词',
        meaning: '越发，更加，倍加',
        examples: [
          { text: '独在异乡为异客，每逢佳节倍思亲。', source: '《九月九日忆山东兄弟》', translation: '独自在异乡作客，每逢佳节更加思念亲人。' }
        ]
      }
    ],
    examTips: '通“背”（违背、背叛）是高考重点考查点（如《鸿门宴》“不敢倍德”）。'
  },
  {
    id: 'ben',
    word: '本',
    pinyin: 'běn',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '木',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '草木的根、干、茎 / 根本，基础',
        examples: [
          { text: '臣闻求木之长者，必固其根本。', source: '《谏太宗十思疏》', translation: '我听说想要树木生长得高大，一定要稳固它的根基。' },
          { text: '父母者，人之本也。', source: '《屈原列传》', translation: '父母是人的根本。' }
        ]
      },
      {
        pos: '名词',
        meaning: '本业，特指农业',
        examples: [
          { text: '今背本而趋末，食者甚众，是天下之大残也。', source: '《论积贮疏》', translation: '如今违背农桑本业而去从事工商末业……' }
        ]
      },
      {
        pos: '名词',
        meaning: '底本，版本 / 奏章',
        examples: [
          { text: '今存其本不忍废。', source: '《指南录后序》', translation: '如今保存它的底本不忍心废弃。' }
        ]
      },
      {
        pos: '副词/形容词',
        meaning: '本来，原来 / 考察，推究本原',
        examples: [
          { text: '此之谓失其本心。', source: '《鱼我所欲也》', translation: '这就叫做丧失了他的本性。' },
          { text: '抑本其成败之迹，而皆自于人欤？', source: '《伶官传序》', translation: '或者推究他成败的轨迹，不都是由于人为的原因吗？' }
        ]
      }
    ],
    examTips: '“本”作动词意为“推究本原”（如《伶官传序》）；作名词时有“农业本业”与“根本”之分。'
  },
  {
    id: 'bi',
    word: '鄙',
    pinyin: 'bǐ',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '阝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '边远的地方，边境 / 以……为边界（边邑）',
        examples: [
          { text: '蜀之鄙有二僧。', source: '《为学》', translation: '四川的边远地方有两个和尚。' },
          { text: '越国以鄙远，君知其难也。', source: '《烛之武退秦师》', translation: '越过别国而把远方的郑国作为边邑，您知道这是困难的。' }
        ]
      },
      {
        pos: '动词/形容词',
        meaning: '轻视，看不起 / 庸俗，浅陋，浅薄',
        examples: [
          { text: '孔子鄙其小器。', source: '《训俭示康》', translation: '孔子轻视他的气量狭小。' },
          { text: '肉食者鄙，未能远谋。', source: '《曹刿论战》', translation: '居高位当官的人目光短浅，不能深谋远虑。' },
          { text: '敢竭鄙诚，恭疏短引。', source: '《滕王阁序》', translation: '冒昧地尽我浅陋的诚意，恭敬地写下这篇短序。' }
        ]
      },
      {
        pos: '形容词',
        meaning: '轻贱，粗俗',
        examples: [
          { text: '人贱物亦鄙，不足迎后人。', source: '《孔雀东南飞》', translation: '人微贱物品也粗俗，不配用来迎接后来的新娘。' }
        ]
      }
    ],
    examTips: '“鄙”意动用法“以……为鄙（边邑）”（《烛之武退秦师》）与“庸俗、浅陋”（《曹刿论战》）为核心考点。'
  },
  {
    id: 'bing',
    word: '兵',
    pinyin: 'bīng',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '八',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '兵器，武器',
        examples: [
          { text: '收天下之兵，聚之咸阳。', source: '《过秦论》', translation: '收缴天下的武器，集中到咸阳。' }
        ]
      },
      {
        pos: '名词',
        meaning: '士兵，军队',
        examples: [
          { text: '得选兵八万人，进兵击秦军。', source: '《信陵君窃符救赵》', translation: '得到精选的军队八万人，进军击退秦军。' }
        ]
      },
      {
        pos: '名词',
        meaning: '战争，军事，战略战术',
        examples: [
          { text: '强秦之所以不敢加兵于赵者，徒以吾两人在也。', source: '《廉颇蔺相如列传》', translation: '强暴的秦国之所以不敢对赵国发动战争，只是因为有我们两个人在。' },
          { text: '上兵伐谋，其次伐交。', source: '《孙子·谋攻》', translation: '上等的用兵策略是以谋略胜敌，其次是通过外交破敌。' }
        ]
      }
    ],
    examTips: '注意区分“兵”指“兵器/武器”与“军队/士兵”的不同上下文（如《过秦论》“斩木为兵”指兵器）。'
  },
  {
    id: 'bing_2',
    word: '病',
    pinyin: 'bìng',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '疒',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '重病，疾病 / 生病',
        examples: [
          { text: '君之病在肠胃，不治将恐深。', source: '《扁鹊见蔡桓公》', translation: '您的病已经在肠胃里了，不医治恐怕会加重。' },
          { text: '而江浙之梅皆病矣。', source: '《病梅馆记》', translation: '因而江浙一带的梅树都呈病态了。' }
        ]
      },
      {
        pos: '名词/动词',
        meaning: '缺点，弊病 / 担心，忧虑，责备',
        examples: [
          { text: '人皆嗤吾固陋，吾不以为病。', source: '《训俭示康》', translation: '别人都讥笑我顽固鄙陋，我不认为这是缺点。' },
          { text: '君子病无能焉，不病人之不己知也。', source: '《论语》', translation: '君子只担忧自己没有能力，不担忧别人不知道自己。' },
          { text: '古人以俭为美德，今人乃以俭相诟病。', source: '《训俭示康》', translation: '古人把节俭看作美德，现代人竟然因为节俭而互相诟病辱骂。' }
        ]
      },
      {
        pos: '形容词',
        meaning: '困苦，疲劳',
        examples: [
          { text: '向吾不为斯役，则久已病矣。', source: '《捕蛇者说》', translation: '如果从前我不做这项差事，那么早就困苦不堪了。' },
          { text: '今日病矣，予助苗长矣。', source: '《揠苗助长》', translation: '今天太疲劳了，我帮助禾苗长高了。' }
        ]
      }
    ],
    examTips: '“病”作动词“担心、忧虑”（《论语》）或形容词“困苦、疲惫”（《捕蛇者说》）为重要引申义。'
  },
  {
    id: 'bo',
    word: '伯',
    pinyin: ['bó', 'bà', 'bǎi'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '亻',
    isHighFrequency: false,
    senses: [
      {
        pos: '名词',
        meaning: '兄弟排行第一（伯仲叔季） / 伯父 / 爵位',
        examples: [
          { text: '侯主侯伯，侯亚侯旅。', source: '《诗经》', translation: '长官领袖，公侯伯爵。' },
          { text: '秦伯素服郊次，乡师而哭。', source: '《崤之战》', translation: '秦伯穿着白色丧服在郊外等待，面对军队大哭。' }
        ]
      },
      {
        pos: '名词（通“霸”）',
        meaning: '诸侯联盟的首领，霸主',
        examples: [
          { text: '桓公，五伯之上也。', source: '《韩非子》', translation: '齐桓公是春秋五霸之首。' }
        ]
      }
    ],
    examTips: '“伯”通“霸”指诸侯霸主。'
  },
  {
    id: 'ceng',
    word: '曾',
    pinyin: ['céng', 'zēng'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '曰',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词（读céng）',
        meaning: '曾经，已经',
        examples: [
          { text: '同是天涯沦落人，相逢何必曾相识。', source: '《琵琶行》', translation: '同样都是天涯漂泊沦落之人，相逢聚首又何必非要以前就认识呢。' }
        ]
      },
      {
        pos: '副词（读zēng）',
        meaning: '竟，竟然，居然（表意外或语气加强）',
        examples: [
          { text: '今吾且死，而侯生曾无一言半辞送我。', source: '《信陵君窃符救赵》', translation: '如今我即将去送死，而侯先生竟然没有一言半语来送我。' },
          { text: '汝心之固，固不可彻，曾不若孀妻弱子。', source: '《愚公移山》', translation: '你的思想顽固，顽固得不开窍，竟连寡妇孤儿都比不上。' }
        ]
      },
      {
        pos: '动词/名词（读zēng）',
        meaning: '通“增”，增加 / 重孙、重祖父',
        examples: [
          { text: '所以动心忍性，曾益其所不能。', source: '《生于忧患，死于安乐》', translation: '用来使他的内心受到震动，使他的性格坚忍起来，增加他所不具备的能力。' }
        ]
      }
    ],
    examTips: '读 zēng 时表反问语气“竟、居然”或通“增”（《生于忧患，死于安乐》）。'
  },
  {
    id: 'cha',
    word: '察',
    pinyin: 'chá',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '宀',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '看，观察 / 看清楚，观察细致',
        examples: [
          { text: '徐而察之。', source: '《石钟山记》', translation: '慢慢地观察它。' },
          { text: '明足以察秋毫之末，而不见舆薪。', source: '《齐桓晋文之事》', translation: '视力足以看清秋天兽毛的末端，却看不见一整车的柴火。' }
        ]
      },
      {
        pos: '动词',
        meaning: '详审，明察，了解',
        examples: [
          { text: '向察众人之议，专欲误将军。', source: '《赤壁之战》', translation: '刚才详审大家的议论，纯粹是想耽误将军。' },
          { text: '小大之狱，虽不能察，必以情。', source: '《曹刿论战》', translation: '大大小小的诉讼案件，即使不能一一明察，也一定按照实情处理。' }
        ]
      },
      {
        pos: '动词/形容词',
        meaning: '考察并推荐（考察后举荐官职） / 精明',
        examples: [
          { text: '前太守臣逵察臣孝廉，后刺史臣荣举臣秀才。', source: '《陈情表》', translation: '先前的太守臣逵考察推荐臣为孝廉，后来的刺史臣荣举荐臣为秀才。' },
          { text: '水至清则无鱼，人至察则无徒。', source: '《答客难》', translation: '水太清澈了就不会有鱼，人过分苛求精明就不会有伙伴。' }
        ]
      }
    ],
    examTips: '“察”在察举制背景下意为“考察并举荐”（《陈情表》）。'
  },
  {
    id: 'chao',
    word: '朝',
    pinyin: ['cháo', 'zhāo'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '十',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读cháo）',
        meaning: '朝见，朝拜 / 使……朝见',
        examples: [
          { text: '相如每朝时，常称病。', source: '《廉颇蔺相如列传》', translation: '蔺相如每逢上朝时，经常称病不去。' },
          { text: '序八州而朝同列，百有余年矣。', source: '《过秦论》', translation: '招致八州的诸侯，使同等地位的诸侯来朝拜，已经一百多年了。' }
        ]
      },
      {
        pos: '名词/介词（读cháo）',
        meaning: '朝廷 / 朝代 / 面向，对向',
        examples: [
          { text: '于是入朝见威王。', source: '《邹忌讽齐王纳谏》', translation: '于是邹忌入朝拜见齐威王。' },
          { text: '三顾频烦天下计，两朝开济老臣心。', source: '《蜀相》', translation: '频繁三顾茅庐商讨天下大计，两代朝廷辅佐开国彰显老臣赤胆忠心。' }
        ]
      },
      {
        pos: '名词（读zhāo）',
        meaning: '早晨',
        examples: [
          { text: '朝服衣冠，窥镜。', source: '《邹忌讽齐王纳谏》', translation: '早晨穿戴好衣帽，照镜子。' },
          { text: '朝发白帝，暮到江陵。', source: '《三峡》', translation: '早晨从白帝城出发，傍晚就到达了江陵。' }
        ]
      }
    ],
    examTips: '使动用法“序八州而朝同列”（使……朝拜，出自《过秦论》）是经典考点。'
  },
  {
    id: 'cheng',
    word: '乘',
    pinyin: ['chéng', 'shèng'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '丿',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读chéng）',
        meaning: '驾，乘坐 / 升，登',
        examples: [
          { text: '乘犊车，从吏卒，交游士林。', source: '《赤壁之战》', translation: '乘坐牛车，跟随官吏随从，在士大夫阶层中交游。' },
          { text: '独与迈乘小舟，至绝壁下。', source: '《石钟山记》', translation: '独自与苏迈乘坐小船，来到绝壁下面。' }
        ]
      },
      {
        pos: '动词（读chéng）',
        meaning: '趁着，顺应 / 冒着',
        examples: [
          { text: '因利乘便，宰割天下，分裂山河。', source: '《过秦论》', translation: '凭借有利的形势，趁着便利的条件，割裂掌控天下。' },
          { text: '自京师乘风雪……至于泰安。', source: '《登泰山记》', translation: '从京城冒着风雪出发……到达泰安。' }
        ]
      },
      {
        pos: '量词/名词（读shèng）',
        meaning: '四匹马拉的战车（一车四马为一乘） / 辆',
        examples: [
          { text: '致万乘之势，序八州而朝同列。', source: '《过秦论》', translation: '达到了万乘大国的权势……' },
          { text: '于是为长安君约车百乘，质于齐。', source: '《触龙说赵太后》', translation: '于是为长安君准备了一百辆战车，送去齐国做人质。' }
        ]
      }
    ],
    examTips: '“乘”作介词/动词“趁着、凭借”（《过秦论》）与量词 shèng（四马战车）是常见区分考点。'
  },
  {
    id: 'cheng_2',
    word: '城',
    pinyin: 'chéng',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '土',
    isHighFrequency: false,
    senses: [
      {
        pos: '名词/动词',
        meaning: '城墙 / 城市 / 修筑城墙',
        examples: [
          { text: '城非不高也，池非不深也。', source: '《得道多助，失道寡助》', translation: '城墙不是不高，护城河不是不深。' },
          { text: '今日割五城，明日割十城。', source: '《六国论》', translation: '今天割让五座城池，明天割让十座城池。' }
        ]
      }
    ]
  },
  {
    id: 'cheng_3',
    word: '诚',
    pinyin: 'chéng',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '诚心诚意',
        examples: [
          { text: '盖在殷忧，必竭诚以待下。', source: '《谏太宗十思疏》', translation: '深重忧虑时，必定竭尽诚心来对待下属。' }
        ]
      },
      {
        pos: '副词',
        meaning: '确实，的确',
        examples: [
          { text: '臣诚知不如徐公美。', source: '《邹忌讽齐王纳谏》', translation: '我确实知道自己不如徐公漂亮。' }
        ]
      },
      {
        pos: '连词',
        meaning: '表假设推论：果真，如果',
        examples: [
          { text: '楚诚能绝齐，秦愿献商於之地六百里。', source: '《屈原列传》', translation: '楚国果真能够与齐国断绝关系，秦国愿意奉献商於六百里的土地。' },
          { text: '诚能见可欲则思知足以自戒。', source: '《谏太宗十思疏》', translation: '如果能够见到想要的东西就想到知足来戒诫自己。' }
        ]
      }
    ],
    examTips: '“诚”作假设连词“果真、如果”（《屈原列传》）是文言翻译常考点。'
  },
  {
    id: 'chi',
    word: '池',
    pinyin: 'chí',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '氵',
    isHighFrequency: false,
    senses: [
      {
        pos: '名词',
        meaning: '护城河 / 水池，池塘',
        examples: [
          { text: '城非不高也，池非不深也。', source: '《得道多助，失道寡助》', translation: '城墙不是不高，护城河不是不深。' },
          { text: '山顶有大池，相传以为雁荡。', source: '《雁荡山》', translation: '山顶有一个大水池，相传这就是雁荡。' }
        ]
      }
    ]
  },
  {
    id: 'chu',
    word: '除',
    pinyin: 'chú',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '阝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '台阶，阶梯',
        examples: [
          { text: '黎明即起，洒扫庭除。', source: '《朱子家训》', translation: '天刚亮就起床，打扫庭院台阶。' }
        ]
      },
      {
        pos: '动词',
        meaning: '去掉，除去 / 修治',
        examples: [
          { text: '兴利除弊。', source: '《答司马谏议书》', translation: '兴办有利的事业，去除弊端。' },
          { text: '即除魏阉废祠之址以葬之。', source: '《五人墓碑记》', translation: '就整修魏忠贤废弃生祠的旧址来埋葬他们。' }
        ]
      },
      {
        pos: '动词',
        meaning: '拜官授职（免去旧职，授予新职）',
        examples: [
          { text: '寻蒙国恩，除臣洗马。', source: '《陈情表》', translation: '不久蒙受国家恩典，任命臣为太子洗马。' },
          { text: '予除右丞相兼枢密使。', source: '《指南录后序》', translation: '我被任命为右丞相兼枢密使。' }
        ]
      }
    ],
    examTips: '“除”在官职变动中专指“授予官职、拜官”（《陈情表》），属于官职高频考词。'
  },
  {
    id: 'chuan',
    word: '传',
    pinyin: ['chuán', 'zhuàn'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读chuán）',
        meaning: '传送，传递 / 传授 / 流传，传达',
        examples: [
          { text: '得璧，传之美人。', source: '《廉颇蔺相如列传》', translation: '得到和氏璧，把它传给嫔妃看。' },
          { text: '师者，所以传道受业解惑也。', source: '《师说》', translation: '老师，是用来传授道理、教授学业、解答疑难问题的。' },
          { text: '此世所以不传也。', source: '《石钟山记》', translation: '这就是这种说法在世上没有流传开来的原因。' }
        ]
      },
      {
        pos: '名词（读zhuàn）',
        meaning: '客舍，传舍 / 传记 / 解释经文的著作（经传）',
        examples: [
          { text: '舍相如广成传舍。', source: '《廉颇蔺相如列传》', translation: '安排蔺相如住在广成传舍里。' },
          { text: '六艺经传皆通习之。', source: '《师说》', translation: '六经的经文和传记都普遍学习过。' }
        ]
      }
    ],
    examTips: '“传舍”（zhuàn shè，驿站客舍）与“经传”（zhuàn）读音与意思需重点区别。'
  },
  {
    id: 'ci',
    word: '辞',
    pinyin: 'cí',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '辛',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '借口，托辞 / 供词',
        examples: [
          { text: '欲加之罪，其无辞乎？', source: '《左传》', translation: '要想给人安上罪名，难道还怕找不到借口吗？' },
          { text: '狱辞无谋故者。', source: '《狱中杂记》', translation: '诉讼案卷供词里没有谋杀和预谋杀人的。' }
        ]
      },
      {
        pos: '名词',
        meaning: '言辞，文辞 / 一种文体（如辞赋）',
        examples: [
          { text: '而侯生曾无一言半辞送我。', source: '《信陵君窃符救赵》', translation: '而侯先生竟然没有一言半语来送我。' },
          { text: '《归去来兮辞》', source: '《归去来兮辞》', translation: '《归去来兮辞》' }
        ]
      },
      {
        pos: '动词',
        meaning: '告别，辞别 / 推辞，辞去 / 计较',
        examples: [
          { text: '今者出，未辞也，为之奈何？', source: '《鸿门宴》', translation: '现在出来，没有告辞，这可怎么办？' },
          { text: '如姬之欲为公子死，无所辞。', source: '《信陵君窃符救赵》', translation: '如姬想要为公子效死，绝不推辞。' },
          { text: '大行不顾细谨，大礼不辞小让。', source: '《鸿门宴》', translation: '做大事不必顾虑细枝末节，做大礼不必计较小让。' }
        ]
      }
    ],
    examTips: '“辞”作动词“推辞、拒绝”（《信陵君窃符救赵》）与“计较”（《鸿门宴》）是考查重点。'
  },
  {
    id: 'cong',
    word: '从',
    pinyin: ['cóng', 'zòng'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '彳',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读cóng）',
        meaning: '跟随，追随 / 听从，顺从',
        examples: [
          { text: '天下云集响应，赢粮而景从。', source: '《过秦论》', translation: '天下响应如云彩聚集，担着粮食像影子一样跟随。' },
          { text: '臣从其计。', source: '《廉颇蔺相如列传》', translation: '我听从了他的计策。' }
        ]
      },
      {
        pos: '动词（读cóng）',
        meaning: '从事，参与 / 紧挨着',
        examples: [
          { text: '弟走从军阿姨死。', source: '《琵琶行》', translation: '弟弟从军远去，阿姨也去世了。' },
          { text: '樊哙从良坐。', source: '《鸿门宴》', translation: '樊哙挨着张良坐下。' }
        ]
      },
      {
        pos: '名词（读zòng）',
        meaning: '通“纵”，合纵的盟约（合纵连横）',
        examples: [
          { text: '于是从散约败，争割地而赂秦。', source: '《过秦论》', translation: '于是合纵离散盟约失败，争着割让土地去贿赂秦国。' }
        ]
      }
    ],
    examTips: '“从”通“纵”（合纵，读 zòng，如《过秦论》“从散约败”）是高考古字通假常考点。'
  },
  {
    id: 'da',
    word: '达',
    pinyin: 'dá',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '通达，透彻 / 到达，至',
        examples: [
          { text: '屋极有窗以达气。', source: '《狱中杂记》', translation: '屋顶开有窗户用来透气。' },
          { text: '指通豫南，达于汉阴，可乎？', source: '《愚公移山》', translation: '一直通向豫州南部，到达汉水南岸，可以吗？' }
        ]
      },
      {
        pos: '动词/形容词',
        meaning: '通晓，明白 / 显达，得志',
        examples: [
          { text: '不求闻达于诸侯。', source: '《出师表》', translation: '不追求在诸侯中扬名显达。' },
          { text: '昔正考父煮粥以糊口，孟僖子知其后必有达人。', source: '《训俭示康》', translation: '昔日正考父煮粥糊口，孟僖子知道他的后代必有显达之人。' }
        ]
      }
    ],
    examTips: '“闻达”（扬名显达，出自《出师表》）与“达人”（显达尊贵的人）。'
  },
  {
    id: 'dai',
    word: '殆',
    pinyin: 'dài',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '歹',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词',
        meaning: '危险 / 疑惑，精神疲倦',
        examples: [
          { text: '吾非至于子之门则殆矣。', source: '《庄子·秋水》', translation: '我如果不到您的门前就危险了。' },
          { text: '学而不思则罔，思而不学则殆。', source: '《论语》', translation: '只学习不思考就会迷惘，只思考不学习就会疑惑疲倦。' }
        ]
      },
      {
        pos: '副词',
        meaning: '表猜测：大概，恐怕 / 几乎，接近，差不多',
        examples: [
          { text: '郦元之所见，殆与余同，而言之不详。', source: '《石钟山记》', translation: '郦道元所见到的，恐怕和我相同，但说得不详细。' },
          { text: '且燕、赵处秦革灭殆尽之际。', source: '《六国论》', translation: '况且燕国、赵国正处在被秦国消灭殆尽的关头。' }
        ]
      }
    ],
    examTips: '“殆”作副词“恐怕、大概”（《石钟山记》）与“几乎、接近”（《六国论》“殆尽”）为核心考点。'
  },
  {
    id: 'dang',
    word: '当',
    pinyin: ['dāng', 'dàng'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '⺌',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读dāng）',
        meaning: '抵挡，抵御 / 把守，占据',
        examples: [
          { text: '料大王士卒足以当项王乎？', source: '《鸿门宴》', translation: '估计大王您的士卒足以抵挡项王吗？' },
          { text: '一夫当关，万夫莫开。', source: '《蜀道难》', translation: '一人把守关隘，万人也打不进来。' }
        ]
      },
      {
        pos: '动词/助动词',
        meaning: '掌管，主持 / 应当，必须',
        examples: [
          { text: '郡之贤士大夫请于当道。', source: '《五人墓碑记》', translation: '郡里贤能的士大夫向当权的主管官员请求。' },
          { text: '老当益壮，宁移白首之心？', source: '《滕王阁序》', translation: '年纪虽老志气应当更加豪壮，哪能在白头发时改变壮志呢？' }
        ]
      },
      {
        pos: '介词/时间词（读dāng）',
        meaning: '面对，对着 / 值，在，正在 / 将要，必定',
        examples: [
          { text: '当窗理云鬓，对镜帖花黄。', source: '《木兰诗》', translation: '对着窗户梳理云鬓，对着镜子贴上花黄。' },
          { text: '当是时也，商君佐之。', source: '《过秦论》', translation: '正在那个时候，商鞅辅佐秦孝公。' },
          { text: '不久当归还，还必相迎取。', source: '《孔雀东南飞》', translation: '不久我一定回来，回来一定迎接你。' }
        ]
      },
      {
        pos: '动词/形容词（读dàng）',
        meaning: '符合，恰当 / 当作，顶替',
        examples: [
          { text: '将献公堂，惴惴恐不当意。', source: '《促织》', translation: '准备呈献公堂，心里惴惴不安恐怕不合县官的心意。' },
          { text: '安步以当车。', source: '《战国策》', translation: '安稳慢步来顶替乘车。' }
        ]
      }
    ],
    examTips: '“当”作动词“把守”（《蜀道难》）、“主持、掌管”（《五人墓碑记》“当道”）与副词“必定/将要”。'
  },
  {
    id: 'dao',
    word: '道',
    pinyin: 'dào',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '道路 / 途径，方法 / 道理，规律',
        examples: [
          { text: '若舍郑以为东道主，行李之往来，共其乏困。', source: '《烛之武退秦师》', translation: '如果放弃围攻郑国而把它作为东方道路上的主人……' },
          { text: '行军用兵之道，非及向时之士也。', source: '《过秦论》', translation: '行军用兵的方法，赶不上先前的将领。' },
          { text: '吾师道也，夫庸知其年之先后生于吾乎？', source: '《师说》', translation: '我学习的是道理，哪管他的年龄比我大还是比我小呢？' }
        ]
      },
      {
        pos: '名词',
        meaning: '风尚 / 道义 / 思想，学说',
        examples: [
          { text: '嗟乎！师道之不传也久矣！', source: '《师说》', translation: '唉！尊师重道的风尚不流传已经很久了！' },
          { text: '伐无道，诛暴秦。', source: '《陈涉世家》', translation: '讨伐没有道义的君主，诛灭暴虐的秦朝。' },
          { text: '废先王之道，焚百家之言，以愚黔首。', source: '《过秦论》', translation: '废除先王的治国思想，焚烧诸子百家的言论，用来愚弄百姓。' }
        ]
      },
      {
        pos: '动词',
        meaning: '取道，经由 / 说，讲 / 通“导”（引导）',
        examples: [
          { text: '从骊山下，道芷阳间行。', source: '《鸿门宴》', translation: '从骊山脚下，取道芷阳从小路抄近走。' },
          { text: '何可胜道也哉！', source: '《游褒禅山记》', translation: '哪能说得尽呢！' }
        ]
      }
    ],
    examTips: '“道”作动词“取道”（《鸿门宴》“道芷阳”）与名词“风尚”（《师说》“师道”）为高考重难点。'
  },
  {
    id: 'de',
    word: '得',
    pinyin: 'dé',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '彳',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '取得，得到 / 能够 / 融洽，相得',
        examples: [
          { text: '小则获邑，大则得城。', source: '《六国论》', translation: '小则获得平原小镇，大则得到重要城池。' },
          { text: '沛公军霸上，未得与项羽相见。', source: '《鸿门宴》', translation: '沛公驻军霸上，没能够与项羽相见。' },
          { text: '某亦守法，与公甚相得。', source: '《记王忠肃公翱事》', translation: '我也遵守法纪，与王公非常融洽。' }
        ]
      },
      {
        pos: '名词/形容词',
        meaning: '收获，心得体会 / 适宜，对',
        examples: [
          { text: '古人之观于天地、山川，往往有得。', source: '《游褒禅山记》', translation: '古人观察天地、山川，往往有所心得。' },
          { text: '此言得之。', source: '《六国论》', translation: '这话是对的（说中了）。' }
        ]
      },
      {
        pos: '助动词/通假',
        meaning: '应该，要 / 通“德”，感恩',
        examples: [
          { text: '吾得兄事之。', source: '《鸿门宴》', translation: '我应该把他当作兄长伺候。' },
          { text: '所识穷乏者得我与？', source: '《鱼我所欲也》', translation: '所认识的贫穷困困者感激我吗？' }
        ]
      }
    ],
    examTips: '“吾得兄事之”（应该）与“往往有得”（心得体会）是名句翻译高频考点。'
  },
  {
    id: 'du',
    word: '度',
    pinyin: ['dù', 'duó'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '广',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词（读dù）',
        meaning: '计量标准 / 制度，法度 / 限度，度量',
        examples: [
          { text: '乃曰：“吾忘持度。”', source: '《郑人买履》', translation: '于是说：“我忘了带量好的尺寸。”' },
          { text: '内立法度，务耕织。', source: '《过秦论》', translation: '对内建立法律制度，致力于耕作纺织。' },
          { text: '乐盘游，则思三驱以为度。', source: '《谏太宗十思疏》', translation: '喜爱游乐围猎，就想到一年三次打猎为限度。' }
        ]
      },
      {
        pos: '动词（读dù）',
        meaning: '过，越过 / 谱写，自度曲',
        examples: [
          { text: '羌笛何须怨杨柳，春风不度玉门关。', source: '《凉州词》', translation: '羌笛何必埋怨杨柳不发芽，春风根本吹不过玉门关。' },
          { text: '因自度此曲。', source: '《扬州慢》', translation: '因而自己谱写了这首曲子。' }
        ]
      },
      {
        pos: '动词（读duó）',
        meaning: '计算，衡量 / 推测，估计，揣度',
        examples: [
          { text: '试使山东之国与陈涉度长絜大，比权量力。', source: '《过秦论》', translation: '假使让崤山以东的各国与陈涉测量长短大小，比较权势力量。' },
          { text: '度我至军中，公乃入。', source: '《鸿门宴》', translation: '估计我到了军营中，您再进去。' }
        ]
      }
    ],
    examTips: '“度”读 duó 时表示“衡量推测”（《过秦论》《鸿门宴》），读 dù 时表示“法度/限度/渡过”。'
  },
  {
    id: 'duan',
    word: '短',
    pinyin: 'duǎn',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '矢',
    isHighFrequency: false,
    senses: [
      {
        pos: '形容词/动词',
        meaning: '短小 / 缺点，短处 / 诋毁，说……短处',
        examples: [
          { text: '兼花之长而各去其短。', source: '《芙蕖》', translation: '兼有各种花卉的长处而各去除它们的短处。' },
          { text: '使上官大夫短屈原于顷襄王。', source: '《屈原列传》', translation: '让上官大夫在顷襄王面前说屈原的坏话诋毁他。' }
        ]
      }
    ],
    examTips: '“短屈原于顷襄王”（动词：诋毁，说短处，出自《屈原列传》）。'
  },
  {
    id: 'duo',
    word: '多',
    pinyin: 'duō',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '夕',
    isHighFrequency: false,
    senses: [
      {
        pos: '形容词/动词',
        meaning: '数量多 / 称赞，赞美 / 增加',
        examples: [
          { text: '故传天下不足多也。', source: '《论积贮疏》', translation: '因此传封天下给他人也不值得赞美。' },
          { text: '近岁风俗尤多侈靡。', source: '《训俭示康》', translation: '近年来风俗尤其大多奢侈浪费。' }
        ]
      }
    ]
  },
  {
    id: 'e',
    word: '恶',
    pinyin: ['è', 'wù', 'wū'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '心',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/形容词（读è）',
        meaning: '奸恶小人，罪过 / 坏的，不好的，险恶',
        examples: [
          { text: '正身以黜恶。', source: '《谏太宗十思疏》', translation: '端正自身来罢黜奸恶小人。' },
          { text: '廉君宣恶言。', source: '《廉颇蔺相如列传》', translation: '廉将军扬言说坏话。' }
        ]
      },
      {
        pos: '动词（读wù）',
        meaning: '憎恨，讨厌 / 嫉妒',
        examples: [
          { text: '去民之所恶，补民之不足。', source: '《勾践灭吴》', translation: '去除百姓所憎恨的事物，弥补百姓的不足。' },
          { text: '表恶其能而不能用也。', source: '《赤壁之战》', translation: '刘表嫉妒他的才能而不能重用他。' }
        ]
      },
      {
        pos: '疑问代词/副词（读wū）',
        meaning: '怎么，哪里',
        examples: [
          { text: '以小易大，彼恶知之？', source: '《齐桓晋文之事》', translation: '用小羊替换大牛，他们哪里知道其中的缘故呢？' }
        ]
      }
    ],
    examTips: '“恶”读 wū 时表示疑问代词“怎么，哪里”（《齐桓晋文之事》）。'
  },
  {
    id: 'fa',
    word: '发',
    pinyin: 'fā',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '乛',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '发射，发箭 / 出发，派遣',
        examples: [
          { text: '朝发白帝，暮到江陵。', source: '《三峡》', translation: '早晨从白帝城出发，傍晚就到达了江陵。' },
          { text: '发闾左谪戍渔阳九百人。', source: '《陈涉世家》', translation: '徵发贫苦百姓九百人去守卫渔阳。' }
        ]
      },
      {
        pos: '动词',
        meaning: '起用，兴起 / 打开，掀开 / 拿出',
        examples: [
          { text: '舜发于畎亩之中。', source: '《生于忧患，死于安乐》', translation: '舜从田野之中被起用。' },
          { text: '涂有饿莩而不知发。', source: '《寡人之于国也》', translation: '道路上有饿死的人却不知道打开粮仓救济。' },
          { text: '有贤士大夫发五十金。', source: '《五人墓碑记》', translation: '有贤能的士大夫拿出五十两白银。' }
        ]
      },
      {
        pos: '动词',
        meaning: '发觉，泄露 / 抒发，发出 / 花开',
        examples: [
          { text: '恐前语发。', source: '《张衡传》', translation: '担心先前的话泄露出去。' },
          { text: '野芳发而幽香，佳木秀而繁阴。', source: '《醉翁亭记》', translation: '野花开放散发出幽微的香气，美好的树木繁茂形成浓郁的树荫。' }
        ]
      }
    ],
    examTips: '“舜发于畎亩”（被起用）与“不知发”（打开粮仓救济）是重点含义。'
  },
  {
    id: 'fa_2',
    word: '伐',
    pinyin: 'fá',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '砍伐 / 攻打，讨伐',
        examples: [
          { text: '侃侃伐檀兮。', source: '《伐檀》', translation: '砍伐檀树声侃侃。' },
          { text: '季氏将伐颛臾。', source: '《季氏将伐颛臾》', translation: '季氏将要攻打颛臾。' }
        ]
      },
      {
        pos: '名词/动词',
        meaning: '功劳，功勋 / 夸耀，自夸',
        examples: [
          { text: '平伐其功。', source: '《屈原列传》', translation: '屈平夸耀自己的功劳。' },
          { text: '自伐者无功，自矜者不长。', source: '《老子》', translation: '自我夸耀的人建立不了功勋，自高自大的人不能长久。' }
        ]
      }
    ],
    examTips: '“平伐其功”（自夸功劳，出自《屈原列传》）。'
  },
  {
    id: 'fan',
    word: '反',
    pinyin: 'fǎn',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '又',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '翻转 / 通“返”，返回，归还',
        examples: [
          { text: '经纶世务者，窥谷忘反。', source: '《与朱元思书》', translation: '治理社会事务的人，看到这幽美的山谷也会流连忘返。' }
        ]
      },
      {
        pos: '动词/副词',
        meaning: '背叛，反叛 / 反而，竟然',
        examples: [
          { text: '日夜望将军至，岂敢反乎？', source: '《鸿门宴》', translation: '日夜盼望将军到来，怎么敢造反呢？' },
          { text: '今其智乃反不能及。', source: '《师说》', translation: '如今他们的智慧竟然反而赶不上（巫医乐师百工之人）。' }
        ]
      }
    ]
  },
  {
    id: 'fang',
    word: '方',
    pinyin: 'fāng',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '方',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '方圆，周围 / 方位，方向 / 方法，方术',
        examples: [
          { text: '今齐地方千里，百二十城。', source: '《邹忌讽齐王纳谏》', translation: '如今齐国土地方圆千里，有一百二十座城池。' },
          { text: '乃令史官记地动所从方起。', source: '《张衡传》', translation: '于是命令史官记录地震从哪个方向发生。' }
        ]
      },
      {
        pos: '形容词/副词',
        meaning: '正直，方正 / 并排 / 正当，正在，将要',
        examples: [
          { text: '方正之不容也。', source: '《屈原列传》', translation: '行为方正的人不能被世俗包容。' },
          { text: '今操方连船舰。', source: '《赤壁之战》', translation: '如今曹操正把船舰连接在一起。' },
          { text: '方此之时，臣不敢言。', source: '《史记》', translation: '当那个时刻，臣不敢说话。' }
        ]
      }
    ],
    examTips: '“地方千里”（方圆）与“方连船舰”（正在）是常见义项。'
  },
  {
    id: 'fen',
    word: '分',
    pinyin: ['fēn', 'fèn'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '刀',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读fēn）',
        meaning: '分开，划分 / 分给，分配 / 辨别',
        examples: [
          { text: '舟凝滞于中流，将安所分其向背？', source: '《楚辞》', translation: '船停滞在水流中央，将在哪里划分方向背向呢？' },
          { text: '衣食所安，弗敢专也，必以分人。', source: '《曹刿论战》', translation: '衣食等安身的东西不敢独自享有，一定分给别人。' }
        ]
      },
      {
        pos: '名词（读fèn）',
        meaning: '职分，名分，本分 / 限度，分界',
        examples: [
          { text: '怀王以不知忠臣之分，故内惑于郑袖。', source: '《屈原列传》', translation: '楚怀王因为不懂得忠臣的本分，所以在内被郑袖困惑。' }
        ]
      }
    ]
  },
  {
    id: 'feng',
    word: '奉',
    pinyin: 'fèng',
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '大',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '双手捧着 / 献上，进献',
        examples: [
          { text: '王必无人，臣愿奉璧往使。', source: '《廉颇蔺相如列传》', translation: '大王如果实在没有合适人选，臣愿意捧着和氏壁前往出使。' },
          { text: '请奉盆缶秦王以相娱乐。', source: '《廉颇蔺相如列传》', translation: '请允许我献上瓦盆给秦王击打娱乐。' }
        ]
      },
      {
        pos: '动词',
        meaning: '奉侍，侍奉 / 尊奉，遵行',
        examples: [
          { text: '张良出，要项伯。项伯即入见沛公，沛公奉宧酒为寿。', source: '《鸿门宴》', translation: '沛公捧着酒杯向项伯祝酒。' },
          { text: '臣侍汤药，未尝废离。', source: '《陈情表》', translation: '臣侍奉汤药，未曾离开。' }
        ]
      }
    ]
  },
  {
    id: 'fou',
    word: '否',
    pinyin: ['fǒu', 'pǐ'],
    category: 'shici',
    categoryLabel: '文言实词',
    radical: '口',
    isHighFrequency: false,
    senses: [
      {
        pos: '副词/助词（读fǒu）',
        meaning: '不，否定 / 句末疑问助词（相当于“吗”）',
        examples: [
          { text: '或师焉，或不焉。', source: '《师说》', translation: '有的从师学习，有的不从师学习。' },
          { text: '廉君宣恶言，廉颇否？', source: '《廉颇蔺相如列传》', translation: '廉将军扬言说坏话，廉颇是否这样呢？' }
        ]
      },
      {
        pos: '形容词/名词（读pǐ）',
        meaning: '恶劣，坏，坏运（否极泰来）',
        examples: [
          { text: '否泰如天地，足以荣汝身。', source: '《孔雀东南飞》', translation: '运气坏与好相差如天地，足够使你身体荣耀。' }
        ]
      }
    ]
  },
  {
    id: 'chu_ru_nr',
    word: '出入',
    pinyin: 'chū rù',
    category: 'shici',
    categoryLabel: '文言实词',
    isHighFrequency: true,
    senses: [
      {
        pos: '偏义复词/动词',
        meaning: '进出（偏指“进入”） / 支流收支差距',
        examples: [
          { text: '备他盗之出入与非常也。', source: '《鸿门宴》', translation: '防备其他盗贼的进入和意外变故。' }
        ]
      }
    ],
    examTips: '“出入”在《鸿门宴》中是典型偏义复词，偏义在“入”（进入）。'
  },
  {
    id: 'bao_qin',
    word: '暴秦',
    pinyin: 'bào qín',
    category: 'shici',
    categoryLabel: '文言实词',
    senses: [
      {
        pos: '名词短语',
        meaning: '残暴虐民的秦朝统治',
        examples: [
          { text: '伐无道，诛暴秦。', source: '《陈涉世家》', translation: '讨伐没有道义的君主，诛灭暴虐的秦朝。' }
        ]
      }
    ]
  },
  {
    id: 'ba_guan',
    word: '拔',
    pinyin: 'bá',
    category: 'shici',
    categoryLabel: '文言实词',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '攻取，攻克 / 提拔，提升',
        examples: [
          { text: '势拔五岳掩霄汉。', source: '《梦游天姥吟留别》', translation: '山势超越五岳掩盖了霄汉。' },
          { text: '过蒙拔擢，宠命优渥。', source: '《陈情表》', translation: '过分蒙受提拔提升，恩宠任命十分优厚。' }
        ]
      }
    ]
  },
  {
    id: 'bai_guan',
    word: '拜',
    pinyin: 'bài',
    category: 'shici',
    categoryLabel: '文言实词',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '行礼，拜见 / 授予官职，任命',
        examples: [
          { text: '拜为上卿，位在廉颇之右。', source: '《廉颇蔺相如列传》', translation: '被任命为上卿，职位在廉颇之上。' },
          { text: '哙拜谢，起，立而饮之。', source: '《鸿门宴》', translation: '樊哙拜谢，站起来，站着喝完了酒。' }
        ]
      }
    ],
    examTips: '“拜”在古代官职变动中专指“授予官职、任命”。'
  }
];

fs.writeFileSync(path.join(dataDir, 'shiciPart1.ts'), makeTsModule('SHICI_PART1', part1Data));
console.log('shiciPart1.ts updated: ' + part1Data.length);
