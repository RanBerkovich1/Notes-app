import { createBoard } from '@wixc3/react-board';
import { ToastViewport } from '../../../components/toast-viewport/toast-viewport';
import * as RadixToast from '@radix-ui/react-toast';

export default createBoard({
    name: 'ToastViewport',
    Board: () => (
        <RadixToast.Provider>
            <ToastViewport />
        </RadixToast.Provider>
    ),
    isSnippet: false,
});
