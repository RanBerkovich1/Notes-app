import { createBoard } from '@wixc3/react-board';
import {
    Root as DialogRoot,
    Trigger as DialogTrigger,
    Portal as DialogPortal,
    Overlay as DialogOverlay,
    Content as DialogContent,
    Title as DialogTitle,
    Description as DialogDescription,
    Close as DialogClose,
} from '@radix-ui/react-dialog';

export default createBoard({
    name: 'Dialog',
    Board: () => (
        <DialogRoot>
            <DialogTrigger>Open dialig</DialogTrigger>
            <DialogPortal>
                <DialogOverlay />
                <DialogContent>
                    <DialogTitle>Title</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Consequat ac felis donec
                        et odio pellentesque diam volutpat. Scelerisque eleifend donec pretium
                        vulputate sapien.
                    </DialogDescription>
                    <DialogClose>Close</DialogClose>
                </DialogContent>
            </DialogPortal>
        </DialogRoot>
    ),
    isSnippet: true,
});
