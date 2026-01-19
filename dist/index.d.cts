import { JSXElement } from '@minejs/jsx';

interface SpacerProps {
    size?: 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24;
    axis?: 'x' | 'y' | 'both';
    flex?: boolean;
    className?: string;
}

/**
 * Renders a visual spacer element to control layout spacing.
 *
 * @param props - Configuration for the spacer.
 * @returns A hidden `<div>` that provides spacing via mineui utility classes.
 *
 * @example
 * // Fixed 16px square spacer
 * <Spacer size={16} axis="both" />
 *
 * @example
 * // Flexible spacer that fills remaining space
 * <Spacer flex />
 */
declare function Spacer(props: SpacerProps): JSXElement;

export { Spacer, type SpacerProps };
