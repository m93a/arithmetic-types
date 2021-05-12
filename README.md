# Arithmetic Types
Standardized interfaces for mathematical datatypes, such as Complex, Fraction and Matrix.  
**This repository is a draft, the standard has not been adopted anywhere yet.**

# Overview
 * Every implementation of an _Arithmetic Types_ interface **must** provide an `Arithmetic` object with static methods such as `add(x, y)` which accept arguments of a single datatype and perform arithmetic operations on it.
 * The methods of `Arithmetic` **must** treat the arguments as immutable and return a new instance where applicable.
 * Every instance of the datatype **must** provide a `x.clone()` method and a reference to the `Arithmetic` object using `x[Symbol.for('arithmetic')]`.
 * The instances may or may not implement arithmetic methods such as `x.add(y)`; if they do, these arithmetic methods **should** be mutating.

# Example usage
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

  const sum = args.reduce( (a, b) => arithmetics.mul(a, b), first )
  const count = args.length + 1

  return arithmetics.pow(sum, 1/count)
}
```
