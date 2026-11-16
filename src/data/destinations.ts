export interface Destination {
  id: string;
  city: string;
  tagline: string;
  description: string;
  region: string;
  image: string;
  highlights: string[];
  bestSeason: string;
}

export const destinations: Destination[] = [
  {
    id: 'beijing',
    city: '北京',
    tagline: '千年古都 · 皇城魅力',
    description:
      '三千年建城史与六百年皇城气象交织。故宫红墙金瓦、天坛祈年殿与长城烽火，共同勾勒出古都恢弘的轮廓，胡同巷陌间则藏着市井烟火。',
    region: '华北',
    image: 'https://images.pexels.com/photos/3587765/pexels-photo-3587765.jpeg?auto=compress&cs=tinysrgb&w=1000&h=650&fit=crop',
    highlights: ['故宫', '天坛', '八达岭长城', '南锣鼓巷'],
    bestSeason: '春季、秋季',
  },
  {
    id: 'hangzhou',
    city: '杭州',
    tagline: '人间天堂 · 西湖美景',
    description:
      '西湖十景倒映着烟波与画舫，苏堤白堤横跨湖面，龙井茶香萦绕山林。江南园林与市井生活在这里悠然相融。',
    region: '华东',
    image: 'https://images.pexels.com/photos/6538009/pexels-photo-6538009.jpeg?auto=compress&cs=tinysrgb&w=1000&h=650&fit=crop',
    highlights: ['西湖', '断桥残雪', '灵隐寺', '龙井村'],
    bestSeason: '春季、秋季',
  },
  {
    id: 'guilin',
    city: '桂林',
    tagline: '山水甲天下 · 漓江风光',
    description:
      '碧绿的漓江穿行于拔地而起的喀斯特峰林之间，竹筏顺流而下，两岸山影如画，堪称中国最具诗意的山水画卷。',
    region: '华南',
    image: 'https://images.pexels.com/photos/36535024/pexels-photo-36535024.jpeg?auto=compress&cs=tinysrgb&w=1000&h=650&fit=crop',
    highlights: ['漓江游船', '阳朔西街', '象鼻山', '龙脊梯田'],
    bestSeason: '四月至十月',
  },
  {
    id: 'lhasa',
    city: '拉萨',
    tagline: '雪域圣城 · 信仰之旅',
    description:
      '布达拉宫依山而建，红白宫墙映衬蓝天雪山。大昭寺的转经人流与高原清澈的阳光，让这座圣城充满庄严的宁静。',
    region: '西藏',
    image: 'https://images.pexels.com/photos/38462384/pexels-photo-38462384.jpeg?auto=compress&cs=tinysrgb&w=1000&h=650&fit=crop',
    highlights: ['布达拉宫', '大昭寺', '纳木错', '八廓街'],
    bestSeason: '五月至十月',
  },
  {
    id: 'xian',
    city: '西安',
    tagline: '古都风韵 · 兵马俑',
    description:
      '十三朝古都的厚重历史凝结于秦始皇兵马俑的千军万马之中。古老的城墙、大雁塔与回民街的美食，串联起一段穿越千年的旅程。',
    region: '西北',
    image: 'https://images.pexels.com/photos/11105685/pexels-photo-11105685.jpeg?auto=compress&cs=tinysrgb&w=1000&h=650&fit=crop',
    highlights: ['兵马俑', '城墙', '大雁塔', '回民街'],
    bestSeason: '春季、秋季',
  },
];
