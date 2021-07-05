console.log(window.React)
let n = 0
const root = document.querySelector("#root")
// 声明一个视图
// 用react创建一个div，div的className是red，里面有个变量n
const App = () => React.createElement('div', {className: 'red'},
    // 所有div里面的参数要放到第三个参数里
    [
        // 第一个元素n
        n,
        // 第二个元素button
        React.createElement('button', {
            onClick: () => {
                n += 1
                ReactDOM.render(App(), root);
            }
        }, '+1'),
    ]);
// 把App放到页面中(渲染到root里)
ReactDOM.render(App(), root);

const App1 = React.createElement('div', null, n)
// App1是一个React元素，会直接取n的值
const App2 = () => React.createElement('div', null, n)
// App2是一个React函数组件，不会直接取n的值，而是在被调用的时候取
