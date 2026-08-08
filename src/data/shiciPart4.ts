import { VocabularyEntry } from '../types';

export const SHICI_PART4: VocabularyEntry[] = [
  {
    id: 'wang_hope',
    word: '望',
    pinyin: 'wàng',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '月',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '远望，看 / 期望，希望 / 责怪，怨恨',
        examples: [
          { text: '吾尝跂而望矣，不如登高之博见也。', source: '《劝学》', translation: '我曾经提起脚后跟远望，不如登到高处看得广阔。' },
          { text: '日夜望将军至，岂敢反乎？', source: '《鸿门宴》', translation: '日夜盼望将军到来，怎么敢反叛呢？' },
          { text: '若不屈法，则无以惩恶。若不忍小忿，则有望于大伦。', source: '《左传》', translation: '令人抱怨责怪。' }
        ]
      },
      {
        pos: '名词',
        meaning: '农历每月十五日（月圆） / 名望，声望',
        examples: [
          { text: '壬戌之秋，七月既望。', source: '《赤壁赋》', translation: '壬戌年的秋天，七月十六日（既望：十六日）。' },
          { text: '德隆望尊，门人弟子填其室。', source: '《送东阳马生序》', translation: '道德高尚声望尊崇，门人弟子挤满了他的房间。' }
        ]
      }
    ],
    examTips: '“望”在农历中特指“十五日”（既望为十六日）；名望；动词“怨恨/责怪”。'
  },
  {
    id: 'wei_danger',
    word: '危',
    pinyin: 'wēi',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '卩',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词',
        meaning: '高，高耸 / 正视，端正 / 危险，危急',
        examples: [
          { text: '危楼高百尺，手可摘星辰。', source: '《夜宿山寺》', translation: '高耸的大楼高百尺，伸手可以摘取星辰。' },
          { text: '正襟危坐而问客曰。', source: '《赤壁赋》', translation: '整理好衣襟端正地坐着问客人。' },
          { text: '邦有道，危言危行；邦无道，危行言孙。', source: '《论语》', translation: '国家有道时，言语正直行为正直。' },
          { text: 'left困危急，无所不至。', source: '《出师表》', translation: '奉命于危难之间。' }
        ]
      }
    ],
    examTips: '“危”古义常表“高”（危楼、危峰）及“端正”（危坐、危言危行），非仅指危险。'
  },
  {
    id: 'wei_micro',
    word: '微',
    pinyin: 'wēi',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '彳',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '细微，微小 / 卑贱，地位低微 / 隐蔽，不明显 / 稍微，略微',
        examples: [
          { text: '微风鼓浪，水石相搏。', source: '《石钟山记》', translation: '微风掀起波浪，水与石头相互撞击。' },
          { text: '出身微贱，屡建奇功。', source: '《史记》', translation: '出身地位低微……' },
          { text: '见其发矢十中八九，但微颔之。', source: '《卖油翁》', translation: '看见他射出的箭十发中八九发，只是稍微对他点头。' }
        ]
      },
      {
        pos: '介词/动词',
        meaning: '（如果）没有（表假设否定） / 精妙，隐晦',
        examples: [
          { text: '微斯人，吾谁与归？', source: '《岳阳楼记》', translation: '如果没有这种人，我同谁一道呢？' },
          { text: '微夫人之力不及此。', source: '《烛之武退秦师》', translation: '如果没有那个人的力量我到不了这个地步。' }
        ]
      }
    ],
    examTips: '“微”作否定介词表“如果没有”（微斯人、微夫人之力）是高考绝对核心重点！'
  },
  {
    id: 'xi_all',
    word: '悉',
    pinyin: 'xī',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '心',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '详尽，知道，了解',
        examples: [
          { text: '悉使芮芮等报之。', source: '《史记》', translation: '详尽地知道了解。' },
          { text: '事无大小，悉以咨之。', source: '《出师表》', translation: '事情无论大小，全都要询问他们。' }
        ]
      },
      {
        pos: '副词',
        meaning: '全都，全，尽',
        examples: [
          { text: '男女衣着，悉如外人。', source: '《桃花源记》', translation: '男子妇女的衣着，全都像桃花源外面的人一样。' },
          { text: '悉埋于地，解其牵绊。', source: '《促织》', translation: '全都埋在地下。' }
        ]
      }
    ],
    examTips: '“悉”作副词表“全都/全/尽”（悉如外人、悉以咨之）。'
  },
  {
    id: 'xiang_mutual',
    word: '相',
    pinyin: ['xiāng', 'xiàng'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '目',
    isHighFrequency: true,
    senses: [
      {
        pos: '副词 [xiāng]',
        meaning: '相互，亲自 / 偏指一方（动作偏指一方，相当于“我/你/他”）',
        examples: [
          { text: '黄发垂髫，并怡然自乐。相命肆农耕。', source: '《桃花源记》', translation: '相互呼唤从事农耕。' },
          { text: '及时相遣归。', source: '《孔雀东南飞》', translation: '及时把我休弃遣送回家（相：偏指我）。' },
          { text: '杂然相许。', source: '《愚公移山》', translation: '大家纷杂地赞同他（相：偏指他）。' }
        ]
      },
      {
        pos: '名词/动词 [xiàng]',
        meaning: '宰相，相国 / 辅佐，帮助 / 观察，看（相貌）',
        examples: [
          { text: '沛公欲王关中，使子房相国。', source: '《鸿门宴》', translation: '让张良辅助作相国。' },
          { text: '王侯将相宁有种乎！', source: '《陈涉世家》', translation: '王侯将相难道有天生的贵种吗！' },
          { text: '察焉而相之。', source: '《史记》', translation: '仔细观察看他。' }
        ]
      }
    ],
    examTips: '“相”作副词偏指一方（及时相遣归、嬉戏莫相忘）；[xiàng]作宰相、辅佐、观察。'
  },
  {
    id: 'xie_thank',
    word: '谢',
    pinyin: 'xiè',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '道歉，认错，谢罪 / 告辞，辞别 / 感谢 / 拒绝，推辞 / 告诉 / 凋落，衰退',
        examples: [
          { text: '旦日不可不蚤自来谢项王。', source: '《鸿门宴》', translation: '明天早晨不可以不早早亲自来向项王道歉谢罪。' },
          { text: '侯生视公子色终不变，乃谢曰：“公子姐矣！”', source: '《信陵君窃符救赵》', translation: '侯生看公子面色始终不改变，于是致谢道歉说……' },
          { text: '阿母谢媒人：“女子先有誓，老妇岂敢言！”', source: '《孔雀东南飞》', translation: '母亲推辞拒绝媒人……' },
          { text: '多谢后世人，戒之慎勿忘。', source: '《孔雀东南飞》', translation: '多加劝告告诉后世的人……' },
          { text: '及花之既谢，亦可收敛供焚。', source: '《芙蕖》', translation: '等到花朵已经凋落……' }
        ]
      }
    ],
    examTips: '“谢”在古文中多考“谢罪/道歉”（蚤来谢项王）、“推辞/拒绝”（谢媒人）、“告诉/劝告”（多谢后世人）。'
  },
  {
    id: 'xin_trust',
    word: '信',
    pinyin: 'xìn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '亻',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/名词',
        meaning: '诚信，讲信用 / 信用，凭证（信物） / 信件，使者',
        examples: [
          { text: '此四君者，皆明智而忠信。', source: '《过秦论》', translation: '这四位君主，都明智且忠诚讲信用。' },
          { text: '自可断来信，徐徐更谓之。', source: '《孔雀东南飞》', translation: '自然可以回绝前来的媒人使者……' }
        ]
      },
      {
        pos: '动词/副词',
        meaning: '相信，信任 / 随意，任凭 / 确实，的确',
        examples: [
          { text: '信而见疑，忠而被谤。', source: '《屈原列传》', translation: '诚信却被怀疑……' },
          { text: '低眉信手续续弹，说尽心中无限事。', source: '《琵琶行》', translation: '低着头随手连续地弹奏……' },
          { text: '烟涛微茫信难求。', source: '《梦游天姥吟留别》', translation: '云烟波涛微茫确实难以寻求。' }
        ]
      },
      {
        pos: '通假字',
        meaning: '通“伸”，伸张，舒展',
        examples: [
          { text: '欲信大义于天下。', source: '《隆中对》', translation: '想要在天下伸张大义。' }
        ]
      }
    ],
    examTips: '“信”作使者（断来信）；作副词“确实/的确”（信难求）；通“伸”（欲信大义）。'
  },
  {
    id: 'xing_rise',
    word: '兴',
    pinyin: ['xīng', 'xìng'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '八',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [xīng]',
        meaning: '兴起，发动，兴建 / 发生，使……兴盛',
        examples: [
          { text: '积土成山，风雨兴焉。', source: '《劝学》', translation: '堆积泥土成为高山，风雨就在这里兴起。' },
          { text: '政通人和，百废俱兴。', source: '《岳阳楼记》', translation: '政事通达百姓和顺，各种荒废了的事业全都兴办起来。' }
        ]
      },
      {
        pos: '名词 [xìng]',
        meaning: '兴致，兴趣',
        examples: [
          { text: '遥襟甫畅，逸兴遄飞。', source: '《滕王阁序》', translation: '远大的胸怀刚得到舒展，飘逸的兴致迅速飞扬起来。' }
        ]
      }
    ],
    examTips: '“兴”读[xīng]作动词（百废俱兴、风雨兴焉）与[xìng]作名词兴致（逸兴遄飞）。'
  },
  {
    id: 'xing_walk',
    word: '行',
    pinyin: ['xíng', 'háng'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '行',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/名词 [xíng]',
        meaning: '行走，步行 / 运行 / 品行，行为 / 实行，从事',
        examples: [
          { text: '行衢道者不至。', source: '《劝学》', translation: '在岔路上行走的人到达不了目的地。' },
          { text: '君子博学而日参省乎己，则知明而行无过矣。', source: '《劝学》', translation: '……行为就没有过错了。' }
        ]
      },
      {
        pos: '名词 [háng]',
        meaning: '行列，队伍 / 职业，行当',
        examples: [
          { text: '悉使芮芮等报之。', source: '《史记》', translation: '行列队伍。' },
          { text: '避席畏师不肯靠近。', source: '《师说》', translation: '行业同行。' }
        ]
      }
    ],
    examTips: '“行”作名词[xíng]品行行为（行无过矣），[háng]行列队伍。'
  },
  {
    id: 'xing_fortunate',
    word: '幸',
    pinyin: 'xìng',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '干',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '幸运，幸亏，幸而 / 恭敬地希望（敬词：幸勿推辞、幸即到来）',
        examples: [
          { text: '则吾斯役之不幸，未若复吾赋之不幸之甚也。', source: '《捕蛇者说》', translation: '那么我做这差役的不幸，还不如恢复我赋税的不幸厉害呢。' },
          { text: '幸可广问讯，殷勤于赵母。', source: '《孔雀东南飞》', translation: '希望您可以多加关照打听……' },
          { text: '幸大王赦之。', source: '《廉颇蔺相如列传》', translation: '希望大王赦免他。' }
        ]
      },
      {
        pos: '动词',
        meaning: '宠爱，宠幸 / 皇帝亲临，到达',
        examples: [
          { text: '妇女无所幸，财物无所取。', source: '《鸿门宴》', translation: '妇女没有被宠幸的，财物没有拿取过的。' },
          { text: '缦立远视，而望幸焉。', source: '《阿房宫赋》', translation: '久久站立向远处张望，而盼望皇帝的亲临降临。' }
        ]
      }
    ],
    examTips: '“幸”作敬词副词表“希望/幸而”（幸大王赦之）；动词表帝王亲临（望幸焉）。'
  },
  {
    id: 'xu_allow',
    word: '许',
    pinyin: 'xǔ',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '讠',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '应允，许诺，答应 / 赞同，赞许',
        examples: [
          { text: '安陵君许诺。', source: '《唐雎不辱使命》', translation: '安陵君应允许诺。' },
          { text: '杂然相许。', source: '《愚公移山》', translation: '大家纷杂地赞同他。' }
        ]
      },
      {
        pos: '数词/代词/地方',
        meaning: '左右，上下（表约数，如“百许人”） / 处，地方（如“何许人”）',
        examples: [
          { text: '潭中鱼可百许头，皆若空游无所依。', source: '《小石潭记》', translation: '石潭里的鱼大约有一百头左右……' },
          { text: '先生不知何许人也。', source: '《五柳先生传》', translation: '先生不知道是哪里（什么地方）的人。' }
        ]
      }
    ],
    examTips: '“许”附于数词后表约数“左右/上下”（百许头）；代词表地方（何许人）。'
  },
  {
    id: 'xu_pity',
    word: '恤',
    pinyin: 'xù',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '忄',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '顾念，忧虑，关心 / 救济，抚恤',
        examples: [
          { text: '司马春衫谓何？恤孤念寡。', source: '《史记》', translation: '抚恤救济孤儿寡妇。' },
          { text: '国胡以相恤？', source: '《论积贮疏》', translation: '国家用什么来相互救济恤抚呢？' }
        ]
      }
    ],
    examTips: '“恤”作动词“顾念/救济/抚恤”（国胡以相恤）。'
  },
  {
    id: 'ya_elegant',
    word: '雅',
    pinyin: 'yǎ',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '隹',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '高雅，正统 / 平素，平时，素来（雅不愿、雅善）',
        examples: [
          { text: '察纳雅言，深追先帝遗诏。', source: '《出师表》', translation: '审察采纳高雅正确的言论，深切追念先帝遗诏。' },
          { text: '安帝雅闻张衡有才艺。', source: '《张衡传》', translation: '汉安帝平素听说张衡有才干技艺。' }
        ]
      }
    ],
    examTips: '“雅”作副词表“平素/平时/素来”（雅闻张衡有才艺）是极其特殊的考查点！'
  },
  {
    id: 'yan_strict',
    word: '严',
    pinyin: 'yán',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '口',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/动词/名词',
        meaning: '严格，严厉 / 紧急，急迫 / 尊敬 / 父（尊称“严君”）',
        examples: [
          { text: '严威俨恪。', source: '《廉颇蔺相如列传》', translation: '尊严威严。' },
          { text: '家君作宰，路过名郡；童子何知，躬逢胜况。', source: '《滕王阁序》', translation: '父亲（严君/家君）做县令。' }
        ]
      }
    ],
    examTips: '“严”在古代常尊称父亲（严君、家严）。'
  },
  {
    id: 'yan_dislike',
    word: '厌',
    pinyin: 'yàn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '厂',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '满足（古义“贪得无厌”） / 厌恶，讨厌 / 压制（同“压”）',
        examples: [
          { text: '秦之欲无厌。', source: '《六国论》', translation: '秦国的欲望没有满足的时候（厌：满足）。' },
          { text: '学而不厌，诲人不倦。', source: '《论语》', translation: '学习不感到满足，教导人不知疲倦。' }
        ]
      }
    ],
    examTips: '“厌”古义最核心指“满足”（学而不厌、贪得无厌），非现代讨厌。'
  },
  {
    id: 'yao_demand',
    word: '要',
    pinyin: ['yāo', 'yào'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '女',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [yāo]',
        meaning: '通“邀”，邀请，约请 / 强求，胁迫 / 拦截',
        examples: [
          { text: '便要还家，设酒杀鸡作食。', source: '《桃花源记》', translation: '就邀请渔人回到自己家里，摆酒杀鸡做饭食。' },
          { text: '张良出，要项伯。', source: '《鸿门宴》', translation: '张良出来，邀请项伯。' },
          { text: '要盟也，神不听。', source: '《左传》', translation: '胁迫订立的盟约，神灵是不听信的。' }
        ]
      },
      {
        pos: '名词/形容词 [yào]',
        meaning: '腰（同“腰”） / 要害，要领，重要',
        examples: [
          { text: '支折要痛。', source: '《史记》', translation: '腰部疼痛。' },
          { text: '增兵据要，给贡如常。', source: '《赤壁之战》', translation: '增加士兵据守要害地方。' }
        ]
      }
    ],
    examTips: '“要”读[yāo]通“邀”表“邀请”（便要还家、要项伯）；表“强求/胁迫”（要盟）。'
  },
  {
    id: 'yi_suitable',
    word: '宜',
    pinyin: 'yí',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '宀',
    isHighFrequency: true,
    senses: [
      {
        pos: '形容词/副词',
        meaning: '适宜，合适 / 应当，应该 / 大概，大约',
        examples: [
          { text: '淡妆浓抹总相宜。', source: '《饮湖上初晴后雨》', translation: '淡雅地化妆浓艳地打扮全都适宜合适。' },
          { text: '宜乎众矣！', source: '《爱莲说》', translation: '应当是很多了！' },
          { text: '诚宜开张圣听，以光先帝遗德。', source: '《出师表》', translation: '确实应该广泛听取正确的言论，发扬光大先帝遗留的美德。' }
        ]
      }
    ],
    examTips: '“宜”作副词“应当/应该”（诚宜开张圣听）。'
  },
  {
    id: 'yi_wei',
    word: '遗',
    pinyin: ['yí', 'wèi'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '辶',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/形容词 [yí]',
        meaning: '遗失，遗漏，丢失 / 遗留，留下 / 忽略，抛弃',
        examples: [
          { text: '深追先帝遗诏。', source: '《出师表》', translation: '深切追念先帝遗留下的诏书。' },
          { text: '小学而大遗，吾未见其明也。', source: '《师说》', translation: '小的方面学习而大的方面放弃忽略，我看不出他聪明在哪里。' }
        ]
      },
      {
        pos: '动词 [wèi]',
        meaning: '赠送，给',
        examples: [
          { text: '是以先帝简拔以遗陛下。', source: '《出师表》', translation: '因此先帝挑选拔萃的人赠送留给陛下。' },
          { text: '公子闻之，往请，欲厚遗之。', source: '《信陵君窃符救赵》', translation: '信陵君听说后前往拜访，想要优厚地赠送财物给他。' }
        ]
      }
    ],
    examTips: '“遗”读[wèi]作动词表“赠送/给”（以遗陛下、厚遗之）是高频必考题！'
  },
  {
    id: 'yi_change',
    word: '易',
    pinyin: 'yì',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '日',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '改变，变更 / 交换，换取 / 轻视，看不起（轻易）',
        examples: [
          { text: '寒暑易节，始一反焉。', source: '《愚公移山》', translation: '冬夏季节改变更替，才往返一次。' },
          { text: '秦王以十五城请易寡人之璧。', source: '《廉颇蔺相如列传》', translation: '秦王用十五座城池请求交换我这块和氏璧。' },
          { text: '以乱易整，不武。', source: '《烛之武退秦师》', translation: '用混乱代替整齐，是不符合武德的。' },
          { text: '强国请服，弱国入朝。轻易相视。', source: '《过秦论》', translation: '轻视看不起。' }
        ]
      },
      {
        pos: '形容词',
        meaning: '容易，简单',
        examples: [
          { text: '蜀道之难，难于上青天！易如反掌。', source: '《蜀道难》', translation: '容易简单。' }
        ]
      }
    ],
    examTips: '“易”作动词“改变”（寒暑易节）、“交换”（以城易璧）、“轻视”。'
  },
  {
    id: 'yin_draw',
    word: '引',
    pinyin: 'yǐn',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '弓',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '拉开弓 / 牵引，拉 / 伸长，伸出 / 带领，率领 / 避开，退避',
        examples: [
          { text: '君子引而不发，跃如也。', source: '《孟子》', translation: '君子拉开弓却不射出箭，跃跃欲试的样子。' },
          { text: '引壶觞以自酌，眄庭柯以怡颜。', source: '《归去来兮辞》', translation: '端起酒壶酒杯自斟自饮，看着庭院的树枝露出怡然脸色。' },
          { text: '相如引车避匿。', source: '《廉颇蔺相如列传》', translation: '蔺相如拉回车马避让躲藏。' },
          { text: '乃引其匕首提秦王。', source: '《荆轲刺秦王》', translation: '于是举起拿出他的匕首投击秦王。' }
        ]
      }
    ],
    examTips: '“引”作动词“退避/避让”（引车避匿）、“举起/拿出”（引其匕首）。'
  },
  {
    id: 'wang_wu',
    word: '亡',
    pinyin: ['wáng', 'wú'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '亠',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词/形容词 [wáng]',
        meaning: '逃跑，逃亡 / 灭亡，死亡，丢失',
        examples: [
          { text: '今亡亦死，举大计亦死，等死，死国可乎？', source: '《陈涉世家》', translation: '现在逃跑也是死，起义做大事也是死，同样是死，为国事而死可以吗？' },
          { text: '秦无亡矢遗镞之费。', source: '《过秦论》', translation: '秦国没有损失一根箭矢一个箭头损耗费用。' },
          { text: '追亡逐北，伏尸百万。', source: '《过秦论》', translation: '追赶逃跑的败兵……' }
        ]
      },
      {
        pos: '通假字 [wú]',
        meaning: '通“无”，没有',
        examples: [
          { text: '河曲智叟亡以应。', source: '《愚公移山》', translation: '河曲智叟没有话用来回答。' },
          { text: '生之有时而用之亡度，则物力必屈。', source: '《论积贮疏》', translation: '生产财物有季节限制而消费财物没有限度，那么物力必定消耗殆尽。' }
        ]
      }
    ],
    examTips: '“亡”通“无”[wú]表没有（亡以应）；[wáng]作逃跑（今亡亦死）与败兵（追亡）。'
  },
  {
    id: 'zhi_zhi',
    word: '知',
    pinyin: ['zhī', 'zhì'],
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '矢',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词 [zhī]',
        meaning: '知道，了解，懂得 / 掌管，主持（如“知府”）',
        examples: [
          { text: '草木有本心，何求美人折？知我者谓我心忧，不知我者谓我何求。', source: '《诗经》', translation: '了解我的人说我心里忧愁……' }
        ]
      },
      {
        pos: '通假字/名词 [zhì]',
        meaning: '通“智”，智慧，聪明 / 知觉，感觉',
        examples: [
          { text: '君子博学而日参省乎己，则知明而行无过矣。', source: '《劝学》', translation: '君子广博学习且每天对自己检验反省，那么智慧明达行为就没有过错了。' },
          { text: '孰为汝多知乎？', source: '《两小儿辩日》', translation: '谁说你多有智慧聪明呢？' }
        ]
      }
    ],
    examTips: '“知”通“智”[zhì]表智慧（知明而行无过矣）是必考通假字。'
  },
  {
    id: 'zhi_reach',
    word: '致',
    pinyin: 'zhì',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '至',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '送到，表达，呈献 / 获得，取得，招致 / 达到 / 辞去，归还',
        examples: [
          { text: '余幼时即嗜学，家贫，无从致书以观。', source: '《送东阳马生序》', translation: '我小时候就爱好学习，家里贫穷，没有办法买到（取得）书来看。' },
          { text: '不积跬步，无以至（致）千里。', source: '《劝学》', translation: '不积累小步，没有办法达到千里之远。' },
          { text: '致万乘之势，序八州而朝同列。', source: '《过秦论》', translation: '达到万乘兵车的声势……' },
          { text: '辞官致仕。', source: '《史记》', translation: '辞去官职归还职权。' }
        ]
      },
      {
        pos: '形容词/名词',
        meaning: '情致，情趣 / 结构精细',
        examples: [
          { text: '胜负之数，存亡之理，当与秦相较，致意于此。', source: '《史记》', translation: '情致情趣。' }
        ]
      }
    ],
    examTips: '“致”作动词“买到/取得/招致”（无从致书以观）与“辞去”（致仕）。'
  },
  {
    id: 'zhi_substance',
    word: '质',
    pinyin: 'zhì',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '贝',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词/动词',
        meaning: '本质，资质，质朴 / 抵押品，人质 / 做人质，抵押',
        examples: [
          { text: '永州之野产异蛇，黑质而白章。', source: '《捕蛇者说》', translation: '永州的郊野产生异种蛇，黑色的底子底质而有白色的花纹。' },
          { text: '于是为长安君约车百乘，质于齐。', source: '《触龙说赵太后》', translation: '于是为长安君准备兵车一百辆，送到齐国去做人质抵押。' }
        ]
      },
      {
        pos: '动词',
        meaning: '询问，质问，对质',
        examples: [
          { text: '援疑质理，先达执经叩问。', source: '《送东阳马生序》', translation: '提出疑问询问探讨道理，向道德学问高的前辈拿着经书请教叩问。' }
        ]
      }
    ],
    examTips: '“质”作动词表“做人质/抵押”（质于齐）与“询问”（援疑质理）。'
  },
  {
    id: 'zu_clan',
    word: '族',
    pinyin: 'zú',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '方',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '家族，宗族 / 类别，同类 / 筋骨交错聚结处（庖丁解牛）',
        examples: [
          { text: '山东豪俊遂并起而亡秦族矣。', source: '《过秦论》', translation: '崤山以东的豪杰英俊于是同时起义消灭了秦朝皇族宗族。' },
          { text: '每至叶交错，族筋骨交错处。', source: '《庖丁解牛》', translation: '每当碰到筋骨交错聚结的地方。' }
        ]
      },
      {
        pos: '动词',
        meaning: '灭族，杀尽全族',
        examples: [
          { text: '族秦者秦也，非天下也。', source: '《阿房宫赋》', translation: '消灭秦朝全族的是秦朝自己，不是天下的人民。' }
        ]
      }
    ],
    examTips: '“族”作动词“灭族/杀尽全族”（族秦者秦也）；名词“筋骨交错聚结处”。'
  },
  {
    id: 'zu_pawn',
    word: '卒',
    pinyin: 'zú',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '十',
    isHighFrequency: true,
    senses: [
      {
        pos: '名词',
        meaning: '步兵，士兵，差役',
        examples: [
          { text: '率疲弊之卒，将数百之众。', source: '《过秦论》', translation: '率领疲惫不堪的士兵，指挥几百人的军队。' }
        ]
      },
      {
        pos: '动词',
        meaning: '死亡 / 结束，完成',
        examples: [
          { text: '卒起不意，尽失其度。', source: '《荆轲刺秦王》', translation: '事情突然爆发意料不到……' },
          { text: '年六十有二，卒于正寝。', source: '《史记》', translation: '年纪六十二岁，在正室中去世死亡。' }
        ]
      },
      {
        pos: '副词/通假字',
        meaning: '终于，到底 / 通“猝”，仓促，突然（卒起不意）',
        examples: [
          { text: '卒相与欢，为刎颈之交。', source: '《廉颇蔺相如列传》', translation: '终于相互欢好，成为誓同生死的好朋友。' },
          { text: '卒起不意，尽失其度。', source: '《荆轲刺秦王》', translation: '突然爆发意料不到，全部失去了常态慌乱。' }
        ]
      }
    ],
    examTips: '“卒”作副词“终于/到底”（卒相与欢）；通“猝”表“突然/仓促”（卒起不意）；动词表“死亡”。'
  },
  {
    id: 'zuo_sit',
    word: '坐',
    pinyin: 'zuo',
    category: 'shici_120',
    categoryLabel: '高频文言实词',
    radical: '土',
    isHighFrequency: true,
    senses: [
      {
        pos: '动词',
        meaning: '坐下，就座 / 触犯刑法，犯罪，定罪 / 坐等，坚守',
        examples: [
          { text: '项王、项伯东向坐；亚父南向坐。', source: '《鸿门宴》', translation: '项王、项伯朝东坐；亚父朝南坐。' },
          { text: '广谋告之曰：“人言坐法死，免者无几。”', source: '《汉书》', translation: '有人说因为犯了法被定罪判死刑……' }
        ]
      },
      {
        pos: '介词/名词',
        meaning: '因为，由于（如“停车坐爱枫林晚”） / 座位（同“座”）',
        examples: [
          { text: '停车坐爱枫林晚，霜叶红于二月花。', source: '《山行》', translation: '停下车来是因为喜爱这深秋枫林晚景。' },
          { text: '置酒大会，沛公因因引坐。', source: '《鸿门宴》', translation: '座位上（满坐寂然）。' }
        ]
      }
    ],
    examTips: '“坐”作介词表“因为/由于”（停车坐爱枫林晚）；动词表“犯罪/定罪”（坐法死）。'
  }
];
