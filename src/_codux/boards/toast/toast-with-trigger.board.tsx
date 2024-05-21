import { ContentSlot, createBoard } from '@wixc3/react-board';
import { Toast } from '../../../components/toast/toast';
import * as RadixToast from '@radix-ui/react-toast';
import { useState } from 'react';
import { Button } from '../../../components/button/button';
import { ToastViewport } from '../../../components/toast-viewport/toast-viewport';

export default createBoard({
    name: 'Toast With Trigger',
    Board: () => {
        const [open, setOpen] = useState(false);

        return (
            <RadixToast.Provider>
                <ContentSlot>
                    <>
                        <Button onClick={() => setOpen(true)}>Open Toast</Button>
                        <Toast
                            title="Note moved to Trash"
                            description="It didn't delete permanently"
                            open={open}
                            onOpenChange={setOpen}
                            action={<Button>Undo</Button>}
                        />
                    </>
                </ContentSlot>
                <ToastViewport />
            </RadixToast.Provider>
        );
    },
    isSnippet: true,
});
