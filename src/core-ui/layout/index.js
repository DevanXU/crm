import React, { Children } from 'react';
import { Grid } from 'antd-mobile';
import { Link } from 'react-router-dom';

const entries = [
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '客户',
        link: '/customer',
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '联系人',
        link: '/user',
    },
    {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: '跟进记录',
        link: '/sale',
    },
]

export const HomeLayout = ({
    children,
    classes,
    className,
    customRoutes,
    dashboard,
    logout,
    menu,
    open,
    title,
    ...props
}) => {
    const childrenAsArray = React.Children.toArray(children);

    return (
        <Grid data={entries} isCarousel onClick={_el => console.log(_el)}
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
    );
};
