# pow-two-rights

Rights by power of two

### Installation

```
$ npm install pow-two-rights
```

### Theory

By CRUD

```
Math.pow(2, 1); // 2 = create
Math.pow(2, 2); // 4 = read
Math.pow(2, 3); // 8 = update
Math.pow(2, 4); // 16 = delete
```

Now i want set next right: "create", "read" and "update", but not "delete"

I add the following numbers - 2("create") + 4("read") + 8("update"), my result is 14

How i can test my permissions? May i use permission "read"? Permission "read" it is 4

```
14 & 4 // 4
!!(14 & 4) // true
```

May i use permission "delete"? Permission "delete" it is - 16

```
14 & 16 // 0
!!(14 & 16) // false
```

### Usage

```
let powTwoRightLib = require('pow-two-rights');

let powTwoRight = new powTwoRightLib();

```

CRUD it is base lib config:
* pow 1 (num 2) - create
* pow 2 (num 4) - read
* pow 3 (num 8) - update
* pow 4 (num 16) - delete

I can redefine config

```
let powTwoRight = new powTwoRightLib([
  // Redefine base permission (first four)
  'select',
  'insert',
  'update',
  'delete',
  // And add other my sweet permission
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
]);
```

Now i generate permission for some user (rabbit (cat (or other)))
I like only winter months and august

```
powTwoRight.generate([
  'january',
  'february',
  'december',
  'august'
]);
```

Now i can view my permission

```
powTwoRight.permission(); // 69728 - it is my 'january', 'february', 'december', 'august' from config list
```

And if necessary i can test my access to some permission

```
powTwoRight.test('january'); // true
powTwoRight.test('select'); // false
powTwoRight.test('june'); // false
```

The End :)
