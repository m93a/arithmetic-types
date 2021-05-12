import { NormedDivisionRing } from "./scalar-arithmetic"

export namespace symbols {
    export const Arithmetics = Symbol.for('arithmetics')
}

export interface InstanceOf<A> {
    [symbols.Arithmetics]: A
    clone(): this
}

type IgnoreNever<T> = Pick<T, { [K in keyof T]: T[K] extends never ? never : K }[keyof T]>

export type InstanceWithMethods<T extends InstanceOf<A>, A> = InstanceOf<A> & IgnoreNever<{
    [method in keyof A]:
        A[method] extends (self: T, ...args: infer args) => T ? (...args: args) => void :
        A[method] extends (self: T, ...args: infer args) => infer R ? (...args: args) => R :
        never
}>
