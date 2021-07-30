import { Row, Col, Card } from 'antd'

function QuoteList() {
    return (
        <div className="site-card-wrapper">
            <Row gutter={16} >
                <Col lg={6} md={8} sm={12} xs={24}>
                    <Card hoverable>
                        <h3>Be Comfortable with the Uncomfortable.</h3>
                        <p>&mdash; Todd Albert</p>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={12} xs={24}>
                    <Card hoverable>
                        <h3>Act as if what you do makes a difference. It does.</h3>
                        <p>&mdash; William James</p>
                    </Card>
                </Col>
                <Col lg={6} md={8} sm={12} xs={24}>
                    <Card hoverable>
                        <h3>Success is not final, failure is not fatal: it is the courage to continue that counts.</h3>
                        <p>&mdash; Winston Churchill</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default QuoteList