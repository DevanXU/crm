import React from 'react'
import { List } from 'antd-mobile';
import Navigator from './navigator'

const Item = List.Item;
const Brief = Item.Brief;

export class Work extends React.Component {
    state = {
        disabled: false,
    }

    render() {
        return (
            <div>
                <div>
                    <Navigator />
                </div>
                <div>
                    <List renderHeader={() => ''} className="my-list">
                        <Item>Report</Item>
                        <Item arrow="horizontal" onClick={() => { console.log('Daily Report') }}>Daily</Item>
                        <Item arrow="horizontal" onClick={() => { console.log('Weekly Report') }}>Weekly</Item>
                        <Item arrow="horizontal" onClick={() => { console.log('Monthly Report') }}>Monthly</Item>
                    </List>
                    <List renderHeader={() => ''}>
                        <Item>Approve</Item>
                        <Item arrow="horizontal" onClick={() => { console.log('Initial') }}>Initial</Item>
                        <Item arrow="horizontal" onClick={() => { console.log('Review') }}>Review</Item>
                        <Item arrow="horizontal" onClick={() => { console.log('Approved') }}>Approved</Item>
                    </List>
                </div>
            </div >);
    }
}
