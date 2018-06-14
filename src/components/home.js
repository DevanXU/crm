import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

export class Home extends Component {
    render() {
        return (
            <div>
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
