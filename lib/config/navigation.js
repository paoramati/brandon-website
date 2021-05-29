/**
 * 
 */

 const navButton = (title, href, icon, subNavButtons = []) => {
  console.log("AIS >  ~ file: navigation.js ~ line 6 ~ navButton ~ title, href, icon, subNavButtons", title, href, icon, subNavButtons)
    
    return {
      title,
      href,
      icon,
      subNavButtons
    };
  }
  
  export const navButtons = [
    navButton('Home', '/'),
    navButton('About', '/about'),
    navButton('Services', '/services', '', [
      navButton('Dev', '/services/dev')
    ]),
    navButton('Blog', '/blog', '', [
      navButton('!st', '/posts/my-first-website')
    ])
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