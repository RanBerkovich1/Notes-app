import { ContentSlot, createBoard } from '@wixc3/react-board';
import { Toast } from '../../../components/toast/toast';
import * as RadixToast from '@radix-ui/react-toast';
import { Button } from '../../../components/button/button';
import { useState } from 'react';

export default createBoard({
    name: 'Toast',
    Board: () => {
        const [open, setOpen] = useState(false);
        return (
            <RadixToast.Provider>
                <ContentSlot>
                    <Toast
                        title="Toast title"
                        description="Toast description"
                        action={<Button>Action</Button>}
                        open={true}
                    />
                </ContentSlot>
                <RadixToast.Viewport />
            </RadixToast.Provider>
        );
    },
    isSnippet: true,
    environmentProps: {
        canvasPadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
        },
    },
});
