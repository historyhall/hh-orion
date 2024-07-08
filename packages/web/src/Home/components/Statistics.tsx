import Schema from "hh-orion-schema/dist";
import {Icon, Statistic, StatisticLabel, StatisticValue} from 'semantic-ui-react';
import {Loading} from "../../Layout";
import {useFetch} from "../../useFetch";

export function Statistics() {
    const {data: documentData, loading: documentLoading} = useFetch<number>(Schema.Documents.Document.routes.getTotal);
    const {data: authorData, loading: authorLoading} = useFetch<number>(Schema.Accounts.Author.routes.getTotal);
    const {data: userData, loading: userLoading} = useFetch<number>(Schema.Accounts.User.routes.getTotal);

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