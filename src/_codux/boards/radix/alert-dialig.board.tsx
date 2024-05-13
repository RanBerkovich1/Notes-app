import { createBoard } from '@wixc3/react-board';
import {
    Root as AlertDialogRoot,
    Trigger as AlertDialogTrigger,
    Portal as AlertDialogPortal,
    Overlay as AlertDialogOverlay,
    Content as AlertDialogContent,
    Title as AlertDialogTitle,
    Description as AlertDialogDescription,
    Cancel as AlertDialogCancel,
    Action as AlertDialogAction,
} from '@radix-ui/react-alert-dialog';

export default createBoard({
    name: 'Alert Dialog',
    Board: () => (
        <AlertDialogRoot>
            <AlertDialogTrigger>Open dialog</AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogOverlay />
                <AlertDialogContent>
                    <AlertDialogTitle>Title</AlertDialogTitle>
                    <AlertDialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor
                        massa id neque aliquam vestibulum morbi blandit.
                    </AlertDialogDescription>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialogRoot>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1780,
        canvasHeight: 513,
        windowWidth: 694,
    },
});
