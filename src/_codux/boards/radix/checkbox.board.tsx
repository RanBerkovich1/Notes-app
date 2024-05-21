import { createBoard } from '@wixc3/react-board';
import { Root as CheckboxRoot, Indicator as CheckboxIndicator } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export default createBoard({
    name: 'Checkbox',
    Board: () => (
        <div>
            <CheckboxRoot defaultChecked>
                <CheckboxIndicator className="CheckboxIndicator">
                    <CheckIcon />
                </CheckboxIndicator>
            </CheckboxRoot>
            <label>Accept terms and conditions.</label>
        </div>
    ),
    isSnippet: true,
});
