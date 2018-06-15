import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Popover } from 'antd-mobile';
import Navigator from './navigator'

const Item = Popover.Item;

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

const NavBarItems = [
    (<Item key="scan" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
    (<Item key="qrcode" value="qrcode" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
    (<Item key="help" value="help" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
        <span style={{ marginRight: 5 }}>Help</span>
    </Item>),
]

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

export class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigator
                        menu={NavBarItems}
                    > Home
                    </Navigator>
                </div>
                <div className="sub-title">Carousel</div>
                <Grid data={data} isCarousel onClick={_el => console.log(_el)}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                            <Link to='/customer'><img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" /></Link>
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                <span>I am title..</span>
                            </div>
                        </div>
                    )}
                />

            </div>
        );
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
