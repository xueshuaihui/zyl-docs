module.exports = {
  title: 'zyl-ui', // 设置网站标题
  description: 'ui 库', //描述
  dest: './build', // 设置输出目录
  port: 1234, //端口
  themeConfig: { //主题配置
    nav: [
      {
        text: '主页',
        link: '/'
      }, // 导航条
    ],
      // 为以下路由添加侧边栏
    sidebar: {
      '/components/': [
        {
          title: 'Basic',
          collapsable: true,
          children: [
            'button',
            'icon',
            'layout',
            'container'
          ]  
        },
        {
          title: 'Form',
          collapsable: false,
          children: [
            'input',
            'date-picker',
            'upload'
          ]
        },
        {
          title: 'Data',
          collapsable: false,
          children: [
            'table',
            'progress',
            'pagination'
          ]
        },
        {
          title: 'Notice'
        },
        {
          title: 'Navigation'
        },
        {
          title: 'Others',
          collapsable: false,
          children: [
            'popover',
            'carousel',
            'infinite-scroll'
          ]
        }
      ]
    }
  }
}
