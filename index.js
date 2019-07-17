new Docute({
  target: 'app',
  sourcePath: '/docs',
  editLinkBase: 'https://github.com/kms-docs/starter/tree/master/docs',
  editLinkText: '完善这个文档',
  plugins: [
    docuteCustomContainer()
  ],
  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/kms-docs/starter'
    }
  ],
  sidebar: [
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
          title: 'NAVER账号邮箱截图方法',
          link: '/misc/naver-screenshot'
        }
      ]
    }
  ]
})