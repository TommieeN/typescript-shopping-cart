import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
    return (
        <>
        <h1>Store</h1>

        {/* xs={1} - Extra Small Screen will create 1 column */}
        {/* md={2} - Medium Screen will create 2 columns */}
        {/* lg={3} - Large Screen will create 3 columns */}
        <Row xs={1} md={2} lg={3} className="g-3">
            {storeItems.map((item) => (
                <Col key={item.id}><StoreItem {...item} /></Col>
            ))}
        </Row>
        </>
    )
}