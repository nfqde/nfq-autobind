/* eslint-disable jsdoc/check-indentation, security/detect-object-injection, func-names */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type MethodNames<T> = {[K in keyof T]: T[K] extends Function ? K : never}[keyof T];

/**
 * A decorator function that automatically binds class methods to the instance of the class.
 * This function is intended to be used as a decorator on class methods to ensure the correct context (`this` value)
 * is maintained when the method is called, especially when passing the method as a callback.
 *
 * @param _target                The prototype of the class (not used in the implementation but required by the decorator signature).
 * @param context                The context provided by the decorator, containing the method's name and an initializer function.
 * @param context.addInitializer A function that adds an initializer to the class constructor.
 * @param context.name           The name of the method to be bound.
 *
 * @example
 * ```tsx
 * class MyComponent {
 *   @autobind
 *   myMethod() {
 *     // This method is automatically bound to instances of MyComponent.
 *   }
 * }
 * ```
 */
export const autobind = <This, Args extends any[], Return>(
    _target: (this: This, ...args: Args) => Return,
    {addInitializer, name}: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
): any => {
    addInitializer(function(this: This) {
        const fn = this[name as MethodNames<This>];

        if (typeof fn !== 'function') {
            throw new Error(`Expected ${String(name)} to be a function`);
        }
        this[name as MethodNames<This>] = fn.bind(this);
    });
};