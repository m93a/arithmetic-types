import { NormedVectorSpace } from "./scalar-arithmetic";

export type TensorNormType = number | '-inf' | 'inf' | 'fro'
export type ArrayTensor<F> = F[] | ArrayTensor<F>[]

export interface Tensor<T, F>
extends NormedVectorSpace<T, F> {
    size(a: T): number[],
    element(a: T, index: number[]): F

    norm(a: T, which?: TensorNormType): F
    normSq(a: T, which?: TensorNormType): F

    dotAdd(a: T, b: F): T
    dotSub(a: T, b: F): T
    dotMul(a: T, b: F): T
    dotDiv(a: T, b: F): T
    dotPow(a: T, b: F): T
    dotExp(a: T): T
    dotExpm1(a: T): T

    kron(a: T, b: T): T

    zero(): never
    zero(size: number[]): T

    fromArray(arr: ArrayTensor<F>): T
    fromFunction(fn: (index: number[]) => F): T

    map(a: T, fn: (v: F, index: number[]) => F): T
    forEach(a: T, fn: (v: F, index: number[]) => void): void
}
