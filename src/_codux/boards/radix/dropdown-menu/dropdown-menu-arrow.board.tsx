import { createBoard, ContentSlot } from '@wixc3/react-board';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    Arrow as DropdownMenuArrow,
} from '@radix-ui/react-dropdown-menu';

export default createBoard({
    name: 'DropdownMenu Arrow',
    Board: () => (
        <DropdownMenuRoot open={true}>
            <DropdownMenuTrigger />
            <DropdownMenuContent>
                <ContentSlot>
                    <DropdownMenuArrow />
                </ContentSlot>
            </DropdownMenuContent>
        </DropdownMenuRoot>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 51,
        canvasWidth: 27,
        windowWidth: 342,
        windowHeight: 300,
    },
});
