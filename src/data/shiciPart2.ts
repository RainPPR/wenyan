import { VocabularyEntry } from '../types';

export const SHICI_PART2: VocabularyEntry[] = [
  {
    id: 'fa_attack',
    word: '伐',
    pinyin: 'fá',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '砍伐，伐树',
        examples: [
          { text: '侃性纤密，生平所用，一毫不敢弃，竹头木屑，皆攒聚之，即使伐竹。', source: '《晋书》', translation: '陶侃性格细致密实……即使砍伐竹子。' },
          { text: '坎坎伐檀兮，置之河之干兮。', source: '《诗经·伐檀》', translation: '砍伐檀木把它们放在黄河边。' }
        ]
      },
      {
        pos: '动词',
        meaning: '攻打，讨伐，征伐',
        examples: [
          { text: '十年春，齐师伐我。', source: '《曹刿论战》', translation: '鲁庄公十年的春天，齐国军队攻打我们鲁国。' },
          { text: '季氏将伐颛臾。', source: '《季氏将伐颛臾》', translation: '季氏将要攻打颛臾。' }
        ]
      },
      {
        pos: '动词',
        meaning: '夸耀，自夸，夸大功劳',
        examples: [
          { text: '每一令出，平伐其功。', source: '《屈原列传》', translation: '每当有一项政令发出，上官大夫就夸耀自己的功劳。' },
          { text: '不矜不伐，严以律己。', source: '《论语》', translation: '不自大不自夸，严于律己。' }
        ]
      },
      {
        pos: '名词',
        meaning: '功劳，功勋（如“功伐”）',
        examples: [
          { text: '熟知功伐，怀之好音。', source: '《史记》', translation: '熟知他的功勋，怀着良好的声誉。' }
        ]
      }
    ],
    examTips: '“伐”作动词“自夸/夸耀”（平伐其功）与“功劳”是古汉语特有含义。'
  },
  {
    id: 'fan_return',
    word: '反',
    pinyin: 'fǎn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '又',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '翻转，颠倒 / 违反，背叛 / 反省 / 通“返”，返回，归来',
        examples: [
          { text: '掌心反覆。', source: '《促织》', translation: '就像把手掌翻转过来一样。' },
          { text: '经纶世务者，窥谷忘反。', source: '《与朱元思书》', translation: '治理社会事务的人，看到这幽深的山谷就会留恋忘返。' },
          { text: '吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？', source: '《论语》', translation: '我每天多次反省自己……' }
        ]
      },
      {
        pos: '副词',
        meaning: '反而，相反',
        examples: [
          { text: '动而见尤，欲益反损。', source: '《答司马谏议书》', translation: '一举一动受到责难，想要有益反而带来损害。' },
          { text: '师道之不复，可知矣。今之众人，其下圣人也亦远矣，而耻学于师。是故圣益圣，愚益愚，圣人之所以为圣，愚人之所以为愚，其皆出于此乎！古之圣人，其出人也远矣，尊师而重道，人反之。', source: '《师说》', translation: '……人们反而与此相反。' }
        ]
      }
    ],
    examTips: '“反”通“返”（窥谷忘反）与副词“反而”（欲益反损）。'
  },
  {
    id: 'fang_square',
    word: '方',
    pinyin: 'fāng',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '方',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '方形，方圆 / 方向，方位，地方 / 方法，方术，药方 / 规矩，准则',
        examples: [
          { text: '方六七十，如五六十。', source: '《子路曾皙冉有公西华侍坐》', translation: '方圆六七十里，或者五六十里的地方。' },
          { text: '室仅方丈，可容一人居。', source: '《项脊轩志》', translation: '房间只有一丈见方，只能容下一人居住。' },
          { text: '屈平正道直行，竭忠尽智，以事其君，谄谄之徒，实为不方。', source: '《屈原列传》', translation: '屈原品行端正行事正直……谄媚小人实为不合规矩。' }
        ]
      },
      {
        pos: '副词/介词',
        meaning: '正，正在 / 刚，才 / 当，在',
        examples: [
          { text: '方欲行，转视积薪后，一狼洞其中。', source: '《狼》', translation: '正想要走，转头看柴堆后面，一只狼在里面打洞。' },
          { text: '方其破荆州，下江陵，顺流而东也。', source: '《赤壁赋》', translation: '当他攻破荆州，顺流东下的时候。' }
        ]
      }
    ],
    examTips: '“方”作副词“正在/刚刚”（方欲行）与介词“当/在”（方其破荆州）。'
  },
  {
    id: 'fen_divide',
    word: '分',
    pinyin: ['fēn', 'fèn'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '刀',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [fēn]',
        meaning: '分开，划分，离别 / 分配，分给，给',
        examples: [
          { text: '舟凝滞于江心，左右分背。', source: '《赤壁之战》', translation: '船停滞在江心，左右分散背向。' },
          { text: '衣食所安，弗敢专也，必以分人。', source: '《曹刿论战》', translation: '衣食等安身之物，不敢独自享有，一定分给别人。' }
        ]
      },
      {
        pos: '名词 [fèn]',
        meaning: '名分，职分，职责 / 限度，分寸 / 命运，本分',
        examples: [
          { text: '本分之外，不敢再有奢求。', source: '《训俭示康》', translation: '在本分职责之外，不敢再有别的奢求。' },
          { text: '卿言多不合分。', source: '《孔雀东南飞》', translation: '你说的很多话不合分寸名分。' },
          { text: '人事有代谢，往来成古今。江山留胜迹，我辈复登临。', source: '《与诸子登岘山》', translation: '名分职责与世事更迭。' }
        ]
      }
    ],
    examTips: '区分[fēn]动词（分开、分配）与[fèn]名词（名分、职责、本分）。'
  },
  {
    id: 'feng_offer',
    word: '奉',
    pinyin: 'fèng',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '大',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '捧，两手捧着 / 献给，供养，侍奉 / 遵奉，接受，奉行',
        examples: [
          { text: '王怒，得卫巫，使监榜者。臣奉命。', source: '《国语》', translation: '大王发怒，得到卫国巫师，派他监督……臣奉命。' },
          { text: '谨奉表以闻。', source: '《陈情表》', translation: '谨恭敬地呈上奏表使陛下知晓。' },
          { text: '奉之弥繁，侵之愈急。', source: '《六国论》', translation: '奉献给秦国的越多，秦国侵略得越急迫。' },
          { text: '长者奉晨昏，幼者修洒扫。', source: '《训俭示康》', translation: '长辈侍奉晨昏早晚，幼者从事打扫。' }
        ]
      },
      {
        pos: '名词/通假字',
        meaning: '通“俸”，俸禄，薪水',
        examples: [
          { text: '位尊而无功，奉厚而无劳，而挟重器多资矣。', source: '《触龙说赵太后》', translation: '地位高贵却没有功劳，俸禄优厚却没有劳苦……' }
        ]
      }
    ],
    examTips: '“奉”通“俸”表俸禄薪水（奉厚而无劳）；作动词表恭敬呈献（谨奉表以闻）。'
  },
  {
    id: 'fou_pi',
    word: '否',
    pinyin: ['fǒu', 'pǐ'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '口',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词/助词 [fǒu]',
        meaning: '不，不是，否定 / 用在句末表询问（是否）',
        examples: [
          { text: '廉颇老矣，尚能饭否？', source: '《廉颇蔺相如列传》', translation: '廉颇老了，还能吃饭吗？' },
          { text: '知否？知否？应是绿肥红瘦。', source: '《如梦令》', translation: '知道吗？知道吗？应当是绿叶繁茂红花凋零。' }
        ]
      },
      {
        pos: '形容词 [pǐ]',
        meaning: '坏，恶，不好，不通畅（如“否极泰来”）',
        examples: [
          { text: '陟罚臧否，不宜异同。', source: '《出师表》', translation: '晋升奖励好人，惩罚坏人，不应该标准不同。' },
          { text: '否泰如天地，足以荣汝身。', source: '《孔雀东南飞》', translation: '坏运与好运就像天地一样变化，足以使你身体光彩显贵。' }
        ]
      }
    ],
    examTips: '“否”读[pǐ]作形容词表坏/恶/不善（陟罚臧否），[臧]指善，[否]指恶。'
  },
  {
    id: 'fu_bear',
    word: '负',
    pinyin: 'fù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '贝',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '背负，用背扛 / 承受，负担',
        examples: [
          { text: '颁白者不负戴于道路矣。', source: '《寡人之于国也》', translation: '头发花白的老人不会在道路上背着或者头顶着东西了。' },
          { text: '背负青天，而莫之夭阏者。', source: '《肖遥游》', translation: '背负着青天，没有东西阻挡妨碍它。' }
        ]
      },
      {
        pos: '动词',
        meaning: '背靠着，依傍 / 倚仗，凭恃',
        examples: [
          { text: '廉颇闻之，肉袒负荆。', source: '《廉颇蔺相如列传》', translation: '廉颇听说后，裸露上身背着荆条前去请罪。' },
          { text: '负嵎顽抗，倚恃险要。', source: '《史记》', translation: '依傍山陵要塞顽固抵抗。' }
        ]
      },
      {
        pos: '动词',
        meaning: '辜负，违背，背弃 / 亏欠，对不起',
        examples: [
          { text: '臣诚恐见欺于王而负赵，故令人持璧归。', source: '《廉颇蔺相如列传》', translation: '我实在害怕被大王欺骗而辜负赵国，所以让人带着璧归还。' },
          { text: '誓天不相负。', source: '《孔雀东南飞》', translation: '对着上天发誓决不辜负彼此。' }
        ]
      },
      {
        pos: '动词/形容词',
        meaning: '失败 / 亏损，欠缺',
        examples: [
          { text: '胜负之数，存亡之理，当与秦相较，或未易量。', source: '《六国论》', translation: '胜负的命运，存亡的道理，如果与秦国相较量，或许未可限量。' }
        ]
      }
    ],
    examTips: '“负”作动词“辜负/违背”（负赵、誓不相负）与“依傍/倚仗”（负势竞上）是常见考点。'
  },
  {
    id: 'fu_again',
    word: '复',
    pinyin: 'fù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '夂',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '返回，回来 / 恢复，复兴 / 答复，回报 / 免除赋税',
        examples: [
          { text: '昭王南征而不复。', source: '《左传》', translation: '昭王向南巡视而没有回来。' },
          { text: '师道之不复，可知矣。', source: '《师说》', translation: '从师尊师的风尚不能恢复，由此可以知道了。' },
          { text: '王来玉宇，复命于朝。', source: '《史记》', translation: '回报命令。' }
        ]
      },
      {
        pos: '副词',
        meaning: '再，又，重新',
        examples: [
          { text: '复行数十步，豁然开朗。', source: '《桃花源记》', translation: '又走了几十步，眼界开阔明亮。' },
          { text: '野火烧不尽，春风吹又生（复生）。', source: '《赋得古原草送别》', translation: '野火烧不尽，春风吹拂又生长。' }
        ]
      }
    ],
    examTips: '“复”作动词“恢复”（师道之不复）与“回报/答复”（复命）。'
  },
  {
    id: 'gai_cover',
    word: '盖',
    pinyin: ['gài', 'gě'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '艹',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词 [gài]',
        meaning: '伞盖，车盖 / 遮盖，掩盖，覆盖 / 超过，胜过',
        examples: [
          { text: '日初出大如车盖。', source: '《两小儿辩日》', translation: '太阳刚升起时大得像车盖。' },
          { text: '枝枝相覆盖，叶叶相交通。', source: '《孔雀东南飞》', translation: '枝条相互覆盖，树叶相互交错。' },
          { text: '力拔山兮气盖世。', source: '《垓下歌》', translation: '力量能拔起大山啊气势超过当代。' }
        ]
      },
      {
        pos: '副词/连词/句首发语词 [gài]',
        meaning: '大概，大约 / 承接句首表原因发语（原来是，大概因为）',
        examples: [
          { text: '盖儒者所争，尤在于名实。', source: '《答司马谏议书》', translation: '大概读书人所争论的，特别在于名义与实质。' },
          { text: '盖在殷忧，必竭诚以待下。', source: '《谏太宗十思疏》', translation: '大概在深重忧虑时，一定要竭尽诚心对下属。' },
          { text: '盖余所至，比好游者尚不能十一。', source: '《游褒禅山记》', translation: '原来我所到达的地方，比起爱好游览的人尚且不及十分之一。' }
        ]
      },
      {
        pos: '通假字 [gài]',
        meaning: '通“盍”，何不',
        examples: [
          { text: '技盖（盍）至此乎？', source: '《庖丁解牛》', translation: '技术怎么（何不）会精湛到这种地步呢？' }
        ]
      }
    ],
    examTips: '“盖”在句首作发语词（盖余所至、盖在殷忧）；通“盍”表“怎么/何不”（技盖至此乎）。'
  },
  {
    id: 'gu_reason',
    word: '故',
    pinyin: 'gù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '攵',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '原因，缘故 / 事故，变故 / 旧交，老朋友',
        examples: [
          { text: '既克，公问其故。', source: '《曹刿论战》', translation: '战胜之后，鲁庄公询问原因。' },
          { text: '乡园多故，复安能久留。', source: '《史记》', translation: '家乡多有变故，又怎么能久留呢。' },
          { text: '君安与项伯有故？', source: '《鸿门宴》', translation: '您怎么与项伯有旧交？' }
        ]
      },
      {
        pos: '形容词/副词',
        meaning: '旧的，原来的 / 故意，特意 / 仍然，依然',
        examples: [
          { text: '故垒西边，人道是，三国周郎赤壁。', source: '《念奴娇·赤壁怀古》', translation: '旧日营垒的西边，人们说是三国周瑜赤壁。' },
          { text: '公子往，数请之，朱亥故不应。', source: '《信陵君窃符救赵》', translation: '公子前往多次请他，朱亥故意不理应。' },
          { text: '累官故不失州郡。', source: '《赤壁之战》', translation: '逐级升官仍然不失州郡长官的职位。' }
        ]
      },
      {
        pos: '连词',
        meaning: '所以，因此',
        examples: [
          { text: '故天将降大任于是人也。', source: '《生于忧患死于安乐》', translation: '所以上天将要把重大使命降临给这个人。' }
        ]
      }
    ],
    examTips: '“故”作副词“故意/特意”（朱亥故不应）、“仍然/依然”（故不失州郡）及名词“旧交”（与项伯有故）。'
  },
  {
    id: 'gu_look',
    word: '顾',
    pinyin: 'gù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '页',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '回头看，回头 / 顾念，关心，顾及 / 拜访，看望',
        examples: [
          { text: '荆轲顾笑武阳，前为谢曰。', source: '《荆轲刺秦王》', translation: '荆轲回头向秦武阳笑了笑，上前谢罪说……' },
          { text: '大行不顾细谨，大礼不辞小让。', source: '《鸿门宴》', translation: '做大事不必顾虑细枝末节……' },
          { text: '三顾臣于草庐之中。', source: '《出师表》', translation: '三次到草庐中看望拜访我。' }
        ]
      },
      {
        pos: '副词/连词',
        meaning: '反而，却 / 只，不过，只是',
        examples: [
          { text: '顾吾念之，强秦之所以不敢加兵于赵者……', source: '《廉颇蔺相如列传》', translation: '只是我考虑到，强大的秦国之所以不敢发兵……' },
          { text: '人之立志，顾不如蜀鄙之僧哉？', source: '《为学》', translation: '人立志定目标，反而还不如四川边境的僧人吗？' }
        ]
      }
    ],
    examTips: '“顾”作副词“只是/不过”（顾吾念之）与“反而/却”（顾不如蜀鄙之僧）。'
  },
  {
    id: 'gu_solid',
    word: '固',
    pinyin: 'gù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '囗',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词',
        meaning: '坚固，牢固 / 固执，顽固 / 险固的地形，险要',
        examples: [
          { text: '秦孝公据崤函之固。', source: '《过秦论》', translation: '秦孝公占据着崤山和函谷关的险要要塞。' },
          { text: '汝心之固，固不可彻。', source: '《愚公移山》', translation: '你的思想太顽固，顽固得不可改通。' }
        ]
      },
      {
        pos: '动词',
        meaning: '巩固，稳固，使……坚固',
        examples: [
          { text: '固国不以山溪之险。', source: '《得道多助》', translation: '巩固国防不能靠山河的险要。' },
          { text: '求木之长者，必固其根本。', source: '《谏太宗十思疏》', translation: '想要树木生长高大，一定要稳固它的根部。' }
        ]
      },
      {
        pos: '副词',
        meaning: '本来，原来 / 确实，固然 / 坚决，坚持',
        examples: [
          { text: '生乎吾前，其闻道也固先乎吾。', source: '《师说》', translation: '出生在我前面，他懂得道理本来就比我早。' },
          { text: '蔺相如固止之。', source: '《廉颇蔺相如列传》', translation: '蔺相如坚决劝阻他们。' }
        ]
      }
    ],
    examTips: '“固”作名词“险要地形”（据崤函之固）；作副词“本来/原来”（固先乎吾）与“坚决”（固止之）。'
  },
  {
    id: 'gui_return',
    word: '归',
    pinyin: 'guī',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '彐',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '返回，回家 / 归还，还给 / 归聚，聚拢 / 归顺，依附 / 女女子出嫁',
        examples: [
          { text: '自罢归乡里，户牖常闭。', source: '《廉颇蔺相如列传》', translation: '自从被免官返回乡里后，门窗常常关闭。' },
          { text: '城入赵，璧留秦；城不入，臣请完美归赵。', source: '《廉颇蔺相如列传》', translation: '城池给了赵国，璧留在秦国；城池不给赵国，我请求完好无损归还给赵国。' },
          { text: '云归而岩穴暝。', source: '《醉翁亭记》', translation: '云雾聚拢而山岩幽暗。' },
          { text: '之子于归，宜其室家。', source: '《诗经·桃夭》', translation: '这个女子出嫁，适合她的家庭。' }
        ]
      }
    ],
    examTips: '“归”在古代专门指“女子出嫁”（之子于归），引申为归还、返回。'
  },
  {
    id: 'guo_country',
    word: '国',
    pinyin: 'guó',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '囗',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '诸侯国 / 国家 / 国都，京城',
        examples: [
          { text: '登斯楼也，则有去国怀乡，忧谗畏讥。', source: '《岳阳楼记》', translation: '登上这座楼啊，就有离开国都怀念家乡，担心被毁谤害怕被讥讽的心情。' },
          { text: '国破山河在，城春草木深。', source: '《春望》', translation: '国都陷落了山河依然存在，长安城春天草木一片深密。' }
        ]
      }
    ],
    examTips: '古文中“国”常指“国都/京城”（去国怀乡、国破山河在），非现代仅指国家。'
  },
  {
    id: 'guo_pass',
    word: '过',
    pinyin: ['guò', 'guō'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [guò]',
        meaning: '经过，通过 / 超过，胜过 / 拜访，看望 / 责备',
        examples: [
          { text: '过蒲池，入平阳。', source: '《史记》', translation: '经过蒲池，进入平阳。' },
          { text: '古者观人，过差不齐。', source: '《汉书》', translation: '古代观察人，超过一般。' },
          { text: '臣有客在市屠中，愿枉车骑过之。', source: '《信陵君窃符救赵》', translation: '臣有朋友在集市屠宰场中，希望屈尊驾车前往拜访他。' },
          { text: '闻大王有意督过之。', source: '《鸿门宴》', translation: '听说大王有意责备他。' }
        ]
      },
      {
        pos: '名词/动词 [guò]',
        meaning: '过错，过失 / 犯过错',
        examples: [
          { text: '人恒过，然后能改。', source: '《生于忧患死于安乐》', translation: '人常常犯过错，然后才能改正。' },
          { text: '君子博学而日参省乎己，则知明而行无过矣。', source: '《劝学》', translation: '君子广博学习并且每天对自己检验反省，那么智慧明达行为就没有过错了。' }
        ]
      }
    ],
    examTips: '“过”作动词“拜访/看望”（枉车骑过之）与“责备/督责”（意督过之）是常见核心考点。'
  },
  {
    id: 'he_what',
    word: '何',
    pinyin: 'hé',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '代词/副词',
        meaning: '什么，哪里 / 怎么，为什么 / 多么（表感叹）',
        examples: [
          { text: '大王来何操？', source: '《鸿门宴》', translation: '大王来时带了什么东西？' },
          { text: '豫州军虽败于长坂，今战士还者及关羽水军精甲万人，刘备何忧？', source: '《赤壁之战》', translation: '刘备还担忧什么？' },
          { text: '徐公何能及君也？', source: '《邹忌讽齐王纳谏》', translation: '徐公怎么能赶得上您呢？' },
          { text: '水何澹澹，山岛竦峙。', source: '《观沧海》', translation: '水波多么荡漾，山岛高高耸立。' }
        ]
      },
      {
        pos: '动词',
        meaning: '通“呵”，呵斥，盘问',
        examples: [
          { text: '信臣精卒陈利兵而谁何。', source: '《过秦论》', translation: '可靠的官员精锐的士兵拿着锋利的兵器盘问呵斥（谁何：呵问是谁）。' }
        ]
      }
    ],
    examTips: '“谁何”指“盘问呵斥是谁”（陈利兵而谁何）；“何操”为宾语前置。'
  },
  {
    id: 'hen_regret',
    word: '恨',
    pinyin: 'hèn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '忄',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '遗憾，懊悔（古义） / 怨恨，怀恨',
        examples: [
          { text: '出师未捷身先死，长使英雄泪满襟。此恨绵绵无绝期。', source: '《长恨歌》', translation: '这种遗憾绵绵不绝没有尽期。' },
          { text: '未尝不叹息痛恨于桓、灵也。', source: '《出师表》', translation: '没有不叹息并感到痛心遗憾于桓帝、灵帝统治的。' }
        ]
      }
    ],
    examTips: '古文“恨”多指“遗憾/懊悔”（痛恨、此恨绵绵），非现代的敌视怨恨。'
  },
  {
    id: 'hu_why',
    word: '胡',
    pinyin: 'hú',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '月',
    isHighFrequency: true,
    senses: [
      {
        pos: '疑问代词/副词',
        meaning: '什么，为什么，怎么',
        examples: [
          { text: '田园将芜胡不归？', source: '《归去来兮辞》', translation: '田园将要荒芜了为什么不回去呢？' },
          { text: '胡为乎遑遑欲何之？', source: '《归去来兮辞》', translation: '为什么这样心神不安想要到哪里去呢？' }
        ]
      },
      {
        pos: '名词',
        meaning: '古代北方边境少数民族统称',
        examples: [
          { text: '胡人不敢南下而牧马。', source: '《过秦论》', translation: '胡人不敢南下放牧马匹。' }
        ]
      }
    ],
    examTips: '“胡”作疑问副词表“为什么/怎么”（胡不归、胡为乎）。'
  },
  {
    id: 'huan_worry',
    word: '患',
    pinyin: 'huàn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '心',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '祸患，灾祸，患难',
        examples: [
          { text: '为之于未有，治之于未乱，防患于未然。', source: '《老子》', translation: '在事情未发生前就做好准备，防范灾祸于未然。' },
          { text: '夫祸患常积于忽微，而智勇多困于所溺。', source: '《伶官传序》', translation: '祸患常常在极微小的事情中积累起来……' }
        ]
      },
      {
        pos: '动词',
        meaning: '担心，忧虑，害病',
        examples: [
          { text: '欲勿予，即患秦兵之来。', source: '《廉颇蔺相如列传》', translation: '想要不给秦国，就担心秦国军队的到来。' },
          { text: '不患寡而患不均，不患贫而患不安。', source: '《季氏将伐颛臾》', translation: '不担心财富少而担心分配不均匀，不担心贫穷而担心不安宁。' }
        ]
      }
    ],
    examTips: '“患”作动词“担心/忧虑”（患秦兵之来、不患寡而患不均）。'
  },
  {
    id: 'huo_some',
    word: '或',
    pinyin: 'huò',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '戈',
    isHighFrequency: true,
    senses: [
      {
        pos: '无定代词',
        meaning: '有人，有的人，有的东西',
        examples: [
          { text: '或百步而后止，或五十步而后止。', source: '《寡人之于国也》', translation: '有的人跑了一百步然后停下来，有的人跑了五十步然后停下来。' },
          { text: '或以为死，或以为亡。', source: '《陈涉世家》', translation: '有的人认为他死了，有的人认为他逃跑了。' }
        ]
      },
      {
        pos: '副词/连词',
        meaning: '有时，偶尔 / 或者，或者说 / 也许，或许',
        examples: [
          { text: '或王命急宣，有时朝发白帝，暮到江陵。', source: '《三峡》', translation: '有时皇帝的命令急速传达……' },
          { text: '或曰：“六国互丧，率赂秦耶？”', source: '《六国论》', translation: '有人说：“六国相互灭亡，全都因为贿赂秦国吗？”' }
        ]
      }
    ],
    examTips: '“或”作无定代词“有人/有的人”（或以为死）及副词“有时”（或王命急宣）。'
  },
  {
    id: 'ji_disease',
    word: '疾',
    pinyin: 'jí',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '疒',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '轻病（“病”为重病） / 痛苦 / 缺欠',
        examples: [
          { text: '君有疾在腠理，不治将恐深。', source: '《扁鹊见蔡桓公》', translation: '您有小病在皮肤纹理中，不医治恐怕会加深。' },
          { text: '凡水旱疾疫，必有预备。', source: '《史记》', translation: '凡是水旱灾害疾疫痛苦……' }
        ]
      },
      {
        pos: '形容词/副词',
        meaning: '快，急速，迅捷 / 大，强（如“疾风”',
        examples: [
          { text: '顺风而呼，声非加疾也，而闻者彰。', source: '《劝学》', translation: '顺着风呼喊，声音并没有变得更大更强，但听的人听得很清楚。' },
          { text: '疾雷不及掩耳。', source: '《史记》', translation: '急速的响雷来不及掩住耳朵。' }
        ]
      },
      {
        pos: '动词',
        meaning: '痛恨，讨厌，嫉妒（同“嫉”）',
        examples: [
          { text: '屈平疾王听之不聪也，谗谄之蔽明也。', source: '《屈原列传》', translation: '屈原痛恨怀王听信言语不聪明，奸谄小人遮蔽了明察。' },
          { text: '同室操戈，自相疾害。', source: '《汉书》', translation: '同室操戈，互相嫉妒危害。' }
        ]
      }
    ],
    examTips: '“疾”作形容词“大/强”（声非加疾也）与动词“痛恨/嫉妒”（疾王听之不聪）。'
  },
  {
    id: 'ji_reach',
    word: '及',
    pinyin: 'jí',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '又',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '赶上，追上 / 到达，至 / 比得上 / 涉及，推及',
        examples: [
          { text: '怀王悔，追张仪，不及。', source: '《屈原列传》', translation: '怀王后悔，派人追赶张仪，没有赶上。' },
          { text: '及郡下，诣太守，说如此。', source: '《桃花源记》', translation: '到了郡城下，拜见太守，说了这些情况。' },
          { text: '徐公何能及君也？', source: '《邹忌讽齐王纳谏》', translation: '徐公哪里能赶得上比得上您呢？' }
        ]
      },
      {
        pos: '介词/连词',
        meaning: '趁着，等到 / 和，与',
        examples: [
          { text: '及羽背关怀楚，自立为霸王。', source: '《史记》', translation: '等到项羽背弃关中思念楚国，自立为西楚霸王。' },
          { text: '太子及宾客知其事者，皆白衣冠以送之。', source: '《荆轲刺秦王》', translation: '太子以及知道这件事的宾客，都穿白衣戴白帽来送他。' }
        ]
      }
    ],
    examTips: '“及”作介词表“等到”（及郡下、及羽背关）；动词表“赶上/比得上”（不及、何能及）。'
  },
  {
    id: 'ji_right_away',
    word: '即',
    pinyin: 'jí',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '卩',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '靠近，接近，到……去 / 就任，登上',
        examples: [
          { text: '匪来贸丝，来即我谋。', source: '《诗经·氓》', translation: '不是来买丝，是来靠近我谋商婚事。' },
          { text: '项王即日因留沛公与饮。', source: '《鸿门宴》', translation: '项王当天就留下沛公一同饮酒。' }
        ]
      },
      {
        pos: '副词/连词',
        meaning: '立刻，马上 / 就是，即是 / 即使，纵使',
        examples: [
          { text: '太守即遣人随其往。', source: '《桃花源记》', translation: '太守立刻派人跟随他前往。' },
          { text: '梁父即楚将项燕。', source: '《史记》', translation: '项梁的父亲就是楚国名将项燕。' },
          { text: '即不幸有方二三千里之旱，国胡以相恤？', source: '《论积贮疏》', translation: '即使不幸遇到方圆二三千里的旱灾，国家用什么来救恤？' }
        ]
      }
    ],
    examTips: '“即”作动词表“靠近/接近”（来即我谋）；连词表“即使/纵使”（即不幸有……旱）。'
  },
  {
    id: 'ji_already',
    word: '既',
    pinyin: 'jì',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '旡',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词',
        meaning: '已经 / 不久，会儿',
        examples: [
          { text: '既克，公问其故。', source: '《曹刿论战》', translation: '已经战胜之后，鲁庄公询问原因。' },
          { text: '既而大风罢，云散月明。', source: '《石钟山记》', translation: '一会儿大风停止，云雾散去月光明亮。' }
        ]
      },
      {
        pos: '连词/介词',
        meaning: '既然，已经 / 既……又……',
        examples: [
          { text: '既来之，则安之。', source: '《季氏将伐颛臾》', translation: '既然使他们招抚来了，就要使他们安定下来。' },
          { text: '既加之以师旅，因之以饥荒。', source: '《子路曾皙冉有公西华侍坐》', translation: '已经用侵略军队加在他身上，接着又有饥荒。' }
        ]
      }
    ],
    examTips: '“既”作副词“已经”（既克）、“一会儿/不久”（既而）与连词“既然”（既来之）。'
  },
  {
    id: 'jia_fake',
    word: '假',
    pinyin: ['jiǎ', 'jià'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [jiǎ]',
        meaning: '借，借用 / 凭借，借助',
        examples: [
          { text: '以是人多以书假余。', source: '《送东阳马生序》', translation: '因此人们大多把书借给我。' },
          { text: '君子生非异也，善假于物也。', source: '《劝学》', translation: '君子的本性与一般人没有不同，只是善于借助外物罢了。' },
          { text: '假舟楫者，非能水也，而绝江河。', source: '《劝学》', translation: '借助船只的人，并不是自己会游泳，却能横渡江河。' }
        ]
      },
      {
        pos: '形容词/连词 [jiǎ]',
        meaning: '虚假，假装 / 假使，如果（表假设）',
        examples: [
          { text: '乃悟前狼假寐，盖以诱敌。', source: '《狼》', translation: '才明白前面的狼假装睡觉，原来是用来诱敌。' },
          { text: '假令仆伏法受诛，若九牛亡一毛。', source: '《报任安书》', translation: '假使我服法受诛，就像九头牛身上掉了一根毛。' }
        ]
      },
      {
        pos: '名词 [jià]',
        meaning: '假期，休假（如“告假”）',
        examples: [
          { text: '府吏闻此变，因求假暂归。', source: '《孔雀东南飞》', translation: '府吏听说这个变故，于是请求假期暂时回家。' }
        ]
      }
    ],
    examTips: '“假”作动词“借/借助/凭借”（善假于物、假舟楫者）是高考《劝学》核心考点。'
  },
  {
    id: 'jian_gap',
    word: '间',
    pinyin: ['jiān', 'jiàn'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '门',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/量词 [jiān]',
        meaning: '中间，期间 / 房屋间数',
        examples: [
          { text: '奉命于危难之间。', source: '《出师表》', translation: '在危急困难的时期接受使命。' },
          { text: '安得广厦千万间。', source: '《茅屋为秋风所破歌》', translation: '怎么能得到千万间宽敞的房屋。' }
        ]
      },
      {
        pos: '名词/动词 [jiàn]',
        meaning: '缝隙，空隙 / 离间，挑拨 / 参与，干预 / 悄悄地，小路（间行）',
        examples: [
          { text: '彼节者有间，而刀刃者无厚。', source: '《庖丁解牛》', translation: '那牛骨节之间有缝隙，而刀刃却没有厚度。' },
          { text: '谗人间之，可谓穷矣。', source: '《屈原列传》', translation: '奸谄小人在中间离间挑拨他，可以说是陷入困境了。' },
          { text: '肉食者谋之，又何间焉？', source: '《曹刿论战》', translation: '做官的大官们谋划这件事，你又何必参与干预呢？' },
          { text: '道芷阳间行。', source: '《鸿门宴》', translation: '取道芷阳从小路悄悄地步行。' }
        ]
      }
    ],
    examTips: '“间”读[jiàn]作动词“参与/干预”（又何间焉）、“离间”（谗人间之）、“悄悄地”（间行）。'
  },
  {
    id: 'jian_simple',
    word: '简',
    pinyin: 'jiǎn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '竹',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '竹简，书简',
        examples: [
          { text: '执简扼腕。', source: '《史记》', translation: '手执竹简握紧手腕。' }
        ]
      },
      {
        pos: '动词',
        meaning: '选择，选拔 / 检阅 / 简化，怠慢',
        examples: [
          { text: '盖简丝数米，不可胜计。', source: '《齐民要术》', translation: '选择挑选丝线。' },
          { text: '是以先帝简拔以遗陛下。', source: '《出师表》', translation: '因此先帝选拔出来留给陛下。' }
        ]
      }
    ],
    examTips: '“简”作动词表“挑选/选拔”（简拔以遗陛下）。'
  },
  {
    id: 'jian_see',
    word: '见',
    pinyin: ['jiàn', 'xiàn'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '见',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [jiàn]',
        meaning: '看见，拜见，会见 / 召见，接见',
        examples: [
          { text: '扁鹊见蔡桓公。', source: '《扁鹊见蔡桓公》', translation: '扁鹊拜见蔡桓公。' },
          { text: '秦王坐章台见相如。', source: '《廉颇蔺相如列传》', translation: '秦王坐在章台上召见蔺相如。' }
        ]
      },
      {
        pos: '助词 [jiàn]',
        meaning: '表被动（被） / 放在动词前表自己（动作偏指一方，如“见谅、见教”）',
        examples: [
          { text: '信而见疑，忠而被谤。', source: '《屈原列传》', translation: '诚信却被怀疑，忠贞却被毁谤。' },
          { text: '慈父见背。', source: '《陈情表》', translation: '慈祥的父亲背弃（抛弃）了我（离开了我）。' },
          { text: '君既若见录，不久望君来。', source: '《孔雀东南飞》', translation: '您既然这样记着我，希望您不久来看我。' }
        ]
      },
      {
        pos: '动词 [xiàn]',
        meaning: '通“现”，出现，显露，呈现',
        examples: [
          { text: '风吹草低见牛羊。', source: '《敕勒歌》', translation: '风吹拂草原草低伏显露出牛羊。' },
          { text: '图穷而匕首见。', source: '《荆轲刺秦王》', translation: '地图展开到了尽头，匕首显露了出来。' }
        ]
      }
    ],
    examTips: '“见”表被动（见疑）；作偏指代词（见背、见录）；通“现”[xiàn]（匕首见）。'
  }
];
