// src/types.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ TYPE ════════════════════════════════════════╗

    export interface SpacerProps {
        // Size
        size?       : 1 | 2 | 3 | 4 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

        // Direction
        axis?       : 'x' | 'y' | 'both';

        // Flex grow
        flex?       : boolean;

        // Styling
        className?  : string;
    }

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
