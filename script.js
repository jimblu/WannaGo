// barba.init({
//   transitions: [
//     {
//       name: "opacity-transition",
//       leave(data) {
//         return gsap.to(data.current.container, {
//           opacity: 0,
//         });
//       },
//       enter(data) {
//         const promise1 = new Promise(() => {
//           data = true;
//         });
//         promise1.then((data) => {
//           return gsap.from(data.next.container, {
//             opacity: 0,
//           });
//         });
//       },
//     },
//   ],
// });

barba.init({
  transitions: [
    {
      name: "opacity-transition",
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
        });
      },
    },
  ],
});
