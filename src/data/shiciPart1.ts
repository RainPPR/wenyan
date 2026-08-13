import { RawVocabularyEntry } from '../types';

export const SHICI_PART1: RawVocabularyEntry[] = [
  {
    id: 'ai',
    word: '爱',
    pinyin: 'ài',
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
    examTips: '“爱”在文言文中重点考查“吝惜、舍不得”义项，如《过秦论》《齐桓晋文之事》。'
  },
  {
    id: 'an',
    word: '安',
    pinyin: 'ān',
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
          { text: '安能摧眉折腰事权贵，使我不得开心颜！', source: '《梦游天姥吟留别》', translation: '怎么能低头折腰侍奉权贵，使我不能心情舒畅！' }
        ]
      }
    ],
    examTips: '“安”作疑问代词“哪里”通常宾语前置（沛公安在）；作使动词“使……安定”（既来之则安之）。'
  },
  {
    id: 'bei',
    word: '被',
    pinyin: ['bèi', 'pī'],
    radical: '衤',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词 [bèi]',
        meaning: '被子',
        examples: [
          { text: '一日昼寝帐中，落被于地。', source: '《杨修之死》', translation: '一天白天在帐中睡觉，被子掉在地上。' }
        ]
      },
      {
        pos: '动词 [bèi]',
        meaning: '覆盖，遮盖',
        examples: [
          { text: '成归，闻妻言，如被冰雪。', source: '《促织》', translation: '成名回家听了妻子的言语，像覆盖了冰雪一样。' },
          { text: '大雪逾岭，被南越中数州。', source: '《答韦中立论师道书》', translation: '大雪越过大庾岭，覆盖了南越的几个州。' }
        ]
      },
      {
        pos: '动词 [bèi]',
        meaning: '施加，施及 / 遭受，受到',
        examples: [
          { text: '幸被齿发，何敢负德？', source: '《柳毅传》', translation: '幸蒙施加恩德收留，怎么敢背弃恩德？' },
          { text: '其次关木索，被箠楚受辱。', source: '《报任安书》', translation: '其次是带上刑具，遭受棍棒笞打受辱。' },
          { text: '秦王复击轲，被八创。', source: '《荆轲刺秦王》', translation: '秦王再次击打荆轲，荆轲遭受了八处伤。' }
        ]
      },
      {
        pos: '介词 [bèi]',
        meaning: '表被动（被）',
        examples: [
          { text: '信而见疑，忠而被谤，能无怨乎？', source: '《屈原列传》', translation: '诚信却被怀疑，忠贞却被毁谤，能没有怨恨吗？' }
        ]
      },
      {
        pos: '动词 [pī]',
        meaning: '通“披”，披散，披着，穿在身上',
        examples: [
          { text: '屈原至于江滨，被发行吟泽畔。', source: '《屈原列传》', translation: '屈原到达江边，披散着头发在水泽边吟唱。' },
          { text: '将军身披坚执锐。', source: '《陈涉世家》', translation: '将军亲自穿上坚固的铠甲，拿着锋利的武器。' }
        ]
      }
    ],
    examTips: '“被”通“披”[pī]表披散/穿（被发行吟）；作介词表被动（忠而被谤）；作动词表遭受（被八创）。'
  },
  {
    id: 'bei_double',
    word: '倍',
    pinyin: 'bèi',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '量词/数词',
        meaning: '照原数加倍，倍数',
        examples: [
          { text: '尝以十倍之地，百万之众，叩关而攻秦。', source: '《过秦论》', translation: '曾经凭借十倍于秦国的土地，百万大军，攻打函谷关叩击秦国。' }
        ]
      },
      {
        pos: '动词',
        meaning: '加倍，增加',
        examples: [
          { text: '虽倍赏累罚而不免于乱。', source: '《韩非子·五蠹》', translation: '即使加倍赏赐重重惩罚，也不能免于祸乱。' }
        ]
      },
      {
        pos: '动词',
        meaning: '通“背”，背向，背对着',
        examples: [
          { text: '管仲反，入，倍屏而立，公不与言。', source: '《管子》', translation: '管仲返回，走进来，背对着屏风站立，桓公不跟他说话。' }
        ]
      },
      {
        pos: '动词',
        meaning: '通“背”，违背，背叛',
        examples: [
          { text: '愿伯具言臣之不敢倍德也。', source: '《鸿门宴》', translation: '希望您详细向项王说明我不敢背弃恩德。' },
          { text: '倍道而妄行，则天不能使之吉。', source: '《荀子·天论》', translation: '违背规律而妄加行动，那么上天也不能使他吉祥。' }
        ]
      },
      {
        pos: '副词',
        meaning: '越发，更加，倍加',
        examples: [
          { text: '独在异乡为异客，每逢佳节倍思亲。', source: '《九月九日忆山东兄弟》', translation: '独自身在异乡作客，每逢佳节更加思念亲人。' }
        ]
      }
    ],
    examTips: '“倍”通“背”表违背/背叛（不敢倍德）是文言通假字高频考点。'
  },
  {
    id: 'ben',
    word: '本',
    pinyin: 'běn',
    radical: '木',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '草木的根、干、茎',
        examples: [
          { text: '臣闻求木之长者，必固其根本。', source: '《谏太宗十思疏》', translation: '我听说想要树木生长得高大，一定要稳固它的根部。' },
          { text: '摇其本，以观其疏密。', source: '《种树郭橐驼传》', translation: '摇动树干，来观察树根的疏密。' }
        ]
      },
      {
        pos: '名词',
        meaning: '根本，基础',
        examples: [
          { text: '父母者，人之本也。', source: '《屈原列传》', translation: '父母，是人的根本。' }
        ]
      },
      {
        pos: '名词',
        meaning: '本业，指农桑农业',
        examples: [
          { text: '今背本而趋末，食者甚众，是天下之大残也。', source: '《论积贮疏》', translation: '现在违背农桑本业而从事工商业末业，吃闲饭的人很多……' }
        ]
      },
      {
        pos: '名词/量词',
        meaning: '底本，版本，稿本，奏本 / 量词（书籍一册）',
        examples: [
          { text: '今存其本不忍废。', source: '《指南录后序》', translation: '现在保存这底稿不忍心废弃。' }
        ]
      },
      {
        pos: '副词/形容词',
        meaning: '原来，本来，原来的',
        examples: [
          { text: '此之谓失其本心。', source: '《鱼我所欲也》', translation: '这就叫做丧失了他的本心。' },
          { text: '予本非文人画士，甘受诟厉。', source: '《病梅馆记》', translation: '我原本不是文人画士，甘愿承受毁骂。' }
        ]
      },
      {
        pos: '动词',
        meaning: '推究，考察本原',
        examples: [
          { text: '抑本其成败之迹，而皆自于人欤？', source: '《伶官传序》', translation: '或者推究他成败的迹象，难道都是由于人为的原因吗？' }
        ]
      }
    ],
    examTips: '“本”考查动词“推究本原”（本其成败之迹）与名词“农桑本业”（背本趋末）。'
  },
  {
    id: 'bi_border',
    word: '鄙',
    pinyin: 'bǐ',
    radical: '阝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '边远的地方，边境',
        examples: [
          { text: '蜀之鄙有二僧。', source: '《为学》', translation: '四川的边远地方有两个僧人。' }
        ]
      },
      {
        pos: '意动词',
        meaning: '以……为边界，把……当作边邑',
        examples: [
          { text: '越国以鄙远，君知其难也。', source: '《烛之武退秦师》', translation: '越过别国而把远方的郑国当作边邑，您知道这是困难的。' }
        ]
      },
      {
        pos: '动词',
        meaning: '轻视，看不起',
        examples: [
          { text: '孔子鄙其小器。', source: '《训俭示康》', translation: '孔子轻视他器量狭小。' }
        ]
      },
      {
        pos: '形容词',
        meaning: '庸俗，浅陋，目光短浅 / 轻贱，地位低微',
        examples: [
          { text: '肉食者鄙，未能远谋。', source: '《曹刿论战》', translation: '做官的大官们目光短浅，不能深谋远虑。' },
          { text: '敢竭鄙诚，恭疏短引。', source: '《滕王阁序》', translation: '冒昧地尽我浅陋的诚意，恭敬地写下这篇短序。' },
          { text: '人贱物亦鄙，不足迎后人。', source: '《孔雀东南飞》', translation: '人低贱东西也轻贱，不值得拿去迎接后来的妻子。' }
        ]
      }
    ],
    examTips: '“鄙”作意动词“以……为边邑”（越国以鄙远）及形容词“浅陋/目光短浅”（肉食者鄙）。'
  },
  {
    id: 'bing',
    word: '兵',
    pinyin: 'bīng',
    radical: '八',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '兵器，武器',
        examples: [
          { text: '收天下之兵，聚之咸阳。', source: '《过秦论》', translation: '收缴天下的兵器，聚集到咸阳。' }
        ]
      },
      {
        pos: '名词',
        meaning: '士兵，军队',
        examples: [
          { text: '得选兵八万人，进兵击秦军。', source: '《信陵君窃符救赵》', translation: '挑选精兵八万人，率领军队击打秦军。' }
        ]
      },
      {
        pos: '名词',
        meaning: '战争 / 军事，战略战术',
        examples: [
          { text: '强秦之所以不敢加兵于赵者，徒以吾两人在也。', source: '《廉颇蔺相如列传》', translation: '强大的秦国之所以不敢发兵加害赵国，只因为我们两个人在啊。' },
          { text: '上兵伐谋，其次伐交。', source: '《孙子·谋攻》', translation: '上等的军事是用策略战胜敌人，其次是用外交打败敌人。' }
        ]
      },
      {
        pos: '动词',
        meaning: '侵略 / 用兵器杀人',
        examples: [
          { text: '左右欲兵之。', source: '《史记》', translation: '左右近臣想要用刀杀了他。' }
        ]
      }
    ],
    examTips: '“兵”本义为兵器（收天下之兵），引申为军队、战争、军事及动词“杀”。'
  },
  {
    id: 'bing_ill',
    word: '病',
    pinyin: 'bìng',
    radical: '疒',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '生病 / 重病',
        examples: [
          { text: '而江浙之梅皆病矣。', source: '《病梅馆记》', translation: '而江苏浙江的梅树都病态了。' }
        ]
      },
      {
        pos: '名词',
        meaning: '弊病，缺点，毛病',
        examples: [
          { text: '人皆嗤吾固陋，吾不以为病。', source: '《训俭示康》', translation: '大家都嘲笑我固执鄙陋，我不认为这是缺点。' }
        ]
      },
      {
        pos: '使动词',
        meaning: '使……成为病态',
        examples: [
          { text: '以夭梅病梅为业以求钱也。', source: '《病梅馆记》', translation: '把使梅树夭折、使梅树呈病态作为职业来赚钱。' }
        ]
      },
      {
        pos: '动词',
        meaning: '担心，忧虑 / 损害，受困',
        examples: [
          { text: '君子病无能焉，不病人之不己知也。', source: '《论语》', translation: '君子只担心自己没有能力，不担心别人不了解自己。' },
          { text: '向吾不为斯役，则久已病矣。', source: '《捕蛇者说》', translation: '假如我不做这个差役，那么早已困苦不堪了。' }
        ]
      },
      {
        pos: '动词',
        meaning: '责备，羞辱（如“诟病”）',
        examples: [
          { text: '古人以俭为美德，今人乃以俭相诟病。', source: '《训俭示康》', translation: '古人把节俭当作美德，现代人竟然把节俭当作辱骂耻笑的对象。' }
        ]
      }
    ],
    examTips: '“病”作名词“缺点/弊病”（不以为病）与动词“担心/忧虑”（君子病无能焉）是常考点。'
  },
  {
    id: 'bo_elder',
    word: '伯',
    pinyin: ['bó', 'bà', 'bǎi'],
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词 [bó]',
        meaning: '排行第一的（伯、仲、叔、季）/ 伯父 / 爵位第三等',
        examples: [
          { text: '侯主侯伯。', source: '《诗经》', translation: '公侯与诸侯伯爵。' },
          { text: '秦伯素服郊次。', source: '《崤之战》', translation: '秦国国君穿着素服在郊外等候。' }
        ]
      },
      {
        pos: '通假字 [bà]',
        meaning: '通“霸”，春秋诸侯盟主',
        examples: [
          { text: '桓公，五伯之上也。', source: '《韩非子》', translation: '齐桓公是春秋五霸的首领。' }
        ]
      }
    ],
    examTips: '“伯”通“霸”[bà]（春秋五伯）。'
  },
  {
    id: 'ceng_zeng',
    word: '曾',
    pinyin: ['céng', 'zēng'],
    radical: '日',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词 [céng]',
        meaning: '曾经，已经',
        examples: [
          { text: '同是天涯沦落人，相逢何必曾相识。', source: '《琵琶行》', translation: '大家都是同漂泊天涯的沦落人，相逢何必非要曾经认识过。' }
        ]
      },
      {
        pos: '副词 [zēng]',
        meaning: '竟，竟然，简直，反而（表意外）',
        examples: [
          { text: '今吾且死，而侯生曾无一言半辞送我。', source: '《信陵君窃符救赵》', translation: '现在我将要赴伺，而侯生竟然没有一言半语送我。' },
          { text: '汝心之固，固不可彻，曾不若孀妻弱子。', source: '《愚公移山》', translation: '你的思想太固执，简直连寡妇孤儿都不如。' }
        ]
      },
      {
        pos: '动词/名词 [zēng]',
        meaning: '通“增”，增加 / 隔两代的亲属（曾孙、曾祖）',
        examples: [
          { text: '所以动心忍性，曾益其所不能。', source: '《生于忧患，死于安乐》', translation: '用来使他的内心受到震撼，使他的性格坚忍，增加他所不具备的能力。' },
          { text: '至曾、元时不分至十户不止。', source: '《治平篇》', translation: '到了曾孙玄孙辈时繁衍分出不少于十户。' }
        ]
      }
    ],
    examTips: '“曾”读[zēng]表“竟/竟然”（曾不若）与通“增”（曾益其所不能）是极其核心的考点！'
  },
  {
    id: 'cha_examine',
    word: '察',
    pinyin: 'chá',
    radical: '宀',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '看，观察，看清楚',
        examples: [
          { text: '徐而察之。', source: '《石钟山记》', translation: '慢慢地观察它。' },
          { text: '明足以察秋毫之末，而不见舆薪。', source: '《齐桓晋文之事》', translation: '视力足以看清秋天鸟兽毫毛的末端，却看不见一整车柴火。' }
        ]
      },
      {
        pos: '动词',
        meaning: '明察，详审，细究，了解',
        examples: [
          { text: '向察众人之议，专欲误将军。', source: '《赤壁之战》', translation: '刚才审察大家的议论，专一想要耽误将军。' },
          { text: '小大之狱，虽不能察，必以情。', source: '《曹刿论战》', translation: '大大小小的诉讼案件，虽然不能件件弄得清楚，一定根据实情处理。' }
        ]
      },
      {
        pos: '动词',
        meaning: '考察后加以推荐（察举、察孝廉）',
        examples: [
          { text: '前太守臣逵察臣孝廉，后刺史臣荣举臣秀才。', source: '《陈情表》', translation: '先前太守臣逵考察推举臣为孝廉，后来的刺史臣荣举荐臣为秀才。' }
        ]
      },
      {
        pos: '形容词',
        meaning: '精明，过于严苛',
        examples: [
          { text: '水至清则无鱼，人至察则无徒。', source: '《答客难》', translation: '水太清澈了就不会有鱼，人太精明严苛了就没有同伴。' }
        ]
      }
    ],
    examTips: '“察”作官职词表“考察并推荐”（察臣孝廉）；作动词表“明察/了解”（虽不能察）。'
  },
  {
    id: 'chang_zhang',
    word: '长',
    pinyin: ['cháng', 'zhǎng'],
    radical: '长',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词 [cháng]',
        meaning: '长的 / 长度，高度 / 长处，专长 / 经常，长久',
        examples: [
          { text: '舟首尾长约八分有奇。', source: '《核舟记》', translation: '船从头到尾长大约八分多一点。' },
          { text: '兼花之长而各去其短。', source: '《芙蕖》', translation: '兼有各种花的长处而去除它们的短处。' },
          { text: '出师未捷身先死，长使英雄泪满襟。', source: '《蜀相》', translation: '出师未捷自己先身亡，常常使后世英雄泪洒衣襟。' }
        ]
      },
      {
        pos: '动词/形容词 [zhǎng]',
        meaning: '生长，成长 / 抚育，滋长 / 年长，排行大 / 头领',
        examples: [
          { text: '用叶者取叶初长足时。', source: '《采草药》', translation: '用叶子入药的采摘叶子刚长足的时候。' },
          { text: '孰与君少长？', source: '《鸿门宴》', translation: '他与您相比谁年龄大？' },
          { text: '长吾女与汝女，待其嫁，如此而已。', source: '《祭十二郎文》', translation: '抚养抚育我的女儿和你的女儿，等到她们出嫁，如此罢了。' }
        ]
      }
    ],
    examTips: '“长”读[zhǎng]作动词表“抚育/生长”（长吾女）与形容词“年龄大”（孰与君少长）。'
  },
  {
    id: 'chao_zhao',
    word: '朝',
    pinyin: ['cháo', 'zhāo'],
    radical: '月',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [cháo]',
        meaning: '朝见，朝拜，拜访 / 接受朝见，使……朝见',
        examples: [
          { text: '相如每朝时，常称病。', source: '《廉颇蔺相如列传》', translation: '蔺相如每逢朝见的时候，经常托病不上朝。' },
          { text: '序八州而朝同列，百有余年矣。', source: '《过秦论》', translation: '排列八州之地而使同等的诸侯国朝拜，已经有一百多年了。' }
        ]
      },
      {
        pos: '名词/介词 [cháo]',
        meaning: '朝廷，朝代，政事 / 介词“对、向”',
        examples: [
          { text: '于是入朝见威王。', source: '《邹忌讽齐王纳谏》', translation: '于是进入朝廷觐见齐威王。' },
          { text: '三顾频烦天下计，两朝开济老臣心。', source: '《蜀相》', translation: '三次拜访频频请教天下大计，两代朝廷开国匡扶倾注了老臣一心。' }
        ]
      },
      {
        pos: '名词 [zhāo]',
        meaning: '早晨，天，日',
        examples: [
          { text: '朝服衣冠，窥镜。', source: '《邹忌讽齐王纳谏》', translation: '早晨穿戴好衣帽，照镜子。' },
          { text: '朝发白帝，暮到江陵。', source: '《三峡》', translation: '早晨从白帝城出发，傍晚就到达江陵。' }
        ]
      }
    ],
    examTips: '区分[cháo]（朝见、朝廷、使……朝见）与[zhāo]（早晨、朝发夕至）。'
  },
  {
    id: 'cheng_ride',
    word: '乘',
    pinyin: ['chéng', 'shèng'],
    radical: '丿',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [chéng]',
        meaning: '驾，乘坐 / 升，登',
        examples: [
          { text: '乘犊车，从吏卒，交游士林。', source: '《赤壁之战》', translation: '乘坐牛车，带领官兵，与士大夫交游。' },
          { text: '独与迈乘小舟，至绝壁下。', source: '《石钟山记》', translation: '独自与苏迈乘坐小船，到达悬崖绝壁之下。' }
        ]
      },
      {
        pos: '动词 [chéng]',
        meaning: '趁着，顺应 / 冒着 / 凭恃，依仗',
        examples: [
          { text: '因利乘便，宰割天下，分裂山河。', source: '《过秦论》', translation: '凭借有利的形势和便利的条件，宰割天下，割裂山河。' },
          { text: '自京师乘风雪……至于泰安。', source: '《登泰山记》', translation: '从京城冒着风雪，到达泰安。' }
        ]
      },
      {
        pos: '量词/名词 [shèng]',
        meaning: '一车四马的总称 / 辆（计算兵车） / 史书',
        examples: [
          { text: '致万乘之势，序八州而朝同列。', source: '《过秦论》', translation: '达到万乘兵车的声势，排列八州之地而使同列朝拜。' },
          { text: '于是为长安君约车百乘，质于齐。', source: '《触龙说赵太后》', translation: '于是为长安君准备兵车一百辆，到齐国作人质。' }
        ]
      }
    ],
    examTips: '“乘”作动词“顺应/凭借”（因利乘便）与量词[shèng]计算兵车（千乘之国）。'
  },
  {
    id: 'cheng_city',
    word: '城',
    pinyin: 'chéng',
    radical: '土',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '城墙 / 城市 / 修筑城墙、守城',
        examples: [
          { text: '城非不高也，池非不深也。', source: '《得道多助》', translation: '城墙不是不高，护城河不是不深。' },
          { text: '今日割五城，明日割十城，然后得一夕安寝。', source: '《六国论》', translation: '今天割让五座城，明天割让十座城，然后才能得到一晚上的安睡。' }
        ]
      }
    ],
    examTips: '“城”在古代本义为“城墙”，引申为“城市”与“修筑城墙”。'
  },
  {
    id: 'cheng_sincere',
    word: '诚',
    pinyin: 'chéng',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/形容词',
        meaning: '诚心，真诚，诚心诚意',
        examples: [
          { text: '盖在殷忧，必竭诚以待下。', source: '《谏太宗十思疏》', translation: '在深重忧虑时，一定要竭尽诚心来对待下属。' }
        ]
      },
      {
        pos: '副词',
        meaning: '肯定确认，确实，的确',
        examples: [
          { text: '臣诚知不如徐公美。', source: '《邹忌讽齐王纳谏》', translation: '我确实知道自己不如徐公漂亮。' }
        ]
      },
      {
        pos: '连词',
        meaning: '表假设，果真，如果',
        examples: [
          { text: '楚诚能绝齐，秦愿献商於之地六百里。', source: '《屈原列传》', translation: '楚国如果真的能与齐国绝交，秦国愿意奉献商於之地六百里。' },
          { text: '君人者，诚能见可欲则思知足以自戒。', source: '《谏太宗十思疏》', translation: '统治人民的君主，如果真的能看见想要的东西就想到知足来警惕自己。' }
        ]
      }
    ],
    examTips: '“诚”作副词“确实/的确”（臣诚知）与作连词“如果/果真”（楚诚能绝齐）是核心高频点。'
  },
  {
    id: 'chi_pond',
    word: '池',
    pinyin: 'chí',
    radical: '氵',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '护城河 / 水塘，池塘',
        examples: [
          { text: '城非不高也，池非不深也。', source: '《得道多助》', translation: '城墙不是不高，护城河不是不深。' },
          { text: '山顶有大池，相传以为燕荡。', source: '《雁荡山》', translation: '山顶有大池塘，相传把它当作雁荡。' }
        ]
      }
    ],
    examTips: '古文中“城池”常并用，“城”指城墙，“池”指护城河。'
  },
  {
    id: 'chu_remove',
    word: '除',
    pinyin: 'chú',
    radical: '阝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '台阶，殿阶',
        examples: [
          { text: '黎明即起，洒扫庭除。', source: '《朱子家训》', translation: '清晨即起，打扫庭院台阶。' },
          { text: '扶辇下除。', source: '《汉书》', translation: '扶着车辇下台阶。' }
        ]
      },
      {
        pos: '动词',
        meaning: '去掉，除去，清除 / 修治，修整',
        examples: [
          { text: '兴利除弊。', source: '《答司马谏议书》', translation: '兴办对国家有利的事，消除弊端。' },
          { text: '即除魏阉废祠之址以葬之。', source: '《五人墓碑记》', translation: '就修治魏忠贤废弃祠堂的地址来安葬他们。' }
        ]
      },
      {
        pos: '动词',
        meaning: '拜官，授予官职，任命',
        examples: [
          { text: '寻蒙国恩，除臣洗马。', source: '《陈情表》', translation: '不久蒙受国家恩典，任命我为太子洗马。' },
          { text: '予除右丞相兼枢密使。', source: '《指南录后序》', translation: '我被任命为右丞相兼枢密使。' }
        ]
      }
    ],
    examTips: '“除”作官职动词表“授予官职/任命”（除臣洗马），高考极高频考查！'
  },
  {
    id: 'chuan_zhuan',
    word: '传',
    pinyin: ['chuán', 'zhuàn'],
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [chuán]',
        meaning: '传送，传递 / 传授 / 流传，传达 / 传位，延续',
        examples: [
          { text: '得璧，传之美人。', source: '《廉颇蔺相如列传》', translation: '得到和氏璧，传给姬妾们看。' },
          { text: '师者，所以传道受业解惑也。', source: '《师说》', translation: '老师，是用来传授道理、教授学业、解答疑惑的人。' },
          { text: '此世所以不传也。', source: '《石钟山记》', translation: '这就是这种说法在世上没有流传开的原因。' }
        ]
      },
      {
        pos: '名词 [zhuàn]',
        meaning: '传记 / 注释经文的文字（经传） / 客舍，驿站',
        examples: [
          { text: '六艺经传皆通习之。', source: '《师说》', translation: '六经的经文和传记都通通用心地学习。' },
          { text: '舍相如广成传舍。', source: '《廉颇蔺相如列传》', translation: '安排蔺相如住在广成客舍里。' }
        ]
      }
    ],
    examTips: '区分[chuán]（传递、传授、流传）与[zhuàn]（经传、客舍传舍）。'
  },
  {
    id: 'ci_speech',
    word: '辞',
    pinyin: 'cí',
    radical: '舌',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '言辞，文辞 / 借口，托辞 / 诉讼供词',
        examples: [
          { text: '而侯生曾无一言半辞送我。', source: '《信陵君窃符救赵》', translation: '而侯生竟然没有一言半语送我。' },
          { text: '欲加之罪，其无辞乎？', source: '《左传》', translation: '想要加罪于人，难道还怕找不到借口吗？' },
          { text: '狱辞无谋故者。', source: '《狱中杂记》', translation: '诉讼供词中没有谋杀故意的内容。' }
        ]
      },
      {
        pos: '名词',
        meaning: '古代一种文体（如《归去来兮辞》） / 命令，文告',
        examples: [
          { text: '近者奉辞罚罪，旗麾南指，刘琮束手。', source: '《赤壁之战》', translation: '近来奉朝廷命令讨伐有罪的人，军旗南指，刘琮束手就擒。' }
        ]
      },
      {
        pos: '动词',
        meaning: '告别，辞别 / 推辞，辞去 / 计较',
        examples: [
          { text: '今者出，未辞也，为之奈何？', source: '《鸿门宴》', translation: '现在出来，没有告别，怎么办呢？' },
          { text: '如姬之欲为公子死，无所辞。', source: '《信陵君窃符救赵》', translation: '如姬想要为公子去死，没有什么可推辞的。' },
          { text: '大行不顾细谨，大礼不辞小让。', source: '《鸿门宴》', translation: '做大事不必顾虑细枝末节，做大礼不必计较小让小节。' }
        ]
      }
    ],
    examTips: '“辞”作动词“推辞/计较”（大礼不辞小让）与名词“借口/托辞”是常见考点。'
  },
  {
    id: 'cong_follow',
    word: '从',
    pinyin: ['cóng', 'zòng'],
    radical: '彳',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [cóng]',
        meaning: '跟随，追随 / 听从，依顺 / 参与，从事 / 紧挨着',
        examples: [
          { text: '天下云集响应，赢粮而景从。', source: '《过秦论》', translation: '天下人像云一样聚集响应，担着粮食像影子一样跟随。' },
          { text: '臣从其计。', source: '《廉颇蔺相如列传》', translation: '我听从了他的计策。' },
          { text: '弟走从军阿姨死。', source: '《琵琶行》', translation: '弟弟去从军，阿姨离世。' },
          { text: '樊哙从良坐。', source: '《鸿门宴》', translation: '樊哙挨着张良坐下。' }
        ]
      },
      {
        pos: '名词 [cóng]',
        meaning: '随从的人 / 堂房亲属（如从兄弟）',
        examples: [
          { text: '其从如云。', source: '《诗经》', translation: '他的随从多得像云一样。' },
          { text: '昇死，其印为予群从所得。', source: '《活板》', translation: '毕昇死后，他的字印被我的堂兄弟们得到。' }
        ]
      },
      {
        pos: '名词/通假字 [zòng]',
        meaning: '通“纵”，合纵的盟约 / 直的',
        examples: [
          { text: '于是从散约败，争割地而赂秦。', source: '《过秦论》', translation: '于是合纵解散盟约失败，争着割让土地来贿赂秦国。' }
        ]
      }
    ],
    examTips: '“从”通“纵”[zòng]（从散约败）指合纵盟约；“从良坐”指紧挨着坐。'
  },
  {
    id: 'da_reach',
    word: '达',
    pinyin: 'dá',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '到达，通达，透 / 通晓，明白',
        examples: [
          { text: '指通豫南，达于汉阴，可乎？', source: '《愚公移山》', translation: '一直通向豫州南部，到达汉水北岸，可以吗？' },
          { text: '仆山海狂人，不达世务。', source: '《南史》', translation: '我是狂妄之人，不通晓世俗事务。' }
        ]
      },
      {
        pos: '形容词/动词',
        meaning: '显贵，得志（闻达） / 豁达',
        examples: [
          { text: '不求闻达于诸侯。', source: '《出师表》', translation: '不追求在诸侯中得志扬名。' },
          { text: '孟僖子知其后必有达人。', source: '《训俭示康》', translation: '孟僖子知道他的后代一定有显达的人。' }
        ]
      }
    ],
    examTips: '“达”作动词“通晓/明白”与形容词“显贵/得志”（不求闻达）。'
  },
  {
    id: 'dai_lax',
    word: '怠',
    pinyin: 'dài',
    radical: '心',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/动词',
        meaning: '懈怠，松懈，懒惰 / 轻慢，不恭敬 / 疲倦',
        examples: [
          { text: '天大寒，砚水坚，手指不可屈伸，弗之怠。', source: '《送东阳马生序》', translation: '天气极冷，砚台里的墨水结成坚冰，手指不能弯曲伸直，也不敢懈怠。' },
          { text: '农者殆（怠）则土地荒。', source: '《商君书》', translation: '农民懈怠懒惰那么土地就会荒芜。' }
        ]
      }
    ],
    examTips: '“怠”作形容词“懈怠/懒惰”，常与“殆”通假。'
  },
  {
    id: 'dai_danger',
    word: '殆',
    pinyin: 'dài',
    radical: '歹',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词',
        meaning: '危险 / 疑惑 / 精神疲倦而无所得',
        examples: [
          { text: '知己知彼，百战不殆。', source: '《孙子·谋攻》', translation: '了解自己也了解敌人，百战也不会有危险。' },
          { text: '学而不思则罔，思而不学则殆。', source: '《论语》', translation: '只学习不思考就会迷惘，只思考不学习就会疑惑疲倦。' },
          { text: '吾非至于子之门则殆矣。', source: '《庄子·秋水》', translation: '我如果不到您的门前，就危险困怠了。' }
        ]
      },
      {
        pos: '副词',
        meaning: '大概，恐怕（表猜测） / 几乎，接近，差不多',
        examples: [
          { text: '郦元之所见，殆与余同，而言之不详。', source: '《石钟山记》', translation: '郦道元所看到的，大概与我相同，但说得不详细。' },
          { text: '且燕、赵处秦革灭殆尽之际。', source: '《六国论》', translation: '况且燕国和赵国正处在被秦国消灭得几乎干净的时候。' }
        ]
      }
    ],
    examTips: '“殆”作副词“大概/恐怕”（殆与余同）与“几乎/接近”（革灭殆尽）是极其核心的考点！'
  },
  {
    id: 'dang_match',
    word: '当',
    pinyin: ['dāng', 'dàng'],
    radical: '⺌',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [dāng]',
        meaning: '阻挡，抵御 / 占据，把守 / 阻拦，面对',
        examples: [
          { text: '料大王士卒足以当项王乎？', source: '《鸿门宴》', translation: '估计大王的士卒足够抵挡项王吗？' },
          { text: '一夫当关，万夫莫开。', source: '《蜀道难》', translation: '一人把守关口，一万人也打不进来。' },
          { text: '当窗理云鬓，对镜帖花黄。', source: '《木兰诗》', translation: '对着窗户梳理云鬓，对着镜子贴上花黄。' }
        ]
      },
      {
        pos: '动词/介词/副词 [dāng]',
        meaning: '掌管，主持 / 应当 / 值，正，正在 / 必定 / 将要',
        examples: [
          { text: '郡之贤士大夫请于当道。', source: '《五人墓碑记》', translation: '本郡的贤德士大夫向执掌权路的人请求。' },
          { text: '老当益壮，宁移白首之心？', source: '《滕王阁序》', translation: '年纪老迈应当更加有壮志，哪里能在白发苍苍时改变志向？' },
          { text: '当是时也，商君佐之。', source: '《过秦论》', translation: '正当那个时候，商鞅辅佐他。' },
          { text: '不久当归还，还必相迎取。', source: '《孔雀东南飞》', translation: '不久必定归来，回来一定接你。' }
        ]
      },
      {
        pos: '动词/形容词 [dàng]',
        meaning: '符合，适宜 / 当作，顶替 / 抵押相抵',
        examples: [
          { text: '将献公堂，惴惴恐不当意。', source: '《促织》', translation: '将要献给官府，小心翼翼害怕不合上司的心意。' },
          { text: '安步以当车。', source: '《战国策》', translation: '安稳步行来当作乘车。' },
          { text: '以一仪而当汉中地，臣请往如楚。', source: '《屈原列传》', translation: '凭我张仪一人来抵得上汉中之地，我请求前往楚国。' }
        ]
      }
    ],
    examTips: '“当”作动词抵御（足以当项王）、抵得上（当汉中地）、符合[dàng]（不当意）为考查重点。'
  },
  {
    id: 'dao_way',
    word: '道',
    pinyin: 'dào',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '道路 / 途径，方法 / 风尚 / 道义 / 思想，学说 / 规律，道理 / 志向',
        examples: [
          { text: '若舍郑以为东道主，行李之往来，共其乏困。', source: '《烛之武退秦师》', translation: '如果放弃灭郑而把郑国作为东方道路上的主人……' },
          { text: '行军用兵之道，非及向时之士也。', source: '《过秦论》', translation: '行军用兵的策略方法，赶不上以前的将士。' },
          { text: '嗟乎！师道之不传也久矣！', source: '《师说》', translation: '唉！从师学习的风尚不流传已经很久了！' },
          { text: '于是废先王之道，焚百家之言，以愚黔首。', source: '《过秦论》', translation: '于是废除先王的思想学说，焚烧诸子百家的言论……' },
          { text: '臣之所好者，道也，进乎技矣。', source: '《庖丁解牛》', translation: '我所追求的，是天然的规律道理，已经超过具体的技巧了。' }
        ]
      },
      {
        pos: '动词',
        meaning: '取道，赶路 / 说，讲 / 料想 / 通“导”，引导，疏导',
        examples: [
          { text: '从骊山下，道芷阳间行。', source: '《鸿门宴》', translation: '从骊山脚下，取道芷阳小路悄悄步行。' },
          { text: '后人之谬其传而莫能正者，何可胜道也哉！', source: '《游褒禅山记》', translation: '后人弄错它的流传而没有能纠正的，哪里能说得尽呢！' },
          { text: '道之以政，齐之以刑。', source: '《论语》', translation: '用政令来引导他们，用刑法来整顿他们。' }
        ]
      }
    ],
    examTips: '“道”作动词“取道/经过”（道芷阳）与“说/讲”（何可胜道）；作名词“风尚”（师道）。'
  },
  {
    id: 'de_get',
    word: '得',
    pinyin: 'dé',
    radical: '彳',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '收获，心得，体会 / 取得，得到',
        examples: [
          { text: '古人之观于天地山川，往往有得。', source: '《游褒禅山记》', translation: '古人观察天地山川草木虫鱼，往往有所收获和体会。' },
          { text: '秦以攻取之外，小则获邑，大则得城。', source: '《六国论》', translation: '秦国除了用战争攻取之外，小就获得城邑，大就得到城池。' }
        ]
      },
      {
        pos: '形容词/动词',
        meaning: '得意，满足 / 融洽 / 契合，合适，对',
        examples: [
          { text: '暂得于己，快然自足。', source: '《兰亭集序》', translation: '一时自己感到满足，快乐自得。' },
          { text: '某亦守法，与公甚相得。', source: '《记王忠肃公翱事》', translation: '我也遵守法度，与王公相处非常融洽。' },
          { text: '此言得之。', source: '《六国论》', translation: '这话是对的。' }
        ]
      },
      {
        pos: '助动词/动词',
        meaning: '能够，可以 / 应该，要 / 通“德”，感恩',
        examples: [
          { text: '沛公军霸上，未得与项羽相见。', source: '《鸿门宴》', translation: '沛公驻军霸上，没能与项羽相见。' },
          { text: '吾得兄事之。', source: '《鸿门宴》', translation: '我应该像对待兄长一样侍奉他。' },
          { text: '所识穷乏者得我与？', source: '《鱼我所欲也》', translation: '所认识的贫穷困困者感激我吗？' }
        ]
      }
    ],
    examTips: '“得”作助动词表“应该”（吾得兄事之）与通假字通“德”表感恩（得我与）。'
  },
  {
    id: 'du_measure',
    word: '度',
    pinyin: ['dù', 'duó'],
    radical: '广',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词 [dù]',
        meaning: '计量长短的标准 / 限度 / 制度，法度 / 气度，常态',
        examples: [
          { text: '已得履，乃曰：“吾忘持度。”', source: '《郑人买履》', translation: '已经拿到鞋子，才说：“我忘记带尺码了。”' },
          { text: '乐盘游，则思三驱以为度。', source: '《谏太宗十思疏》', translation: '喜欢盘游打猎，就想到一年打猎三次以为限度。' },
          { text: '内立法度，务耕织。', source: '《过秦论》', translation: '在内部建立规章制度，致力于耕作纺织。' },
          { text: '常有大度，不事家人生产作业。', source: '《汉书》', translation: '平素有远大胸怀气度，不从事一般人家家务生产。' }
        ]
      },
      {
        pos: '量词/动词 [dù]',
        meaning: '次，回 / 谱写（度曲） / 过，渡过',
        examples: [
          { text: '崔九堂前几度闻。', source: '《江南逢李龟年》', translation: '在崔九堂前听过好几次。' },
          { text: '羌笛何须怨杨柳，春风不度玉门关。', source: '《凉州词》', translation: '羌笛何必埋怨杨柳曲，春风吹不过玉门关。' }
        ]
      },
      {
        pos: '动词 [duó]',
        meaning: '计算，衡量 / 推测，估计，考虑',
        examples: [
          { text: '试使山东之国与陈涉度长絜大，比权量力。', source: '《过秦论》', translation: '试着让崤山以东的各国与陈涉量长短比大小，比较权力力量……' },
          { text: '度我至军中，公乃入。', source: '《鸿门宴》', translation: '估计我到了军营中，您再进去。' }
        ]
      }
    ],
    examTips: '区分读音：名词[dù]（法度、限度）与动词[duó]（推测估计、衡量）。'
  },
  {
    id: 'duan_short',
    word: '短',
    pinyin: 'duǎn',
    radical: '矢',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词/动词',
        meaning: '短的 / 缺点，短处，欠缺 / 动词“诋毁，说坏话”',
        examples: [
          { text: '戎狄之所长，而中国之所短。', source: '《汉书》', translation: '戎狄的专长，是中原的短处。' },
          { text: '使上官大夫短屈原于顷襄王。', source: '《屈原列传》', translation: '派上官大夫在顷襄王面前说屈原的坏话。' }
        ]
      }
    ],
    examTips: '“短”作动词表“诋毁/说坏话”（短屈原于顷襄王）是文言活用考点。'
  },
  {
    id: 'duo_many',
    word: '多',
    pinyin: 'duō',
    radical: '夕',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '数量大 / 大都，大多',
        examples: [
          { text: '近岁风俗尤多侈靡。', source: '《训俭示康》', translation: '近来风俗尤其大多奢侈浪费。' }
        ]
      },
      {
        pos: '动词',
        meaning: '赞美，称赞，重视 / 增加',
        examples: [
          { text: '故传天下不足多也。', source: '《论积贮疏》', translation: '所以传位给天下人不值得称赞。' },
          { text: '因物而多之，孰与骋能而化之？', source: '《荀子》', translation: '顺应万物而使之增多，哪里比得上发挥人的能力去改造万物呢？' }
        ]
      }
    ],
    examTips: '“多”作动词“称赞/赞美”（不足多也）与“增加”。'
  }
];
