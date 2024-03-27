/* eslint-disable prettier/prettier */
type xs = "xs" | "extra-small";
type sm = "sm" | "small";
type md = "md" | "medium" | "base";
type lg = "lg" | "large";
type xl = "xl" | "extra-large";
type xxl = "2xl" | "xxl" | "extra-extra-large";
type xxxl = "xxxl" | "3xl" | "extra-extra-extra-large";

function mapSize(size: string): xs | sm | md | lg | xl | xxl | xxxl {
  return    ["xs", "extra-small"].includes(size) ? "xs" : 
            ["sm", "small"].includes(size) ? "sm" : 
            ["md", "medium", "base"].includes(size) ? "md":
            ["lg", "large"].includes(size) ? "lg":
            ["xl", "extra-large"].includes(size) ? "xl":
            ["xxl", "2xl", "extra-extra-large"].includes(size) ? "xxl":
            ["xxxl", "3xl", "extra-extra-extra-large"].includes(size) ? "xxxl":
            "md";
}

export { xs, sm, md, lg, xl, xxl, xxxl, mapSize };
