import Sun from '../assets/sun'
import Moon from '../assets/moon'

export const CustomTooltip = ({ payload, active }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Tide : ${payload[0].value}m`}</p>
            </div>
        );
    }

    return null;
}

export const CustomizedActiveDot = (props) => {
    const { cx, cy, value } = props;
    if (value[1] > 0) {
        return (
            <Sun cx={cx} cy={cy} />
        );
    }
    return (
        <Moon cx={cx} cy={cy} />
    );
};