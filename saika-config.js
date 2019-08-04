new Saika({
  target: 'app',
  sourcePath: '/docs',
  theme: 'docs',
  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/kms-docs/starter'
    }
  ],
  posts: [
    {
      title: '账号',
      links: [
        {
          title: '注册',
          link: '/account/register'
        },
        {
          title: '保护及解决办法',
          link: '/account/protect'
        },
        {
          title: '如何解锁',
          link: '/account/how-to-unlock'
        }
      ]
    },
    {
      title: '攻略',
      links: []
    },
    {
      title: '分享',
      links: [
        {
          title: '"智障"的游戏经验以及感想',
          link: '/share/zhizhang'
        }
      ]
    },
    {
      title: '杂项',
      links: [
        {
          title: '职业对照表',
          link: '/misc/jobs'
        },
        {
          title: 'NAVER账号邮箱截图方法',
          link: '/misc/naver-screenshot'
        }
      ]
    }
  ]
})