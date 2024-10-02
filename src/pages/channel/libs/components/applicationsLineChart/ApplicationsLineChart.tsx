import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const lineChartData = {
    labels: [
        'січень',
        'лютий',
        'березень',
        'квітень',
        'травень',
        'червень',
        'липень',
        'черпень',
        'вересент',
        'жовтень',
        'листопад',
        'грудень',
    ],

    datasets: [
        {
            label: 'заявки по всім посиланням',
            data: [300, 400, 200, 100, 50, 700, 500, 600, 500, 500, 400, 700],
            borderColor: 'rgb(83, 136, 216)',
        },
    ],
};

function ApplicationsLineChart() {
    const options = {};

    return (
        <div style={{ height: '100%' }}>
            <Line options={options} data={lineChartData} width={700} />
        </div>
    );
}

export { ApplicationsLineChart };
