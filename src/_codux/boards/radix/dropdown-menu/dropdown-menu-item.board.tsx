import { createBoard, ContentSlot } from '@wixc3/react-board';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    Item as DropdownMenuItem,
} from '@radix-ui/react-dropdown-menu';

export default createBoard({
    name: 'DropdownMenu Item',
    Board: () => (
        <DropdownMenuRoot open={true}>
            <DropdownMenuTrigger />
            <DropdownMenuContent>
                <ContentSlot>
                    <DropdownMenuItem>Item</DropdownMenuItem>
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
