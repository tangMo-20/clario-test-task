import React from 'react';
import svg from '../../const/svg';
import '../../style/css/Tooltip.css';

const Button = (props) => {
    const { text, handler } = props;
    return (
        <div className="tooltip__button" onClick={handler}>
            {text}
        </div>
    );
};

function Tooltip(props) {
    return (
        <div className="tooltip">
            <div className="tooltip__info">
                {svg.tooltipLogo()}
                <div className="tooltip__info-text">
                    <div>This is some tip</div>
                    <span>This is some tip</span>
                </div>
            </div>
            <div>
                <Button text="Ok" handler={props.hideToolbar} />
            </div>
        </div>
    );
}

export default Tooltip;
