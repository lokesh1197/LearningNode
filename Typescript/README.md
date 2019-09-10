## Install Typescript:
  - `npm install -g typescript`

## Run typescript file:
  - `tsc <filename>`. For es5, run `tsc --target es5 <filename>`. `--target` can be replaced by `-t`.
  - It creates a .js file from the .ts file
  - Extension of the ts file is '.ts'

## Files created:
  - `greeter.js` is the .js file created from `greeter.ts`

## Documentation:
  - [Typescript Handbook](https://www.typescriptlang.org/docs/home.html)

## Some Tips:

### Basic Types:
  - Boolean: `let isDone: boolean = false;`
  - decimal, hex, binary, octal -> `number`
  - Array: `number[]`/`string[]``...` or `Array<number>`
  - Tuple: `[string, number]`
  - Accessing non-existing elements returns error
  - Enum: Eg:
  ```typescript
  enum Color {Red, Green, Blue}
  let c: Color = Color.Green; // c = 2
  ```
  ```typescript
  enum Color {Red = 1, Green, Blue}
  let c: Color = Color.Green; // c = 3
  ```
  ```typescript
  enum Color {Red = 1, Green = 2, Blue = 4}
  let c: string = Color[2]; // c = "Green"
  ```
  - Any: `any` no restrictions
  - Object: `Object` for non-primitive values, error if undefined methods/properties are called
  - Void: `void` only `null`[only if --strictNullChecks is not specified] and `undefined` can be used
  - `null` and `undefined` have their own types named undefined and null
  - `null` and `undefined` are subtypes of all other types but when using `--strictNullChecks` flag,
    `null` is assignable to only `any` and `null` and `undefined` is assignable to only `any`,
    `undefined`, and `void`
  - `never` represents type of values that never occur like errors, infinite loop, ...
  - Union type: union of types can be assigned to a variable like `string | number | null`
  - Type Assertions: It's like a type cast but performs no special checking or restructuring of
    data.
    Eg:
      - `let value: any = "This is a String";` then ,
        we can write `let strLength: number = (<string>value).length;` or 
        `let strLength: number = (value as string).length;`

### Generics
  - Generics are similar to template in C++
  - Examples:
  ```typescript
    interface GenericIdentityFn<T> {
        (arg: T): T;
      }
      function identity<T>(arg: T): T {
        return arg;
      }
      let myIdentity: GenericIdentityFn<number> = identity;
  ```
  ```typescript
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
      }
  - Constraints(like methods and properties) can be added by extending T to an interface/class
  - Using generic class types:
  ```
  ```typescript
    function create<T>(c: new() => T): T {
        return new c();
      }
  ```
  ```typescript
    function create<T>(c: { new(): T; }): T {
        return new c();
      }
  ```


### Enum

  - Constant: `const enum`
  - Ambient: `declare enum`
  - Reverse mappings are generated only for number enums
  - enum keys can be used as types and enums can be used as unions
  - enum can be accessed like objects

### Advanced Types

	- `&` is used for intersection types and `|` is used for union types
  - `keyof T` is the index type query operator. For any type T, `keyof T` is the union of known, public property names of T.
    Example:
	```typescript
		let carProps: keyof Car; // the union of ('manufacturer' | 'model' | 'year')
	```

### Miscellaneous

  - `readonly` is used for properties while `const` is used for variables
  - `interface` can extend to multiple interfaces or classes
  - when an `interface` extends to a class only the class's subclasses can implement the interface
  - `abstract` classes are base classes that cannot be instantiated. They can contain abstract
    methods.
  - Rest parameters are the parameters in function definition using spread operator. They are
    optional and stored as an array.
