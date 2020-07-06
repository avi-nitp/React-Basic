import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
   return (
       <Aux>
      <div>
          ToolBar, SlideBar, BackDrop
      </div>
      <main>
          {props.children}
      </main>
      </Aux>
   );
}

export default layout;