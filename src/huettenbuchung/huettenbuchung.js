// need more style in your life? just import it!
import './huettenbuchung.css';

// you CAN import a template like this...
import template from './huettenbuchung.html';

// configuration object that describes a Vue component we're exporting it here so other places can import it and
// do the actual component registering themselves
export const huettenbuchung = {
    template, // ...or alternatively just use template: '<span>my template</span>'
    data: () => ({message: 'yolo'})
};
