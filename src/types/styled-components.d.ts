import { dark } from "../theme/dark";

type Theme = typeof dark

declare module "styled-components"{
    export interface DefaultTheme extends Theme{}
}