// test/index.test.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { describe, expect, test } from 'bun:test';
    import { JSDOM } from 'jsdom';
    import { render } from '@minejs/jsx';
    import {
        SpacerProps, 
        Spacer,
    } from '../src';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    const dom               = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    global.document         = dom.window.document;
    global.window           = dom.window as any;
    global.HTMLElement      = dom.window.HTMLElement;
    global.Element          = dom.window.Element;
    global.DocumentFragment = dom.window.DocumentFragment;
    global.Node             = dom.window.Node;

    function renderSpacer(props: SpacerProps): HTMLElement {
        document.body.innerHTML = '';
        const root = document.createElement('div');
        root.id = 'app';
        document.body.appendChild(root);
        const element = Spacer(props);
        render(element, '#app');
        const rendered = root.firstElementChild as HTMLElement | null;
        if (!rendered) throw new Error('Spacer did not render any element');
        return rendered;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ TEST ════════════════════════════════════════╗

    describe('@cruxkit/spacer', () => {
        
        test('renders without crashing', () => {
            const el = renderSpacer({});
            expect(el.tagName).toBe('DIV');
            expect(el.getAttribute('aria-hidden')).toBe('true');
        });

        test('renders with default props', () => {
            const el = renderSpacer({});
            // Default axis is 'both', but without size it returns empty string for sizeClasses
            // !flex (true) && '' -> false/empty
            // className undefined
            // So class should be empty
            expect(el.className).toBe('');
        });

        test('renders with specific size and default axis (both)', () => {
            const el = renderSpacer({ size: 4 });
            expect(el.className).toContain('size-4');
        });

        test('renders with axis x', () => {
            const el = renderSpacer({ size: 4, axis: 'x' });
            expect(el.className).toContain('w-4');
            expect(el.className).not.toContain('h-4');
            expect(el.className).not.toContain('size-4');
        });

        test('renders with axis y', () => {
            const el = renderSpacer({ size: 8, axis: 'y' });
            expect(el.className).toContain('h-8');
            expect(el.className).not.toContain('w-8');
        });

        test('renders with axis both', () => {
            const el = renderSpacer({ size: 16, axis: 'both' });
            expect(el.className).toContain('size-16');
        });

        test('renders with flex prop', () => {
            const el = renderSpacer({ flex: true });
            expect(el.className).toContain('flex-1');
            // When flex is true, size classes should be ignored
            const elWithSize = renderSpacer({ flex: true, size: 4 });
            expect(elWithSize.className).toContain('flex-1');
            expect(elWithSize.className).not.toContain('size-4');
            expect(elWithSize.className).not.toContain('w-4');
        });

        test('appends custom className', () => {
            const el = renderSpacer({ size: 4, className: 'custom-class' });
            expect(el.className).toContain('size-4');
            expect(el.className).toContain('custom-class');
        });

        test('handles all sizes for axis x', () => {
            const sizes = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24] as const;
            sizes.forEach(size => {
                const el = renderSpacer({ size, axis: 'x' });
                expect(el.className).toBe(`w-${size}`);
            });
        });

        test('handles all sizes for axis y', () => {
            const sizes = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24] as const;
            sizes.forEach(size => {
                const el = renderSpacer({ size, axis: 'y' });
                expect(el.className).toBe(`h-${size}`);
            });
        });

        test('handles all sizes for axis both', () => {
            const sizes = [1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24] as const;
            sizes.forEach(size => {
                const el = renderSpacer({ size, axis: 'both' });
                expect(el.className).toBe(`size-${size}`);
            });
        });

    });

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
