import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  root: {
    padding: 10,
  },
  element: {
    backgroundColor: "red",
  },
});
console.log("styles:", styles);
