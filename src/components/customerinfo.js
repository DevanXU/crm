import React from 'react'
import { connect } from 'react-redux'
import { Card, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import Navigator from './navigator'

const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
];

class CustomerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.customer = props.data
    }

    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <Card full>
                    <Card.Header
                        title={this.customer.username}
                        // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                        extra={<span>{this.customer.company.name}</span>}
                    />
                    <Card.Body style={{ textAlign: 'left' }}>
                        <div>
                            <ul>{this.customer.email}</ul>
                            <ul>{this.customer.phone}</ul>
                        </div>
                    </Card.Body>
                    <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                </Card>
                <WhiteSpace size="lg" />
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    constructor(props) {
        super(props)
        console.log('CustomerInfo: ', props.location.state)
        // this.customer = props.location.state
    }

    render() {
        return (
            <div>
                <div>
                    <Navigator />
                </div>
                <div><CustomerDetails data={this.props.location.state} /></div>
                <div>
                    <Tabs tabs={tabs}
                        initialPage={1}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of first tab
                    </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of second tab
                    </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of third tab
                    </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo)
