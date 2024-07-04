import {schema} from "hh-orion-schema/dist";
import {Icon, Statistic, StatisticLabel, StatisticValue} from 'semantic-ui-react';
import {Loading} from "../../Layout";
import {useFetch} from "../../useFetch";

export function Statistics() {
    const {data: documentData, loading: documentLoading} = useFetch<number>(schema.documents.document.getTotal.route);
    const {data: authorData, loading: authorLoading} = useFetch<number>(schema.accounts.author.getTotal.route);
    const {data: userData, loading: userLoading} = useFetch<number>(schema.accounts.user.getTotal.route);

    if(documentLoading || authorLoading || userLoading) return <Loading />

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
            <Statistic>
                <StatisticValue><Icon name='user' />{userData}</StatisticValue>
                <StatisticLabel>Users</StatisticLabel>
            </Statistic>
        </>
    );
}