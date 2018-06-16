import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Icon, Popover } from 'antd-mobile';

export class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

    onSelect = (opt) => {
        console.log('onSelect ...')
        this.setState({
            visible: false
        })
    }

    handleVisibleChange = (visible) => {
        console.log('handleVisibleChange ...')
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={
                        // [
                        //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        //     <Icon key="1" type="ellipsis" />,
                        // ]

                        <Popover mask
                            overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            visible={this.state.visible}
                            overlay={this.props.menu}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                {/* <Icon type="ellipsis" /> */}
                                <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                                <Icon key="1" type="ellipsis" />
                            </div>
                        </Popover>
                    }
                >
                    {this.props.name}
                </NavBar>

                {/* <NavBar
                    mode="dark"
                    leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)
