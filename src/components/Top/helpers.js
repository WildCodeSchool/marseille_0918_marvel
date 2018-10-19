// const getSiblings = (elem) => {
//   let siblings = [];
//   let sibling = elem.parentNode.firstChild;
//   for (;sibling ; sibling = sibling.nextSibling ) {
//     if (sibling.nodeType !== 1 || sibling === elem) continue;
//     siblings.push(sibling);
//   }
//   return siblings;
// }
//
//
// const lis = document.querySelectorAll('li');
//
// const Get = (elem) => {
//   for(let i = 0; i < lis.length; i++) {
//
//         let hover = lis[i].addEventListener('click', (e) => {
//             lis[i].style.width = "55%";
//
//         let liSiblings = getSiblings(lis[i]);
//         liSiblings.map( (sibling) => {
//             sibling.style.width = "5%";
//             let contentSibling = sibling.lastElementChild;
//             contentSibling.style.bottom = "-100%";
//             contentSibling.style.opacity = "0";
//             contentSibling.style.transitionDelay= "0s";
//             })
//
//         let content = lis[i].lastElementChild;
//             content.style.bottom = "0";
//             content.style.opacity = "1";
//             content.style.transitionDelay= "0.5s";
//         })
// }
// }
// module.exports = {
//   getSiblings,
//   Get
// }
