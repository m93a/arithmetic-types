# Arithmetic Types
Standardized interfaces for mathematical data types, such as Complex, Fraction and Matrix.
**This repository is a draft, the standard has not been adopted anywhere yet.**

# Overview
 * Every implementation of an _Arithmetic Types_ interface **must** provide an `Arithmetics` object with static methods such as `add(x, y)` which accept arguments of a single data type and perform arithmetic operations on it.
 * The available interfaces are in [`scalar-arithmetic.ts`](https://github.com/m93a/arithmetic-types/blob/main/lib/scalar-arithmetic.ts) and [`tensor-arithmetic.ts`](https://github.com/m93a/arithmetic-types/blob/main/lib/tensor-arithmetic.ts).
 * The methods of `Arithmetics` **must** treat the arguments as immutable and return a new instance where applicable.
 * Every instance of the data type **must** provide a `x.clone()` method and a reference to the `Arithmetics` object using `x[Symbol.for('arithmetics')]`.
 * The instances **may** implement arithmetic methods such as `x.add(y)`; if they do, these arithmetic methods **should** be mutating.
   * If the instance methods **are** mutating, then they **must** return `this`, ie. `x.add(y)` returns the mutated `x`.
   * If the instance methods **are not** mutating, then they must return the result as a new instance of the data type.

(The words _must_, _should_ and _may_ follow [RFC2119](https://datatracker.ietf.org/doc/html/rfc2119))


# Example usage

## Static methods
This is how one can implement an arithmetic and geometric mean for fractions, decimals, complex numbers and quaternions etc., regardless of their implementation.
```typescript
import { NormedDivisionRing, InstanceOf, symbols } from 'arithmetic-types'

const { Arithmetics } = symbols
type Numeric<T, F> = InstanceOf< NormedDivisionRing<T, F> >


function arithmeticMean<T, F>(first: Numeric<T, F>, ...args: Numeric<T, F>[])
{
  const arithmetics = first[Arithmetics]

  const sum = args.reduce( (a, b) => arithmetics.add(a, b), first )
  const count = args.length + 1

  return arithmetics.scale(sum, 1/count)
}


function geometricMean<T, F>(first: Numeric<T, F>, ...args: Numeric<T, F>[])
{
  const arithmetics = first[Arithmetics]
  if (!arithmetics.isCommutative) throw new TypeError('Geometric mean of non-commutative numbers is not supported.')

  const product = args.reduce( (a, b) => arithmetics.mul(a, b), first )
  const count = args.length + 1

  return arithmetics.pow(product, 1/count)
}
```

<br/>

## Instance methods
This is also an implementation of arithmetic and geometric mean, this time for the data types which support instance methods. This code is potentially faster than the previous one, because it doesn't create a new instance for every arithmetic operartion.
```typescript
import { NormedDivisionRing, InstanceWithMethods } from 'arithmetic-types'

type Numeric<T, F> = InstanceWithMethods< T, NormedDivisionRing<T, F> >


function arithmeticMean<T, F>(first: Numeric<T, F>, ...args: Numeric<T, F>[])
{
  const sum = first.clone()

  args.forEach( a => sum = sum.add(a) )
  sum = sum.scale( 1/(args.length + 1) )

  return sum
}


function geometricMean<T, F>(first: Numeric<T, F>, ...args: Numeric<T, F>[])
{
  if (!first[Arithmetics].isCommutative) throw new TypeError('Geometric mean of non-commutative numbers is not supported.')

  const product = first.clone()

  args.forEach( a => product = product.mul(a) )
  product = product.pow( 1/(args.length + 1) )

  return product
}
```
