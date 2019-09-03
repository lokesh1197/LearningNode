## Install Typescript:
  - `npm install -g typescript`

## Run typescript file:
  - `tsc <filename>`
  - It creates a .js file from the .ts file
  - Extension of the ts file is '.ts'

## Files created:
  - `greeter.js` is the .js file created from `greeter.ts`

## Documentation:
  - [https://www.typescriptlang.org/docs/home.html]

## Some Tips:

### Basic Types:
  - Boolean: `let isDone: boolean = false;`
  - decimal, hex, binary, octal -> `number`
  - Array: `number[]`/`string[]``...` or `Array<number>`
  - Tuple: `[string, number]`
  - Accessing non-existing elements returns error
  - Enum: Eg:
              - `enum Color {Red, Green, Blue}
                 let c: Color = Color.Green; // c = 2`
              - `enum Color {Red = 1, Green, Blue}
                 let c: Color = Color.Green; // c = 3`
              - `enum Color {Red = 1, Green = 2, Blue = 4}
                 let c: string = Color[2]; // c = "Green"`
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

### Miscellaneous

  - `readonly` is used for properties while `const` is used for variables
  - `interface` can extend to multiple interfaces or classes
  - when an `interface` extends to a class only the class's subclasses can implement the interface
