import React, { useState } from 'react';

function Toggle() {
    const [toggleStatus, setToggleStatus] = useState(false);

    return (
        <button
          onClick={() => setToggleStatus(previousState => !previousState)}
          data-testid="toggle"
        >
            {toggleStatus ? 'Turn Off' : 'Turn On'}
        </button>
    );
};

export default Toggle;
