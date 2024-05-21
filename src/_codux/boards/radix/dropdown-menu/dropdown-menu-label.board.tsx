import { createBoard, ContentSlot } from '@wixc3/react-board';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    Label as DropdownMenuLabel,
} from '@radix-ui/react-dropdown-menu';

export default createBoard({
    name: 'DropdownMenu Label',
    Board: () => (
        <DropdownMenuRoot open={true}>
            <DropdownMenuTrigger />
            <DropdownMenuContent>
                <ContentSlot>
                    <DropdownMenuLabel>Label</DropdownMenuLabel>
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
