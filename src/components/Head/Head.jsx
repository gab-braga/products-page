import React from 'react';

export default (props) => {
    React.useEffect(() => {
        document.title = props.title;
        document
            .querySelector("meta[name='description']")
            .setAttribute("description", props.description);
    }, [props]);

    return null;
}
