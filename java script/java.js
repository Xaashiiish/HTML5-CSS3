// 
// 
// function createCircle(radius) {
//     return {
//         radius,
//         draw(){
//             console.log('draw');
//         }
//     };
// }
// 
// const circle1 = createCircle(9);
// console.log(circle1);
// 
// const circle2 = createCircle(4);
// console.log(circle2);
// 
// // constructor function
// 
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// 
// const circle = new Circle(1);
// 
// //dynamic
// //  const circle = {
// //     radius: 1
// // };
// // circle.color = 'yellow';
// // circle.draw = function() {}
// // 
// // delete circle.color;
// // console.log(circle);
// 
// 
// const circle = new Function ('radius', `
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// `)
// 
// circle.call({}, 1)
// circle.apply({}, 1,2,3)
// const circle = new circle1(1);


// let x = {value: 10};
// let y = x;
// 
// x.value = 20;
// 
// let obj = {value: 10};
// function increase(obj) {
//     obj.value++
// }
// 
// increase(obj);
// console.log(obj);


// for (let key in Circle)
// console.log(key, Circle[key]);
// 
// for (let key of Object.keys(circle))
// console.log(key);
// 
// for (let entry of Object.entries(circle))
// console.log(entry);
// 
// if ('radius' in circle ) console.log('yes');


const Circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
for (let key in circle)
another[key] = circle[key];

console.log(another);




