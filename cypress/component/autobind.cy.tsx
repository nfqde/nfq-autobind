/* eslint-disable max-classes-per-file */
import {autobind} from '../../src/index';

describe('autobind decorator', () => {
    it('should bind the method to the class instance', () => {
        /**
         * Test class to demonstrate the autobind decorator.
         */
        class TestClass {
            id: number;

            /**
             * Constructor.
             *
             * @param id The id of the instance.
             */
            constructor(id: number) {
                this.id = id;
            }

            /**
             * Get the id of the instance.
             *
             * @returns The id of the instance.
             */
            // @ts-expect-error
            @autobind
            getId() {
                return this.id;
            }
        }

        const instance = new TestClass(42);

        const unboundMethod = instance.getId;
        const result = unboundMethod();

        expect(result).to.equal(42);
    });

    it('should throw if the decorated property is not a function', () => {
        /**
         * Test class to demonstrate the autobind decorator.
         */
        class BadClass {
            // @ts-expect-error
            @autobind
                notAFunction: any = 123;
        }

        expect(() => {
            // eslint-disable-next-line no-new
            new BadClass();
        }).to.throw('Expected notAFunction to be a function');
    });
});