import { createBoard } from '@wixc3/react-board';
import {
    Root as AccordionRoot,
    Item as AccordionItem,
    Header as AccordionHeader,
    Content as AccordionContent,
    Trigger as AccordionTrigger,
} from '@radix-ui/react-accordion';

export default createBoard({
    name: 'Accordion',
    Board: () => (
        <AccordionRoot type="single" defaultValue="item1">
            <AccordionItem value="item1">
                <AccordionHeader>
                    <AccordionTrigger>item 1</AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Vel facilisis volutpat est velit.
                    Morbi leo urna molestie at.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
                <AccordionHeader>
                    <AccordionTrigger>Item 2</AccordionTrigger>
                </AccordionHeader>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Proin sagittis nisl rhoncus mattis
                    rhoncus urna. Eu ultrices vitae auctor eu augue ut. Nisi est sit amet facilisis
                    magna etiam. Consequat id porta nibh venenatis cras sed felis eget velit.
                </AccordionContent>
            </AccordionItem>
        </AccordionRoot>
    ),
    environmentProps: {
        canvasWidth: 222,
        windowHeight: 414,
        windowWidth: 410,
    },
    isSnippet: true,
});
