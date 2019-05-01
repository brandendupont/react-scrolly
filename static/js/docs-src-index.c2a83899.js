(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/src/index.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s={},r="wrapper";function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(r,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("h2",{id:"scrolly-telling-made-easy"},"Scrolly-telling made easy"),Object(i.b)("p",null,"Magical scroll-based interactions made easy with ",Object(i.b)("inlineCode",{parentName:"p"},"react-scrolly"),"."),Object(i.b)("p",null,"Scroll-based interactions create an incredible experience by letting users explore the story with simple scrolls,\nsuch highlighting a portion of the content,\nor animating the route on a map based on the position of the section user is reading."),Object(i.b)("p",null,"However, tracking the scrolling progress by yourself is burdensome,\nand binding the window scroll tracking for each component is prone to cause performance issues as the number of tracked components increase,\nand thus making users see the screen juddering when scrolling."),Object(i.b)("p",null,"With this in mind, ",Object(i.b)("inlineCode",{parentName:"p"},"react-scrolly")," is created to allow you to track the progress of scrolling with minimum efforts and the performance impact."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"react-scrolly")," is perfect for the following use cases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Track the scrolled ratio (ratio of a section being read) by the user."),Object(i.b)("li",{parentName:"ul"},"Track the section the user is currently reading (closest to the bottom of the viewport) and its scrolled ratio in another component."),Object(i.b)("li",{parentName:"ul"},"Pin components on the scroll based on the scroll position."),Object(i.b)("li",{parentName:"ul"},"Making scrolled-based animations or parallax effects (by combining the scrolled ratio provided ",Object(i.b)("inlineCode",{parentName:"li"},"react-scrolly")," with animation libraries such as ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/react-spring/react-spring"}),"react-spring"),",\nyou are able to make stunning scroll-based visual effects with concise and declarative code).")),Object(i.b)("h3",{id:"definition-of-the-scrolled-ratio"},"Definition of the scrolled ratio"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"scrolled ratio")," is defined by the ratio of a component being scrolled over ",Object(i.b)("strong",{parentName:"p"},"the bottom of the screen")," (viewport)."),Object(i.b)("p",null,Object(i.b)("img",Object.assign({parentName:"p"},{src:"https://user-images.githubusercontent.com/1139698/57021937-3a29f800-6c60-11e9-89d8-51959a7ca60e.png",alt:"Scrolled ratio"}))),Object(i.b)("h2",{id:"why-is-it-performant"},"Why is it performant?"),Object(i.b)("p",null,"In contrast to the traditional scroll tracking by binding window scroll event listeners to components and calling ",Object(i.b)("inlineCode",{parentName:"p"},"getBoundingClientRect()")," on scroll\nwhich potentially causes many unnecessary re-renderings and ",Object(i.b)("a",Object.assign({parentName:"p"},{href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a"}),"reflows"),",\n",Object(i.b)("inlineCode",{parentName:"p"},"react-scrolly")," only notifies the scrolling position changes to the components currently intersected with the viewport,\nwhich is made possible by utilizing the ",Object(i.b)("inlineCode",{parentName:"p"},"IntersectionObserver"),", ",Object(i.b)("inlineCode",{parentName:"p"},"RxJS"),", the context API, and React hooks."),Object(i.b)("h2",{id:"how-to-design-scrolly-telling"},"How to design scrolly-telling"),Object(i.b)("p",null,"Here are some references to help you design better scrolly-telling:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How To Scroll by Mike Bostock: ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://bost.ocks.org/mike/scroll/"}),"https://bost.ocks.org/mike/scroll/")),Object(i.b)("li",{parentName:"ul"},"Responsive scrollytelling best practices (The Pudding): ",Object(i.b)("a",Object.assign({parentName:"li"},{href:"https://pudding.cool/process/responsive-scrollytelling/"}),"https://pudding.cool/process/responsive-scrollytelling/"))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/src/index.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-src-index.06e1f1d1538aef15a9ff.js.map