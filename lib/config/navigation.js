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
  
  export const menuItems = [
    menuItem('Home', '/'),
    menuItem('About', '/about'),
    menuItem('Services', '/services', '', [
      menuItem('Dev', '/services/dev'),
      menuItem('Finding?', '/services/finding'),
    ]),
    menuItem('Blog', '/blog', '', [
      menuItem('First', '/posts/my-first-website')
    ]),
    menuItem('Contact', '/contact')
  ]
  
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