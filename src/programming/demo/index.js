// function App(props){
//   return (<>
//     <div>{ props.text }</div>
//   </>)
// }

// function hoc(Comnponent){
//   const props = {
//     text: "hello, world!"
//   }
//   return (<Component {...props}></Component>)
// }

// const WrappedComponent = hoc(App);

function compose(mws) {
  return function(context, next) {
    let index = -1;
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error("多次调用"));
      index = i;
      let fn = mws[i];
      if (i === mws.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  };
}

const mws = [];
mws.push(async (context, next) => {
  console.log(1);
  await next();
  console.log(2);
});
mws.push(async (context, next) => {
  console.log(3);
  await next();
  console.log(4);
});
const fn = compose(mws);
fn(null, () => {
  console.log("done");
});
