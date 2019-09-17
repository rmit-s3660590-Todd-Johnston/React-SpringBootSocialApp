import React from 'react';
import Search from "../components/Search";
import {Layout} from "antd";


interface SearchScreenProps {
}

const SearchScreen: React.FC<SearchScreenProps> = (props: SearchScreenProps) => {
    return <Layout.Content style={{margin: 13}}>
        <Search/>
    </Layout.Content>
};

export default SearchScreen;
