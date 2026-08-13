import { RawVocabularyEntry } from '../types';

export const SHICI_PART5: RawVocabularyEntry[] = [
  {
    id: 'xiang_mutual',
    word: '相',
    pinyin: ['xiāng', 'xiàng'],
    radical: '木',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词（读xiāng）',
        meaning: '互相，共同',
        examples: [
          { text: '黄发垂髫，并怡然自乐，相命肆农。', source: '《桃花源记》', translation: '老人和小孩都悠闲自乐，互相呼唤耕种。' },
          { text: '路漫漫其修远兮，吾将上下而求索。相与枕藉乎舟中。', source: '《赤壁赋》', translation: '互相靠着躺在船里。' }
        ]
      },
      {
        pos: '副词（读xiāng）',
        meaning: '偏指一方（一方对我或对我方，相当于“我/你/他”）',
        examples: [
          { text: '便可白公媪，及时相遣归。', source: '《孔雀东南飞》', translation: '就可以禀告公婆，及时把我休离送回娘家。' },
          { text: '儿童相见不相识，笑问客从何处来。', source: '《回乡偶书》', translation: '小孩子看见我不认识我，笑着问客人从哪里来。' },
          { text: '谨使臣良奉白璧一双，再拜献大王足下；玉斗一双，再拜奉大将军足下。相如奉璧奏秦王。', source: '《鸿门宴》', translation: '好意相相奉告。' }
        ]
      },
      {
        pos: '名词/动词（读xiàng）',
        meaning: '相貌，容貌 / 辅佐，帮助 / 丞相，宰相 / 辅助盲人的人',
        examples: [
          { text: '宗庙之事，如会同，端章甫，愿为小相焉。', source: '《子路曾皙冉有公西华侍坐》', translation: '宗庙祭祀的事，或者诸侯会盟，穿着礼服戴着礼帽，愿意做一个小赞礼官。' },
          { text: '危而不持，颠而不扶，则将焉用彼相矣？', source: '《季氏将伐颛臾》', translation: '盲人摇晃不扶持，颠仆不援助，那又何必用那些辅助盲人的人呢？' },
          { text: '沛公欲王关中，使子房相。', source: '《鸿门宴》', translation: '沛公想在关中称王，让张良辅佐。' }
        ]
      }
    ],
    examTips: '“相”作偏指单向动作（如“及时相遣归”的“相”指“我”）是高考语法核心考点！'
  },
  {
    id: 'xie_thank',
    word: '谢',
    pinyin: 'xiè',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '感叹，谢恩，感谢 / 辞别，告辞',
        examples: [
          { text: '哙拜谢，起，立而饮之。', source: '《鸿门宴》', translation: '樊哙拜谢恩典，站起来立着喝下了酒。' },
          { text: '侯生视公子色终不变，乃谢曰：“吾固有以具公子。”', source: '《信陵君窃符救赵》', translation: '侯先生看公子神色始终不变，于是道谢并说……' },
          { text: '往昔初阳岁，谢家来贵门。', source: '《孔雀东南飞》', translation: '往年刚开春的时候，辞别娘家来到您这贵府。' }
        ]
      },
      {
        pos: '动词',
        meaning: '道歉，认错，谢罪 / 拒绝，谢绝',
        examples: [
          { text: '旦日不可不蚤自来谢项王。', source: '《鸿门宴》', translation: '明天早晨不能不早点亲自来向项王赔礼谢罪。' },
          { text: '阿母谢媒人：“女子先有誓，老妇岂敢言！”', source: '《孔雀东南飞》', translation: '母亲谢绝媒人说：“小女先前已有誓言，老妇怎么敢应允呢！”' }
        ]
      },
      {
        pos: '动词',
        meaning: '告诫，嘱咐 / 凋落，衰退',
        examples: [
          { text: '多谢后世人，戒之慎勿忘。', source: '《孔雀东南飞》', translation: '多多告诫后世的人，以此为戒千万不要遗忘。' },
          { text: '及花之既谢，亦可市为薪。', source: '《芙蕖》', translation: '等到花朵已经凋谢后，也可以卖掉当柴烧。' }
        ]
      }
    ],
    examTips: '“谢”在古汉语有“谢罪道歉、辞别、谢绝拒绝、告诫嘱咐、花谢”五大义项，务必根据语境精准辨析。'
  },
  {
    id: 'xin_trust',
    word: '信',
    pinyin: ['xìn', 'shēn'],
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/形容词',
        meaning: '信用，诚信 / 忠诚守信的',
        examples: [
          { text: '信义著于四海。', source: '《赤壁之战》', translation: '信用和仁义显著于天下。' },
          { text: '此四君者，皆明智而忠信。', source: '《过秦论》', translation: '这四位君主，都明智且忠诚守信。' }
        ]
      },
      {
        pos: '动词/副词',
        meaning: '相信，信任 / 确实，的确 / 随意，任凭',
        examples: [
          { text: '信而见疑，忠而被谤，能无怨乎？', source: '《屈原列传》', translation: '诚信却被怀疑，忠贞却被诽谤，能没有怨恨吗？' },
          { text: '烟涛微茫信难求。', source: '《梦游天姥吟留别》', translation: '云烟波涛渺茫确实难以寻求。' },
          { text: '低眉信手续续弹，说尽心中无限事。', source: '《琵琶行》', translation: '低着头随手连续地弹奏，弹诉尽心中无尽的心事。' }
        ]
      },
      {
        pos: '动词（读shēn）',
        meaning: '通“伸”，伸展，伸张',
        examples: [
          { text: '孤不度德量力，欲信大义于天下。', source: '《隆中对》', translation: '我没有衡量自己的德行与力量，想要在天下伸张大义。' },
          { text: '尺蠖之屈，以求信也。', source: '《易经》', translation: '尺蠖弯曲身体，是为了求得伸展。' }
        ]
      }
    ],
    examTips: '“信”通“伸”（伸张，读 shēn，如《隆中对》“欲信大义于天下”）是经典通假考点。'
  },
  {
    id: 'xing_rise',
    word: '兴',
    pinyin: ['xīng', 'xìng'],
    radical: '八',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词（读xīng）',
        meaning: '兴起，产生 / 发动，兴办 / 昌盛，兴旺',
        examples: [
          { text: '积土成山，风雨兴焉。', source: '《劝学》', translation: '堆积土石成为高山，风雨就在那里兴起产生。' },
          { text: '抑王兴甲兵，危士臣，构怨于诸侯，然后快于心与？', source: '《齐桓晋文之事》', translation: '还是大王发动军队，使将士臣下陷入危险……' },
          { text: '政通人和，百废俱兴。', source: '《岳阳楼记》', translation: '政事通达，人心和顺，所有废弃的事业都兴办起来了。' }
        ]
      },
      {
        pos: '名词（读xìng）',
        meaning: '兴致，兴趣 / 诗歌表现手法（赋比兴）',
        examples: [
          { text: '遥襟甫畅，逸兴遄飞。', source: '《滕王阁序》', translation: '远大的胸怀刚得到舒展，飘逸的兴致迅速飞扬。' }
        ]
      }
    ]
  },
  {
    id: 'xing_walk',
    word: '行',
    pinyin: ['xíng', 'háng'],
    radical: '彳',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/名词（读xíng）',
        meaning: '行走，远行 / 行为，品行 / 实施，执行',
        examples: [
          { text: '行百里者半九十。', source: '《战国策》', translation: '走一百里路的人把走了九十里当成一半。' },
          { text: '宣子骤谏，公患之，使鉏麑贼之。晨往，寝门辟矣，盛服将朝。尚早，坐而假寐。鉏麑退，叹曰：“不忘恭敬，民之主也。贼民之主，不忠；弃君之命，不信。有一于此，不如死也。”触槐而死。品行端正。', source: '《左传》', translation: '品行良好。' },
          { text: '赵王恐派相如行。', source: '《廉颇蔺相如列传》', translation: '赵王担心，于是派遣蔺相如前往。' }
        ]
      },
      {
        pos: '名词（读háng）',
        meaning: '行列，队伍 / 行业 / 兄弟姐妹排行',
        examples: [
          { text: '悉使芮芮等报之，按行伍次。', source: '《史记》', translation: '按照军队队列次序。' },
          { text: '同舟共济，行第三。', source: '《汉书》', translation: '排行第三。' }
        ]
      }
    ]
  },
  {
    id: 'xing_fortunate',
    word: '幸',
    pinyin: 'xìng',
    radical: '干',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '幸运，幸福 / 幸运地，幸亏 / 企盼，希望（表敬客套词）',
        examples: [
          { text: '则吾斯役之不幸，未若复吾赋不幸之甚也。', source: '《捕蛇者说》', translation: '那么我做这项差事的不幸，还不像恢复我赋税不幸得那么厉害。' },
          { text: '今事有急，故幸来告良。', source: '《鸿门宴》', translation: '如今事情紧急，所以幸亏来告诉我张良。' },
          { text: '幸大王赦之。', source: '《廉颇蔺相如列传》', translation: '希望大王宽恕他。' }
        ]
      },
      {
        pos: '动词',
        meaning: '封建帝王亲临，到达 / 宠爱，封宠',
        examples: [
          { text: '缦立远视，而望幸焉。', source: '《阿房宫赋》', translation: '久久伫立远望，盼望着皇帝亲临宠幸。' },
          { text: '财物无所取，妇女无所幸。', source: '《鸿门宴》', translation: '财物没有索取拿取，妇女没有亲近宠幸。' }
        ]
      }
    ],
    examTips: '“幸”作副词表企盼“希望”（如《廉颇蔺相如列传》“幸大王赦之”）是敬词高频考点。'
  },
  {
    id: 'xiu_repair',
    word: '修',
    pinyin: 'xiū',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词',
        meaning: '长，高',
        examples: [
          { text: '邹忌修八尺有余，而形貌昳丽。', source: '《邹忌讽齐王纳谏》', translation: '邹忌身高八尺多，而且容貌身材光艳美丽。' },
          { text: '盖简桃核修狭者为之。', source: '《核舟记》', translation: '原来是挑选桃核长而狭窄的雕刻而成的。' }
        ]
      },
      {
        pos: '动词',
        meaning: '修饰，整理 / 修筑，修建 / 编写，撰写',
        examples: [
          { text: '修守战之具。', source: '《过秦论》', translation: '修整防守和攻战的器械。' },
          { text: '乃重修岳阳楼，增其旧制。', source: '《岳阳楼记》', translation: '于是重新修缮岳阳楼，扩大它原有的规模。' },
          { text: '严霜识贞木，修短各有期。', source: '《归园田居》', translation: '编写史书。' }
        ]
      },
      {
        pos: '动词',
        meaning: '修养，修行 / 整顿，理顺',
        examples: [
          { text: '修身齐家治国平天下。', source: '《礼记·大学》', translation: '修养身心，管理家庭，治理国家，平定天下。' },
          { text: '内立法度，务耕织，修守战之具。', source: '《过秦论》', translation: '在内建立法律制度，致力于耕作纺织，修整防守攻战的器械。' }
        ]
      }
    ]
  },
  {
    id: 'xu_slow',
    word: '徐',
    pinyin: 'xú',
    radical: '彳',
    isHighFrequency: false,
    senses: [
      {
        pos: '副词/形容词',
        meaning: '缓缓，缓慢地 / 舒缓，从容',
        examples: [
          { text: '徐而察之，则山下皆石穴罅。', source: '《石钟山记》', translation: '慢慢地观察它，发现山脚下全是石头的缝隙与洞穴。' },
          { text: '清风徐来，水波不兴。', source: '《赤壁赋》', translation: '清风缓缓吹拂而来，水面不起波浪。' }
        ]
      }
    ]
  },
  {
    id: 'xu_allow',
    word: '许',
    pinyin: 'xǔ',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '应允，许可，答应 / 期望，许诺',
        examples: [
          { text: '遂许先帝以驱驰。', source: '《出师表》', translation: '于是答应先帝为他奔走效劳。' },
          { text: '潭中鱼可百许头。', source: '《小石潭记》', translation: '潭中的鱼大约有一百来条。' }
        ]
      },
      {
        pos: '数词词尾/代词',
        meaning: '左右，上下，大概（附在数词后） / 这样，这般',
        examples: [
          { text: '先生不知何许人也。', source: '《五柳先生传》', translation: '先生不知道是哪里人。' },
          { text: '问渠那得清如许？为有源头活水来。', source: '《观书有感》', translation: '问那池塘里的水为什么能这样清澈？因为有源头活水源源不断地流进来。' }
        ]
      }
    ]
  },
  {
    id: 'yang_sun',
    word: '阳',
    pinyin: 'yáng',
    radical: '阝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '太阳，日光 / 水之北，山之南（地理阴阳）',
        examples: [
          { text: '斜阳草树，寻常巷陌，人道寄奴曾住。', source: '《永遇乐·京口北固亭怀古》', translation: '斜阳照耀着草木，寻常的小巷，人们说刘裕曾经在这里住过。' },
          { text: '指通豫南，达于汉阴……河阳之北。', source: '《愚公移山》', translation: '黄河北岸（山之南水之北为阳）。' },
          { text: '泰山之阳，汶水西流；其阴，济水东流。', source: '《登泰山记》', translation: '泰山的南面，汶水向西流；它的北面，济水向东流。' }
        ]
      },
      {
        pos: '动词（通“佯”）',
        meaning: '假装，表面上',
        examples: [
          { text: '或曰：阳狂不知所为。', source: '《史记》', translation: '有人说：假装发狂不知道自己在做什么。' }
        ]
      }
    ],
    examTips: '“山南水北为阳，山北水南为阴”（《登泰山记》《愚公移山》）是古代地理文化常识与实词考点！'
  },
  {
    id: 'yao_want',
    word: '要',
    pinyin: ['yào', 'yāo'],
    radical: '覀',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/形容词（读yào）',
        meaning: '腰身（“腰”古字） / 要害，关键，简要',
        examples: [
          { text: '张良出，要项伯。', source: '《鸿门宴》', translation: '张良出来，邀请半路截住项伯。' },
          { text: '增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。要领。', source: '《岳阳楼记》', translation: '要领关键。' }
        ]
      },
      {
        pos: '动词（读yāo）',
        meaning: '通“邀”，邀请 / 拦阻，截击 / 约求，胁迫',
        examples: [
          { text: '张良出，要项伯。', source: '《鸿门宴》', translation: '张良出来，截住邀请项伯。' },
          { text: '便要还家，设酒杀鸡作食。', source: '《桃花源记》', translation: '就邀请他到自己家里，摆酒杀鸡做饭款待。' },
          { text: '要盟也，神不听。', source: '《左传》', translation: '受胁迫订立的盟约，神灵是不会保佑倾听的。' }
        ]
      }
    ],
    examTips: '“要”读 yāo 时通“邀”（《桃花源记》《鸿门宴》）或表“胁迫”（要盟）。'
  },
  {
    id: 'yi_suitable',
    word: '宜',
    pinyin: 'yí',
    radical: '宀',
    isHighFrequency: false,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '合适，适宜 / 应当，应该 / 大概，恐怕',
        examples: [
          { text: '诚宜开张圣听，以光先帝遗德。', source: '《出师表》', translation: '确实应当广泛听取意见，以此发扬光大先帝遗留的美德。' },
          { text: '淡妆浓抹总相宜。', source: '《饮湖上初晴后雨》', translation: '淡雅的妆容浓艳的抹粉都很适宜。' }
        ]
      }
    ]
  },
  {
    id: 'yi_leave',
    word: '遗',
    pinyin: ['yí', 'wèi'],
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/名词（读yí）',
        meaning: '遗留，留下 / 遗失，遗漏 / 遗体，遗物',
        examples: [
          { text: '深追先帝遗诏。', source: '《出师表》', translation: '深切追念先帝遗留的诏书。' },
          { text: '小学而大遗，吾未见其明也。', source: '《师说》', translation: '小的方面学习，大的方面却遗漏丢弃，我看不出他聪明在什么地方。' }
        ]
      },
      {
        pos: '动词（读wèi）',
        meaning: '赠送，给与',
        examples: [
          { text: '齐使者如梁，孙胫以刑徒阴见，说齐使。齐使以为奇，窃载与之齐。太公避纣，居东海之滨。齐使以遗赵王。', source: '《史记》', translation: '赠送给赵王。' },
          { text: '公子闻之，往请，欲厚遗之。', source: '《信陵君窃符救赵》', translation: '信陵君听说后，前往拜访，想要重重地赠送财物给他。' }
        ]
      }
    ],
    examTips: '“遗”读 wèi 时表示“赠送，给与”（《信陵君窃符救赵》“厚遗之”）。'
  },
  {
    id: 'yi_present',
    word: '贻',
    pinyin: 'yí',
    radical: '贝',
    isHighFrequency: false,
    senses: [
      {
        pos: '动词',
        meaning: '赠送，送给 / 遗留，留下',
        examples: [
          { text: '尝贻余核舟一，乃黄黄之所刻。', source: '《核舟记》', translation: '曾经赠送给我一枚桃核雕刻的小船，是王叔远刻制的。' },
          { text: '贻笑大方。', source: '《庄子·秋水》', translation: '遗留笑柄给内行大方之家看（被内行人笑话）。' }
        ]
      }
    ]
  },
  {
    id: 'yi_change',
    word: '易',
    pinyin: 'yì',
    radical: '日',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '交换，更换 / 改变，变易',
        examples: [
          { text: '秦王以十五城请易寡人之璧，可予不？', source: '《廉颇蔺相如列传》', translation: '秦王用十五座城池请求交换我的和氏璧，可以给吗？' },
          { text: '寒暑易节，始一反焉。', source: '《愚公移山》', translation: '冬夏换季，才往返一次。' }
        ]
      },
      {
        pos: '形容词/动词',
        meaning: '容易，平易 / 轻视，轻率',
        examples: [
          { text: '审容膝之易安。', source: '《归去来兮辞》', translation: '明白狭小之处容易使人心安。' },
          { text: '冯唐易老，李广难封。', source: '《滕王阁序》', translation: '冯唐容易衰老，李广难以封侯。' },
          { text: '轻寡易罪。', source: '《左传》', translation: '轻率看轻。' }
        ]
      }
    ]
  },
  {
    id: 'yin_shade',
    word: '阴',
    pinyin: 'yīn',
    radical: '阝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/形容词',
        meaning: '山之北，水之南（地理阴阳） / 阴暗，阴云 / 暗中，暗地里',
        examples: [
          { text: '指通豫南，达于汉阴。', source: '《愚公移山》', translation: '到达汉水南岸（汉阴）。' },
          { text: '朝晖夕阴，气象万千。', source: '《岳阳楼记》', translation: '早晨阳光灿烂傍晚阴云密布，气象万千。' },
          { text: '沛公左司马曹无伤使人言于项羽曰……阴结张良。', source: '《史记》', translation: '暗中联络。' }
        ]
      }
    ]
  },
  {
    id: 'yin_pull',
    word: '引',
    pinyin: 'yǐn',
    radical: '弓',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '拉开弓 / 牵引，拉 / 引导，带领',
        examples: [
          { text: '君子引而不发，跃如也。', source: '《孟子》', translation: '君子拉开弓却不发箭，跃跃欲试的样子。' },
          { text: '丁朱引车，随从百余人。', source: '《史记》', translation: '拉车。' },
          { text: '相如引领西望。', source: '《廉颇蔺相如列传》', translation: '蔺相如伸长脖子向西远望。' }
        ]
      },
      {
        pos: '动词',
        meaning: '退避，后退 / 举起，伸出 / 引用，引证',
        examples: [
          { text: '相如引车避匿。', source: '《廉颇蔺相如列传》', translation: '蔺相如调转马车避让躲藏。' },
          { text: '引壶觞以自酌，眄庭柯以怡颜。', source: '《归去来兮辞》', translation: '端起酒壶酒杯自斟自饮，看着庭院中的树枝面露喜色。' },
          { text: '不宜妄自菲薄，引喻失义。', source: '《出师表》', translation: '不应该随意看轻自己，引用词句不合情理。' }
        ]
      }
    ],
    examTips: '“引车避匿”（调转/退避）、“引喻失义”（引用）、“引壶觞”（端起举起）等义项需熟练掌握。'
  },
  {
    id: 'you_right',
    word: '右',
    pinyin: 'yòu',
    radical: '口',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/形容词',
        meaning: '右边 / 古代以右为尊（位在右者尊高） / 崇尚，重视',
        examples: [
          { text: '位在廉颇之右。', source: '《廉颇蔺相如列传》', translation: '职位在廉颇之上（古代以右为尊）。' },
          { text: '左手倚广衡，右手攀右足。', source: '《核舟记》', translation: '左手靠着横木，右手攀着右脚。' }
        ]
      }
    ]
  },
  {
    id: 'yu_exceed',
    word: '逾',
    pinyin: 'yú',
    radical: '辶',
    isHighFrequency: false,
    senses: [
      {
        pos: '动词',
        meaning: '越过，超过 / 更加',
        examples: [
          { text: '日月逾迈，陵谷沧桑。', source: '《书经》', translation: '时光流逝越过。' },
          { text: '年且九十，逾气不衰。', source: '《史记》', translation: '年纪将近九十，精神气概更加不衰衰退。' }
        ]
      }
    ]
  },
  {
    id: 'yu_prison',
    word: '狱',
    pinyin: 'yù',
    radical: '犭',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '诉讼案件，官司 / 监狱，牢房',
        examples: [
          { text: '小大之狱，虽不能察，必以情。', source: '《曹刿论战》', translation: '大大小小的诉讼案件，即使不能一一明察，也一定按照实情处理。' },
          { text: '天保下狱，忠臣受戮。', source: '《汉书》', translation: '关押进监狱。' }
        ]
      }
    ],
    examTips: '“小大之狱”（诉讼案件、官司，出自《曹刿论战》）古今异义考查极多。'
  },
  {
    id: 'zai_again',
    word: '再',
    pinyin: 'zài',
    radical: '冂',
    isHighFrequency: true,
    senses: [
      {
        pos: '数词/副词',
        meaning: '两次，第二次（古义专指两次，非“又一次”）',
        examples: [
          { text: '一鼓作气，再而衰，三而竭。', source: '《曹刿论战》', translation: '第一次击鼓振作士气，第二次击鼓士气衰退，第三次击鼓士气耗尽。' },
          { text: '谨使臣良奉白璧一双，再拜献大王足下。', source: '《鸿门宴》', translation: '恭敬地让臣下张良献上白璧一双，拜两次献给大王足下。' }
        ]
      }
    ],
    examTips: '“再”在文言文中古义专指“两次、第二次”（如《曹刿论战》“再而衰”，《鸿门宴》“再拜”）。'
  },
  {
    id: 'zao_build',
    word: '造',
    pinyin: 'zào',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '到达，去到 / 制作，建造 / 成就，造就',
        examples: [
          { text: '径造庐访焉。', source: '《世说新语》', translation: '直接到达房舍去拜访他。' },
          { text: '造化钟神秀，阴阳割昏晓。', source: '《望岳》', translation: '大自然的创造化育聚集了神圣秀丽，山南山北分割了黄昏与早晨。' }
        ]
      }
    ]
  },
  {
    id: 'zhi_know',
    word: '知',
    pinyin: ['zhī', 'zhì'],
    radical: '矢',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/名词（读zhī）',
        meaning: '知道，了解，懂得 / 知识，知晓 / 主管，知晓',
        examples: [
          { text: '人非生而知之者，孰能无惑？', source: '《师说》', translation: '人不是生下来就懂得道理的，谁能没有困惑呢？' },
          { text: '知彼知己，百战不殆。', source: '《孙子兵法》', translation: '了解对手也了解自己，百战也不会危险。' }
        ]
      },
      {
        pos: '名词/形容词（读zhì）',
        meaning: '通“智”，智慧，明智',
        examples: [
          { text: '君子博学而日参省乎己，则知明而行无过矣。', source: '《劝学》', translation: '君子广博地学习并且每天检验反省自己，就会智慧明达而且行为没有过错了。' },
          { text: '孰为汝多知乎？', source: '《两小儿辩日》', translation: '谁说你知识渊博有智慧呢？' }
        ]
      }
    ],
    examTips: '“知”通“智”（智慧、明智，如《劝学》《两小儿辩日》）是通假字高频考点。'
  },
  {
    id: 'zhi_place',
    word: '置',
    pinyin: 'zhì',
    radical: '罒',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '放置，安放 / 设立，设置 / 购置，买',
        examples: [
          { text: '项王则受璧，置之坐上。', source: '《鸿门宴》', translation: '项王于是收下白璧，安放在座位上。' },
          { text: '郑人有欲买履者，先自度其足，而置之其坐。', source: '《韩非子》', translation: '把量好的尺寸放在座位上。' },
          { text: '置酒高堂，宴请宾客。', source: '《史记》', translation: '摆设酒席。' }
        ]
      },
      {
        pos: '动词',
        meaning: '放弃，搁置，放下',
        examples: [
          { text: '沛公则置车骑，脱身独骑。', source: '《鸿门宴》', translation: '沛公于是丢下随从的车马，脱身独自骑马。' }
        ]
      }
    ]
  },
  {
    id: 'zhi_cause',
    word: '致',
    pinyin: 'zhì',
    radical: '至',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '送到，招引 / 获得，取得 / 达到，表达',
        examples: [
          { text: '家贫，无从致书以观，每假借于藏书之家。', source: '《送东阳马生序》', translation: '家里贫穷，没有办法得到书来阅读，常常向藏书的人家借阅。' },
          { text: '不积跬步，无以至千里；不积小流，无以成江海。致千里。', source: '《劝学》', translation: '达到千里。' },
          { text: '听妇前致词，三男邺城戍。', source: '《石壕吏》', translation: '听老妇人上前倾诉说话，三个儿子去邺城戍守。' }
        ]
      },
      {
        pos: '动词',
        meaning: '招致，导致，引起',
        examples: [
          { text: '致万乘之势，序八州而朝同列。', source: '《过秦论》', translation: '达到了/招致了万乘大国的势头。' },
          { text: '女行无偏斜，何罚忤君宜？致此生离别。', source: '《孔雀东南飞》', translation: '导致了这次生离死别。' }
        ]
      }
    ]
  },
  {
    id: 'zhi_substance',
    word: '质',
    pinyin: ['zhì', 'zhí'],
    radical: '贝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词（读zhì）',
        meaning: '人质，抵押品 / 做人质，抵押',
        examples: [
          { text: '于是为长安君约车百乘，质于齐，齐兵乃出。', source: '《触龙说赵太后》', translation: '于是为长安君准备了一百辆战车，去齐国做人质，齐国的军队才出动。' }
        ]
      },
      {
        pos: '名词',
        meaning: '资质，质地 / 问答，询问',
        examples: [
          { text: '余立侍左右，援疑质理。', source: '《送东阳马生序》', translation: '我站在旁边侍奉，提出疑问询问道理。' }
        ]
      }
    ],
    examTips: '“质于齐”（做人质，出自《触龙说赵太后》）与“援疑质理”（询问，出自《送东阳马生序》）。'
  },
  {
    id: 'zhi_govern',
    word: '治',
    pinyin: 'zhì',
    radical: '氵',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/形容词',
        meaning: '治理，管理 / 惩办，处治 / 安定，太平（与“乱”相对）',
        examples: [
          { text: '同心协力，同舟共济，治国安邦。', source: '《出师表》', translation: '治理国家。' },
          { text: '不效则治臣之罪，以告先帝之灵。', source: '《出师表》', translation: '如果没有成效就惩处我的罪过，告慰先帝的英灵。' },
          { text: '受命于旦夕，治乱安危之机也。', source: '《史记》', translation: '天下安定与动乱的关键。' }
        ]
      }
    ]
  },
  {
    id: 'zhu_all',
    word: '诸',
    pinyin: 'zhū',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词',
        meaning: '各个，众多，众',
        examples: [
          { text: '赵王与大夫掘议曰：“秦愿以十五城易寡人之璧，可予不？”诸大夫皆曰……', source: '《廉颇蔺相如列传》', translation: '各位大夫都说……' },
          { text: '潘岳《悼亡诗》：“微霜降诸茹。”', source: '《晋书》', translation: '众多的蔬菜植物。' }
        ]
      },
      {
        pos: '兼词',
        meaning: '兼词：相当于“之于”或“之乎”',
        examples: [
          { text: '投诸渤海之尾，隐土之北。', source: '《愚公移山》', translation: '把它（土石）抛到渤海的边上（投之于渤海之尾）。' },
          { text: '王尝语庄子：“告诸人乎？”', source: '《孟子》', translation: '把这告诉别人吗？（告之乎）' }
        ]
      }
    ],
    examTips: '“诸”作兼词相当于“之于”（如《愚公移山》“投诸渤海之尾”）或“之乎”是高考虚词与实词交汇考点！'
  },
  {
    id: 'zu_die',
    word: '卒',
    pinyin: ['zú', 'cù'],
    radical: '十',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词（读zú）',
        meaning: '步兵，士兵 / 死亡，去世 / 完毕，终尽',
        examples: [
          { text: '率疲弊之卒，将数百之众。', source: '《过秦论》', translation: '率领疲惫弱小的士兵，指挥数百人的队伍。' },
          { text: '年八十余，卒于家。', source: '《史记》', translation: '八十多岁时，在家中去世。' },
          { text: '人死，则卒岁。', source: '《荀子》', translation: '度过一年。' }
        ]
      },
      {
        pos: '副词（读zú）',
        meaning: '终于，最终',
        examples: [
          { text: '卒相如广成传舍。卒相如相与为庸。卒使相如如秦。', source: '《廉颇蔺相如列传》', translation: '终于让蔺相如带着和氏璧出使秦国。' },
          { text: '卒天下之大乱。', source: '《六国论》', translation: '最终导致天下的剧烈动荡。' }
        ]
      },
      {
        pos: '副词/形容词（读cù）',
        meaning: '通“猝”，仓促，急促，突然',
        examples: [
          { text: '五万兵难卒合。', source: '《赤壁之战》', translation: '五万军队难以仓促集合起来。' },
          { text: '卒起不意，尽失其度。', source: '《荆轲刺秦王》', translation: '突然发生意料不到变故，大家都失去了常态。' }
        ]
      }
    ],
    examTips: '“卒”读 cù 时通“猝”（突然、仓促，如《赤壁之战》《荆轲刺秦王》）；读 zú 时表“最终”或“死亡/士兵”。'
  },
  {
    id: 'zou_run',
    word: '走',
    pinyin: 'zǒu',
    radical: '走',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '跑，快跑（古义专指“跑”，非慢步走） / 逃跑，逃奔',
        examples: [
          { text: '夸父与日逐走。', source: '《夸父逐日》', translation: '夸父与太阳赛跑。' },
          { text: '弃甲曳兵而走。', source: '《寡人之于国也》', translation: '丢下铠甲拖着兵器逃跑。' },
          { text: '双兔傍地走，安能辨我是雄雌？', source: '《木兰诗》', translation: '两只兔子贴着地面奔跑，怎么能辨别哪只是雄哪只是雌呢？' }
        ]
      }
    ],
    examTips: '“走”古义专指“跑/逃跑”（如《寡人之于国也》《木兰诗》），今义为步行。'
  },
  {
    id: 'zuo_seat',
    word: '坐',
    pinyin: 'zuò',
    radical: '土',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '席地而坐 / 坐落，位于 / 因……犯罪（犯罪受罚）',
        examples: [
          { text: '项王、项伯东向坐；亚父南向坐。', source: '《鸿门宴》', translation: '项王、项伯面向东坐着；亚父范增面向南坐着。' },
          { text: '族秦者秦也，非天下也。坐法死者甚众。', source: '《史记》', translation: '因为触犯法律被处死的人非常多。' }
        ]
      },
      {
        pos: '介词/连词',
        meaning: '因为，由于',
        examples: [
          { text: '停车坐爱枫林晚，霜叶红于二月花。', source: '《山行》', translation: '停下车来是因为喜爱傍晚枫林的美景，被打霜的枫叶比二月的花朵还要红艳。' }
        ]
      }
    ],
    examTips: '“坐”作介词“因为”（《山行》“坐爱枫林晚”）与“因……犯罪受诛”（《史记》）是高考重点考查点。'
  },
  {
    id: 'zhǎo_yá',
    word: '爪牙',
    pinyin: 'zhǎo yá',
    senses: [
      {
        pos: '名词',
        meaning: '古义：比喻得力的武士、卫士或助手（褒义/中性） / 今义：坏人的帮凶（贬义）',
        examples: [
          { text: '祈父，予王之爪牙。', source: '《诗经》', translation: '祈父啊，你是周王得力的勇士卫士。' }
        ]
      }
    ]
  },
  {
    id: 'xí_juǎn',
    word: '席卷',
    pinyin: 'xí juǎn',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词短语（状中结构）',
        meaning: '像收起席子一样把东西卷走（比喻全面占领或包揽）',
        examples: [
          { text: '有席卷天下，包举宇内，囊括四海之意。', source: '《过秦论》', translation: '有像收起席子一样卷怀天下、包揽天地、囊括四海的宏大志向。' }
        ]
      }
    ]
  },
  {
    id: 'xiǎng_yìng',
    word: '响应',
    pinyin: 'xiǎng yìng',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词短语（状中结构）',
        meaning: '像回声一样应答支持',
        examples: [
          { text: '天下云集响应，赢粮而景从。', source: '《过秦论》', translation: '天下英雄像云彩一样聚集，像回声一样迅速应答支持，担着粮食像影子一样跟随。' }
        ]
      }
    ]
  },
  {
    id: 'zuǒ_yòu',
    word: '左右',
    pinyin: 'zuǒ yòu',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '左边和右边 / 身边侍奉的近臣、随从',
        examples: [
          { text: '项王顾召历史左右曰：“此何人也？”', source: '《鸿门宴》', translation: '项王回头询问身边侍奉的近臣随从：“这是什么人？”' },
          { text: '左右皆哭，莫能仰视。', source: '《荆轲刺秦王》', translation: '两旁的随从侍卫都哭了，没有人能抬起头仰望。' }
        ]
      }
    ]
  },
  {
    id: 'zūn_respect',
    word: '尊',
    pinyin: 'zūn',
    radical: '寸',
    senses: [
      {
        pos: '形容词/动词/名词',
        meaning: '尊贵，高尚 / 尊敬，尊重 / 酒器（通“樽”）',
        examples: [
          { text: '位尊而无功，奉厚而无劳。', source: '《触龙说赵太后》', translation: '地位尊贵却没有功勋，俸禄优厚却没有劳绩。' },
          { text: '人生如梦，一尊还酹江月。', source: '《念奴娇·赤壁怀古》', translation: '人生犹如一场大梦，洒一杯酒奠祭江中的明月。' }
        ]
      }
    ]
  },
  {
    id: 'ji_lv',
    word: '羁旅',
    pinyin: 'jī lǚ',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词短语',
        meaning: '客居异乡、异乡作客的寄居状态（羁：系绊；旅：寄居）',
        examples: [
          { text: '羁旅之臣，不敢当重任。', source: '《左传》', translation: '寄居异乡的臣子，不敢承担重大使命。' }
        ]
      }
    ]
  }
];
