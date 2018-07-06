import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Popover } from 'antd-mobile'
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

const data = [
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '客户',
        link: '/customers',
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '联系人',
        link: '/users',
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '跟进记录',
        link: '/sale',
    },
]


export class AppList extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navigator menu={NavBarItems} />
                </div>
                <div>
                    <Grid data={data} isCarousel onClick={_el => console.log(_el)}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div style={{ padding: '12.5px' }}>
                                <Link to={dataItem.link}><img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" /></Link>
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}