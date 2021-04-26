import '../../styles/ChartWeather.scss';
import { useAppContext } from '../../contexts/context'
import { CustomTooltip, CustomizedActiveDot } from '../../utils/utils'
import { useEffect, useState } from 'react';
import { AreaChart, ResponsiveContainer, Label, Area, ReferenceArea, CartesianGrid, XAxis, Tooltip } from 'recharts';

function ChartWeather() {
    const [{ chartData }] = useAppContext();
    const [nightTime, setNightTime] = useState([{ start: 0, end: 3 }]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const night = parseInt(chartData.length / 12);
        let arr = [{ start: 0, end: 3 }];
        if (night > 0) {
            for (let i = 0; i < night; i++) {
                if (i !== night - 1) {
                    arr.push({ start: arr[i].end + 6, end: arr[i].end + 12 })
                }
                else {
                    arr.push({ start: arr[i].end + 6, end: arr[i].end + 9 })
                }
            }
        }
        console.log('NightTime', arr);
        setNightTime([...arr]);
        onResizeWidth();

        window.addEventListener('resize', onResizeWidth);
        return () => {
            window.removeEventListener('resize', onResizeWidth);
        }
    }, [])

    useEffect(() => {
        if (nightTime.length > 1) {
            setTimeout(() => {
                setWindowWidth(windowWidth + 1);
                onResizeWidth();
            }, 500)
        }
    }, [nightTime])


    const onResizeWidth = e => {
        const width = window.innerWidth;
        setWindowWidth(width)
    };
    return (
        <div className='weather-chart'>
            <ResponsiveContainer key={windowWidth} width={2500} height='100%'>
                <AreaChart data={chartData}>
                    <XAxis dataKey="hour" />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="0 5" />
                    <Area type="monotone" dataKey="tide" stroke="#8884d8" fillOpacity={1} fill="#94d6f7" />
                    {nightTime ? nightTime.map((item, idx) => (
                        <ReferenceArea key={idx} x1={item.start} x2={item.end} y1={0} y2={8} strokeOpacity={1} >
                            {
                                idx !== nightTime.length - 1
                                && <Label
                                    value={`Day ${idx + 1}`}
                                    offset={50}
                                    position="right"
                                />
                            }
                        </ReferenceArea>
                    )) : null}
                    <Area
                        type="monotoneX"
                        dataKey="sun"
                        stroke="orange"
                        fillOpacity={0}
                        dot={windowWidth <= 1024 ? <CustomizedActiveDot /> : false}
                        activeDot={<CustomizedActiveDot />}
                    />
                </AreaChart>
            </ResponsiveContainer>
            <div className='chart-type'>
                <span>Tide</span>
                <span>•</span>
                <span>Sunrire & Sunset</span>
            </div>
        </div>
    );
}

export default ChartWeather;
