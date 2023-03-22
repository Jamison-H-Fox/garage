import React, {useState} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const styledDiv = styled.div`
    & .error-message {
        color: red;
        background-color: purple;
        padding: 15%;
    }
`

function Message(props) {
    const [mouseLocation, setMouseLocation] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleHover = (evt) => {
        setMouseLocation({
            x: evt.pageX,
            y: evt.pageY,
        });
        setVisible(true);
    };
      
    const handleNoHover = () => {
        setVisible(false);
    };

    return (
        <styledDiv
            className="thing-that-we-hover-over"
            onMouseEnter={evt => handleHover(evt)}
            onMouseLeave={() => handleNoHover}
        >
            <div
                className="error-message"
                style={{
                display: visible ? "block" : "none",
                top: mouseLocation.y,
                left: mouseLocation.x,
                }}
            >
                <h2>lol</h2>
            </div>
        </styledDiv>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {  })(Message)