new Saika({
  target: 'app',
  sourcePath: '/docs',
  editLink: {
    baseUrl: 'https://github.com/kms-docs/starter/tree/master/docs',
    text: '帮助我们完善此页面'
  },
  plugins: [
    saikaThemeDocs,
    saikaGoogleAnalytics('UA-145247644-3')
  ],
  nav: [
    {
      title: 'GitHub',
      link: 'https://github.com/kms-docs/starter'
    }
  ],
  posts: [
    {
      title: '起步',
      links: [
        {
          title: '介绍',
          link: '/'
        },
        {
          title: '下载游戏',
          link: '/start/download'
        },
        {
          title: '设置运行环境',
          link: '/start/environment'
        }
      ]
    },
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
  ],

  footer: `© Made with <font color="red">❤</font> by
    <a href="https://github.com/evillt">EVILLT</a>.
    Powered by
    <a href="https://saika.dev" target="_blank">Saika</a>.`
})
