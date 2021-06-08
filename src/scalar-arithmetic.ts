export namespace symbols {
    export const AdditiveGroup =      Symbol.for('arithmetics-additive-group')
    export const VectorSpace =        Symbol.for('arithmetics-vector-space')
    export const NormedVectorSpace =  Symbol.for('arithmetics-normed-vector-space')
    export const UnitarySpace =       Symbol.for('arithmetics-unitary-space')
    export const Ring =               Symbol.for('arithmetics-ring')
    export const DivisionRing =       Symbol.for('arithmetics-division-ring')
    export const NormedDivisionRing = Symbol.for('arithmetics-normed-division-ring')
    export const Real =               Symbol.for('arithmetics-real')
}

export interface AdditiveGroup<T> {
    [symbols.AdditiveGroup]: true

    add(a: T, b: T): T
    sub(a: T, b: T): T
    neg(a: T): T

    equals(a: T, b: T): boolean
    approximatelyEquals(a: T, b: T, epsilon): boolean

    isFinite(a: T): boolean
    isNaN(a: T): boolean

    zero(): T
    epsilon(): T
}

export interface VectorSpace<T, F>
extends AdditiveGroup<T> {
    [symbols.VectorSpace]: true

    scale(a: T, s: number): T
    scale(a: T, s: F): T
}

export interface NormedVectorSpace<T, F>
extends VectorSpace<T, F> {
    [symbols.NormedVectorSpace]: true

    norm(a: T): F
    normSq(a: T): F
}

export interface UnitarySpace<T, F>
extends NormedVectorSpace<T, F> {
    [symbols.UnitarySpace]: true

    dot(a: T, b: T): F
}

export interface Ring<T>
extends AdditiveGroup<T> {
    [symbols.Ring]: true
    isCommutative: boolean

    mul(a: T, b: T): T

    pow(a: T, b: number): T
    exp(a: T): T
    expm1(a: T): T

    one(): T
}

export interface DivisionRing<T>
extends Ring<T> {
    [symbols.DivisionRing]: true

    inv(a: T): T
    div(a: T, b: T): T
}

export interface NormedDivisionRing<T, F>
extends DivisionRing<T>, NormedVectorSpace<T, F> {
    [symbols.NormedDivisionRing]: true

    fromNumber(a: number): T
    fromReal(a: F): T

    conj(a: T): T
    real(a: T): F
    imag(a: T): T

    pow(a: T, b: number): T
    pow(a: T, b: T): T

    log(a: T): T
    log1p(a: T): T
}

export interface Real<T>
extends NormedDivisionRing<T, T> {
    [symbols.Real]: true

    toNumber(a: T): number

    compare(a: T, b: T): -1 | 0 | 1
    lt(a: T, b: T): boolean
    lte(a: T, b: T): boolean
    gte(a: T, b: T): boolean
    gt(a: T, b: T): boolean
}
