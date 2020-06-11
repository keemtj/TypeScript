// Generics
// parameter type을 any로 넣어준 것처럼 어떤 값이든 넣어줄 수 있는데
// any를 사용하게 되면 type이 any로 보여지지만
// 제너릭스를 사용하면 param에 따라 string, number등 보여준다
// 즉 어떤값이든 넣고 싶고, any는 싫고, type을 보여주고 싶을때 제너릭스
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrappded = wrap("10");
wrappded.param;

// interface Items<T> {
type Items<T, V> = {
  list: T[];
  value: V;
};

const items: Items<string, number> = {
  list: ["a", "b", "c"],
  value: 1,
};
