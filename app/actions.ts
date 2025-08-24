'use server'

import {getClient} from "@/lib/ApolloClient";
import {TypedDocumentNode} from "@apollo/client";

export const getData = async ({query, variables}: {query: TypedDocumentNode; variables: any}) => {

    const { data, error } = await getClient().query({query: query, variables: variables});
    return {data, error}
}