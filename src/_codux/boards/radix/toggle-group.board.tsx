import { createBoard } from '@wixc3/react-board';
import { Root as ToggleGroupRoot, Item as ToggleGroupItem } from '@radix-ui/react-toggle-group';

export default createBoard({
    name: 'ToggleGroup',
    Board: () => (
        <ToggleGroupRoot defaultValue={'item1'} type="single">
            <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
            <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
        </ToggleGroupRoot>
    ),
    isSnippet: true,
});
