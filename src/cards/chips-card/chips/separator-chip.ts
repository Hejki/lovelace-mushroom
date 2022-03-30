import { HomeAssistant } from "custom-card-helpers";
import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
    computeChipComponentName,
    computeChipEditorComponentName,
} from "../../../utils/lovelace/chip/chip-element";
import { SeparatorChipConfig, LovelaceChip } from "../../../utils/lovelace/chip/types";
import { LovelaceChipEditor } from "../../../utils/lovelace/types";

@customElement(computeChipComponentName("separator"))
export class SeparatorChip extends LitElement implements LovelaceChip {
    public static async getConfigElement(): Promise<LovelaceChipEditor> {
        await import("./separator-chip-editor");
        return document.createElement(computeChipEditorComponentName("separator")) as LovelaceChipEditor;
    }

    public static async getStubConfig(_hass: HomeAssistant): Promise<SeparatorChipConfig> {
        return {
            type: `separator`,
        };
    }

    @property({ attribute: false }) public hass?: HomeAssistant;

    @state() private _config?: SeparatorChipConfig;

    public setConfig(config: SeparatorChipConfig): void {
        this._config = config;

        const fixedWidth = config.fixed_width

        if (fixedWidth) {
            this.style.width = fixedWidth;
        } else {
            this.style.flexGrow = "1";
        }
    }

    protected render(): TemplateResult {
        return html``;
    }
}
