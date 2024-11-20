import {m} from 'malevic';
import {Button, Toggle, UpDown} from '../../../controls';
import {getLocalMessage} from '../../../../utils/locales';

interface EyeCareToggleProps {
    enabled: boolean;
    intensity: number;
    onChange: (enabled: boolean) => void;
    onIntensityChange: (intensity: number) => void;
}

export default function EyeCareToggle({
    enabled,
    intensity,
    onChange,
    onIntensityChange
}: EyeCareToggleProps) {
    return (
        <div class="eye-care-toggle">
            <div class="eye-care-toggle__line">
                <Button
                    class={{'eye-care-toggle__button--active': enabled}}
                    onclick={() => onChange(!enabled)}
                >
                    <span class="icon icon--eye-care"></span>
                </Button>
                <Toggle
                    checked={enabled}
                    labelOn={getLocalMessage('eyeCareOn') || 'Eye Care On'}
                    labelOff={getLocalMessage('eyeCareOff') || 'Eye Care Off'}
                    onChange={(checked) => onChange(checked)}
                />
            </div>
            {enabled && (
                <UpDown
                    value={intensity * 100}
                    min={10}
                    max={50}
                    step={5}
                    default={30}
                    name={getLocalMessage('eyeCareIntensity') || 'Intensity'}
                    onChange={(value) => onIntensityChange(value / 100)}
                />
            )}
            <label class="eye-care-toggle__label">
                {getLocalMessage('eyeCare') || 'Eye Care Mode'}
            </label>
        </div>
    );
}