# Object

Provides some object utils

## Installation

Install the package using npm:

```bash
npx jsr add @omer/object
```

Or with deno:

```bash
deno add jsr:@omer/object
```

## Usage

Import the utility function and use it in your project:

```typescript
import { pick, omit, pluck } from "@omer/object";

const user = { id: 1, name: "John Doe", age: 30, password: "[REDACTED]" };
console.log(pick(user, "name", "age")); // Output: { name: "John Doe", age: 30 }
console.log(omit(user, "age", "password")); // Output: { id: 1, name: "John Doe" }

const users = [
  { id: 1, name: "John Doe", age: 30, password: "[REDACTED]" },
  { id: 2, name: "Jane Doe", age: 28, password: "[REDACTED]" },
]
console.log(pluck(users, "name")); // Output: ["John Doe", "Jane Doe"]
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
