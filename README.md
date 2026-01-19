<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.2-black"/>
    <a href="https://github.com/cruxkit-org"><img src="https://img.shields.io/badge/🔥-@cruxkit-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxkit-org/spacer?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxkit-org/spacer?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀
    - #### Why ?
        > Decouple spacing from components. Treat empty space as a first-class citizen in your layout for better readability and maintainability.

    - #### When ?
        > Use it in flex layouts to create fixed gaps or push items apart without polluting component styles with margins.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxkit/spacer
    ```

    ```ts
    // in your ts files
    import { Spacer } from `@cruxkit/spacer`;
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>

    - ### Fixed Spacing

        ```typescript
        // Add a 16px gap between buttons
        <div className="flex">
            <Button>Cancel</Button>
            <Spacer size={4} axis="x" />
            <Button>Confirm</Button>
        </div>
        ```

    - ### Flexible Spacing

        ```typescript
        // Push items to opposite ends
        <div className="flex">
            <Logo />
            <Spacer flex />
            <Menu />
        </div>
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### Functions

            ```typescript
            // Renders a visual spacer element to control layout spacing.
            export function Spacer(props: SpacerProps): JSXElement
            ```

        - #### Types

            ```typescript
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
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)

        - ##### [@mineui/utils](https://github.com/mineui-org/utils)

        - ##### [@cruxkit/..](https://github.com/cruxkit-org)


<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->
