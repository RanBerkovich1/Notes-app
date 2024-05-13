import { createBoard } from '@wixc3/react-board';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    Label as DropdownMenuLabel,
    Item as DropdownMenuItem,
    Arrow as DropdownMenuArrow,
    Portal as DropdownMenuPortal,
} from '@radix-ui/react-dropdown-menu';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

export default createBoard({
    name: 'DropdownMenu',
    Board: () => (
        <DropdownMenuRoot>
            <DropdownMenuTrigger>
                <DotsVerticalIcon />
            </DropdownMenuTrigger>

            <DropdownMenuPortal>
                <DropdownMenuContent>
                    <DropdownMenuArrow />
                    <DropdownMenuLabel>Menu</DropdownMenuLabel>

                    <DropdownMenuItem>Simle item 1</DropdownMenuItem>
                    <DropdownMenuItem>Simle item 2</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenuPortal>
        </DropdownMenuRoot>
    ),
    isSnippet: true,
});
