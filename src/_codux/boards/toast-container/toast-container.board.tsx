import { createBoard } from '@wixc3/react-board';
import { ToastContainer } from '../../../components/toast-container/toast-container';
import * as RadixToast from '@radix-ui/react-toast';
import { Button } from '../../../components/button/button';
import { useToastStore } from '../../../components/toast-container/toast-store';
import ToastContainer_board_module from './toast-container.board.module.scss';

export default createBoard({
    name: 'ToastContainer',
    Board: () => {
        const { openToast } = useToastStore();
        return (
            <RadixToast.Provider>
                <div className={ToastContainer_board_module.root}>
                    <Button
                        onClick={() => {
                            openToast({
                                title: 'Toast #1',
                                description: 'Description #1',
                            });
                        }}
                    >
                        Open Toast #1
                    </Button>
                    <Button
                        onClick={() => {
                            openToast({
                                title: 'Toast #2',
                                description: 'Description #2',
                                action: <Button>Action</Button>,
                            });
                        }}
                    >
                        Open Toast #2
                    </Button>
                </div>
                <ToastContainer />
            </RadixToast.Provider>
        );
    },
    isSnippet: false,
});
