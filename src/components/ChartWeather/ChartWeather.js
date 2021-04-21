import './ChartWeather.scss';
import Sun from '../../assets/sun'
import Context from '../../contexts/context'
import { useContext } from 'react';
import { AreaChart, ResponsiveContainer, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function ChartWeather() {
    const { chartData } = useContext(Context);

    return (
        <div className='weather-chart'>
            <div className='chart-type'>
                <span>Tide</span>
                <span>•</span>
                <span>Sunrire & Sunset</span>
            </div>
            <ResponsiveContainer width={2400} height='100%'>
                <AreaChart data={chartData}>
                    <Area type="monotone" dataKey="tide" stroke="#8884d8" fillOpacity={1} fill="#94d6f7" />
                    <Area type="monotone" dataKey="sun" stroke="orange" fillOpacity={0} dot={<CustomizedDot />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0 10" />
                    <XAxis dataKey="hour" />
                    <Tooltip content={<CustomTooltip />} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].dataKey} : ${payload[0].value}m`}</p>
            </div>
        );
    }

    return null;
}

const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
    if (value[1] > 0) {
        return (
            <Sun cx={cx} cy={cy} />
        );
    }
    return null;
};

export default ChartWeather;
