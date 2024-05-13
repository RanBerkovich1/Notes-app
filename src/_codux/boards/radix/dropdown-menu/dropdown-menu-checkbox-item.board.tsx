import { createBoard, ContentSlot } from '@wixc3/react-board';
import { CheckIcon } from '@radix-ui/react-icons';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    CheckboxItem as DropdownMenuCheckboxItem,
    ItemIndicator as DropdownMenuItemIndicator,
} from '@radix-ui/react-dropdown-menu';

export default createBoard({
    name: 'DropdownMenu CheckboxItem',
    Board: () => (
        <DropdownMenuRoot open={true}>
            <DropdownMenuTrigger />
            <DropdownMenuContent>
                <ContentSlot>
                    <DropdownMenuCheckboxItem>
                        <DropdownMenuItemIndicator>
                            <CheckIcon />
                        </DropdownMenuItemIndicator>
                        Checkbox item
                    </DropdownMenuCheckboxItem>
                </ContentSlot>
            </DropdownMenuContent>
        </DropdownMenuRoot>
    ),
    isSnippet: true,
    environmentProps: {
        canvasHeight: 51,
        canvasWidth: 133,
        windowWidth: 342,
        windowHeight: 300,
    },
});
