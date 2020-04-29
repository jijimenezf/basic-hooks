import { act } from 'react-dom/test-utils';
import testHook from './testHook';
import useTextField from '../useTextField';

describe('useTextField react hook', () => {
    let customTextField;
    const nameField = 'name';
    const inputData = 'This is a react hook test';
    beforeEach(() => {
        testHook(() => {
            customTextField = useTextField(nameField);
        });
    });

    it('should have an onChange function', () => {
        expect(customTextField.onChange).toBeInstanceOf(Function);
    });

    it('should have the correct name', () => {
        expect(customTextField.name).toEqual(nameField);
    });

    it('should update the current input', () => {
        expect(customTextField.value).toEqual('');
        act(() => {
            /* fire events that update state */
            customTextField.onChange({
                target: {
                    value: inputData
                }
            });
        });
        expect(customTextField.value).toEqual(inputData);
    });
});
