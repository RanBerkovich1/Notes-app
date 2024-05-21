import { createBoard, ContentSlot } from '@wixc3/react-board';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    Sub as DropdownMenuSub,
    SubTrigger as DropdownMenuSubTrigger,
    SubContent as DropdownMenuSubContent,
    Item as DropdownMenuItem,
    Portal as DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';

export default createBoard({
    name: 'DropdownMenu Submenu',
    Board: () => (
        <DropdownMenuRoot open={true}>
            <DropdownMenuTrigger />
            <DropdownMenuContent>
                <ContentSlot>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Submenu trigger</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Submenu item</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
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
