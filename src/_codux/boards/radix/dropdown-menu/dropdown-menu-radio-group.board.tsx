import { createBoard, ContentSlot } from '@wixc3/react-board';
import {
    Root as DropdownMenuRoot,
    Trigger as DropdownMenuTrigger,
    Content as DropdownMenuContent,
    RadioGroup as DropdownMenuRadioGroup,
    RadioItem as DropdownMenuRadioItem,
    ItemIndicator as DropdownMenuItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { DotFilledIcon } from '@radix-ui/react-icons';

export default createBoard({
    name: 'DropdownMenu RadioGroup',
    Board: () => (
        <DropdownMenuRoot open={true}>
            <DropdownMenuTrigger />
            <DropdownMenuContent>
                <ContentSlot>
                    <DropdownMenuRadioGroup>
                        <DropdownMenuRadioItem value="item">
                            <DropdownMenuItemIndicator>
                                <DotFilledIcon />
                            </DropdownMenuItemIndicator>
                            Radio item
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
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
