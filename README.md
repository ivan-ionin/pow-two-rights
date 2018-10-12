# pow-two-rights
Rights by power of two

### Installation
npm install pow-two-rights

### Theory
By CRUD

Math.pow(2, 1); // 2 = create
Math.pow(2, 2); // 4 = read
Math.pow(2, 3); // 8 = update
Math.pow(2, 4); // 16 = delete

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

```
