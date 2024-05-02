import '../../styles/common/style-guide.css';
import { createBoard } from '@wixc3/react-board';
import StyleGuide_board_module from './style-guide.board.module.scss';
import Classnames from 'classnames';
import SectionSvg from '../../assets/section.svg';

export default createBoard({
    name: 'StyleGuide',
    Board: () => (
        <div className={Classnames(StyleGuide_board_module.root)}>
            <div className={StyleGuide_board_module.pageHeader}>
                <h1 className={StyleGuide_board_module.TitleHeader}>Style Guide</h1>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src="" />
                    <h2></h2>
                </div>
                Typography
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Defines the fonts used for headings, body text, labels, etc., including size,
                    weight, and spacing.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Font Family</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div className={StyleGuide_board_module.FontFamilyContainer}>
                        <span className={StyleGuide_board_module.FontFamilyAa}>Aa</span>
                        <span className={Classnames('pNormal')}>Wix Madefor Display </span>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                Warning
                <h2 className={StyleGuide_board_module.subSectionTitle}>Main Heading / h1</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h1 className="h1Bold">Heading 42</h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h1Bold <br /> DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <h1 className="h1Normal">Heading 42</h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h1Normal <br /> DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <h1 className={Classnames('h1Light', StyleGuide_board_module.margin)}>
                            Heading 42
                        </h1>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h1Light <br /> DM Sans, 300
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Subheading / h2</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <h2 className={Classnames('h2Bold', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h2Bold <br /> DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Normal', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h2Normal
                            <br />
                            DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <h2 className={Classnames('h2Light', StyleGuide_board_module.margin)}>
                            Heading 28
                        </h2>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            h2Light <br /> DM Sans, 300
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Body / p</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('pBold', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            pBold <br /> DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('pNormal', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            pNormal
                            <br />
                            DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('pLight', StyleGuide_board_module.margin)}>
                            Paragraph 12
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            pLight
                            <br />
                            DM Sans, 300
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Smaller Text</h2>
                <div className={StyleGuide_board_module.grid}>
                    <div>
                        <p className={Classnames('smallBold', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            smallBold
                            <br />
                            DM Sans, 700
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('smallNormal', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            smallNormal
                            <br />
                            DM Sans, 400
                        </div>
                    </div>
                    <div>
                        <p className={Classnames('smallLight', StyleGuide_board_module.margin)}>
                            Detail Text 11
                        </p>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            smallLight
                            <br />
                            DM Sans, 300
                        </div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Colors</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Colors are a powerful tool in design for communicating meaning and influencing
                    user perception. Here&apos;s colors can contribute to the success of your design
                    by conveying specific
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Primary / Grass</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'grass1')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            grass1
                            <br />
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.colorContainer,
                                StyleGuide_board_module.grass2,
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            grass2 <br />
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'grass3')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            grass3
                            <br />
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'grass4')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            grass4
                            <br />{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'grass5')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            grass5
                            <br />{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.colorContainer,
                                'grassdark',
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            grassdark
                            <br />{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Secondary / Sand</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'sand1')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            sand1
                            <br />
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'sand2')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            sand2
                            <br />
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(StyleGuide_board_module.colorContainer, 'sand3')}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>
                            sand3
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Shadows</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Shadows help create the illusion of depth and dimension in a flat, 2D digital
                    space. By simulating how light interacts with objects in the real world, shadows
                    visually separate elements, define their shapes, and show their relative
                    positions.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(
                                'shadow100',
                                StyleGuide_board_module.shadowContainer,
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>shadow100</div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                'shadow200',
                                StyleGuide_board_module.shadowContainer,
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>shadow200</div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                'shadow300',
                                StyleGuide_board_module.shadowContainer,
                            )}
                        />
                        <div className={StyleGuide_board_module.subtitleValue}>shadow300</div>
                    </div>
                </div>
            </div>
            <div className={StyleGuide_board_module.SectionContainer}>
                <div className={StyleGuide_board_module.SectionTitle}>
                    <img src={SectionSvg} />
                    <h2>Spacing</h2>
                </div>
                <p className={StyleGuide_board_module.SectionSubtitle}>
                    Spacing is a crucial element in design systems, as it dictates the negative
                    space or &quot;white space&quot; between UI components. This space plays a
                    significant role in visual Hierarchy, Aesthetics and Balance.
                </p>
            </div>
            <div className={StyleGuide_board_module.subsectionContainer}>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Margin</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin2',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin2
                            <br />
                            2px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    'margin4',
                                    StyleGuide_board_module.spacingBox,
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin4
                            <br />
                            4px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin6',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin6
                            <br />
                            6px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin12',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin16',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin16
                            <br />
                            16px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin24',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin24
                            <br />
                            24px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin32',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin32
                            <br />
                            32px{' '}
                        </div>
                    </div>
                    <div>
                        <div className={StyleGuide_board_module.marginContainer}>
                            <div
                                className={Classnames(
                                    StyleGuide_board_module.spacingBox,
                                    'margin40',
                                )}
                            />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            margin40
                            <br />
                            40px{' '}
                        </div>
                    </div>
                </div>
                <h2 className={StyleGuide_board_module.subSectionTitle}>Padding</h2>
                <div className={StyleGuide_board_module.FlexContainer}>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding2',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding2
                            <br />
                            2px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                'padding4',
                                StyleGuide_board_module.paddingContainer,
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding4
                            <br />
                            4px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding6',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding6
                            <br />
                            6px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding8',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding8
                            <br />
                            8px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding12',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding12
                            <br />
                            12px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding16',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding16
                            <br />
                            16px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding24',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding24
                            <br />
                            24px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding32',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding32
                            <br />
                            32px{' '}
                        </div>
                    </div>
                    <div>
                        <div
                            className={Classnames(
                                StyleGuide_board_module.paddingContainer,
                                'padding40',
                            )}
                        >
                            <div className={StyleGuide_board_module.spacingBox} />
                        </div>
                        <div className={StyleGuide_board_module.subtitleValue}>
                            padding40
                            <br />
                            40px{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1014,
        canvasWidth: 1018.9472083416653,
        canvasHeight: 1576,
        windowHeight: 1659,
    },
});
