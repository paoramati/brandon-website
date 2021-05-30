/**
 * 
 */

const menuItem = (title, href, icon, subMenuItems = []) => {
  return {
    title,
    href,
    icon,
    subMenuItems
  };
}

class MenuItem {
  /**
   * 
   * @param {String} title 
   * @param {String} href 
   * @param {String} icon 
   * @param {MenuItem[]} subMenuItems 
   */
  constructor(title, href, icon, subMenuItems = []) {
    this.title = title;
    this.href = href;
    this.icon = icon;
    this.subMenuItems = subMenuItems;
  }
}

/**
 * @type {MenuItem[]}
 */
export const menuItems =
  [
    {
      title: 'Home',
      href: '/',
      icon: '',
      subMenuItems: []
    },
    {
      title: 'About',
      href: '/about',
      icon: '',
      subMenuItems: []
    },
    {
      title: 'Services',
      href: '/services',
      icon: '',
      subMenuItems:
        [
          {
            title: 'Websites',
            href: '/services/websites',
            icon: '',
            subMenuItems: []
          },
          {
            title: 'Assassinations',
            href: '/services/assassinations',
            icon: '',
            subMenuItems: []
          }
        ]
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: '',
      subMenuItems: []
    }
  ]


  //   menuItem('Home', '/'),
  //   menuItem('About', '/about'),
  //   menuItem('Services', '/services', '', [
  //     menuItem('Dev', '/services/dev'),
  //     menuItem('Finding?', '/services/finding'),
  //   ]),
  //   menuItem('Blog', '/blog', '', [
  //     menuItem('First', '/posts/my-first-website')
  //   ]),
  //   menuItem('Contact', '/contact')
  // ]

  // const navigation = {

  //   links: [
  //     navButton('Home', '/'),
  //     navButton('About', '/about'),
  //     navButton('Services', '', '', [
  //       navButton('Dev', '/services/dev')
  //     ]),
  //     navButton('Blog', '', '', [
  //       navButton('!st', '/posts/my-first-website')
  //     ])

  //   ]


  // }

  // class NavButton {
  //   constructor(title, href, icon, children) {
  //     this.title = title;
  //     this.href = href;
  //     this.icon = icon;
  //     this.children = children;
  //   }
  // }


  // export { navigation };