import React from 'react'
import { connect } from 'react-redux'
import { Steps, WingBlank, WhiteSpace } from 'antd-mobile'
import { fetchFollowups, postFollowups } from '../actions/customerAction'
import './customerfollowup.css'

const Step = Steps.Step;

const customIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
        <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
            <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
            <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
        </g>
    </svg>
);

class CustomerFollowup extends React.Component {
    componentWillMount() {
        this.props.fetchFollowups()
    }

    addFollowup = () => {
        const followup = {
            'custId': '2',
            'datetime': '2018-06-18',
            'activity': 'Just a demo',
            'status': 'inprogress'
        }

        this.props.postFollowups(followup)
    }

    render() {
        const followups = this.props.customer.followups.map(followup => (
            <Step title={followup.datetime} description={followup.activity} />
        ))

        return (
            <div>
                <WingBlank size="lg">
                    <WhiteSpace />
                    <WhiteSpace />
                    <div className="sub-title">Small size</div>
                    <WhiteSpace />
                    <button onClick={() => this.addFollowup()} />
                    <Steps size="small" current={followups.length}>
                        {followups}
                    </Steps>

                    {/* <div className="sub-title">Customized status </div>
                    <WhiteSpace size="lg" />
                    <Steps>
                        <Step status="finish" title="Step 1" icon={customIcon()} />
                        <Step status="process" title="Step 2" icon={customIcon()} />
                        <Step status="error" title="Step 3" icon={customIcon()} />
                    </Steps>

                    <div className="sub-title">Customized icon </div>
                    <WhiteSpace size="lg" />
                    <Steps current={1}>
                        <Step title="Step 1" icon={customIcon()} description="This is description" />
                        <Step title="Step 2" icon={customIcon()} description="This is description" />
                        <Step title="Step 3" icon={customIcon()} description="This is description" />
                    </Steps>

                    <div className="sub-title">Multiple steps </div>
                    <WhiteSpace size="lg" />
                    <Steps current={1}>
                        <Step title="Step 1" icon={customIcon()} />
                        <Step title="Step 2" icon={customIcon()} />
                        <Step title="Step 3" status="error" icon={customIcon()} />
                        <Step title="Step 4" icon={customIcon()} />
                    </Steps> */}
                </WingBlank>
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        customer: state.customer,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowups: () => dispatch(fetchFollowups()),
        postFollowups: (followup) => dispatch(postFollowups(followup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFollowup)
