# Senior SDET Coding Interview Preparation

A professional TypeScript-based repository for Data Structures & Algorithms, JavaScript fundamentals, TypeScript concepts, and real-world automation coding challenges frequently asked in Senior SDET and QA Automation Engineer interviews.

This repository focuses on:
- Interview-oriented coding preparation
- Clean and maintainable TypeScript solutions
- Core JavaScript & TypeScript fundamentals
- Problem-solving patterns commonly asked in product companies
- Real-world automation engineering utilities
- Async programming concepts relevant for Playwright and Node.js ecosystems

The goal is not just solving coding problems, but writing production-quality, scalable, and readable solutions like an experienced Software Development Engineer in Test (SDET).

---

# Tech Stack

- TypeScript
- JavaScript (ES6+)
- Node.js
- Git & GitHub

---

# Repository Structure

```bash
src/
│
├── arrays/
├── strings/
├── hashing/
├── sliding-window/
├── stack/
├── queue/
├── linked-list/
├── recursion/
├── binary-search/
├── typescript-fundamentals/
├── async-javascript/
├── interview-patterns/
├── playwright-coding-rounds/
└── utils/
```

---

# Problem Categories

## Arrays

Focused on:
- Two pointers
- Prefix sum
- Greedy approaches
- Interval problems

### Covered Problems

- Two Sum
- Best Time to Buy and Sell Stock
- Product of Array Except Self
- Merge Intervals
- Rotate Array
- 3Sum
- Container With Most Water

---

## Strings

Focused on:
- Sliding window
- Character frequency maps
- Pattern matching
- String manipulation

### Covered Problems

- Valid Anagram
- Valid Palindrome
- Group Anagrams
- Longest Common Prefix
- String Compression
- Longest Substring Without Repeating Characters

---

## Hashing

Focused on optimized lookup-based solutions.

### Covered Problems

- Top K Frequent Elements
- Happy Number
- Isomorphic Strings
- Longest Consecutive Sequence

---

## Sliding Window

One of the most important interview patterns.

### Covered Problems

- Maximum Sum Subarray
- Minimum Size Subarray Sum
- Permutation in String
- Sliding Window Maximum

---

## Stack & Queue

### Stack Problems

- Valid Parentheses
- Min Stack
- Daily Temperatures
- Largest Rectangle in Histogram

### Queue Problems

- Implement Queue Using Stacks
- Number of Recent Calls
- Moving Average from Data Stream

---

## Linked List

Focused on pointer manipulation and traversal.

### Covered Problems

- Reverse Linked List
- Merge Two Sorted Lists
- Linked List Cycle
- Remove Nth Node From End

---

## Binary Search

Focused on optimized searching logic.

### Covered Problems

- Binary Search
- Search Insert Position
- Find Peak Element
- Search in Rotated Sorted Array

---

## Recursion

Focused on recursive thinking and backtracking fundamentals.

### Covered Problems

- Factorial
- Fibonacci
- Generate Parentheses
- Subsets
- Permutations

---

# TypeScript Fundamentals

This section focuses on TypeScript concepts frequently asked in:
- Senior SDET interviews
- Playwright interviews
- Node.js + automation engineering rounds
- TypeScript coding discussions

Folder:

```bash
src/typescript-fundamentals
```

---

# TypeScript Topics Covered

## Interfaces

### Questions & Examples

- Create User Interface
- Extend Interfaces
- Optional Properties
- Readonly Properties
- Interface vs Type Alias
- API Response Interface Design

Example Topics:
- Employee Interface
- Playwright Test Data Interface
- API Response Contract

---

## Types & Type Aliases

### Questions & Examples

- Union Types
- Intersection Types
- Literal Types
- Custom Type Definitions
- Dynamic Object Types

---

## Generics

### Questions & Examples

- Generic Functions
- Generic Interfaces
- Generic Utility Functions
- API Wrapper Using Generics
- Generic Response Handler

---

## Enums

### Questions & Examples

- Numeric Enums
- String Enums
- Environment Config Enums
- Test Status Enum

---

## Classes & OOP

### Questions & Examples

- Class vs Interface
- Inheritance
- Encapsulation
- Access Modifiers
- Abstract Classes

---

## Utility Types

### Questions & Examples

- Partial
- Pick
- Omit
- Record
- Required
- Readonly

---

## Async TypeScript

### Questions & Examples

- Promise Typing
- Async/Await Handling
- Typed API Responses
- Parallel Async Execution

---

## Advanced TypeScript

### Questions & Examples

- keyof Operator
- typeof Operator
- Mapped Types
- Conditional Types
- Type Guards

---

# Async JavaScript

Highly important for modern SDET and Playwright interviews.

This section focuses on:
- Promises
- Async/Await
- Concurrency
- Event Loop concepts
- Utility implementations

### Covered Problems

- Debounce Function
- Throttle Function
- Retry Failed Promise
- Promise Pool
- Parallel API Calls
- Async Queue
- Rate Limiter

---

# Playwright Coding Rounds

Real-world automation engineering coding challenges specifically designed for Senior SDET interviews.

Folder:

```bash
src/playwright-coding-rounds
```

---

# Playwright & Automation Coding Questions

## API Utilities

- Compare Two JSON Responses
- Flatten Nested JSON
- API Schema Validation
- Extract Failed API Records

---

## Automation Utilities

- Dynamic Locator Generator
- Retry Failed Test Utility
- Smart Wait Utility
- CSV Data Parser

---

## Framework Utilities

- Environment Config Manager
- Screenshot Naming Utility
- Test Data Builder
- Parallel Execution Helper

---

# Coding Standards

Every solution includes:
- Problem statement
- Approach explanation
- Time complexity
- Space complexity
- Readable naming conventions
- Optimized implementation

Example:

```ts
/**
 * Problem: Two Sum
 *
 * Approach:
 * Use hashmap to store previously visited numbers
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
```

---

# TypeScript Best Practices Followed

- Strong typing
- Interface-driven design
- Reusable utility functions
- Generic programming where applicable
- Consistent naming conventions
- Type-safe implementations
- Clean code principles

---

# Why This Repository?

Most coding repositories focus only on competitive programming.

This repository is different because it combines:
- DSA preparation
- TypeScript engineering concepts
- Async JavaScript
- Automation engineering utilities
- Real-world SDET coding scenarios

The aim is to prepare for:
- Senior SDET interviews
- QA Automation Engineer roles
- Product-based companies
- Playwright & TypeScript coding rounds

---

# Interview Preparation Focus

This repository prioritizes problems commonly asked in:
- SDET interviews
- TypeScript coding rounds
- Playwright automation interviews
- API automation discussions
- Product company engineering rounds

Special emphasis is given to:
- Arrays
- Strings
- Sliding Window
- HashMap patterns
- Async JavaScript
- TypeScript fundamentals
- API transformation utilities

---

# Progress Tracker

| Category | Status |
|---|---|
| Arrays | In Progress |
| Strings | In Progress |
| Hashing | Planned |
| Sliding Window | Planned |
| Stack & Queue | Planned |
| Linked List | Planned |
| Binary Search | Planned |
| Recursion | Planned |
| TypeScript Fundamentals | Planned |
| Async JavaScript | Planned |
| Playwright Coding Rounds | Planned |

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Run TypeScript Files

```bash
npx ts-node src/arrays/two-sum.ts
```

---

# Future Enhancements

- GitHub Actions CI integration
- Unit testing with Jest
- ESLint & Prettier setup
- Performance benchmarking
- Advanced TypeScript utilities
- Mock interview question sets
- Playwright helper libraries

---

# Connect With Me

- LinkedIn: https://www.linkedin.com/in/chandan-kumar-qa
- GitHub: https://github.com/chandankumar-qa-ai

---

# Disclaimer

This repository is created for educational and interview preparation purposes.

The focus is on:
- improving problem-solving skills
- writing maintainable code
- strengthening TypeScript fundamentals
- preparing for real-world engineering interviews
- becoming a stronger hands-on Senior SDET