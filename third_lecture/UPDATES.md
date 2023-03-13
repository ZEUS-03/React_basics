# Learnings and updates from the last code:
### Learnings:

> **`Dev Dependencies`** and **`Normal Depeandencies`** :
> `Dev Dependencies` are those which are required in dev environment only such as *Parcel*. Whereas `Normal Dependencies` are dependencies that are required by our project to run such as *React*.

> **`Babel`**: 
> A package that is a compiler thathandles and generates polyfill(old piece of code converted from new code by parcel for browser compatiblility) so that the code can work in older browser. It also compiles the code written in `JSX` via using React.createElement in the background(refer to the official babel's documentation.)

> **`Tree Shaking`**: 
> Performed by Parcel(bundlers) which results in removal of unwanted code(unused functions that came up with the libraries) from our project. 

> **`Keys`**:
> `Keys` in React helps React render only particular element(in siblings). 
Keys help React identify which items have changed, are added, or are removed.Without keys, React takes a lot of efforts as it rerenders the complete page just to add or update a sibling.

> **`JSX`**:
> `JSX` helps in writing clean, readable and maintainable code. JSX is a syntax extension to JS. JSX has an **HTML like syntax** but it's not HTML inside Javascript. It is based on createElement in the background and uses babel as compiler to convert the code from this syntax to createElement format (normal JS option).

