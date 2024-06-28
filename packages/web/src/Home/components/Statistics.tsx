import {Icon, Statistic, StatisticGroup, StatisticLabel, StatisticValue} from 'semantic-ui-react';

export function Statistics() {
    return (
        <StatisticGroup>
            <Statistic>
                <StatisticValue><Icon name='file alternate' />0</StatisticValue>
                <StatisticLabel>Documents</StatisticLabel>
            </Statistic>
            <Statistic>
                <StatisticValue><Icon name='user' />0</StatisticValue>
                <StatisticLabel>Authors</StatisticLabel>
            </Statistic>
        </StatisticGroup>
    );
}