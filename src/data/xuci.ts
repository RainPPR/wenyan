import { RawVocabularyEntry } from '../types';

export const XUCI: RawVocabularyEntry[] = [
  {
    id: 'xuci_er',
    word: '而',
    pinyin: 'ér',
    radical: '而',
    isHighFrequency: true,
    senses: [
      {
        pos: '连词',
        meaning: '表示并列关系（一般不译，有时可译为“又”“并且”）',
        examples: [
          {
            text: '剑阁峥嵘而崔嵬，一夫当关，万夫莫开。',
            source: '《蜀道难》',
            translation: '剑阁高峻而且险陡，一人把守关口，万人也打不进来。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示递进关系（可译为“并且”或“而且”）',
        examples: [
          {
            text: '君子博学而日参省乎己。',
            source: '《劝学》',
            translation: '君子广泛地学习并且每天检查反省自己。',
          },
          {
            text: '楚怀王贪而信张仪，遂绝齐。',
            source: '《屈原列传》',
            translation: '楚怀王贪图小利并且相信张仪，于是与齐国绝交。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示承接关系（可译为“就”“接着”或不译）',
        examples: [
          {
            text: '故舍汝而旅食京师，以求斗斛之禄。',
            source: '《祭十二郎文》',
            translation: '所以抛下你在京城寄食，来谋求微薄的俸禄。',
          },
          {
            text: '人非生而知之者，孰能无惑。',
            source: '《师说》',
            translation: '人不是生下来就懂道理的，谁能没有疑惑。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示转折关系（可译为“但是”“却”）',
        examples: [
          {
            text: '青，取之于蓝，而青于蓝。',
            source: '《劝学》',
            translation: '靛青是从蓝草中提取的，却比蓝草更青。',
          },
          {
            text: '有如此之势，而为秦人积威之所劫。',
            source: '《六国论》',
            translation: '有这样的优势，却被秦国长期积聚的威势所胁迫。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示假设关系（可译为“如果”“假如”）',
        examples: [
          {
            text: '死而有知，其几何离。',
            source: '《祭十二郎文》',
            translation: '死后如果还有知觉，那相别能有多久呢。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示修饰关系（连接状语与中心词，可不译）',
        examples: [
          {
            text: '吾尝跂而望矣，不如登高之博见也。',
            source: '《劝学》',
            translation: '我曾经踮起脚尖远望，不如登上高处看得广阔。',
          },
        ],
      },
      {
        pos: '代词',
        meaning: '第二人称代词（译为“你”“你的”）',
        examples: [
          {
            text: '必欲烹而翁，则幸分我一杯羹。',
            source: '《项羽本纪》',
            translation: '如果你一定要煮你的父亲，请顺便分给我一杯肉汤。',
          },
        ],
      },
      {
        pos: '固定短语',
        meaning: '【而已】罢了',
        examples: [
          {
            text: '闻道有先后，术业有专攻，如是而已。',
            source: '《师说》',
            translation: '听亲道理有早有晚，业务学问各有特长，如此罢了。',
          },
        ],
      },
      {
        pos: '固定短语',
        meaning: '【而况】何况',
        examples: [
          {
            text: '已而夕阳西下，树影散乱，太守归而宾客从也。',
            source: '《醉翁亭记》',
            translation: '不久夕阳落山，树影散乱，太守回去而宾客跟随。',
          },
        ],
      },
      {
        pos: '固定短语',
        meaning: '【已而】【俄而】不久，随后',
        examples: [
          {
            text: '已而夕阳西下，树影散乱，太守归而宾客从也。',
            source: '《醉翁亭记》',
            translation: '不久夕阳落山，树影散乱，太守回去而宾客跟随。',
          },
        ],
      },
    ],
    examTips:
      '“而”字高考常考转折（却）、修饰（连接状语）与递进（并且）。注意代词用法“而翁”（你的父亲）及固定短语“而已”（罢了）。',
  },
  {
    id: 'xuci_he',
    word: '何',
    pinyin: ['hé', 'hè'],
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '疑问代词',
        meaning: '单独作谓语，后面常有语气助词“哉”“也”，译为“为什么”“什么原因”',
        examples: [
          {
            text: '齐人未尝赂秦，终继五国迁灭，何哉？',
            source: '《六国论》',
            translation: '齐国未曾贿赂秦国，最终也随着五国灭亡，为什么呢？',
          },
        ],
      },
      {
        pos: '疑问代词',
        meaning: '作动词或介词的宾语，前置，译为“哪里”“什么”',
        examples: [
          {
            text: '大王来何操？',
            source: '《鸿门宴》',
            translation: '大王来时带了什么？',
          },
        ],
      },
      {
        pos: '疑问代词',
        meaning: '作定语，译为“什么”“哪”',
        examples: [
          {
            text: '其间旦暮闻何物，杜鹃啼血猿哀鸣。',
            source: '《琵琶行》',
            translation: '这中间早晚听见的是什么声音？是杜鹃啼血和猿猴啼鸣。',
          },
        ],
      },
      {
        pos: '疑问副词',
        meaning: '用在句首或动词前，表示反问，译为“为什么”“怎么”',
        examples: [
          {
            text: '何不按兵束甲，北面而事之？',
            source: '《赤壁之战》',
            translation: '为什么不按兵不动按甲归降，向北称臣侍奉他呢？',
          },
        ],
      },
      {
        pos: '程度副词',
        meaning: '用在形容词前，表示程度深，译为“怎么”“多么”“怎么这样”',
        examples: [
          {
            text: '至于誓天断发，泣下沾襟，何其衰也！',
            source: '《伶官传序》',
            translation: '至于剪发发誓，眼泪沾湿衣襟，多么衰败颓废啊！',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【何如】怎么样，什么样',
        examples: [
          {
            text: '樊哙曰：“今日之事何如？”',
            source: '《鸿门宴》',
            translation: '樊哙说：“今天的事怎么样了？”',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【何以】即“以何”，凭什么，拿什么',
        examples: [
          {
            text: '一旦山陵崩，长安君何以自托于赵？',
            source: '《触龙说赵太后》',
            translation: '一旦太后驾崩，长安君凭什么在赵国安身立命？',
          },
        ],
      },
      {
        pos: '动词 [hè]',
        meaning: '通“呵”，喝斥，呵问；通“荷”，扛，背',
        examples: [
          {
            text: '信臣精卒陈利兵而谁何。',
            source: '《过秦论》',
            translation: '可靠的官吏和精锐的士兵拿着锋利的兵器，盘问呵斥过往行人。',
          },
          {
            text: '何蓑何笠。',
            source: '《诗经·无衣》',
            translation: '背着蓑衣戴着斗笠。',
          },
        ],
      },
    ],
    examTips:
      '“何”作宾语时通常宾语前置（如“大王来何操”）。常考固定句式“何如”（怎么样）、“何以”（凭什么）。',
  },
  {
    id: 'xuci_hu',
    word: '乎',
    pinyin: 'hū',
    radical: '丿',
    isHighFrequency: true,
    senses: [
      {
        pos: '语气助词',
        meaning: '表示疑问语气（译为“吗”“呢”）',
        examples: [
          {
            text: '儿寒乎？欲食乎？',
            source: '《项脊轩志》',
            translation: '孩子冷吗？想吃东西吗？',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '表示反问语气（译为“难道……吗”“呢”）',
        examples: [
          {
            text: '吾师道也，夫庸知其年之先后生于吾乎？',
            source: '《师说》',
            translation: '我学习的是道理，哪管他的年龄比我大还是比我小呢？',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '表示测度或商量语气（译为“吧”）',
        examples: [
          {
            text: '圣人之所以为圣，愚人之所以为愚，其皆出于此乎？',
            source: '《师说》',
            translation: '圣人之所以成为圣人，愚人之所以成为愚人，大概都是出于这个原因吧？',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '用于感叹句或祈使句（译为“啊”“呀”）',
        examples: [
          {
            text: '悔相道之不察兮，延伫乎吾将反。',
            source: '《离骚》',
            translation: '后悔选择道路时没有看清啊，长久伫立我将要返回。',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '用在句中的停顿处，起舒缓语气作用，不译',
        examples: [
          {
            text: '胡为乎遑遑欲何之？',
            source: '《归去来兮辞》',
            translation: '为什么心神不定想要到哪里去呢？',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '相当于“于”（译为“在”“比”“对于”“向”）',
        examples: [
          {
            text: '醉翁之意不在酒，在乎山水之间也。',
            source: '《醉翁亭记》',
            translation: '醉翁的情趣不在于喝酒，而在于山水风光之间。（乎：于，在）',
          },
          {
            text: '生乎吾前，其闻道也固先乎吾。',
            source: '《师说》',
            translation: '出生在我前面的人，他懂得道理本来就比我早。（前一个乎：在；后一个乎：比）',
          },
        ],
      },
      {
        pos: '词尾助词',
        meaning: '用于形容词或副词之后（译为“……的样子”“……地”）',
        examples: [
          {
            text: '飘飘乎如遗世独立，羽化而登仙。',
            source: '《赤壁赋》',
            translation: '飘飘然像超脱尘世独立生存，羽化成仙。',
          },
        ],
      },
    ],
    examTips: '“乎”作介词时用法与“于”完全相同。作词尾时表示“……的样子”（如“飘飘乎”）。',
  },
  {
    id: 'xuci_nai',
    word: '乃',
    pinyin: 'nǎi',
    radical: '丿',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词',
        meaning: '表示前后两事在情理上的顺承或时间上的紧接（译为“才”“这才”“就”）',
        examples: [
          {
            text: '悉使羸兵负草填之，骑乃得过。',
            source: '《赤壁之战》',
            translation: '让瘦弱的士兵背着柴草填平泥坑，骑兵才得以通过。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '强调某一行为出乎意料或违背常理（译为“却”“竟”“竟然”“反而”）',
        examples: [
          {
            text: '今其智乃反不能及。',
            source: '《师说》',
            translation: '现在他们的明智程度竟然反而赶不上（巫医乐师百工）。',
          },
          {
            text: '而陋者乃以斧斤考击而求之。',
            source: '《石钟山记》',
            translation: '浅陋的人竟然用斧头敲打石壁来寻觅石钟山得名的原因。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '表示对事物范围的一种限制（译为“只”“仅”）',
        examples: [
          {
            text: '项王乃复引兵而东，至东城，乃有二十八骑。',
            source: '《项羽本纪》',
            translation: '项王于是又率领军队向东走，到达东城时，只剩下二十八骑跟随。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '用在判断句中起确认作用（译为“是”“本是”“就是”）',
        examples: [
          {
            text: '当立者乃公子扶苏。',
            source: '《陈涉世家》',
            translation: '应当立为君主的本是公子扶苏。',
          },
          {
            text: '若事之不济，此乃天也。',
            source: '《赤壁之战》',
            translation: '如果事情不能成功，这就是天意啊。',
          },
        ],
      },
      {
        pos: '代词',
        meaning: '第二人称代词（译为“你”“你的”）',
        examples: [
          {
            text: '王师北定中原日，家祭无忘告乃翁。',
            source: '《示儿》',
            translation: '朝廷军队收复中原的那一天，家祭时不要忘记告诉你的父亲。',
          },
          {
            text: '尔其无忘乃父之志。',
            source: '《伶官传序》',
            translation: '你一定不要忘记你父亲的遗志。',
          },
        ],
      },
    ],
    examTips:
      '“乃”表转折（竟然）与判断（是）是高考考查重点。代词“乃翁”（你的父亲）、“乃父”（你的父亲）需熟记。',
  },
  {
    id: 'xuci_qi',
    word: '其',
    pinyin: 'qí',
    radical: '八',
    isHighFrequency: true,
    senses: [
      {
        pos: '代词',
        meaning: '第三人称代词（译为“他的”“它的”“他”“它”“他们”）',
        examples: [
          {
            text: '秦王恐其破璧。',
            source: '《廉颇蔺相如列传》',
            translation: '秦王害怕他撞碎和氏璧。',
          },
          {
            text: '其闻道也固先乎吾。',
            source: '《师说》',
            translation: '他懂得道理本来就比我早。',
          },
        ],
      },
      {
        pos: '代词',
        meaning: '活用为第一人称或第二人称（译为“我的”“我（自己）”或“你的”“你”）',
        examples: [
          {
            text: '而余亦悔其随之而不得极夫游之乐也。',
            source: '《游褒禅山记》',
            translation: '我也后悔自己跟随他们出来而未能尽情享受游览的乐趣。',
          },
        ],
      },
      {
        pos: '指示代词',
        meaning: '远指或近指（译为“那”“那个”“那些”或“这”“这个”）',
        examples: [
          {
            text: '不嫁义郎体，其往欲何云？',
            source: '《孔雀东南飞》',
            translation: '不嫁给好郎君，以后你打算怎么办？',
          },
          {
            text: '今存其本不忍废。',
            source: '《指南录后序》',
            translation: '现在保存这底稿不忍心废弃。',
          },
        ],
      },
      {
        pos: '指示代词',
        meaning: '表示“其中的”（后面多接数词）',
        examples: [
          {
            text: '于乱石间择其一二扣之。',
            source: '《石钟山记》',
            translation: '在乱石中间选择其中的一两个敲击它们。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '表示推测、祈使或反问语气（译为“大概”“可能”',
        examples: [
          {
            text: '圣人之所以为圣，愚人之所以为愚，其皆出于此乎？',
            source: '《师说》',
            translation: '大概都是出于这个原因吧？',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '“还是”',
        examples: [
          {
            text: '攻之不克，围之不继，吾其还也。',
            source: '《烛之武退秦师》',
            translation: '攻打它攻不下，围困它后继无力，我们还是回去吧。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '“难道”）',
        examples: [
          {
            text: '圣人之所以为圣，愚人之所以为愚，其皆出于此乎？',
            source: '《师说》',
            translation: '大概都是出于这个原因吧？',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示选择关系（译为“是……还是……”）',
        examples: [
          {
            text: '其真无马邪？其真不知马也！',
            source: '《马说》',
            translation: '是真的没有千里马呢？还是真的识不出千里马呢！',
          },
          {
            text: '呜呼！其信然邪？其梦邪？其传之非其真邪？',
            source: '《祭十二郎文》',
            translation: '唉！是真的呢？是做梦呢？还是传送的消息不真实呢？',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示假设关系（译为“如果”）',
        examples: [
          {
            text: '其业有不精，德有不成者，非天质之卑，则心不若余之专耳。',
            source: '《送东阳马生序》',
            translation:
              '如果他们的学业有不精通的，德行有不成的，不是天资低下，而是心思不如我专一罢了。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '起调节音节的作用，可不译',
        examples: [
          {
            text: '路曼曼其修远兮，吾将上下而求索。',
            source: '《离骚》',
            translation: '漫长遥远的路途啊，我将上天入地去寻求真理。',
          },
        ],
      },
    ],
    examTips: '“其”词性极丰富。作副词时表祈使（“吾其还也”译为“还是”）、表推测（“大概”）。',
  },
  {
    id: 'xuci_qie',
    word: '且',
    pinyin: 'qiě',
    radical: '一',
    isHighFrequency: true,
    senses: [
      {
        pos: '连词',
        meaning: '表示递进关系（译为“而且”“并且”“况且”“再说”）',
        examples: [
          {
            text: '彼所将中国人不过十五六万，且己久疲。',
            source: '《赤壁之战》',
            translation: '他所带领的中原士兵不过十五六万，况且早已疲惫。',
          },
          {
            text: '且燕赵处秦革灭殆尽之际。',
            source: '《六国论》',
            translation: '况且燕国和赵国正处在被秦国灭亡殆尽的时候。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示让步关系（译为“尚且”“还”）',
        examples: [
          {
            text: '臣死且不避，卮酒安足辞！',
            source: '《鸿门宴》',
            translation: '我连死尚且不逃避，一杯酒哪里值得推辞！',
          },
          {
            text: '古之圣人，其出人也远矣，犹且从师而问焉。',
            source: '《师说》',
            translation: '古代的圣人，他们超出一般人很远了，尚且跟从老师请教。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示并列关系（译为“又”“又……又……”“一面……一面……”）',
        examples: [
          {
            text: '命如南山石，四体康且直。',
            source: '《孔雀东南飞》',
            translation: '寿命像南山磐石一样长，身体健康又挺拔。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '表示时间（译为“将”“将要”“快要”）',
        examples: [
          {
            text: '若属皆且为所虏。',
            source: '《鸿门宴》',
            translation: '你们这些人全都要被他俘虏。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '表示态度（译为“暂且”“姑且”）',
        examples: [
          {
            text: '誓不相隔卿，且暂还家去。',
            source: '《孔雀东南飞》',
            translation: '誓死不与你相隔绝，你姑且暂时回娘家去。',
          },
        ],
      },
      {
        pos: '固定短语',
        meaning: '【且夫】用在句首，表示下文代入更深一层论述（况且、再说）',
        examples: [
          {
            text: '且夫天地之间，物各有主。',
            source: '《赤壁赋》',
            translation: '况且天地之间，万物各有其主。',
          },
        ],
      },
    ],
    examTips: '“且”作连词表让步（“臣死且不避”译为尚且）与作副词表将要（“且为所虏”）是常见考点。',
  },
  {
    id: 'xuci_ruo',
    word: '若',
    pinyin: 'ruò',
    radical: '艹',
    isHighFrequency: true,
    senses: [
      {
        pos: '代词',
        meaning: '第二人称代词（译为“你”“你们”“你的”）',
        examples: [
          {
            text: '若入前为寿，寿毕，请以剑舞。',
            source: '《鸿门宴》',
            translation: '你进去上前祝寿，祝寿完毕，请求舞剑。',
          },
          {
            text: '更若役，复若赋。',
            source: '《捕蛇者说》',
            translation: '变更你的差役，恢复你的赋税。',
          },
        ],
      },
      {
        pos: '指示代词',
        meaning: '表示近指（译为“这”“这样”“如此”）',
        examples: [
          {
            text: '以若所为求若所欲，犹缘木而求鱼也。',
            source: '《齐桓晋文之事》',
            translation: '用这样的做法去追求这样的欲望，就像缘木求鱼一样。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示假设（译为“如果”“假设”）',
        examples: [
          {
            text: '若不能，何不按兵束甲，北面而事之！',
            source: '《赤壁之战》',
            translation: '如果不能抵挡，为什么不按兵不动解开铠甲向北称臣侍奉他！',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示选择（译为“或”“或者”）',
        examples: [
          {
            text: '以万人若一郡降者，封万户。',
            source: '《汉书·高帝纪》',
            translation: '率领一万人或者一个郡投降的，封万户侯。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '引出话题（译为“至”“至于”）',
        examples: [
          {
            text: '若民，则无恒产，因无恒心。',
            source: '《齐桓晋文之事》',
            translation: '至于百姓，如果没有固定的产业，就没有稳定的心志。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【若夫】用在一段话的开头，引起论述的词（要说那、像那）',
        examples: [
          {
            text: '若夫淫雨霏霏，连月不开。',
            source: '《岳阳楼记》',
            translation: '要说那阴雨连绵不断，接连几个月不晴。',
          },
        ],
      },
      {
        pos: '词尾助词',
        meaning: '用于形容词后（译为“……的样子”）',
        examples: [
          {
            text: '桑之未落，其叶沃若。',
            source: '《诗经·氓》',
            translation: '桑树还没落叶时，它的叶子润泽茂盛的样子。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '像，好像',
        examples: [
          {
            text: '关山度若飞。',
            source: '《木兰诗》',
            translation: '像飞一样跨越万重关山。',
          },
        ],
      },
    ],
    examTips: '“若”作代词（你）与作连词（如果）、固定结构“若夫”（至于说那）为高频考点。',
  },
  {
    id: 'xuci_suo',
    word: '所',
    pinyin: 'suǒ',
    radical: '户',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '处所，地方',
        examples: [
          {
            text: '某所，而母立于兹。',
            source: '《项脊轩志》',
            translation: '这个地方，当年你母亲曾站在这里。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '放在动词前同动词组成“所”字结构（表示“所……的人',
        examples: [
          {
            text: '道之所存，师之所存也。',
            source: '《师说》',
            translation: '道理存在的地方，就是老师存在的地方。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '事物',
        examples: [
          {
            text: '过蒙拔擢，宠命优渥，岂敢盘桓，有所希冀。',
            source: '《陈情表》',
            translation: '过分蒙受提拔，恩宠优厚，岂敢犹豫不决有所非分企图。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '情况',
        examples: [
          {
            text: '道之所存，师之所存也。',
            source: '《师说》',
            translation: '道理存在的地方，就是老师存在的地方。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '原因”等）',
        examples: [
          {
            text: '道之所存，师之所存也。',
            source: '《师说》',
            translation: '道理存在的地方，就是老师存在的地方。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '与“为”呼应，组成“为……所……”的格式，表示被动',
        examples: [
          {
            text: '仆以口语遇遭此祸，重为乡党所笑，以污辱先人。',
            source: '《报任安书》',
            translation: '我因为言语招致这场灾祸，深深被乡里人嘲笑，玷污了祖先。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【所以】表示凭借',
        examples: [
          {
            text: '师者，所以传道受业解惑也。',
            source: '《师说》',
            translation: '老师，是用来传授道理、教授学业、解答疑惑的人。',
          },
          {
            text: '所以遣将守关者，备他盗之出入与非常也。',
            source: '《鸿门宴》',
            translation: '派遣将领把守函谷关的原因，是为了防备其他盗贼进入和意外变故。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '方法（用来的方法）或表示原因（……的原因）',
        examples: [
          {
            text: '所以遣将守关者，备他盗之出入与非常也。',
            source: '《鸿门宴》',
            translation: '派遣将领把守函谷关的原因，是为了防备其他盗贼进入和意外变故。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【所从】……的地方，……的途径',
        examples: [
          {
            text: '见渔人，乃大惊，问所从来。',
            source: '《桃花源记》',
            translation: '看见渔人，竟然大吃一惊，询问从哪里来。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '办法',
        examples: [
          {
            text: '见渔人，乃大惊，问所从来。',
            source: '《桃花源记》',
            translation: '看见渔人，竟然大吃一惊，询问从哪里来。',
          },
        ],
      },
    ],
    examTips:
      '“所以”是高考极高频考点！必须准确区分其表凭借（“用来……的工具/途径”）与表原因（“……的原因”）。',
  },
  {
    id: 'xuci_wei',
    word: '为',
    pinyin: ['wéi', 'wèi'],
    radical: '丶',
    isHighFrequency: true,
    senses: [
      {
        pos: '介词 [wèi]',
        meaning: '表示动作对象（译为“对”“向”）',
        examples: [
          {
            text: '如姬为公子泣。',
            source: '《信陵君窃符救赵》',
            translation: '如姬向信陵君哭诉。',
          },
          {
            text: '不足为外人道也。',
            source: '《桃花源记》',
            translation: '不值得对外面的人说。',
          },
        ],
      },
      {
        pos: '介词 [wèi]',
        meaning: '表示替代服务（译为“替”“给”）',
        examples: [
          {
            text: '公为我献之。',
            source: '《鸿门宴》',
            translation: '您替我献给他。',
          },
        ],
      },
      {
        pos: '介词 [wèi]',
        meaning: '表示动作、行为的时间（译为“当”“等到”）',
        examples: [
          {
            text: '为其来也，臣请缚一人过王而行。',
            source: '《晏子使楚》',
            translation: '当他到来的时候，请允许我们绑着一个人从大王面前走过。',
          },
        ],
      },
      {
        pos: '介词 [wèi]',
        meaning: '表示目的或原因（译为“为了”“因为”）',
        examples: [
          {
            text: '慎勿为妇死，贵贱情何薄。',
            source: '《孔雀东南飞》',
            translation: '千万不要为了妻子寻死，贵贱门第人情多么薄情。',
          },
        ],
      },
      {
        pos: '介词 [wéi]',
        meaning: '表被动，有时跟“所”结合构成“为……所……”（译为“被”）',
        examples: [
          {
            text: '身死人手，为天下笑者，何也？',
            source: '《过秦论》',
            translation: '自己死在别人手里，被天下人嘲笑，这是为什么呢？',
          },
        ],
      },
      {
        pos: '语气词 [wéi]',
        meaning: '用在疑问句句尾，表示疑问或反诘（译为“呢”）',
        examples: [
          {
            text: '如今人方为刀俎，我为鱼肉，何辞为？',
            source: '《鸿门宴》',
            translation: '现在人家正是刀和砧板，我们是鱼和肉，还推辞什么呢？',
          },
          {
            text: '何故怀瑾握瑜而自令见放为？',
            source: '《屈原列传》',
            translation: '为什么保持高洁的情操却使自己遭受流放呢？',
          },
        ],
      },
      {
        pos: '动词 [wéi]',
        meaning: '作为、充当、认为、成为、做、制造等',
        examples: [
          {
            text: '斩木为兵，揭竿为旗。',
            source: '《过秦论》',
            translation: '砍伐树木作为武器，举起竹竿作为旗帜。',
          },
          {
            text: '南取百越之地，以为桂林、象郡。',
            source: '《过秦论》',
            translation: '向南攻取百越之地，把它划为桂林郡和象郡。',
          },
          {
            text: '非为织作迟，君家妇难为。',
            source: '《孔雀东南飞》',
            translation: '并不是我纺织得慢，而是你家的媳妇难做。',
          },
        ],
      },
    ],
    examTips:
      '“为”兼具动词、介词和句末语气词。需注意区分读音[wéi]与[wèi]，尤其是句末语气词“何……为”（做什么呢）。',
  },
  {
    id: 'xuci_yan',
    word: '焉',
    pinyin: 'yān',
    radical: '灬',
    isHighFrequency: true,
    senses: [
      {
        pos: '兼词',
        meaning: '相当于“于之”“于此”“于彼”（译为“在其中”“从这里”“在这里”）',
        examples: [
          {
            text: '三人行，必有我师焉。',
            source: '《论语》',
            translation: '几个人同行，其中必定有可以当我老师的人。（焉：在其中）',
          },
          {
            text: '积土成山，风雨兴焉。',
            source: '《劝学》',
            translation: '堆积土石成为高山，风雨就会从这里兴起。（焉：从这里）',
          },
        ],
      },
      {
        pos: '代词',
        meaning: '相当于“之”（译为“他”“它”“他们”）',
        examples: [
          {
            text: '犹且从师而问焉。',
            source: '《师说》',
            translation: '尚且跟从老师向他请教。',
          },
        ],
      },
      {
        pos: '疑问副词',
        meaning: '表示疑问或反问（译为“为什么”“怎么”“哪里”）',
        examples: [
          {
            text: '焉用亡郑以陪邻？',
            source: '《烛之武退秦师》',
            translation: '为什么要灭掉郑国来增加邻国的土地呢？',
          },
        ],
      },
      {
        pos: '语气词',
        meaning: '句末语气词，表示陈述、感叹（译为“了”“啊”“呢”）',
        examples: [
          {
            text: '至丹以荆卿为计，始速祸焉。',
            source: '《六国论》',
            translation: '到了太子丹用荆轲刺秦作为对策，才加速了祸患的到来。',
          },
        ],
      },
      {
        pos: '语气词',
        meaning: '句末语气词，表示反诘语气（译为“呢”）',
        examples: [
          {
            text: '万钟于我何加焉！',
            source: '《鱼我所欲也》',
            translation: '优厚的俸禄对我有什么好处呢！',
          },
        ],
      },
      {
        pos: '词尾助词',
        meaning: '形容词词尾，相当于“然”（译为“……的样子”“……地”）',
        examples: [
          {
            text: '盘盘焉，囷囷焉，蜂房水涡，矗不知乎几千万落。',
            source: '《阿房宫赋》',
            translation: '盘旋曲折的样子，回环萦绕的样子，像蜂房水涡一样，矗立着不知道有几千万座。',
          },
        ],
      },
    ],
    examTips: '“焉”作兼词（“于之”“于此”）是高考文言虚词的高频考查考点！',
  },
  {
    id: 'xuci_ye',
    word: '也',
    pinyin: 'yě',
    radical: '乚',
    isHighFrequency: true,
    senses: [
      {
        pos: '语气助词',
        meaning: '用在句末，表示判断语气',
        examples: [
          {
            text: '张良曰：“沛公之参乘樊哙者也。”',
            source: '《鸿门宴》',
            translation: '张良说：“他是沛公的护卫樊哙。”',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '用在句末，表示感叹语气',
        examples: [
          {
            text: '呜呼！灭六国者六国也，非秦也。族秦者秦也，非天下也。',
            source: '《阿房宫赋》',
            translation:
              '唉！灭亡六国的是六国自己啊，不是秦国。灭亡秦国的是秦国自己啊，不是天下人。',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '用在句末，表示疑问或反诘语气',
        examples: [
          {
            text: '使秦复爱六国之人，则递三世可至万世而为君，谁得而族灭也？',
            source: '《阿房宫赋》',
            translation:
              '假使秦国能爱护六国的百姓，那就可以顺传三代直到万代做君王，谁能够族灭他们呢？',
          },
        ],
      },
      {
        pos: '语气助词',
        meaning: '用在句中，表示语气停顿舒缓',
        examples: [
          {
            text: '是说也，人常疑之。',
            source: '《石钟山记》',
            translation: '这种说法啊，人们经常怀疑它。',
          },
          {
            text: '其闻道也亦先乎吾。',
            source: '《师说》',
            translation: '他懂得道理，也比我早。',
          },
        ],
      },
    ],
    examTips: '“也”在句末表判断（与“……者，……也”连用）及句中舒缓停顿是文言语法基础。',
  },
  {
    id: 'xuci_yi',
    word: '以',
    pinyin: 'yǐ',
    radical: '人',
    isHighFrequency: true,
    senses: [
      {
        pos: '介词',
        meaning: '表示动作或行为凭借的工具、方法（译为“拿”“用”“凭着”“按照”）',
        examples: [
          {
            text: '士大夫终不肯以小舟夜泊绝壁之下。',
            source: '《石钟山记》',
            translation: '士大夫终究不肯乘着小船在夜里停泊在悬崖绝壁之下。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '表示处置对象（译为“把”“用”）',
        examples: [
          {
            text: '操当以肃还付乡党。',
            source: '《赤壁之战》',
            translation: '曹操应当把我送还给地方官。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '表示原因（译为“因为”“由于”）',
        examples: [
          {
            text: '怀王以不知忠臣之分，故内惑于郑袖，外欺于张仪。',
            source: '《屈原列传》',
            translation: '怀王因为不明白忠臣的本分，所以对内被郑袖困惑，对外被张仪欺骗。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '引出时间、处所（译为“于”“在”“从”）',
        examples: [
          {
            text: '果予以未时还家，而汝以辰时气绝。',
            source: '《祭十二郎文》',
            translation: '果然我在未时回到家，而你已在辰时断气。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '引出动作、行为的对象（译为“和”“跟”“率领”“带领”）',
        examples: [
          {
            text: '今如此以百骑走，匈奴追射我立尽。',
            source: '《李将军列传》',
            translation: '现在如果带着这一百多骑兵逃跑，匈奴追击射杀我们立刻就全完了。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示并列或递进（译为“又”“而且”）',
        examples: [
          {
            text: '险以远，则至者少。',
            source: '《游褒禅山记》',
            translation: '道路险峻而且偏远，那么到达的人就少。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示承接关系（译为“而”或不译）',
        examples: [
          {
            text: '樊哙侧其盾以撞。',
            source: '《鸿门宴》',
            translation: '樊哙侧过盾牌去撞击。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示目的关系（译为“来”“用来”）',
        examples: [
          {
            text: '请立太子为王，以绝秦望。',
            source: '《廉颇蔺相如列传》',
            translation: '请立太子为王，来断绝秦国的企图。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示因果关系（译为“因为”）',
        examples: [
          {
            text: '晋侯、秦伯围郑，以其无礼于晋，且贰于楚也。',
            source: '《烛之武退秦师》',
            translation: '晋侯与秦伯包围郑国，因为郑国对晋国无礼，并且怀有二心亲近楚国。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示修饰关系（译为“地”“着”或不译）',
        examples: [
          {
            text: '木欣欣以向荣，泉涓涓而始流。',
            source: '《归去来兮辞》',
            translation: '树木欣欣向荣，泉水涓涓始流。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示时间、方位、范围（如“以来”“以前”“以往”“以左”“以右”）',
        examples: [
          {
            text: '受命以来，夙夜忧叹。',
            source: '《出师表》',
            translation: '接受遗命以来，早晚忧虑叹息。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【以是】【是以】因此，所以',
        examples: [
          {
            text: '众人皆醉而我独醒，是以见放。',
            source: '《屈原列传》',
            translation: '大家都醉了只有我独自清醒，因此被放逐。',
          },
        ],
      },
    ],
    examTips: '“以”是高考考查频率最高的虚词之一！需熟练区分介词“用/凭/因为”与连词“来/而”。',
  },
  {
    id: 'xuci_yin',
    word: '因',
    pinyin: 'yīn',
    radical: '囗',
    isHighFrequency: true,
    senses: [
      {
        pos: '连词',
        meaning: '表示承接或因果（译为“于是”“就”“便”）',
        examples: [
          {
            text: '相如因持璧却立。',
            source: '《廉颇蔺相如列传》',
            translation: '蔺相如于是拿着宝璧退后站立。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '译为“因为”“由于”“凭借”“趁着”“通过”“经由”',
        examples: [
          {
            text: '恩所加，则思无因喜以谬赏。',
            source: '《谏太宗十思疏》',
            translation: '施加恩赏时，就想到不要因为一时高兴而奖赏错误。',
          },
          {
            text: '因利乘便，宰割天下。',
            source: '《过秦论》',
            translation: '凭借有利的形势和便利的条件，宰割天下。',
          },
        ],
      },
      {
        pos: '名词',
        meaning: '原因，缘由，机缘',
        examples: [
          {
            text: '于今无会因。',
            source: '《孔雀东南飞》',
            translation: '至今再也没有相会的机会与缘由。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '沿袭，继续，顺应',
        examples: [
          {
            text: '蒙故业，因遗策。',
            source: '《过秦论》',
            translation: '继承先人的基业，沿袭前代施行的策略。',
          },
          {
            text: '加之以师旅，因之以饥馑。',
            source: '《侍坐》',
            translation: '有军队侵略它，接着又有饥荒。',
          },
        ],
      },
    ],
    examTips: '“因”作介词（趁着、凭借、通过）与作连词（于是、就）是高考必考题点。',
  },
  {
    id: 'xuci_yu',
    word: '于',
    pinyin: 'yú',
    radical: '二',
    isHighFrequency: true,
    senses: [
      {
        pos: '介词',
        meaning: '引出动作涉及的地点、时间、对象（译为“在”“从”“到”“向”“跟”“对于”）',
        examples: [
          {
            text: '青，取之于蓝，而青于蓝。',
            source: '《劝学》',
            translation: '靛青是从蓝草中提取的，却比蓝草更青。（前一个“于”：从）',
          },
          {
            text: '于人为可讥，而在己为悔。',
            source: '《游褒禅山记》',
            translation: '在别人看来是可以非难嘲笑的，在自己看来也是后悔的。',
          },
          {
            text: '爱其子，择师而教之，于其身也，则耻师焉。',
            source: '《师说》',
            translation: '爱他们的孩子，选择老师来教育他；对于他们自己，却以从师为耻。',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '表示比较（译为“比”“胜过”）',
        examples: [
          {
            text: '青，取之于蓝，而青于蓝。',
            source: '《劝学》',
            translation: '靛青是从蓝草中提取的，却比蓝草更青。（后一个“于”：比）',
          },
        ],
      },
      {
        pos: '介词',
        meaning: '表示被动（译为“被”），有时动词前有“见”“受”等字',
        examples: [
          {
            text: '故内惑于郑袖，外欺于张仪。',
            source: '《屈原列传》',
            translation: '所以对内被郑袖所困惑，对外被张仪所欺骗。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【于是】相当于“于+此”（译为“在这”“从这”“在这种情况下”“因此”）',
        examples: [
          {
            text: '吾祖死于是，吾父死于是。',
            source: '《捕蛇者说》',
            translation: '我的祖父死在这种职业上，我的父亲死在这种职业上。',
          },
          {
            text: '于是余有叹焉。',
            source: '《游褒禅山记》',
            translation: '因此我有所感叹。',
          },
        ],
      },
      {
        pos: '复音虚词',
        meaning: '【于是】表承接或因果关系，与现代汉语“于是”相同',
        examples: [
          {
            text: '吴之民方痛心焉，于是乘其厉声以呵，则噪而相逐。',
            source: '《五人墓碑记》',
            translation: '吴地的百姓正为此痛心，于是趁着他大声喝骂，就群起呐喊追打他。',
          },
        ],
      },
    ],
    examTips: '“于”字用法三大核心：引出地点对象（在/向）、表比较（比）、表被动（被）。',
  },
  {
    id: 'xuci_yu_and',
    word: '与',
    pinyin: ['yǔ', 'yù', 'yú'],
    radical: '一',
    isHighFrequency: true,
    senses: [
      {
        pos: '介词 [yǔ]',
        meaning: '译为“跟”“同”或“为”“替”',
        examples: [
          {
            text: '而翁归，自与汝复算耳。',
            source: '《促织》',
            translation: '你父亲回来，自然会跟你算账。',
          },
          {
            text: '陈涉少时，尝与人佣耕。',
            source: '《陈涉世家》',
            translation: '陈涉年轻时，曾经替别人雇佣耕地。',
          },
        ],
      },
      {
        pos: '连词 [yǔ]',
        meaning: '表示并列（译为“和”“跟”“同”）',
        examples: [
          {
            text: '勾践载稻与脂于舟以行。',
            source: '《勾践灭吴》',
            translation: '勾践用船装载着稻米和油脂出行。',
          },
        ],
      },
      {
        pos: '动词 [yǔ]',
        meaning: '给予，授予',
        examples: [
          {
            text: '与尔三矢，尔其无忘乃父之志。',
            source: '《伶官传序》',
            translation: '给你三支箭，你切不要忘记你父亲的遗志。',
          },
        ],
      },
      {
        pos: '动词 [yǔ',
        meaning: '结交，亲附，赞同，参与',
        examples: [
          {
            text: '与嬴而不助五国也。',
            source: '《六国论》',
            translation: '结交秦国而不帮助五国。',
          },
        ],
      },
      {
        pos: '语气词 [yú]',
        meaning: '通“欤”，表示感叹或疑问（译为“吗”“呢”“啊”）',
        examples: [
          {
            text: '无乃尔是过与？',
            source: '《季氏将伐颛臾》',
            translation: '恐怕该责备你吧？',
          },
        ],
      },
    ],
    examTips: '“与”作动词结交（与嬴）、赞同（吾与点也）及通“欤”句末疑问语气需特别关注。',
  },
  {
    id: 'xuci_ze',
    word: '则',
    pinyin: 'zé',
    radical: '刂',
    isHighFrequency: true,
    senses: [
      {
        pos: '连词',
        meaning: '表示承接关系（译为“就”“便”）',
        examples: [
          {
            text: '故木受绳则直，金就砺则利。',
            source: '《劝学》',
            translation: '木材经过墨线量过就变直，金属刀剑拿到磨刀石上磨过就变锋利。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示假设关系（译为“假使”“如果”“要是……就”“那么”）',
        examples: [
          {
            text: '入则无法家拂士，出则无敌国外患者，国恒亡。',
            source: '《生于忧患，死于安乐》',
            translation:
              '在内部如果没有守法度的世臣和辅佐的贤士，在外部如果没有敌对的国家和外患，国家往往会灭亡。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '“则……则……”并用，表示并列（译为“就”或不译）',
        examples: [
          {
            text: '位卑则足羞，官盛则近谀。',
            source: '《师说》',
            translation: '以地位低的人为师就感到十分羞耻，以官职高的人为师就被认为近于阿谀。',
          },
          {
            text: '小则获邑，大则得城。',
            source: '《六国论》',
            translation: '较小的割让割得城邑，较大的割让割得城市。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '表示转折、让步（译为“可是”“却”“虽然”“倒是”）',
        examples: [
          {
            text: '于其身也，则耻师焉，惑矣。',
            source: '《师说》',
            translation: '对于他们自己，却以从师为耻，糊涂啊！',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '用在判断句中，起强调和确认作用（译为“是”“就是”）',
        examples: [
          {
            text: '此则岳阳楼之大观也。',
            source: '《岳阳楼记》',
            translation: '这就是岳阳楼的雄伟壮丽景色。',
          },
        ],
      },
    ],
    examTips: '“则”表转折（却）、表假设（如果）与表确认（就是）是高考考查的常考点。',
  },
  {
    id: 'xuci_zhe',
    word: '者',
    pinyin: 'zhě',
    radical: '耂',
    isHighFrequency: true,
    senses: [
      {
        pos: '特殊指示代词',
        meaning: '译为“……的”“……的（人、东西、事情、原因）”',
        examples: [
          {
            text: '秦自缪公以来二十余君，未尝有坚明约束者也。',
            source: '《廉颇蔺相如列传》',
            translation: '秦国自从秦穆公以来二十多位君主，未曾有坚守信用约束的人。',
          },
          {
            text: '廉颇者，赵之良将也。',
            source: '《廉颇蔺相如列传》',
            translation: '廉颇，是赵国的优秀将领。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '用在主语后表示提顿语气、疑问语气，不译',
        examples: [
          {
            text: '楚左尹项伯者，项羽季父也。',
            source: '《鸿门宴》',
            translation: '楚国左尹项伯，是项羽的最小的叔父。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '定语后置的标志（“中心词 + 形容词',
        examples: [
          {
            text: '求人可使报秦者，未得。',
            source: '《廉颇蔺相如列传》',
            translation: '寻找可以派去回复秦国的人，没有找到。',
          },
        ],
      },
      {
        pos: '助词',
        meaning: '动词短语 + 者”）',
        examples: [
          {
            text: '求人可使报秦者，未得。',
            source: '《廉颇蔺相如列传》',
            translation: '寻找可以派去回复秦国的人，没有找到。',
          },
        ],
      },
    ],
    examTips: '“者”常作定语后置标志（如“求人可使报秦者”）及用在“……者，……也”判断句式中。',
  },
  {
    id: 'xuci_zhi',
    word: '之',
    pinyin: 'zhī',
    radical: '丿',
    isHighFrequency: true,
    senses: [
      {
        pos: '代词',
        meaning: '第三人称代词（他、她、它、他们）；有时灵活用于第一或第二人称（如“你”）',
        examples: [
          {
            text: '然语之，又恐汝日日为吾担忧。',
            source: '《与妻书》',
            translation: '然而告诉了你，又怕你天天为我担惊受怕。（代词“你”）',
          },
        ],
      },
      {
        pos: '指示代词',
        meaning: '译为“这”“这个”“这样”',
        examples: [
          {
            text: '君子疾夫舍曰欲之而必为之辞。',
            source: '《季氏将伐颛臾》',
            translation:
              '君子厌恶那种避而不言自己想要却一定要为它找借口的行为。（前一个“之”：这样；后一个“之”：它）',
          },
        ],
      },
      {
        pos: '结构助词',
        meaning: '相当于“的”，放在定语和中心语之间',
        examples: [
          {
            text: '虎兕出于柙，龟玉毁于椟中，是谁之过与？',
            source: '《季氏将伐颛臾》',
            translation: '老虎犀牛从笼子里逃出来，龟甲宝玉在木匣里毁坏，这是谁的过错呢？',
          },
        ],
      },
      {
        pos: '结构助词',
        meaning: '放在主语和谓语之间，取消句子的独立性，不译',
        examples: [
          {
            text: '臣之壮也，犹不如人；今老矣，无能为也已。',
            source: '《烛之武退秦师》',
            translation: '我在壮年的时候，尚且不如别人；现在衰老了，无能为力了。',
          },
        ],
      },
      {
        pos: '结构助词',
        meaning: '宾语前置的标志，不译',
        examples: [
          {
            text: '句读之不知，惑之不解，或师焉，或不焉。',
            source: '《师说》',
            translation: '不通晓句读，不能解决疑惑，有的请教老师，有的不请教。',
          },
        ],
      },
      {
        pos: '结构助词',
        meaning: '定语后置的标志，不译',
        examples: [
          {
            text: '人谁又能以身之察察，受物之汶汶者乎？',
            source: '《屈原列传》',
            translation: '谁又能让自己洁净的身体，蒙受污浊的事物呢？',
          },
        ],
      },
      {
        pos: '音节助词',
        meaning: '补足音节，无实在意义，不译',
        examples: [
          {
            text: '填然鼓之，兵刃既接，弃甲曳兵而走。',
            source: '《寡人之于国也》',
            translation: '咚咚地击鼓，兵刃已经交锋，抛下铠甲拖着武器逃跑。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '到……去，前往',
        examples: [
          {
            text: '胡为乎遑遑欲何之？',
            source: '《归去来兮辞》',
            translation: '为什么心神不定想要到哪里去呢？',
          },
        ],
      },
    ],
    examTips:
      '“之”是高考虚词之首！五大考点：代词、结构助词“的”、主谓间取消句子独立性、宾语前置标志、动词“到……去”。',
  },
  {
    id: 'te_er',
    word: '特……耳',
    pinyin: 'tè ... ěr',
    senses: [
      {
        pos: '固定句式',
        meaning: '只是……罢了，不过是……而已',
        examples: [
          {
            text: '特以吾两人在也。',
            source: '《廉颇蔺相如列传》',
            translation: '只不过是因为我们两个人（廉颇与蔺相如）还在罢了。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'gpn_fu',
    word: '甫',
    pinyin: 'fǔ',
    senses: [
      {
        pos: '副词',
        meaning: '始，才，刚刚',
        examples: [
          {
            text: '遥襟甫畅，逸兴遄飞。',
            source: '《滕王阁序》',
            translation: '远望的胸怀刚刚敞开，超逸的兴致迅速飞扬。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '古代对男子的美称（如“字”后加“甫”）',
        examples: [
          {
            text: '年甫十四，即从军。',
            source: '《宋史》',
            translation: '年龄刚刚十四岁，就参军入伍了。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'gou',
    word: '苟',
    pinyin: 'gǒu',
    senses: [
      {
        pos: '副词',
        meaning: '苟且，随便',
        examples: [
          {
            text: '苟全性命于乱世，不求闻达于诸侯。',
            source: '《出师表》',
            translation: '在乱世中苟且保全性命，不奢求在诸侯中扬名显达。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '尚且，或许',
        examples: [
          {
            text: '苟富贵，无相忘。',
            source: '《陈涉世家》',
            translation: '如果有一天发迹富贵了，彼此不要互相忘记。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '假如，如果',
        examples: [
          {
            text: '苟全性命于乱世，不求闻达于诸侯。',
            source: '《出师表》',
            translation: '在乱世中苟且保全性命，不奢求在诸侯中扬名显达。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'qian_all',
    word: '佥',
    pinyin: 'qiān',
    senses: [
      {
        pos: '副词',
        meaning: '皆，都，全',
        examples: [
          {
            text: '佥曰宜为贞节先生。',
            source: '《宋史》',
            translation: '大家（众人）都说应当尊称他为贞节先生。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'wu_no',
    word: '无',
    pinyin: 'wú',
    senses: [
      {
        pos: '连词',
        meaning: '无论，不论',
        examples: [
          {
            text: '无愚智，咸莫不叹服。',
            source: '《三国志》',
            translation: '不论愚笨还是聪明的人，无不佩服叹服。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '即使',
        examples: [
          {
            text: '无食桑葚，无与士耽。',
            source: '《诗经》',
            translation: '不要贪吃桑葚，不要沉溺于与男子的情爱之中。',
          },
        ],
      },
      {
        pos: '通假字',
        meaning: '通“勿”，不要，别',
        examples: [
          {
            text: '无食桑葚，无与士耽。',
            source: '《诗经》',
            translation: '不要贪吃桑葚，不要沉溺于与男子的情爱之中。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'ran_so',
    word: '然',
    pinyin: 'rán',
    senses: [
      {
        pos: '代词',
        meaning: '如此，这样',
        examples: [
          {
            text: '河东凶亦然。',
            source: '《寡人之于国也》',
            translation: '黄河以东遭遇灾荒也是这样处理。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '认为……是对的',
        examples: [
          {
            text: '得斗升之水然活耳。',
            source: '《庄子》',
            translation: '得到一斗一升的水就能活命了。',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '转折“然而、但是”',
        examples: [
          {
            text: '河东凶亦然。',
            source: '《寡人之于国也》',
            translation: '黄河以东遭遇灾荒也是这样处理。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'ji_almost',
    word: '几',
    pinyin: ['jǐ', 'jī'],
    senses: [
      {
        pos: '数词',
        meaning: '几次，屡次 [jǐ]',
        examples: [
          {
            text: '微君，太子几废。',
            source: '《荆轲刺秦王》',
            translation: '如果没有您，太子几乎就被废黜了。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '接近，几乎，差不多 [jī]',
        examples: [
          {
            text: '微君，太子几废。',
            source: '《荆轲刺秦王》',
            translation: '如果没有您，太子几乎就被废黜了。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'du_only',
    word: '独',
    pinyin: 'dú',
    senses: [
      {
        pos: '副词',
        meaning: '唯独，只有',
        examples: [
          {
            text: '相如虽驽，独畏廉将军哉？',
            source: '《廉颇蔺相如列传》',
            translation: '我蔺相如虽然平庸无能，难道单单害怕廉颇将军吗？',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '偏偏',
        examples: [
          {
            text: '相如虽驽，独畏廉将军哉？',
            source: '《廉颇蔺相如列传》',
            translation: '我蔺相如虽然平庸无能，难道单单害怕廉颇将军吗？',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '岂，难道',
        examples: [
          {
            text: '相如虽驽，独畏廉将军哉？',
            source: '《廉颇蔺相如列传》',
            translation: '我蔺相如虽然平庸无能，难道单单害怕廉颇将军吗？',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'chu_first',
    word: '初',
    pinyin: 'chū',
    senses: [
      {
        pos: '副词',
        meaning: '起初，当初',
        examples: [
          {
            text: '初极狭，才通人。',
            source: '《桃花源记》',
            translation: '起初通道极其狭窄，仅能容纳一个人通过。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '刚刚，才',
        examples: [
          {
            text: '太祖初入关，祥与晋公护俱在咸阳。',
            source: '《周书》',
            translation: '太祖刚刚进入函谷关时，祥与晋国公宇文护都在咸阳。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'zhi_shi',
    word: '至是',
    pinyin: 'zhì shì',
    senses: [
      {
        pos: '固定短语',
        meaning: '到了这时，到这次',
        examples: [
          {
            text: '至是重往，百姓安之。',
            source: '《资治通鉴》',
            translation: '到了这时候再次前往，百姓都安心相处。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'jing_end',
    word: '竟',
    pinyin: 'jìng',
    senses: [
      {
        pos: '动词',
        meaning: '终了，结束',
        examples: [
          {
            text: '卒竟其功，成就大业。',
            source: '《史记》',
            translation: '最终完成了这项功业，成就了大业。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '穷究，查到底',
        examples: [
          {
            text: '秦王竟酒，终不能加胜于赵。',
            source: '《廉颇蔺相如列传》',
            translation: '秦王直到酒宴结束，始终不能占赵国的上风。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '终于，竟然',
        examples: [
          {
            text: '卒竟其功，成就大业。',
            source: '《史记》',
            translation: '最终完成了这项功业，成就了大业。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'nai_he',
    word: '奈何',
    pinyin: 'nài hé',
    senses: [
      {
        pos: '疑问代词',
        meaning: '怎么办',
        examples: [
          {
            text: '沛公曰：“为之奈何？”',
            source: '《鸿门宴》',
            translation: '沛公（刘邦）说：“对这件事该怎么办呢？”',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '怎么，为什么',
        examples: [
          {
            text: '沛公曰：“为之奈何？”',
            source: '《鸿门宴》',
            translation: '沛公（刘邦）说：“对这件事该怎么办呢？”',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'nai_x_he',
    word: '奈…何？',
    pinyin: 'nài ... hé',
    senses: [
      {
        pos: '疑问代词',
        meaning: '对……怎么办？',
        examples: [
          {
            text: '如太行、王屋何？',
            source: '《愚公移山》',
            translation: '又能把太行山、王屋山怎么样呢？',
          },
        ],
      },
      {
        pos: '疑问代词',
        meaning: '把……怎么样？',
        examples: [
          {
            text: '如太行、王屋何？',
            source: '《愚公移山》',
            translation: '又能把太行山、王屋山怎么样呢？',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'tuo_slight',
    word: '脱',
    pinyin: 'tuō',
    senses: [
      {
        pos: '形容词',
        meaning: '轻慢，疏忽，疏略',
        examples: [
          {
            text: '无礼则脱，寡谋自陷，不可不慎。',
            source: '《左传》',
            translation: '缺乏礼貌就会举止轻慢，缺乏谋略就会使自己陷入困境，不能不谨慎。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '或许，偶尔',
        examples: [
          {
            text: '脱因水旱，谷麦不收，何以赈恤？',
            source: '《汉书》',
            translation: '倘若遭遇水旱灾害，粮食没有收成，拿什么来救济恤安百姓？',
          },
        ],
      },
      {
        pos: '连词',
        meaning: '假使，倘若（表假设）',
        examples: [
          {
            text: '无礼则脱，寡谋自陷，不可不慎。',
            source: '《左传》',
            translation: '缺乏礼貌就会举止轻慢，缺乏谋略就会使自己陷入困境，不能不谨慎。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'qi_until',
    word: '迄',
    pinyin: 'qì',
    senses: [
      {
        pos: '介词',
        meaning: '到了，等到',
        examples: [
          {
            text: '迄孝武世，礼乐崩坏。',
            source: '《汉书》',
            translation: '等到汉武帝时代，礼乐制度早已崩坏。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '竟然，终究，始终',
        examples: [
          {
            text: '荆公无以答，迄不为变。',
            source: '《宋史》',
            translation: '王荆公无言以对，但终究没有改变主意。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'wei_hope',
    word: '唯',
    pinyin: 'wéi',
    senses: [
      {
        pos: '副词',
        meaning: '希望，祈望（表达期盼）',
        examples: [
          {
            text: '阙秦以利晋，唯君图之。',
            source: '《烛之武退秦师》',
            translation: '损害秦国而有利于晋国，希望您好好考虑这件事。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '确实，诚然',
        examples: [
          {
            text: '阙秦以利晋，唯君图之。',
            source: '《烛之武退秦师》',
            translation: '损害秦国而有利于晋国，希望您好好考虑这件事。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '唯独，只有',
        examples: [
          {
            text: '阙秦以利晋，唯君图之。',
            source: '《烛之武退秦师》',
            translation: '损害秦国而有利于晋国，希望您好好考虑这件事。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'zi_this',
    word: '兹',
    pinyin: 'zī',
    senses: [
      {
        pos: '代词',
        meaning: '指示代词“这，这个，此时”',
        examples: [
          {
            text: '而母立于兹，瞻顾不舍。',
            source: '《项脊轩志》',
            translation: '你的母亲站在这个地方，久久眷恋注视不肯离开。',
          },
        ],
      },
      {
        pos: '通假字',
        meaning: '通“滋”，更加，滋长',
        examples: [
          {
            text: '而母立于兹，瞻顾不舍。',
            source: '《项脊轩志》',
            translation: '你的母亲站在这个地方，久久眷恋注视不肯离开。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'shu_ji',
    word: '庶几',
    pinyin: 'shù jī',
    senses: [
      {
        pos: '副词短语',
        meaning: '或许，可能，差不多',
        examples: [
          {
            text: '庶几其圣人乎？修己以安百姓。',
            source: '《庄子》',
            translation: '这大概接近于圣人了吧？修养自身来使天下百姓安定。',
          },
        ],
      },
      {
        pos: '副词短语',
        meaning: '但愿，希望（表期望语气）',
        examples: [
          {
            text: '庶几其圣人乎？修己以安百姓。',
            source: '《庄子》',
            translation: '这大概接近于圣人了吧？修养自身来使天下百姓安定。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'qu_qu',
    word: '区区',
    pinyin: 'qū qū',
    senses: [
      {
        pos: '形容词',
        meaning: '真挚诚恳的样子',
        examples: [
          {
            text: '阿母谓府吏：“何乃太区区！”',
            source: '《孔雀东南飞》',
            translation: '母亲对府吏说：“你为什么竟如此真挚专一呢！”',
          },
        ],
      },
      {
        pos: '形容词',
        meaning: '渺小微小',
        examples: [
          {
            text: '秦人起于区区之地，而霸天下。',
            source: '《过秦论》',
            translation: '秦国人从渺小偏狭的地方起家，最终称霸天下。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '自称的谦词“我”',
        examples: [
          {
            text: '阿母谓府吏：“何乃太区区！”',
            source: '《孔雀东南飞》',
            translation: '母亲对府吏说：“你为什么竟如此真挚专一呢！”',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'wang_reckless',
    word: '妄',
    pinyin: 'wàng',
    senses: [
      {
        pos: '名词',
        meaning: '胡乱，轻率，无根据',
        examples: [
          {
            text: '善不妄来，灾不空发。',
            source: '《史记》',
            translation: '好事不会凭空无故降临，灾祸也不会白白爆发。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '任意，随意',
        examples: [
          {
            text: '不敢妄举师以伐攻。',
            source: '《左传》',
            translation: '不敢轻率发动军队去讨伐进攻。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'ji_xi',
    word: '几希',
    pinyin: 'jǐ xī',
    senses: [
      {
        pos: '形容词短语',
        meaning: '很少，微乎其微，相差无几',
        examples: [
          {
            text: '人之所以异于禽兽者几希，庶民去之，君子存之。',
            source: '《孟子》',
            translation: '人与禽兽不同的地方微乎其微，平民抛弃了它，君子保留了它。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'dan_xi',
    word: '旦夕',
    pinyin: 'dàn xī',
    senses: [
      {
        pos: '时间词',
        meaning: '早晨和晚上',
        examples: [
          {
            text: '甄丰旦夕入谋议，参与机密。',
            source: '《汉书》',
            translation: '甄丰早晚都进入宫中参与谋划商议，参与核心机密。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '比喻时间短暂或情况危急（如“危在旦夕”）',
        examples: [
          {
            text: '甄丰旦夕入谋议，参与机密。',
            source: '《汉书》',
            translation: '甄丰早晚都进入宫中参与谋划商议，参与核心机密。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'jue_he',
    word: '厥',
    pinyin: 'jué',
    senses: [
      {
        pos: '动词',
        meaning: '第三人称代词“他的，它的”',
        examples: [
          {
            text: '遭世罔极兮，乃损厥身。',
            source: '《屈原列传》',
            translation: '遭遇了黑暗无道的乱世啊，才损害了自己的身体。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '指示代词“那个，那些”',
        examples: [
          {
            text: '左丘失明，厥有《国语》；孙子膑脚，《兵法》修列。',
            source: '《报任安书》',
            translation:
              '左丘明双目失明，才撰写出了《国语》；孙膑被砍去了膝盖骨，才编著出了《兵法》。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '乃，才',
        examples: [
          {
            text: '遭世罔极兮，乃损厥身。',
            source: '《屈原列传》',
            translation: '遭遇了黑暗无道的乱世啊，才损害了自己的身体。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'you_ji',
    word: '有奇',
    pinyin: 'yǒu jī',
    senses: [
      {
        pos: '固定短语',
        meaning: '零数，有余（用在整数之后表微小余数）',
        examples: [
          {
            text: '舟首尾长约八分有奇，高可二黍许。',
            source: '《核舟记》',
            translation: '船从头到尾长约八分多一点，高大约有两个黍粒左右。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'ya_usual',
    word: '雅',
    pinyin: 'yǎ',
    senses: [
      {
        pos: '副词',
        meaning: '平素，向来，素来',
        examples: [
          {
            text: '宪王雅不以之为子数，甚疏之。',
            source: '《汉书》',
            translation: '宪王向来不把他当作自己的儿子看待，非常疏远他。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '很，非常',
        examples: [
          {
            text: '扬州刺史雅重之，屡加提拔。',
            source: '《宋史》',
            translation: '扬州刺史非常器重他，屡次加以提拔。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'zhe_always',
    word: '辄',
    pinyin: 'zhé',
    senses: [
      {
        pos: '副词',
        meaning: '就，总是，动辄，往往',
        examples: [
          {
            text: '文书字或不正，辄举劾之。',
            source: '《汉书》',
            translation: '公文书信如果字迹不端正，就立即检举弹劾他。',
          },
          {
            text: '每战辄胜，未尝败北。',
            source: '《史记》',
            translation: '每次交战就取得胜利，未曾战败过。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'zi_increase',
    word: '滋',
    pinyin: 'zī',
    senses: [
      {
        pos: '动词',
        meaning: '增加，增多',
        examples: [
          {
            text: '滋其懈怠。',
            source: '《左传》',
            translation: '滋长他们的懈怠。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '更加',
        examples: [
          {
            text: '由此滋骄。',
            source: '《资治通鉴》',
            translation: '从此更加骄横。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'shu_yu_ruo',
    word: '孰与，孰若',
    pinyin: 'shú yǔ, shú ruò',
    senses: [
      {
        pos: '固定短语',
        meaning: '表比较（两者相比，哪一个更……）',
        examples: [
          {
            text: '我孰与城北徐公美？',
            source: '《邹忌讽齐王纳谏》',
            translation: '我同城北徐公比，谁更美？',
          },
        ],
      },
      {
        pos: '固定短语',
        meaning: '表抉择（倾向于肯定后者）',
        examples: [
          {
            text: '孰与制天命而用之？',
            source: '《荀子》',
            translation: '哪里比得上掌握自然规律而去利用它呢？',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'man_reckless',
    word: '漫',
    pinyin: 'màn',
    senses: [
      {
        pos: '形容词',
        meaning: '放荡，放纵',
        examples: [
          {
            text: '漫卷诗书喜欲狂。',
            source: '《闻官军收河南河北》',
            translation: '胡乱卷起诗书，高兴得快要发狂。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '胡乱，随意，聊且',
        examples: [
          {
            text: '漫卷诗书喜欲狂。',
            source: '《闻官军收河南河北》',
            translation: '胡乱卷起诗书，高兴得快要发狂。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
  {
    id: 'shu_die',
    word: '殊',
    pinyin: 'shū',
    senses: [
      {
        pos: '动词',
        meaning: '死',
        examples: [
          {
            text: '士卒殊死战。',
            source: '《史记》',
            translation: '士兵们拼死作战。',
          },
        ],
      },
      {
        pos: '副词',
        meaning: '断绝',
        examples: [
          {
            text: '老臣今者殊不欲食。',
            source: '《触龙说赵太后》',
            translation: '老臣近来很不思饮食。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '超过',
        examples: [
          {
            text: '士卒殊死战。',
            source: '《史记》',
            translation: '士兵们拼死作战。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '区别',
        examples: [
          {
            text: '士卒殊死战。',
            source: '《史记》',
            translation: '士兵们拼死作战。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '副词“甚、很”',
        examples: [
          {
            text: '士卒殊死战。',
            source: '《史记》',
            translation: '士兵们拼死作战。',
          },
        ],
      },
      {
        pos: '动词',
        meaning: '副词“尚、犹”',
        examples: [
          {
            text: '士卒殊死战。',
            source: '《史记》',
            translation: '士兵们拼死作战。',
          },
        ],
      },
    ],
    isHighFrequency: true,
  },
];
