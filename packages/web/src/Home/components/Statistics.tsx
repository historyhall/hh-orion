import {Icon, Statistic, StatisticLabel, StatisticValue} from 'semantic-ui-react';
import {Loading} from "../../Layout";
import {useFetch} from "../../server";

export function Statistics() {
    const {data: documentData, loading: documentLoading} = useFetch<number>('documents/get-total');
    const {data: authorData, loading: authorLoading} = useFetch<number>('authors/get-total');

    if(documentLoading || authorLoading) return <Loading />

    return (
        <>
            <Statistic>
                <StatisticValue><Icon name='file alternate' />{documentData}</StatisticValue>
                <StatisticLabel>Documents</StatisticLabel>
            </Statistic>
            <Statistic>
                <StatisticValue><Icon name='user' />{authorData}</StatisticValue>
                <StatisticLabel>Authors</StatisticLabel>
            </Statistic>
        </>
    );
}